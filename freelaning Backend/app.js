require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const http = require("http");
const socketIo = require("socket.io");

require("./models/DBconfig.js").dbconnection();
// logger
const logger = require("morgan");
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
];

// Create an HTTP server for Socket.io
const httpServer = http.createServer(app);
const io = new socketIo.Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    methods: [ "GET", "POST", "PUT", "DELETE" ],
    credentials: true,
  },
});


const mongoose = require("mongoose");
 
// bodyparser
app.use(express.json());  

app.use(express.urlencoded({ extended: false }));



// cookie
const session = require("express-session");
const cookieParser = require("cookie-parser");
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);




// cors for connection
const cors = require("cors");
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use(cookieParser());

// file upload
const fileupload = require("express-fileupload");
app.use(fileupload());


// error
const { generatedErrror } = require("./middlewares/error.js");
const Chat = require("./models/MessageModel.js");
const Errorhandler = require("./utils/Errorhandler.js");
const setupSocketHandlers = require("./SocketIo.js");
app.use(logger("tiny"));



// routes

app.use("/", require("./routes/AdminPanel"));
app.use("/chat", require("./routes/Chat.js"));
app.use("/client", require("./routes/Client"));
app.use("/resume", require("./routes/resume"));
app.use("/freelancer", require("./routes/Freelancer"));
app.use("/api", require("./routes/VirtualSpace.js"));
app.use('/workspace', require("./routes/virtualspace/workspaceRoutes.js")); // Routes for /workspace and /project/workspace
app.use('/taskmanagement', require("./routes/virtualspace/taskManagementRoutes.js"));


app.use('/document', require("./routes/virtualspace/documentRoutes.js"));
app.use('/progress', require("./routes/virtualspace/progressRoutes.js"));
app.use('/contract', require("./routes/virtualspace/contractRoutes.js"));
app.use('/feedback', require("./routes/virtualspace/feedbackRoutes.js"));


// error handling
app.all("*", (req, res, next) => {
  next(new Errorhandler(`requested url not found ${req.url}`, 404));
});
app.use(generatedErrror);



setupSocketHandlers(io);



// Start the server
const PORT = process.env.PORT || 8080;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




// Exporting io for usage in other files if needed
module.exports = { app, io };
