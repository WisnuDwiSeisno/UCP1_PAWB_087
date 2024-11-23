import { Sequelize } from "sequelize";

const db = new Sequelize ('pertanianpaw','root','',{
    host: 'localhost',
    dialect:'mysql'
})

export default db;