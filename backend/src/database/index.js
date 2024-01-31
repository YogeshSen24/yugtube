import mongoose from 'mongoose'
import { db_uri } from '../conf/conf.js'
import { DB_NAME } from '../const.js';

const db_connect = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${db_uri}/${DB_NAME}`)
        console.log("DB CONNECTED , DB HOST");
    } catch (error) {
        console.log("Database Connection Faild , ERROR :",error);
    }

}

export {db_connect}