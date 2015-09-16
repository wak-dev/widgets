var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){

return gulp.src('res/sass/main.scss')
.pipe(sass())
.pipe(gulp.dest('res/css'))

});
