const express=require('express');
const path =require('path');
const cors=require('cors');
const app=express();

const routes=require('./route/routes');
app.use('/api/',routes);

app.listed(3000,()=>{
  console.log('server started');
});