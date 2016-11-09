require(['service'], function(){
	require(['list'], function(List){
		var listModel = new List();
		listModel.lanch();
		console.log('ok');
	})
})
