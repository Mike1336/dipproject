var gulp         = require('gulp');
var sass         = require('gulp-sass');
var concatCSS    = require('gulp-concat-css');
var minifyCSS    = require('gulp-clean-css');
var rename       = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');

gulp.task('tocss', function(){
       gulp.src('src/styles/scss/*.scss')
      .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError)) //компиляция из scss в css
      .pipe(gulp.dest('src/styles/css/')) //сохранение скомпилированного файла

      .pipe(minifyCSS()) //минификация css файла
      .pipe(rename({ //переименование минифицированного файла (добавление ".min" в название)
        suffix: ".min",
        extname: ".css"
        }))
      .pipe(gulp.dest('src/styles/css/')) //сохранение скомпилированного минифицированного файла
      
      .pipe(autoprefixer({ // Добавление префиксов для кроссбраузерности
        browsers: ['last 5 versions'],
        cascade: false
       }))
       
  });

gulp.task('concatcss', function(){ //Объединение (конкатинация) нескольких CSS-файлов в один
  return gulp.src('src/styles/css/*.css')
    .pipe(concatCSS('join.css'))
    .pipe(gulp.dest('src/styles/concatenateCSS/'))
});