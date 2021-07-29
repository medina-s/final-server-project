const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || `postgresql://postgres:${encodeURIComponent(process.env.PASS)}@localhost/Final`, {
    dialect: 'postgres',
    dialectOptions:{ 
        ssl: { require:true, rejectUnauthorized: false}
    }
});


module.exports = sequelize;


// const Sequelize = require('sequelize');

// const sequelize = new Sequelize("postgres://postgres:Rylen2019!@localhost:5432/Final");


// module.exports = sequelize;