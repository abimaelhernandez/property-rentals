import connectDB from '../../config/database'
// import ConnectDB from '../config/database'

export const GET  = async (request) => {
  try {
    await connectDB ()
    return new Response(JSON.stringify({message: 'hellow word', status: 200 }))
  } catch (error) {
    console.log(error)
    return new Response('Something is wrong', { status: 500})
  }
}