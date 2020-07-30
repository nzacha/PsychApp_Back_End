const path = require('path');
const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Question = require('./question')(sequelize)
db.User = require('./user')(sequelize)

/*
db.Restaurants = require('./restaurants')(sequelize)
db.Users = require('./users')(sequelize)
db.Orders = require('./orders')(sequelize)
db.Products = require('./products')(sequelize)
db.OrderedProducts = require('./orderedProducts')(sequelize)
db.Changes = require('./changes')(sequelize)
db.Additions = require('./added_products')(sequelize)
*/

/*
db.Products.belongsTo(db.Restaurants)
db.Restaurants.hasMany(db.Products, {onDelete: 'cascade'})
db.Orders.belongsTo(db.Restaurants)
db.Orders.hasMany(db.OrderedProducts, {onDelete: 'cascade'})
db.Orders.hasMany(db.Additions)
db.Restaurants.hasMany(db.Orders, {onDelete: 'cascade'})
db.OrderedProducts.belongsTo(db.Orders)
db.OrderedProducts.belongsTo(db.Products)
db.OrderedProducts.hasMany(db.Changes)
db.Changes.belongsTo(db.OrderedProducts)
db.Additions.belongsTo(db.Orders) 
db.Additions.belongsTo(db.Products)
db.Changes.belongsTo(db.Orders)
*/

module.exports = db;
