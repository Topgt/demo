require.config({
	baseUrl: "../../static",
	map: {
		"*": {
			"css": ["./css.min"]
		}
	},
	paths: {
		"jquery": ["./jquery/jquery-2.1.4.min"],
		"bootstrap": ["./bootstrap-3.3.5-dist/js/bootstrap.min"],
		"login": ["../views/login/login"],
		"messageltip": ["../components/messagetip/messageltip"]
	},
	waitSeconds: 0,
	shim: {
		"jquery": {
			exports: '$'
		},
		"bootstrap": {
			deps: [
				"jquery",
				"css!./bootstrap-3.3.5-dist/css/bootstrap.min.css"
			],
			exports: 'bootstrap'
		},
		"messageltip": {
			deps: [
				"jquery",
				"bootstrap",
				"css!../components/messagetip/messageltip.css"
			],
			exports: 'messageltip'
		}
	}

});

require(["./service"], function() {
	require(["login"], function(Model) {
		var model = new Model();
		model.lanch();
		console.log("require ok");
	})
})