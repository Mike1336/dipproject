var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
var minifyCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');


gulp.task('concatcss', function(){
  return gulp.src('styles/css/*.css')
    .pipe(concatCSS('join.css'))
    .pipe(gulp.dest('styles/concatenateCSS/'))
});

gulp.task('minifycss', function(){
    return gulp.src('styles/concatenateCSS/join.css')
      .pipe(minifyCSS())

      .pipe(rename({
        dirname: "minCSS/",
        basename: "join",
        suffix: ".min",
        extname: ".css"
        }))

      .pipe(gulp.dest('styles/'))
  });

  gulp.task('prefixcss', function(){
    return gulp.src('styles/css/*.css')

      .pipe(autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
       }))

      .pipe(gulp.dest('styles/css/'))
  });