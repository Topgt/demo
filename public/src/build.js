({
	appDir: './', //项目根目录
	dir: '../dist', //输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）
	baseUrl: './static', //相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的

	modules: [{
		name: "../loginMain",
		include: [
			"jquery", "messageltip", "Events"
		]
	}],
	removeCombined: true, //如果为true，将从输出目录中删除已合并的文件
	paths: {
		"css": "./require-css",
		"text": "./require-text",
		"jquery": "./jquery/jquery-2.1.4.min",
		"bootstrap": "./bootstrap-3.3.5-dist/js/bootstrap.min",
		"login": "../views/login/login",
		"service": "./service",
		"Events": "./Events",
		"messageltip": "../components/messagetip/messageltip"		
	},
	shim: {
		"jquery": {
			exports: '$'
		},
		"bootstrap": {
			deps: [
				"jquery",
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
})