const prod = require('../Models/model')
const mongoose = require('mongoose')

//get request
const getP = async (req, res) => {
const Pro = await prod.find({}).sort({createdAt: -1})
res.status(200).json(Pro)
  }

  
//creating a new Product field
  const createP = async (req, res) => {
    const {pN,price,rate,disc,avail} = req.body
  
    let emptyFields = []
  
    if(!pN) {
      emptyFields.push('pN')
    }
    if(!price) {
      emptyFields.push('price')
    }
    if(!rate) {
      emptyFields.push('rate')
    }
    if(!disc) {
        emptyFields.push('disc')
      }
      if(!avail) {
        emptyFields.push('avail')
      }
    if(emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
  
    // add doc to db
    try {
      const pro = await prod.create({pN,price,rate,disc,avail})
      res.status(200).json(pro)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

  module.exports = {
    getP,
    createP
  }