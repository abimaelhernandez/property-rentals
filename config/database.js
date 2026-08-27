import mongoose from "mongoose";

let connected = false

const connectDB = async ()=> {
 mongoose.set('strictQuery', true) 

 // id the DB is connecnect do not re connects
  if(connected) {
    console.log('Mongo DB is already connected .....')
    return
  }

 //connect to DB 
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true 
    console.log('MONGO DB is connected ....')
  } catch (error) {
    console.log(error)
  }
}


export default connectDB