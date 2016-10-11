var gulp = require('gulp');

var concat = require('gulp-concat'); //文件合并
var jshint = require('gulp-jshint'); //js语法规范检查
var uglify = require('gulp-uglify'); //压缩js
var rename = require('gulp-rename'); //文件重命名
var amdOptimize = require('amd-optimize'); //require优化
var watch = require('gulp-watch');
//var reqjsConfing = require('./reqjsConfing');  

gulp.task('hellow', function() {
	console.log('hellow');
});

//脚本检查
gulp.task('jshint', function() {
	gulp.src("./public/Hb/**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

//require合并任务
gulp.task('rjs', function() {
	gulp.src(["./public/Hb/**/*.js"])
		.pipe(amdOptimize("loginMain", {
			map: {
				"*": {
					"css": ["./static/css.min"]
				}
			},
			paths: {
				"jquery": ["./static/jquery/jquery-2.1.4.min"],
				"bootstrap": ["./static/bootstrap-3.3.5-dist/js/bootstrap.min"],
				"login": ["./views/login/login"],
				"service": ["./static/service"],
				"messageltip": ["./components/messagetip/messageltip"]
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
		}))
		.pipe(concat("login.js"))
		.pipe(gulp.dest('./public/Hb'))
		.pipe(rename("login.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest('./public/dist/js'));
});