const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

router.put('/:id', withAuth, (req, res) => {
    Post.update(
        {
            title: req.body.title,
            post_body: req.body.post_body
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: "No post found with this id"});
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.post('/', withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        post_body: req.body.post_body,
        user_id: req.session.user_id
    }).then(dbPostData=> res.json(dbPostData))
    .catch(err=> {
        console.log(err);
        res.status(500).json(err)
    })
})

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: "no post found with this id"});
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;