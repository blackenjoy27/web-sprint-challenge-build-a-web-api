// Write your "projects" router here!
const express = require("express");
const {
    validateId,
    validateProject,
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
router.post("/", validateProject, (req,res,next)=>{
    projects.insert(req.body)
    .then(newProject=>{
        res.status(201).json(newProject)
    })
    .catch(next);
})
router.put("/:id", validateId, validateProject, (req,res,next)=>{
    projects.update(req.params.id,req.body)
    .then(updatedProject=>{
        res.status(201).json(updatedProject);
    })
    .catch(next);
})
router.delete("/:id", validateId, (req,res,next)=>{
    projects.remove(req.params.id)
    .then(removedProjectId=>{
        res.status(200).json();
    })
    .catch(next);
})
router.get("/:id/actions",validateId,(req,res,next)=>{
    projects.getProjectActions(req.params.id)
    .then(actions=>{
        res.status(200).json(actions);
    })
    .catch(next);
})


module.exports = router;



