define(["jquery", "messageltip", "header", "Events"], function($, MessageModel, Header, Events) {
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
		data['name'] = namevalue;
		data['pwd'] = pwdvalue;
		$.when(
			$.ajax({
				type: this.type,
				url: this.url.checkLogin,
				data: data,
				async: true
			})
		).done(function(result) {
			console.log(result);
			// this.loginedTodo(result);
		}.bind(this)).fail().then();
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
	LoginModel.prototype.loadHeader = function(){
		var headModel = new Header();
		$('#header').html(headModel.init());
	}

	LoginModel.prototype.lanch = function() {
		this.loadHeader();
		this.bindEvent();
	};

	return LoginModel;
});