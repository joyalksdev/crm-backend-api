// This controller handles all case related operations
// Import Case model
const Case = require('../models/Case')


// Receives data from request body and saves to database
const createCase = async(req,res)=>{
    try {
        const newCase = new Case(req.body)
        await newCase.save()
        res.status(201).json({
            success:true,
            data:newCase,
            message:"Case Created"
        })
    } catch (error) {
        res.status(400).json({message:error.message})        
    }
}

// Fetch all cases from database and return them
const getAllCases = async (req,res)=>{
    try {
    const cases = await Case.find().populate('customer')
    res.status(200).json({
        success:true,
        data:cases
    })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Server error while fetching cases data",
            error:error.message
        })
    }
}

// Finds a case using the ID from request parameters
const getCaseById = async (req,res)=>{
    try {
        const caseId = req.params?.id    
        const caseData = await Case.findById(caseId).populate('customer')

        if(!caseData){
        return  res.status(404).json({
                success:false,
                message:"Case not found"
            })
        }


        res.status(200).json({
            success:true,
            data:caseData
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Invalid case ID",
            error:error.message
        })
    }
}

// Updates case details using the given ID
const updateCase = async (req,res)=>{
    try {
        const caseId = req.params?.id    
        const updatedCase = await Case.findByIdAndUpdate(
            caseId,
            req.body,
            {
                new:true,
                runValidators:true
            }
        )

        if(!updatedCase){
        return  res.status(404).json({
                success:false,
                message:"Case not found"
            })
        }


        res.status(200).json({
            success:true,
            data:updatedCase,
            message:"Case updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Failed to update case",
            error:error.message
        })
    }
}

// Removes a case from database using ID
const deleteCase = async (req,res)=>{
    try {
        const caseId = req.params?.id    
        const deletedCase = await Case.findByIdAndDelete(caseId)

        if(!deletedCase){
        return  res.status(404).json({
                success:false,
                message:"Case not found"
            })
        }


        res.status(200).json({
            success:true,
            data:deletedCase,
            message:"Case deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Failed to delete case",
            error:error.message
        })
    }
}



module.exports = {createCase, getAllCases, getCaseById, updateCase, deleteCase}

// Import Case model
// This controller handles all case related operations

// Create a new case
// Receives data from request body and saves to database

// Get all cases
// Fetch all cases from database and return them

// Get single case by ID
// Finds a case using the ID from request parameters

// Update a case
// Updates case details using the given ID

// Delete a case
// Removes a case from database using ID