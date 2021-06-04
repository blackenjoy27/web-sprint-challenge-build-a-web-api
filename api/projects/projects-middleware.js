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


module.exports = {
    validateId,
}