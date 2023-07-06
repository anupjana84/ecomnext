
import mongoose, { connection } from 'mongoose'
export async function  connect(){
try {
    mongoose.connect(process.env.MONG_URL)
   const connection= mongoose.connection
   connection.on('connected',()=>{
    console.log('connected mongoDb successfully')

   })
   connection.on('error',()=>{
    console.log('Mongodb connection error')
    process.exit()
   })

} catch (error) {
    console.log('Somthing Wrong')
    console.log(error)
}
}