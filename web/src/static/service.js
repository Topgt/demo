/*------------------------------|
| Service Config | 			  	|
|-------------------------------|
| @author Rum``	            |
|-------------------------------|
| 描述：远程接口配置文件	            |
| 注意：导入模块的顺序必须和配置的顺序一致			|
| |
|------------------------------*/

define(["login"],
	function() {
		var i = 0;
		var LoginModel = (function(model) {
			model.prototype.type = "post";
			model.prototype.url = {
				checkLogin: '/sing'
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