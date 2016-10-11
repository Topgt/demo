define(function(){
		function MessageModel(opt){
			var option = {
				keyboard: true,
				backdrop: true,
				show: false
			};
			$.extend(option, opt);
			this.model = $('#Messageltip').modal(option);
		}
		
		MessageModel.prototype.constructor = "MessageModel";
		MessageModel.prototype.setTxt = function(txt){
			this.model.find('.txt').html(txt)
		};
		MessageModel.prototype.setPoint = function(xx, yy){
			var x = xx || 'auto';
			var y = yy || 'auto';
			this.model.css({
				"margin-top": y,
				"margin-left": x
			});
		};
		MessageModel.prototype.show = function(txt){
			this.setTxt(txt);
			this.model.modal('show');
		};
		
		return MessageModel;
	}
)
