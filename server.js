const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config({path: './config.env'});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, 
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    }
).then(()=>{console.log('connection succesfull')
}).catch((err)=>{console.log('error connection: ',err)})

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const productRouter = require('./routes/product');
const usersRouter = require('./routes/user');

app.use('/product', productRouter);
app.use('/user', usersRouter);

if(process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"));
}


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});