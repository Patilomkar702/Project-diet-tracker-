const express = require('express');
const cors = require('cors');

const InsertModule = require('./insert');
const ReadModule = require('./read');
const CheckModule = require('./check_usere');
const { object } = require('joi');

const app = express();

app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
  res.send('You are Online');
})

app.get('/insert/:password/:name',async(req,res)=>{
  let input = req.params;
  await InsertModule.Insert(input);
  console.log('inserted by get',input);
});

app.post('/insert',async (req,res)=>{
try{
  let input = req.body;
  await InsertModule.Insert(input);
  console.log('Inserted by Post',input);
  console.log(req.body);
  res.json({message:"success post",
            opr:true});
}
catch(err){
  console.log(err);
  res.json({message:"Fail post",
              opr: false});
}
});

app.get('/read', async(req,res)=>{
  const result = await ReadModule.Read();
  res.send(JSON.stringify(result));
  
});

app.post('/check',async (req,res)=>{
  try{
    let input = req.body;
    const result = await CheckModule.Insert(input);
    console.log(result)
    console.log("post sucess");
    const value = JSON.stringify(result)
    console.log(value);
    console.log("data : ",(value.length));
    if(value.length == 1){
      console.log("we have something");
      res.json({opr:true,user:value[0]});
    }
    else
    {
      console.log("wrong Data");
      res.json({opr:false});
    }
    console.log("post sucess");
  }
  catch(err){
    console.log(err);
    res.json(err);
  }
  });
app.listen(5200);