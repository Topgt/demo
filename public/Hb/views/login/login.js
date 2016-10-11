define(["jquery", "messageltip"], function($, MessageModel) {
	console.log("导入了login.js模块");
	if(!$('#Messageltip').length){
		$('body').append($('<div></div>').load('../../components/messagetip/messageltip.html'));
	} 
	function LoginModel() {
		this.$model = $('#login');
	}
	LoginModel.prototype.constructor = "LoginModel";
	LoginModel.prototype.checkLogin = function() {	
		var name = this.fielMap.loginName;
		var pwd = this.fielMap.loginPwd;
		var url = this.url.checkLogin;
		var type = this.type;
		
		var namevalue = this.$model.find('input[name="userName"]').val();
		var pwdvalue = this.$model.find('input[name="userPassword"]').val();
		
		if(!namevalue){
			var msgmodel = new MessageModel();
			msgmodel.show(name);
			console.log("用户名为空");
		}
		$.when(
			$.ajax({
				type: type,
				url: url,
				data: {
					name: namevalue,
					pwd: pwdvalue
				},
				async: true
			})
		).done(function(result){
			_this.loginedTodo(result);
		}).fail().then();
	};
	LoginModel.prototype.loginedTodo = function(){
		console.log("登录成功");
	};
	LoginModel.prototype.bindEvent = function(){
		var _this = this;
		this.$model.find('input[name="subime"]').click(function(){
			console.log("点击事件");
			_this.checkLogin();
		});
	};
	
	LoginModel.prototype.lanch = function(){
		this.bindEvent();
	};
	
	return LoginModel;
});