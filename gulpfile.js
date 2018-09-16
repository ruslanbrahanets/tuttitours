var syntax        = 'scss'; // Syntax: sass or scss;

var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browsersync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require("gulp-notify"),
		rsync         = require('gulp-rsync'),
		del           = require('del'),
		imagemin      = require('gulp-imagemin'),
		image         = require('gulp-image'),
		cache         = require('gulp-cache');

gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// open: false,
		tunnel: true,
		tunnel: "tuttitours", //Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('styles', function() {
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browsersync.reload( {stream: true} ))
});

gulp.task('js', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/bootstrap/js/bootstrap.min.js',
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('jsfancy', function() {
	return gulp.src([
		'app/libs/fancybox/jquery.fancybox.js' // Always at the end
		])
	.pipe(concat('jquery.fancybox.min.js'))
	.pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('jsfilter', function() {
	return gulp.src([
		'app/libs/jquery-asRange/dist/jquery-asRange.min.js' // Always at the end
		])
	.pipe(concat('tripsrange.min.js'))
	.pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('IE', function() {
	return gulp.src([
		'app/libs/html5shiv/es5-shim.min.js',
		'app/libs/html5shiv/html5shiv.min.js',
		'app/libs/html5shiv/html5shiv-printshiv.min.js',
		'app/libs/respond/respond.min.js',
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/libs'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('jspages', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/bootstrap/js/bootstrap.min.js',
		'app/js/otherpages.js' // Always at the end
		])
	.pipe(concat('otherpages.min.js'))
	.pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('izitoast', function() {
	return gulp.src([
		'app/libs/izitoast/dist/js/iziToast.js' // Always at the end
		])
	.pipe(concat('izitoast.min.js'))
	.pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('izimodal', function() {
	return gulp.src([
		'app/libs/izimodal/js/iziModal.js' // Always at the end
		])
	.pipe(concat('izimodal.min.js'))
	.pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('rsync', function() {
	return gulp.src('app/**')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

gulp.task('watch', ['styles', 'js', 'jsfilter', 'jsfancy', 'jspages', 'izimodal', 'izitoast', 'browser-sync'], function() {
	gulp.watch('app/scss/**/*.scss', ['styles']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browsersync.reload)
});

gulp.task('imagemin', function() {
	return gulp.src('app/img/min/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/img/min')); 
});

gulp.task('image', function() {
	return gulp.src('app/img/full/**/*')
	.pipe(image())
	.pipe(cache(image()))
	.pipe(gulp.dest('dist/img/full')); 
});

gulp.task('build', ['removedist', 'imagemin', 'image', 'styles', 'js', 'IE', 'jsfilter', 'jspages', 'jspages', 'jsfancy', 'izitoast', 'izimodal'], function() {

	var buildFiles = gulp.src([
		'app/*.html',
		'app/.htaccess',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'app/css/main.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildCss = gulp.src([
		'app/css/tripsrange.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildCss = gulp.src([
		'app/css/izimodal.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildCss = gulp.src([
		'app/css/izitoast.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'app/js/scripts.min.js',
		]).pipe(gulp.dest('dist/js'));
	
	var buildJs = gulp.src([
		'app/js/otherpages.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildJs = gulp.src([
		'app/js/tripsrange.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildJs = gulp.src([
		'app/libs/libs.min.js',
		]).pipe(gulp.dest('dist/libs'));

	var buildJs = gulp.src([
		'app/js/izitoast.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildJs = gulp.src([
		'app/js/izimodal.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildJs = gulp.src([
		'app/js/jquery.fancybox.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

});

gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
