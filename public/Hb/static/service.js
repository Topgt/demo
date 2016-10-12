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
		var i = 0;
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
		}(arguments[i]));
		i += 1;
	}
)

//require(["html!some/module.html"],
//  function(html) {
//      console.log(html); // documentFragment
//      document.body.appendChild(html);
//      console.log(html); // empty documentFragment
//      html.stash(); // documentFragment restored
//      console.log(html.path) // some/module.html
//      console.log(html.source) // source code from some/module.html
//  }
//);