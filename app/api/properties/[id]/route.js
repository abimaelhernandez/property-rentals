
import connectDB from '@/config/database'
import Property from '@/models/Property'

//  GET /api/properties/:id

export const GET = async (request, { params }) => {
  try {
    const { id } = await params

    await connectDB()

    const property = await Property.findById(id)

    if (!property) {
      return new Response('Property Not Found', { status: 404 })
    }

    return new Response(JSON.stringify(property), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.log(error)
    return new Response('Something is wrong', { status: 500 })
  }
}
