
const User = require('./server');

class UsersController {

	static async getAll(req, res) {
		const { email } = req.query;
		try {
			const users = await User.find({
				email: new RegExp(email, 'i')
			});
			res.json(users.map(user => ({
				email: user.email,
				_id: user._id
			})));
		} catch (err) {
			console.log(err);
			res.sendStatus(500);
		}
	}
	
}
module.exports = UsersController;