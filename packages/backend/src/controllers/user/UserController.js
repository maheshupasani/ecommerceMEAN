import Util from '../../Utils/Utils';
import UserService from '../../services/UserService';

const util = new Util();

class UserController{
	static async addUser(req,res){
		if (!req.body.name || !req.body.email || !req.body.phone) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
		}
		
		const newUser = req.body;
		const createdUser = await UserService.addUser(newUser);
	}
}
export default UserController;
