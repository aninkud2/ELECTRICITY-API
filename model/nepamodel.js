import  sequelize from "sequelize";
import database from "../configuration/config.js"
const ikedc=database.define("Ikedc",{
    Relationship_Manager:{type:sequelize.STRING},
    City:{type:sequelize.STRING},
    Street:{type:sequelize.STRING},
    House_Number:{type:sequelize.INTEGER},
    Meter_type :{type:sequelize.STRING}
},{freezeTableName:true}
)
export default ikedc