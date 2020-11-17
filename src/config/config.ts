import dotenv from 'dotenv';

dotenv.config;

const MONGO_ATLAS_DB = process.env.MONGO_ATLAS_DB || 'ow'
const MONGO_ATLAS_USER = process.env.MONGO_ATLAS_USER || 'root'
const MONGO_ATLAS_PW = process.env.MONGO_ATLAS_PW || 'root'

const mongo_db = {
    name: MONGO_ATLAS_DB,
    user: MONGO_ATLAS_USER,
    password: MONGO_ATLAS_PW
};

const mysql_db = {
    host: 'localhost',
    schema: 'OW',
    user: 'root',
    password: 'root'
};

export { mongo_db, mysql_db }