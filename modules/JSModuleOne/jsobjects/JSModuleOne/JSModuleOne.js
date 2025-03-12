export default {
	myVar1: [],
	myVar2: {},
	getUsers (limit=1) {
		//	write code here
		//	this.myVar1 = [1,2,3]
		return GetUsers.run({ limit: limit })
	},
	async getCountUsers () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		return await CountUsers.run()
	}
}