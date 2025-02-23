const express = require('express');
const router = express.Router();
const Person = require('./../models/person');



router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newPerson = new Person(data); // Create a new document
      const response = await newPerson.save(); // Save to DB
      console.log("Data is saved");
      res.status(201).json(response); // Send success response
    } catch (err) {
      console.error("Error saving data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  
  router.get('/', async (req, res) => {
    try {
      const data = await Person.find(); // Fetch all records
      console.log("Data fetched successfully");
      res.status(200).json(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  
router.get('/:workType',async(req,res)=>{
 try{
  const workType = req.params.workType;
  if(workType=='chef'||workType=='manger'||workType=='waiter'){
    const response = await Person.find({work:workType});
    res.status(200).json(response);
  }

 }catch (err) {
  console.error("Error saving data:", err);
  res.status(500).json({ error: "Internal Server Error" });
}

});
router.put('/:id',async(req ,res)=>{
 try{
  const personId = req.params.id;
  const updatePersonData = req.body;
  const response = await Person.findByIdAndUpdate(personId,updatePersonData,{
   new : true, // return update document 
   runValidators :true // run mongoose validation
  });
  res.status(200).json(response);

  if(!response){
    res.status(404).json({error:"person is not found"});
  }
 }
 catch (err) {
  console.error("Error saving data:", err);
  res.status(500).json({ error: "Internal Server Error" });
}
});
router.delete('/:id',async(req,res)=>{
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    res.status(200).json({message:'person data update'});
  }
  catch (err) {
    console.error("Error saving data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }

})

module.exports = router;