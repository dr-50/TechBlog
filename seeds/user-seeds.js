const sequelize = require('../config/connection');
const { User } = require ('../models');

const userdata = [
    {
        username: 'testUser1',
        email: 'testemail1@email.com',
        password: 'test1'
    },
    {
        username: 'testUser2',
        email: 'testemail2@email.com',
        password: 'test2'
    },
    {
        username: 'testUser3',
        email: 'testemail3@email.com',
        password: 'test3'
    },
    {
        username: 'testUser4',
        email: 'testemail4@email.com',
        password: 'test4'
    }
]
const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
