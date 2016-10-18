require.config({
	baseUrl: "http://127.0.0.1:8020/demo/public/src/static",
	map: {
		"*": {}
	},
	paths: {
		//		"jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"],
		"css": ["./lib/require-css"],
		"text": ["./lib/require-text"],
		"service": ["./service"],
		"Events": ["./utils/Events"],
		"jquery": ["./jquery/jquery-2.1.4.min"],
		"bootstrap": ["./bootstrap-3.3.5-dist/js/bootstrap.min"],
		"login": ["../views/login/js/login"],
		"messageltip": ["../components/messagetip/js/messageltip"]
	},
	waitSeconds: 0,
	shim: {
		"jquery": {
			exports: '$'
		},
		"bootstrap": {
			deps: [
				"jquery"
			],
			exports: 'bootstrap'
		},
		"messageltip": {
			deps: [
				"jquery",
				"bootstrap"

			],
			exports: 'messageltip'
		}
	}
});