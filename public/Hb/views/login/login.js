define(["jquery", "messageltip", "Events"], function($, MessageModel, Events) {
	console.log("导入了login.js模块");

	function LoginModel() {
		this.$model = $('#login');
	}
	LoginModel.prototype.constructor = "LoginModel";
	LoginModel.prototype.checkLogin = function() {
		var namevalue = this.$model.find('input[name="userName"]').val();
		var pwdvalue = this.$model.find('input[name="userPassword"]').val();

		if(!namevalue) {
			var msgmodel = new MessageModel();
			msgmodel.show('提示信息');
			console.log("用户名为空");
		}
		var data = {};
		data[this.fielMap.loginName] = namevalue;
		data[this.fielMap.loginPwd] = pwdvalue;
		$.when(
			$.ajax({
				type: this.type,
				url: this.url.checkLogin,
				data: data,
				async: true
			})
		).done(function(result) {
			_this.loginedTodo(result);
		}).fail().then();
	};
	LoginModel.prototype.loginedTodo = function() {
		console.log("登录成功");
	};
	LoginModel.prototype.bindEvent = function() {
		var _this = this;
		this.$model.find('input[name="subime"]').click(function() {
			console.log("点击事件");
			_this.checkLogin();
		});
	};

	LoginModel.prototype.lanch = function() {
		this.bindEvent();
	};

	return LoginModel;
});