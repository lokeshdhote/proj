const VirtualSpace = require('../../models/VirtualSpaceModel'); // Update with your model's path
const {catchAsyncError} = require('../../middlewares/CatchAsyncError.js');  // Adjust based on your file structure
// const { Virtualspace } = require('../FreelancerController.js');
const imagekit = require("../../utils/imagekit.js"); // Assume an imageKit helper module exists
const path = require('path');


// Get all workspaces
exports.getAllWorkspaces = catchAsyncError(async (req, res) => {
 try {
  
  const { id } = req.params;
  const virtualspace = await VirtualSpace.findById(id);
  res.status(200).json({virtualspace});
 } catch (error) {
  next(error);
  
 }
});

exports.addCalendarEvent= catchAsyncError(async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, startDate, endDate } = req.body;
    const virtualspace = await VirtualSpace.findById(id);
    if (!virtualspace) return res.status(404).json({ success: false, message: 'Virtual space not found' });

    virtualspace.calender.push({ name, description, startDate, endDate });
    await virtualspace.save();
    res.status(201).json({ success: true, virtualspace });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }

});

exports.addTodo = catchAsyncError(async (req, res) => {
 
  try {
    const { id } = req.params;
    const { taskName, description, status } = req.body;
    const virtualSpace = await VirtualSpace.findById(id);
    if (!virtualSpace) return res.status(404).json({ success: false, message: 'Virtual space not found' });

    virtualSpace.todos.push({ taskName, description, status });
    await virtualSpace.save();
    res.status(201).json({ success: true, virtualSpace });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }




});

