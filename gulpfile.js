var gulp = require('gulp');

var jshint = require('gulp-jshint'); //js语法规范检查
var browserSync = require('browser-sync').create();
//var reqjsConfing = require('./reqjsConfing');  

gulp.task('hellow', function() {
	console.log('hellow');
});

//脚本检查
gulp.task('jshint', function() {
	gulp.src("./public/src/**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('browserSync', function(){
	return browserSync.init({
		port: '3000',
		proxy: 'http://localhost:3001/src/views/login/login.html'
	});	
});

gulp.watch('./public/src/**/*').on('change', browserSync.reload);