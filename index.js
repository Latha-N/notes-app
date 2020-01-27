const express=require('express')
//npm install mangoose
const setupDB=require('./config/database')
const router=require('./config/routes')
const cors=require('cors')


const app=express()
const port=3015


app.use(cors())
app.use(express.json())
app.use('/uploads',express.static('uploads'))
setupDB()


app.use('/',router)

app.listen(port,()=>{
    console.log('listening on port',port)
})
