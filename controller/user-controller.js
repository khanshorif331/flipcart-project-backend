import User from '../model/user-schema.js'

export const userSignup = async (req, res) => {
	try {
		const exist = await User.findOne({ username: req.body.username })
		console.log(exist)
		if (exist) {
			return res.status(401).json({
				message: 'Username already exists',
			})
		}
		const user = req.body
		console.log(user, 'user')
		const newUser = new User(user)
		await newUser.save()
		res.status(200).json({ message: 'User created successfully', user })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}
