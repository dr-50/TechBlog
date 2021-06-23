const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    // Post.findAll({
    // }).then(dbPostData => {
    //     const posts=dbPostData.map(post => post.get({ plain:true }));

    //     res.render('homepage', {
    //         posts,
    //         loggedIn: req.session.loggedIn
    //     });
    // }).catch(err => {
    //     console.log(err);
    //     res.status(500).join(err);
    // })
    Post.findAll().then((dbPostData) => {res.json(dbPostData)})
})

module.exports = router;