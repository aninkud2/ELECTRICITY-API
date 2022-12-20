import { Sequelize } from "sequelize";
const database=new Sequelize("NEPA","root","root",{
    host:"localhost",
    dialect:"mysql"
})
export default database