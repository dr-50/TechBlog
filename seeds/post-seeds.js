const { Post } = require('../models');

const postdata = [
    {
        title: 'testTitle1',
        post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        user_id: 1
    },
    {
        title: 'testTitle2',
        post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        user_id: 2
    },
    {
        title: 'testTitle3',
        post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        user_id: 3
    },
    {
        title: 'testTitle4',
        post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
