const mysql= require('mysql');
const {database}= require('./keys');
const { promisify }= require('util');

const pool= mysql.createPool(database);

pool.getConnection( (err, connection) =>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_lOST'){
            console.error('Database connection was closed');
        }

        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Database has too many connections');
        }

        if(err.code === 'ECONNREFUSED'){
            console.error('Database connection was refused');
        }
    }

    if(connection){
        connection.release();
        console.log('DB is connected');
        return;
    }
})

// promisify pool queries
pool.query= promisify(pool.query);

module.exports= pool;