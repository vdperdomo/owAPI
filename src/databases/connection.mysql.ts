const { Sequelize } = require('sequelize');
const { mysql_db } = require('../config/config');

const sequelize = new Sequelize(
    mysql_db.schema,
    mysql_db.user,
    mysql_db.password,
    {
        host: mysql_db.host,
        dialect: 'mysql'
    }
);

export { sequelize };