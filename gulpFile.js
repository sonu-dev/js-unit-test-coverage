var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulpTasks');

gulp.task('default', function () {
  gulp.start('coverage');
});