const express=require('express');
const app = express();
const cors =require('cors');

app.use(express.json());
app.use(cors());

const shopController=require('./controllers/shop.controller');

app.use("/",shopController);

module.exports =app;