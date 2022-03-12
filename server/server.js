const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const  authRoutes = require('./routes/auth.route');
dotenv.config();
const app = express();

const port = process.env.PORT || 5000;
const uri = "mongodb+srv://pascal:SIMON2929+@simon.9u2l0.mongodb.net/test"
mongoose.connect(uri)
.then(() =>{console.log("connected")})
.catch((error) =>{console.error("unable to connect")})
app.use(cors());
app.use(express.json());
app.use("/", authRoutes)



app.listen(port, () =>
  console.log(`server running on PORT ${port} 🚀`)
);