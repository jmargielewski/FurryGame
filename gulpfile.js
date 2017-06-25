var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'
      }))
      // określamy w jaki sposób ma być budowana sourcemapa
    .pipe(sourcemaps.write())
    //powyżej dodanie sourcemapy oraz stylu tworzenia pliku css
    .pipe(gulp.dest('css'))
});
// scalenie sass'a z css

gulp.task('default', function(){
  gulp.watch('./scss/**/*.scss',['sass']);

});
//  obserowowanie plików o konkretniej nazwie i konkretnej ścieżce
