import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getworkspace } from "../../src/Store/Actions/VirtualspaceAction";

const Displayevent = ({ project }) => {
  const { virtualSpace, loading, error } = useSelector((state) => state?.virtual);
  const dispatch = useDispatch();

  const id = project.workspace;

  useEffect(() => {
    if (id) {
      dispatch(getworkspace(id));
    }
  }, [dispatch, id]);

  const calender = virtualSpace?.virtualspace?.calender;

  return (
    <div className="w-full h-[30vw] px-4 py-2">
      <h3 className="text-3xl font-semibold text-gray-800 mb-4">Upcoming Events</h3>

      {/* Loading State */}
      {loading && <p className="text-gray-600">Loading events...</p>}

      {/* Error State */}
      {error && <p className="text-red-600">Failed to fetch events: {error}</p>}

      {/* Scrollable Events Display */}
      <div className="w-[100%] max-h-[25vw] overflow-y-auto border border-gray-300 rounded-md p-4">
        {!loading && !error && calender?.length > 0 ? (
          calender.map((event, index) => (
            <div
              key={index}
              className="h-fit p-6 border-2 rounded-lg shadow-md mb-4 hover:bg-gray-100"
            >
              <div className="font-semibold text-xl text-gray-800">{event?.name}</div>
              <div className="text-sm text-gray-700">{event?.description}</div>
             <div className="flex items-center justify-between gap-10">
             <div className="text-sm text-gray-500">
                Start: {new Date(event?.startDate).toLocaleDateString()}
              </div>
              <div className="text-sm text-gray-500">
                End: {new Date(event?.endDate).toLocaleDateString()}
              </div>
             </div>
             
            </div>
          ))
        ) : (
          // Empty State
          !loading && <p className="text-gray-600">No events added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Displayevent;
