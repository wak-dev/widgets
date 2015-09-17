var gulp = require('gulp');
var sass = require('gulp-sass');
var uglyfly = require('gulp-uglyfly');
var plumber = require('gulp-plumber');

gulp.task('sass', function () {

    return gulp.src('res/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('res/css'))

});

//watching scss
gulp.task('watch', function () {

    gulp.watch('res/**/*.scss', ['sass']);

});


gulp.task('compress', function () {
    gulp.src('res/js/*.js')
        .pipe(uglyfly())
        .pipe(gulp.dest('res/dist'))
});

gulp.task('default', ['sass', 'compress', 'watch']);
