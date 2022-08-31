const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, password = process.env.MYSQLPASSWORD, {
    dialect: password = process.env.DIALECT,
    host: password = process.env.HOST,
});
try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  }

const Argonaute = sequelize.define('argonaute', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: { type: DataTypes.STRING(100), allowNull: false },
},
{
  timestamps: true, createdAt: 'created', updatedAt: false, underscored: true
})
Argonaute.sync().then(() => 
{
      Argonaute.findOrCreate({
        where: {
          name:"Eleftheria"
        },
        defaults:{
          id: 1,
          name: "Eleftheria",
        }    
      })
    })
    .catch(console.log('Erreur'))
exports.Argonaute = Argonaute

sequelize.sync()