exports.updateTodo = catchAsyncError(async (req, res) => {
  try {
    const { id, taskId } = req.params;  // Get workspace ID and task ID from request parameters
    const virtualSpace = await VirtualSpace.findById(id); // Find the virtual space

    if (!virtualSpace) {
      return res.status(404).json({ success: false, message: 'Virtual space not found' });
    }

    // Find the todo item within the virtual space's todos array
    const todo = virtualSpace.todos.id(taskId);

    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }

    // Update the todo item with the new data from the request body
    todo.taskName = req.body.taskName || todo.taskName;
    todo.description = req.body.description || todo.description;
    todo.status = req.body.status || todo.status;  // Optionally update the status, if provided

    await virtualSpace.save();  // Save the updated virtual space document

    // Return the updated virtual space
    res.json({ success: true,virtualSpace });

  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
// Upload a document
exports.documents = catchAsyncError(async (req, res) => {
  const { id } = req.params;

  const virtualSpace = await getVirtualSpaceById(id);
  if (req.files && req.files.Docufile) {
    const file = req.files.Docufile;
    const modifiedFilename = `doc-${Date.now()}${path.extname(file.name)}`;

    // Upload file to ImageKit
    const uploadResult = await imagekit.upload({
      file: file.data,
      fileName: modifiedFilename,
    });

    // Delete the old document if it exists
    if (virtualSpace.documents && virtualSpace.documents.fileId) {
      await imagekit.deleteFile(virtualSpace.documents.fileId).catch(() => {
        console.error('Error deleting old document');
      });
    }

    // Update the document info
    virtualSpace.documents = {
      fileId: uploadResult.fileId,
      url: uploadResult.url,
    };

    await virtualSpace.save();
  }

  res.status(200).json({ success: true, virtualSpace });
});

exports.deleteTodo = catchAsyncError(async (req, res) => {


  try {
    const { id, taskId } = req.params;  // Get workspace ID and task ID from request parameters
    const virtualSpace = await VirtualSpace.findById(id); // Find the virtual space

    if (!virtualSpace) {
      return res.status(404).json({ success: false, message: 'Virtual space not found' });
    }

    // Find the todo item within the virtual space's todos array
    const todo = virtualSpace.todos.id(taskId);
    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }
    const todoIndex = virtualSpace.todos.findIndex(todo => todo.id.toString() === taskId);
   
    virtualSpace.todos.splice(todoIndex, 1);

console.log(todoIndex+"t");
   

    await virtualSpace.save();  // Save the updated virtual space document
// console.log(virtualSpace+"p");
    // Return the updated virtual space
    res.json({ success: true,virtualSpace });

  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});




exports.createProgressTracker = catchAsyncError(async (req, res) => {
  const { goal, parts } = req.body;

  try {
    // Fetch the virtual space by ID
    const virtualSpace = await VirtualSpace.findById(req.params.id);

    if (!virtualSpace) {
      return res.status(404).json({ error: 'Virtual space not found.' });
    }

    // Create a new progress tracker object
    const newProgressTracker = {
      goal,
      parts, // This must be an array as per your schema
      percentageCompleted: 0,
      status: 'Incomplete',
    };

    console.log("New Progress Tracker:", newProgressTracker);

    // Add the new progress tracker to the array
    virtualSpace.progressTrackers = newProgressTracker;

    // Save the updated virtual space document
    await virtualSpace.save();

    console.log("Updated Virtual Space:", virtualSpace);
    res.status(201).json({ success: true, virtualSpace });
  } catch (error) {
    console.error("Error creating progress tracker:", error.message);
    res.status(400).json({ error: 'Failed to create progress tracker.' });
  }
});
exports.updateProgressTracker = catchAsyncError(async (req, res) => {
  const { goal, parts } = req.body;

  try {
    const virtualSpace = await VirtualSpace.findByIdAndUpdate(req.params.id, {$set:req.body});

    // if (!virtualSpace) {
    //   return res.status(404).json({ error: 'Virtual space not found.' });
    // }

    // Find the specific progress tracker to update
    let tracker = virtualSpace.progressTrackers[0]; // Assuming a single tracker
    if (!tracker) {
      return res.status(404).json({ error: 'Progress tracker not found.' });
    }

    // Update goal
    if (goal) tracker.goal = goal;

    // Update parts and calculate completion percentage
    if (parts) {
      tracker.parts = parts;
      const totalParts = parts.length;
      const completedParts = parts.filter((part) => part.completed).length;
      tracker.percentageCompleted = Math.round((completedParts / totalParts) * 100);
    }

    // Update status based on completion percentage
    if (tracker.percentageCompleted === 100) {
      tracker.status = 'Complete';
    } else if (tracker.percentageCompleted > 0) {
      tracker.status = 'In Progress';
    } else {
      tracker.status = 'Incomplete';
    }

    // Save updated virtual space
    await virtualSpace.save();

    res.status(200).json({
      message: 'Progress tracker updated successfully.',
      progressTracker: tracker,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to update progress tracker.' });
  }
});

exports.addPartToProgressTracker=catchAsyncError(async (req, res) => {
  const { partName } = req.body;
  
  try {
    const virtualSpace = await VirtualSpace.findById(req.params.id);

    if (!virtualSpace) {
      return res.status(404).json({ error: 'Virtual space not found.' });
    }

    virtualSpace.progressTrackers.parts.push(partName);
    await virtualSpace.save();

    res.status(200).json(virtualSpace);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add part to progress tracker.' });
  }
}),

exports.deletePartFromProgressTracker=catchAsyncError(async (req, res) => {
  const {  partName } = req.params;

  try {
    const virtualSpace = await VirtualSpace.findById(req.params.id);

    if (!virtualSpace) {
      return res.status(404).json({ error: 'Virtual space not found.' });
    }

    const partIndex = virtualSpace.progressTrackers.parts.indexOf(partName);
    if (partIndex === -1) {
      return res.status(404).json({ error: 'Part not found.' });
    }

    virtualSpace.progressTrackers.parts.splice(partIndex, 1);
    await virtualSpace.save();

    res.status(200).json(virtualSpace);
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete part from progress tracker.' });
  }

})