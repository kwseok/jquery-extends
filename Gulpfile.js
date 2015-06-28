const gulp = require('gulp');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config');

gulp.task('clean', function() {
    gulp.src('./dist', {read: false}).pipe(clean({force: true}));
});

gulp.task('default', ['clean'], function() {
    gulp.src(webpackConfig.entry)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist'))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(rename(webpackConfig.output.minifyFilename))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'))
    ;
});

gulp.task('watch', function() {
    gulp.watch('./src/**', ['default']);
});
