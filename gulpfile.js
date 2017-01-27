// Instantiate gulp plugins
const gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat');

distPath = './dist';

gulp.task('sass', function () {
	return gulp.src('./app/assets/sass/app.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(concat('app.min.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(distPath+'/assets/css'));
});

// Run all tasks
gulp.task('all', ['sass']);

// Default task to run
gulp.task('default', ['watch']);
