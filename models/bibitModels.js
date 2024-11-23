import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {Datatypes} = Sequelize;

const bibit = db.define('bibit',{
    name: Datatypes.STRING,
    jenis: Datatypes.STRING,
},{
    freezeTableName: true,
});

export default bibit;

(async() => {
    await db.sync();
    console.log('Database and table created successfully.');
})