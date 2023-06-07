// jshint eversion:6
require("dotenv").config();
const express=require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");


connectDb();
const app=express();
const PORT = process.env.PORT || 3000;


// to accept the data from clientside to serversite we have to use body-parser and that boduy-parser provide a middleware
// express provide a middleware for json object which we can get data from the client to the serversite.
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.`);
});