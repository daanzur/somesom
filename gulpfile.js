var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify-es').default;
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var gutil = require("gulp-util");


function errorHandler (error) {
 // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}

// loop through all the SASS files to build
 // builds 2 times, first standard files, then minified version
gulp.task('css', function(){
  return gulp.src('assets/sass/*.scss')
      .pipe(sass()).on('error', errorHandler)
      .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
      .pipe(gulp.dest('./css'))
      .pipe(minifyCSS()).on('error', errorHandler)
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest('./css'))
  ;
});

// destination ./ puts into ./js directory.  
// it writes the file 3 times. normal, minified, minified with sourcemap
gulp.task('js', function(){
  
  return gulp.src('assets/**/*.js')
    .pipe(gulp.dest('./'))
    .pipe(uglify().on('error',errorHandler ))
 //     .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./'))  
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(rename({ extname: '.sourcemap.js' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'))
    ;
});

gulp.task('default', [ 'css', 'js' ]);

gulp.task('watch', function(){
  gulp.watch('assets/**/*.scss', ['css']);
  gulp.watch('assets/**/*.js', ['js']);
});

