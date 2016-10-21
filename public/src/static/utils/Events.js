define(function() {
	console.log("事件监听模块");
	/**
	 * Eventcenter是一个全局对象
	 * onOne 监听事件一次
	 * on  始终监听事件
	 * fire 发出一个事件
	 * 
	 * 用法
	 * 先导入模块后使用
	 * onOne(eventName, callback)
	 * 
	 * on(eventName, callback)
	 * 
	 * fire(eventName, args)
	 */
	
	var Eventcenter = (function() {
		var events = {};

		function on(evt, handler) {
			events[evt] = events[evt] || [];
			/*events[evt][0] = false;  // false表示始终监听evt事件*/
			events[evt].push({
				handler: handler
			})
		}
				
/*		function onOne(evt, handler) {
			events[evt] = events[evt] || [];
			events[evt][0] = true;  // true表示始终只监听evt事件一次
			events[evt].push({
				handler: handler
			})
		}*/

		function fire(evt, args) {
			if(!events[evt]) {
				return;
			}
			
			for(var i = 1; i < events[evt].length; i++) {
				events[evt][i].handler(args);
			}
			/*//true表示只监听此事件一次，执行完删除该事件
			if(events[evt][0]){
				delete events[evt];
			}*/
		}

		return {
//			onOne: onOne,
			on: on,
			fire: fire			
		}
	})();

	return Eventcenter;
})