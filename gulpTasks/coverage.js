 var gulp = require('gulp');
 var mocha = require('gulp-mocha');
 var istanbul = require('gulp-istanbul');

/*********** mocha unit tests coverage *************/

gulp.task('coverage', function (cb) {
  gulp.src('app/src/**/*.js')
    .pipe(istanbul({ includeUntested: true }))
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      gulp.src('app/test/**/*.spec.js')
        .pipe(mocha({ reporter: 'spec' }))
        .pipe(istanbul.writeReports()) // Creating the reports after tests runned
        .on('end', cb);
    });
});
