import mongoose from 'mongoose'

export const Connection = async () => {
	const URL =
		'mongodb+srv://user:FUwAeq2mz6hGn31c@cluster0.nznvb.mongodb.net/?retryWrites=true&w=majority'
	try {
		await mongoose.connect(URL, {
			useUnifiedtopology: true,
			useNewUrlParser: true,
		})
		console.log('Database connected successfully')
	} catch (error) {
		console.log('Error while connecting to Database', error.message)
	}
}

export default Connection

// user
// FUwAeq2mz6hGn31c
