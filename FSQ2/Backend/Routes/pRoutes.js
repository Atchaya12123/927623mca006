const express= require('express')
const {
    createP,
    getP,
    
  } = require('../Controller/pCont')

  const router=express.Router()

  // GET all workouts
router.get('/', getP)

// POST a new workout
router.post('/', createP)

module.exports=router