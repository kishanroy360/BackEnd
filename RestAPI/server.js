require('dotenv').config()

const express= require("express");
const app=express();

const mongoose=require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.use(express.json());

const subcribersRoutes = require("./routes/subscribers");
app.use("/subscribers",subcribersRoutes);

app.listen(3000,() => console.log("Server started!"));