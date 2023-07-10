import express  from "express";
const router = express.Router();

router.get('/',async (req,res)=>{
    res.render('index',{});
})

router.get('/enuelz',async (req,res)=>{
    res.render('enuelz',{});
})

export default router;