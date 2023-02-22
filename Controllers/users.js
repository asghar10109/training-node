const User = require('../models/users');

const Create_new_Users = async (req,res,next) => {
try{
    const data = new User({
        username : req.body.username, 
        avator : req.body.avator,
        email : req.body.email,
        password : req.body.password
    })

    const register = await data.save();

    res.send({
        message:'New User created Successfully',
        status:200,
        data: register
    })
}catch(err){
    res.send({
        message:'No record found',
        status:404
    })
}
}

const get_user = async(req,res,next) => {
    const limit = req.query.limit;
    const offset = req.query.offset;
    const skip = (offset - 1) * limit;
    try{
        let data = await User.find().limit(limit).skip(skip)
        res.send({
            total: data.length,
            message:"Record Fetched",
            status:201,
            data: data
        })
    }catch(err){
        res.send({
            message:"No record",
            status:404
        })
    }
}

const getdataby_idandupdate = async(req,res,next)=>{
    try{
        let data = await User.find().limit(limit).skip(skip)
        res.send({
            total: data.length,
            message:"Record Fetched",
            status:201,
            data: data
        })
    }catch(err){
        res.send({
            message:"No record",
            status:404
        })
    }

}
const getdataby_idanddelete = async(req,res,next)=>{
    
console.log("object");
}

const getdataby_id = async(req,res,next) => {
    const id = req.params.id

    try{
        let data = await User.findById(id)
        res.send({
            total: data.length,
            message:"Record Fetched by id",
            status:201,
            data: data
        })
    }catch(err){
        res.send({
            message:"No record",
            status:404
        })
    }
}

const delete_data = async(req,res,next)=>{
    const id = req.params.uid;

    try{
        const deletedata = await User.deleteOne({_id:id}) 
        console.log(deletedata)
        res.send({
            message:"deleted item sucessfully",
            status:200,
            data:deletedata

        })
        

    }
    catch(err){
            res.send({
                message:"No record",
                status:404
            })

    }
    
}

const delete_dataMany = async(req,res,next)=>{
    const name = req.params.name;

    try{
        const deletedata = await User.deleteMany({name:name}) 
        console.log(deletedata)
        res.send({
            message:"deleted all item sucessfully",
            status:200,
            data:deletedata

        })
        

    }
    catch(err){
            res.send({
                message:"No record",
                status:404
            })

    }
    
}


const update_data = async(req,res,next)=>{
    try{
        const updatedata = await User.updateOne({username:'Hashim12'},{$set:{username:'asghar1'}}) 
        console.log(updatedata)
        res.send({
            message:"updated item sucessfully",
            status:200,
            data:updatedata

        })
    }
    catch(err){
        res.send({
            message:"No record",
            status:404
        })
    }
    
}

module.exports = {
    Create_new_Users,
    get_user,
    delete_data,
    update_data,
    delete_dataMany,
    getdataby_id,
    getdataby_idanddelete,
    getdataby_idandupdate
}