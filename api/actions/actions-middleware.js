const actions = require("./actions-model");
const {get} = require("../projects/projects-model");

const validateId = (req,res,next)=>{
    actions.get(req.params.id)
    .then(action=>{
        if(!action){
            next({
                status:404
            })
        }
        else{
            req.action = action;
            next();
        }
    })
}

const validateAction = (req,res,next)=>{
    const {project_id, description, notes} = req.body;
    get(project_id)
    .then(project=>{
        if(!project){
            next({
                status:404
            })
        }else if(!description||!description.trim()||!notes||!notes.trim()){
            next({
                status:400
            })
        }else{
            next();
        }
    })
    .catch(next)
}

module.exports = {
    validateId,
    validateAction,
}