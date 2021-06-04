const projects = require("./projects-model");


const validateId = (req,res,next)=>{
    projects.get(req.params.id)
    .then(project=>{
        if(!project){
            next({
                status:404,
                message:`project with id ${req.params.id} is not found`
            })
        }else{
            req.project = project;
            next();
        }
    })
}

const validateProject = (req,res,next)=>{
    const {name,description} = req.body;
    if(!name||!name.trim()||!description||!description.trim()){
        next({
            status:400,
            message:"name and description is require"
        })
    }
    else{
        next();
    }
}


module.exports = {
    validateId,
    validateProject,
}