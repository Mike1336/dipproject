let gulp         = require('gulp');
let sass         = require('gulp-sass');
let minifyCSS    = require('gulp-clean-css');
let rename       = require("gulp-rename");
let autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () => {
  return gulp.src('src/styles/scss/*.scss')
 .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
 .pipe(gulp.dest('src/styles/css/'))
});

gulp.task('css', () => {  //Минификация CSS-файлов
    return gulp.src('src/styles/css/style.css')

      .pipe(autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
      }))

      .pipe(minifyCSS())

      .pipe(rename({ //переименование минифицированного файла (добавление ".min" в название)
        suffix: ".min",
        extname: ".css"
        }))

        .pipe(gulp.dest('src/styles/css/'))
  });