'use strict';

const gulp   = require('gulp');
const uglify = require('gulp-uglify');
const babel  = require('gulp-babel');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const flow   = require('gulp-flowtype');

gulp.task('default', ['watch:js', 'watch:css']);
gulp.task('build', ['jsmin', 'cssmin']);

gulp.task('watch:js', () => {
    return gulp.watch('src/**/*.js', { ignoreInitial: true }, ['jsmin']);
});

gulp.task('watch:css', () => {
    return gulp.watch('src/**/*.css', { ignoreInitial: true }, ['cssmin']);
});

gulp.task('jsmin', function() {
    return gulp.src(['src/main.js', 'src/core/**/*.js', 'src/**/*.js'])
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify({ mangle: false }))
    .pipe(concat('uix-kit.min.js'))
    .pipe(gulp.dest("./dist"));
});

gulp.task('cssmin', () => {
    return gulp.src(['src/**/*.css'])
    .pipe(cssmin())
    .pipe(concat('uix-kit.min.css'))
    .pipe(gulp.dest("./dist"))
});