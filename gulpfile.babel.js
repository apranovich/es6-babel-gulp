"use strict";

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import gutil from 'gulp-util';
import server from 'gulp-webserver';

const port = 8888;

gulp.task('build', () => {
  browserify('src/app.js')
    .transform("babelify")
    .bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
  gulp.watch(['src/**/*.js'], ['build']);
});

gulp.task('server', () => {
  gulp.src('./')
    .pipe(server({
      open: true,
      port: port
    }));
});

gulp.task('default', ['server', 'build', 'watch']);

