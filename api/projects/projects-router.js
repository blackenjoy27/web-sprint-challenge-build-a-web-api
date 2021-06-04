// Write your "projects" router here!
const express = require("express");
const {
    validateId
} = require("./projects-middleware");
const projects = require("./projects-model");
const router = express.Router();



router.get("/",(req,res,next)=>{
    projects.get()
    .then(allProject=>{
        res.status(200).json(allProject);
    })
    .catch(next);
    
})
router.get("/:id", validateId, (req,res,next)=>{
    res.status(200).json(req.project);
})
router.post("/",(req,res,next)=>{

})
router.put("/:id",(req,res,next)=>{

})
router.delete("/:id",(req,res,next)=>{

})
router.get("/:id/actions",(req,res,next)=>{

})


module.exports = router;



