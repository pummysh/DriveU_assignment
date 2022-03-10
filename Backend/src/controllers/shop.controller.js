const express=require('express');
const router=express.Router();

const Shop=require("../models/shop.modal");

router.post("/",async(req,res) => {
    try{
        const shop=await Shop.create(req.body);
        return res.send(shop);
    }catch(e){
        return res.status(500).json({message: e.message,status: "Failed"});
    }
})

router.get("/",async(req, res)=>{
    try{
        const shop=await Shop.find({}).lean().exec();
        return res.send(shop);
    }catch(e){
        return res.status(500).json({message: e.message,status: "Failed"});

    }
})

router.get("/shop/:id",async(req, res)=>{
    try{
        const shop=await Shop.findById(req.params.id);
        return res.send(shop);
    }catch(e){
        return res.status(500).json({message: e.message,status: "Failed"});

    }
})

// router.get("/filter",async(req, res)=>{
//     try{
//         const location = req.query.location || "";
//         const Ratings=req.query.ratings || "";
//         const mop=req.query.mop || "";
//         const discount=+req.query.discount || 0;
        
//         if(location!="" && Ratings!="" && mop!="" && discount!=0){
//             console.log(location,Ratings,mop,discount);
//             const shop=await Shop.find({$and:[
//                 {location:{$eq:"Bhiwadi"}},
//                 {ratings:{$eq:"5"}},
//                 {mop:{$eq:"online,offline"}},
//                 {discount: {$eq:10}}]})
//             return res.send(shop);
            
//         }
        

        
        
        

//     }catch(e){
//         return res.status(500).json({message: e.message,status: "Failed"});
//     }
// })

router.get("/location/:location", async (req, res) => {
    try {
      const shop = await Shop.find({location: req.params.location}).lean().exec();
  
      return res.status(201).send(shop);
    } catch (e) {
      return res.status(500).json({ status: "Failed", message: e.message });
    }
  });

  router.get("/rating/:rating", async (req, res) => {
    try {
      let shop = await Shop.find({ratings: req.params.rating}).lean().exec();
  
      return res.status(201).send(shop);
    } catch (e) {
      return res.status(500).json({ status: "Failed", message: e.message });
    }
  });

  router.get("/mop/:mop", async (req, res) => {
    try {
      let shop = await Shop.find({mop: req.params.mop}).lean().exec();
  
      return res.status(201).send(shop);
    } catch (e) {
      return res.status(500).json({ status: "Failed", message: e.message });
    }
  });

  
router.get("/discount/:discount", async (req, res) => {
    try {
      let shop = await Shop.find({discount: req.params.discount}).lean().exec();
  
      return res.status(201).send(shop);
    } catch (e) {
      return res.status(500).json({ status: "Failed", message: e.message });
    }
  });

module.exports =router;