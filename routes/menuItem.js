const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/menu.js');

router.get("/",async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(data);


    }catch (err) {
        console.error("Error saving data:", err);
        res.status(500).json({ error: "Internal Server Error" });
      }

});
router.post("/", async(req,res)=>{
    try{
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("Data is saved");
    res.status(201).json(response);

    }
    catch (err) {
        console.error("Error saving data:", err);
        res.status(500).json({ error: "Internal Server Error" });
      }
})


 