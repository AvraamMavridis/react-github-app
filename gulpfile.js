var gulp        = require("gulp");
//var concat      = require("gulp-concat");
var connect     = require("gulp-connect");
var sass        = require('gulp-ruby-sass');
var sourcemaps  = require('gulp-sourcemaps');
var mergeStream = require('merge-stream');
var runSequence = require('run-sequence');

gulp.task("connect", function(){
  connect.server({
    root: 'build/',
    port: 8000
  })
});

gulp.task('sass', function(){
  options = {
    compass: true,
    force: true,
    sourcemap: true
  }

  sass('app/main.sass', options)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/'))
});


gulp.task('copy', function(){

  js = gulp.src('app/js/**/*', { base: 'app/' })
           .pipe(gulp.dest('build/'))

  html = gulp.src('app/**/*.html', { base: 'app/' })
             .pipe(gulp.dest('build/'))

  mergeStream(js,html)
});


gulp.task('watch', function(){
  gulp.watch([
    'app/**/*.js',
    'app/**/*.html',
    'app/**/*.sass'
  ], function(){
    runSequence('copy', 'sass')
  });
})
