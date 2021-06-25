const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
    console.log(`===========
    get route called
    ==============`)
    // exports.index = function(request,response,next){
    //     Post.findAll().then(dbTest => {console.log(dbTest)}).catch(err=>{console.log(err)})    
    //  }
    // const data = await Post.findAll()
    Post.findAll().then(data => console.log(data))    


})

module.exports = router;