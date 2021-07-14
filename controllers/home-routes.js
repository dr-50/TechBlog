const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
    console.log(`===========
    get route called
    ==============`)
    Post.findAll({
        attributes: [
          'id',
          'post_body',
          'title',
        ],
        include: [
          {
            model: User,
            attributes: ['username']
          }
        ]
      }).then(data => {
        const posts = data.map(post => post.get({ plain: true }));
        res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
    });
})
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    }); 
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return
    }
    res.render('login')
})

module.exports = router;