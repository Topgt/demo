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
		.pipe(amdOptimize("loginMain"))
		.pipe(concat("login.js"))
		.pipe(gulp.dest('./public/dist/js'))
		.pipe(rename("login.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest('./public/dist/js'));
});