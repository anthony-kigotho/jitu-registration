const mssql = require('mssql')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')
const crypto =  require('crypto')
const {v4} = require ('uuid')
const { createUsersTable } = require('../Database/Tables/createTables')
const { sqlConfig } = require('../Config/config')
const dotenv = require ('dotenv')
dotenv.config()

const registerUser = async (req, res)=>{
    try {

        const id = v4();
        const {firstname, lastname, email, cohort, password} = req.body

        if(error){
            return res.status(422).json(error.details)
        }

        const hashedPwd = await bcrypt.hash(password, 5)

        const pool = await mssql.connect(sqlConfig);

        const result = await pool.request()
        .input('id', id)
        .input('firstname', mssql.VarChar, firstname)
        .input('lastname', mssql.VarChar, lastname)
        .input('email', mssql.VarChar, email)
        .input('cohort', mssql.VarChar, cohort)
        .input('password', mssql.VarChar, hashedPwd)
        .execute('registerUserPROC')


        if (result.rowsAffected == 1){
            return res.status(200).json({
                message: 'User registered successfully'
            })
        }else{
            return res.status(400).json({
                message: 'User registration failed'
            })
        }


    } catch (error) {
        return res.json({Error:error})
    }
}


module.exports = {
    registerUser
}