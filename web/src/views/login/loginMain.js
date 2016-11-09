//require.config({
//	baseUrl: "../../static",
//	map: {
//		"*": {}
//	},
//	paths: {
//		//		"jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"],
//		"css": ["./lib/require-css"],
//		"text": ["./lib/require-text"],
//		"service": ["./service"],
//		"Events": ["./utils/Events"],
//		"jquery": ["./jquery/jquery-2.1.4.min"],
//		"bootstrap": ["./bootstrap-3.3.5-dist/js/bootstrap.min"],
//		"login": ["../views/login/js/login"],
//		"messageltip": ["../components/messagetip/js/messageltip"]
//	},
//	waitSeconds: 0,
//	shim: {
//		"jquery": {
//			exports: '$'
//		},
//		"bootstrap": {
//			deps: [
//				"jquery"
//			],
//			exports: 'bootstrap'
//		},
//		"messageltip": {
//			deps: [
//				"jquery",
//				"bootstrap"
//
//			],
//			exports: 'messageltip'
//		}
//	}
//});

require(["service"], function() {
	require(["login"], function(Model) {
		var model = new Model();
		model.lanch();
		console.log("require ok");
	});
});