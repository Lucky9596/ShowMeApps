const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRoutes = require("./routes/api");
const https = require("https");
const fs = require("fs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  // origin: "https://main.d1qnvyubiwg4py.amplifyapp.com", // Replace with your allowed origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies to be sent
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
// app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", apiRoutes);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// HTTPS Server Configuration
const sslServerOptions = {
  key: fs.readFileSync("path/to/server.key"), // Replace with the path to your private key
  cert: fs.readFileSync("path/to/server.cert"), // Replace with the path to your certificate
  rejectUnauthorized: false,
};

const server = https.createServer(sslServerOptions, app);

// Start HTTPS server
server.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
