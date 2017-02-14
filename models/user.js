module.exports = (sequelize, DataTypes) => {
	let User = sequelize.define('User', {
		username: {
			type: DataTypes.STRING,
			unique: true
		},
		hash: DataTypes.STRING,
		admin: DataTypes.BOOLEAN
	})

	return User
}