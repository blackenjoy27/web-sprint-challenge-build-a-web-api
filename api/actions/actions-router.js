// Write your "actions" router here!
const express = require("express");
const actions = require("./actions-model");
const {validateId,
validateAction} = require("./actions-middleware");
const router = express.Router();


router.get("/",(req,res,next)=>{
    actions.get()
    .then(allActions=>{
        res.status(200).json(allActions)
    })
    .catch(next);
})
router.get("/:id",validateId, (req,res,next)=>{
    res.status(200).json(req.action)
})
router.post("/", validateAction, (req,res,next)=>{
    actions.insert(req.body)
    .then(newAction=>{
        res.status(201).json(newAction);
    })
    .catch(next);
})
router.put("/:id",validateId, validateAction, (req,res,next)=>{
    actions.update(req.params.id, req.body)
    .then(updatedAction=>{
        res.status(201).json(updatedAction);
    })
    .catch(next);
})
router.delete("/:id", validateId, (req,res,next)=>{
    actions.remove(req.params.id)
    .then(deletedAction=>{
        res.status(200).json();
    })
    .catch(next);
})




module.exports = router;