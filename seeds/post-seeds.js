const { Post } = require('../models');

const postdata = [
    {
        title: 'testTitle1',
        post_body: 'Test Body 1',
        user_id: 1
    },
    {
        title: 'testTitle2',
        post_body: 'Test Body 2',
        user_id: 2
    },
    {
        title: 'testTitle3',
        post_body: 'Test Body 4',
        user_id: 3
    },
    {
        title: 'testTitle4',
        post_body: 'Test Body 4',
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
