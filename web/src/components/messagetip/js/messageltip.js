define([
		"text!../components/messagetip/messageltip.html!script",		
		"Events"
	],
	function(html, Events) {
		//css的依赖必须放到回调中导入，否则r.js压缩会错误
		require(["css!./bootstrap-3.3.5-dist/css/bootstrap.min.css", "css!../components/messagetip/css/messageltip.css"]);
		function MessageModel(opt) {
			var Imgurl = window.location.pathname;
			console.log(Imgurl);
			Imgurl = Imgurl.slice(0, Imgurl.indexOf('/views'));
			if(!$('#Messageltip').length) {
				html = html.replace(/img src="/g, "img src=\"" + Imgurl);
				$('body').append($('<div></div>').append(html));
			}
			var option = {
				keyboard: true,
				backdrop: true,
				show: false
			};
			$.extend(option, opt);
			this.model = $('#Messageltip').modal(option);
			this.a = 10;
		}

		MessageModel.prototype.constructor = "MessageModel";
		MessageModel.prototype.setTxt = function(txt) {
			this.model.find('.txt').html(txt);
		};
		MessageModel.prototype.a = 10;
		MessageModel.prototype.setPoint = function(xx, yy) {
			var x = xx || 'auto';
			var y = yy || 'auto';
			this.model.css({
				"margin-top": y,
				"margin-left": x
			});
		};
		MessageModel.prototype.show = function(txt) {
			this.setTxt(txt);
			this.model.modal('show');
		};
		
		function Exports(){
			var model = new MessageModel();
			this.show = function(t){model.show(t)};
		}
		
//		return MessageModel;
		return Exports;
	});