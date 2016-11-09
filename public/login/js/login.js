$(document).ready(function() {
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
					type: 'post',
					url: '../sing',
					data: data,
					async: true
				})
			).done(function(result) {
				this.loginedTodo(result);
			}.bind(this))
			.fail().then();
	};
	LoginModel.prototype.loginedTodo = function(result) {
		console.log(result);
	};
	LoginModel.prototype.bindEvent = function() {
		var _this = this;
		this.$model.find('input[name="subime"]').click(function() {
			_this.checkLogin();
		});
	};
	LoginModel.prototype.lanch = function() {
		this.bindEvent();
	};

})