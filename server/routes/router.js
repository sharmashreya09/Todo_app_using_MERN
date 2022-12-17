const express=require("express")
const tasks = require("../models/TaskSchema")
const router=express.Router()


//post api 
router.post("/posttask", async (req, res) => {
  const {name} = req.body;
  if (!name) {
    res.status(422).json("plz fill the task first");
  }
  try {
    const pretask = await tasks.findOne({ name: name });
    if (pretask) {
      res.status(422).json("Already present");
    } else {
      const addtask = new tasks({
        name,
      });

      await addtask.save();
      res.status(201).json(addtask);
    }
  } catch (error) {
    res.status(422).json(error);
  }
  
});

//get api 
router.get("/gettask",async(req,res) =>{

    try {
        const alltasks=await tasks.find();
        res.status(201).json(alltasks);
        console.log(alltasks)
        
    } catch (error) {
        res.status(422).json(error);
        
    }

  })


//update api 
router.patch("/updatetask/:id", async(req,res)=>{
  try {
       const {name} = req.body;
       const {id} =req.params;
       const updatedtask= await tasks.findByIdAndUpdate(id, req.body, {
         new: true,
       });
       res.status(201).json(updatedtask)
       console.log(updatedtask);

    
  } catch (error) {
    res.status(422).json(error)
  }
})

//delete api
router.delete("/deletetask/:id",async(req,res)=>{
  try {
         const { id } = req.params;
         const deltask = await tasks.findByIdAndDelete({ _id: id });
         res.status(201).json(deltask)
      
    
  } catch (error) {
    res.status(422).json(error)
    
  }
})

module.exports = router;