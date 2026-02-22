// Import Customer model
const Customer = require('../models/Customer')

// This controller manages customer related operations

// Create a new customer
const createCustomer = async(req,res)=>{
    try {
        const customer = new Customer(req.body)
        await customer.save()
        res.status(201).json({
            customer:customer,
            message:"Customer Created"
        })
    } catch (error) {
        res.status(400).json({message:error.message})        
    }
}

// Fetch all customers from the database
const getAllCustomers = async (req,res)=>{
    try {
    const customers = await Customer.find()
    res.status(200).json({
        success:true,
        data:customers
    })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Server error while fetching data",
            error:error.message
        })
    }
}

// Find a specific customer using request ID
const getCustomerById = async (req,res)=>{
    try {
        const customerId = req.params?.id    
        const customer = await Customer.findById(customerId)

        if(!customer){
        return  res.status(404).json({
                success:false,
                message:"Customer not found"
            })
        }

        res.status(200).json({
            success:true,
            data:customer
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Invalid Customer ID",
            error:error.message
        })
    }
}

// Modify customer information using ID
const updateCustomer = async (req,res)=>{
    try {
        const customerId = req.params?.id    
        const updatedCustomer = await Customer.findByIdAndUpdate(
            customerId,
            req.body,
            {
                new:true,
                runValidators:true
            }
        )

        if(!updatedCustomer){
        return  res.status(404).json({
                success:false,
                message:"Customer not found"
            })
        }


        res.status(200).json({
            success:true,
            data:updatedCustomer,
            message:"Customer updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Failed to update customer",
            error:error.message
        })
    }
}

// Remove customer from database
const deleteCustomer = async (req,res)=>{
    try {
        const customerId = req.params?.id    
        const deletedCustomer = await Customer.findByIdAndDelete(customerId)

        if(!deletedCustomer){

        return  res.status(404).json({
                success:false,
                message:"Customer not found"
            })
        }


        res.status(200).json({
            success:true,
            data:deletedCustomer,
            message:"Customer deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Failed to delete customer",
            error:error.message
        })
    }
}



module.exports = {createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer}