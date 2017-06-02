var utilities=require('gulp-util');
var gulp=require('gulp');
var del=require('del');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var browserify=require('browserify');
var jshint=require('gulp-jshint');
var source=require('vinyl-source-stream');
var shell=require('gulp-shell');
var browserSync=require('browser-sync').create();
var ui_lib=require('bower-files')({
	"overrides":{
		"bootstrap":{
			"main":[
				"less/bootstrap.css",
				"dist/css/bootstrap.css",
				"dist/js/bootstrap.js"
			]
		}
	}
	});

var buildProd=utilities.env.production;
//sass dependencies
var sass=require('gulp-sass');
var sourcemaps=require('gulp-sourcemaps');

////////////////////////////////////////////////////////
////////TYPESCRIPT///////////////////////

gulp.task('tsClean',function(){
	return del(['app/*.js', 'app/*.js.map']);
});

gulp.task('ts',['tsClean'],shell.task(['tsc']));

//////////////////////end of////////////////

/////////  SASS  ////////
gulp.task('sassBuild', function(){
	return gulp.src(['resources/styles/*'])
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/css'));
});

//build bootstrap js files(contextually)
gulp.task('bowerJS', function(){
	return gulp.src(ui_lib.ext('js').files)
		.pipe(concat('vendor.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/js'));

});

gulp.task('bowerCSS', function(){
	return gulp.src(ui_lib.ext('css').files)
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('./build/css'));
});

//concat js files
gulp.task('concatJS', function(){
	return gulp.src(['./js/ui.js', './js/functions.js'])
		.pipe(concat('alljs.js'))
		.pipe(gulp.dest('./tmp'));
});

gulp.task('browserifyJS',['concatJS'],function(){
	return browserify(
		{entries:['./tmp/alljs.js']})
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('./build/js'));
});

gulp.task('minifyJS',['browserifyJS'], function(){
	return gulp.src('./build/js/app.js')
		.pipe(uglify())
		.pipe(gulp.dest('./build/js'));
});

//js checker
gulp.task('checkJS', function(){
	return gulp.src(['js/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

//clean task
gulp.task("clean",function(){
	return del(['build', 'tmp']);
});
//run the bower task
gulp.task('bower', ['bowerJS','bowerCSS']);

//magic build worker with conditions
/*
change to clean later

*/
gulp.task("build",['ts'], function(){
	// if(buildProd){
	// 	//tasks for production
	// 	gulp.start('minifyJS');
	// }
	// else{
	// 	//tasks for development
	// 	gulp.start('browserifyJS');
	// }
	gulp.start('bower');
	gulp.start('sassBuild');
});

//create local server
gulp.task('serve', ['build'], function(){
	browserSync.init({
		server:{
			baseDir:"./",
			index:"index.html"
		}
	});
	gulp.watch(['js/*.js'],['jsBuild']);
	gulp.watch(['bower.json'],['bowerBuild']);
	gulp.watch(['*.html'], ['htmlBuild']);
	gulp.watch(['resources/styles/*.css','resources/styles/*.scss'], ['cssBuild']);
	gulp.watch(['app/*.ts'],['tsBuild']);
});

gulp.task("bowerBuild", ['bower'], function(){
	browserSync.reload();
});

//task to handle browser reload
gulp.task('jsBuild', ['browserifyJS','checkJS'], function(){
	browserSync.reload();
});
//task to handle html reload
gulp.task('htmlBuild', function(){
	browserSync.reload();
///////////
});
gulp.task('cssBuild',['sassBuild'], function(){
	browserSync.reload();
});
gulp.task('tsBuild', ['ts'], function(){
  browserSync.reload();
});