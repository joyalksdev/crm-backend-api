// Import User model
const User = require('../models/User')

// Controller for handling system users

// Adds a new user to the database
const createUser = async(req,res)=>{
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).json({
            success:true,
            data:user,
            message:"User Created"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message})        
    }
}

// Returns list of all users
const getUsers = async (req,res)=>{
    try {
    const users = await User.find()
    res.status(200).json({
        success:true,
        data:users
    })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Server error while fetching data",
            error:error.message
        })
    }
}

// Fetch a single user using ID
const getUserById = async (req,res)=>{
    try {
        const userId = req.params?.id    
        const user = await User.findById(userId)

        if(!user){
        return  res.status(404).json({
                success:false,
                message:"User not found"
            })
        }


        res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Invalid User ID",
            error:error.message
        })
    }
}

// Update user information
const updateUser = async (req,res)=>{
    try {
        const userId = req.params?.id    
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            req.body,
            {
                new:true,
                runValidators:true
            }
        )

        if(!updatedUser){
        return  res.status(404).json({
                success:false,
                message:"User not found"
            })
        }


        res.status(200).json({
            success:true,
            data:updatedUser,
            message:"User updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Failed to update user",
            error:error.message
        })
    }
}

// Remove user from database
const deleteUser = async (req,res)=>{
    try {
        const userId = req.params?.id    
        const deletedUser = await User.findByIdAndDelete(userId)

        if(!deletedUser){
        return  res.status(404).json({
                success:false,
                message:"User not found"
            })
        }


        res.status(200).json({
            success:true,
            data:deletedUser,
            message:"User deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Failed to delete user",
            error:error.message
        })
    }
}



module.exports = {createUser, getUsers, getUserById, updateUser, deleteUser}