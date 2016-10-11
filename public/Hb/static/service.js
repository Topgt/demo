/*------------------------------|
| Service Config | 			  	|
|-------------------------------|
| @author Rum``	            |
|-------------------------------|
| 描述：远程接口配置文件	            |
| 			|
| |
|------------------------------*/

define(["login"],
	function() {
		var LoginModel = (function(model) {
			model.prototype.type = "post";
			model.prototype.url = {
				checkLogin: '/user/info'
			};
			model.prototype.fielMap = {
				id: 'id',
				loginName: 'name',
				loginPwd: 'pwd'
			};
			return model;
		}(arguments[0]));
	}
)