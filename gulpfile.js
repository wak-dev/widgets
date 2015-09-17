var gulp = require('gulp');
var sass = require('gulp-sass');
var uglyfly = require('gulp-uglyfly');
var plumber = require('gulp-plumber');



gulp.task('sass', function () {

    return gulp.src('res/**/*.scss')
         .pipe(plumber())
         .pipe(sass())
         .pipe(gulp.dest('res/css'))

});

gulp.task('compress', function () {
    gulp.src('res/**/*.js')
    .pipe(plumber())
        .pipe(uglyfly())
        .pipe(gulp.dest('res/dist'))
});


//watching scss
gulp.task('watch', function () {

    gulp.watch('res/**/*.scss', ['sass']);
    gulp.watch('res/**/*.js', ['compress']);

});






gulp.task('default', ['watch']);
