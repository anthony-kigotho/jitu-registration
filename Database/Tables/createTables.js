const mssql = require ('mssql');
const { sqlConfig } = require('../../Config/config');


const createUsersTable = async(req, res)=>{
    try {
        const table = `
        BEGIN 
            TRY
                CREATE TABLE usersTable(
                    id VARCHAR(200) PRIMARY KEY,
                    firstname VARCHAR(200) NOT NULL,
                    lastname VARCHAR(200) NOT NULL,
                    email VARCHAR(200) UNIQUE NOT NULL,
                    cohort VARCHAR(200) NOT NULL,
                    password VARCHAR(200) NOT NULL,
                )
            END TRY
        BEGIN CATCH
            THROW 50002, 'Table already exists', 1;
        END CATCH`;

    const pool = await mssql.connect(sqlConfig)

    await pool.request().query(table, (err)=>{
        if(err instanceof mssql.RequestError){
            console.log({Error: err.message});
        }else{
            console.log('Table created Successfully');
        }
    })

    } catch (error) {
        return ({Error: error})
    }
}

module.exports = {
    createUsersTable
}