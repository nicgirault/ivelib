gulp = require 'gulp'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
gutil = require 'gulp-util'
path = require 'path'
mocha = require 'gulp-mocha'
jade = require 'gulp-jade'
flatten = require 'gulp-flatten'
del = require 'del'
runSequence = require 'run-sequence'

gulp.task 'clean:build', ->
  del ['build/**/*']

gulp.task 'clean:www', ->
  del ['www/**/*.js', 'www/**/*.html']

gulp.task 'concat', ['clean:build'], ->
  gulp.src [
    'src/app.coffee'
  ]
  .pipe concat 'app.coffee'
  .pipe gulp.dest 'build'

gulp.task 'coffee', ['concat'], ->
  gulp.src 'build/app.coffee'
  .pipe coffee bare: true
  .pipe gulp.dest 'www'

gulp.task 'jade', ->
  gulp.src 'src/**/*.jade'
  .pipe jade pretty: true
  .pipe gulp.dest 'www'

gulp.task 'vendor', ->
  gulp.src [
    'bower_components/angular/angular.js'
  ]
  .pipe flatten()
  .pipe gulp.dest 'www/lib'

gulp.task 'build', ->
  runSequence('clean:www', ['coffee', 'jade', 'vendor'])

gulp.task 'watch', ['build'], ->
  gulp.watch 'src/**/*.coffee', ['coffee']
  gulp.watch 'src/**/*.jade', ['jade']

gulp.task 'test', ['compile'], ->
  gulp.src 'test/**/*.coffee', read: false
  .pipe mocha reporter: 'spec', compilers: 'coffee:coffee-script'
  .on 'error', gutil.log

gulp.task 'tdd', ['test'], ->
  gulp.watch ['src/**/*.coffee', 'test/**/*.coffee'], ['test']