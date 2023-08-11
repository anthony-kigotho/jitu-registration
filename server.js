const express = require ('express');
const { userRouter } = require('./Routes/userRoutes');

const app  = express()

app.use(express.urlencoded({ extended: true }));

app.use(express.json())
app.use('/user', userRouter)

app.use((err, req, res, next)=>{
    res.json({Error: err})
})

app.listen(4500, ()=>{
    console.log('Server running on port 4500');
})