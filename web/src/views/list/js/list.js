define(['jquery','header','Events'],
function($, Header, Events){
	function List(){
		//
	}
	
	List.prototype.constructor = "List";
	List.prototype.loadHeader = function(){
		var headModel = new Header();
		$('#head').html(headModel.init());
	};
	List.prototype.lanch = function(){
		this.loadHeader();
	}
	
	function Express(){
		var listModel = new List();
		this.lanch = function(){listModel.lanch()}
	}
	
	return Express;
});
