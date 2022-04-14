const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'))



gulp.task('server', function() {
    browserSync.init({
        server: ""
    });

    gulp.watch("assets/scss/**/*.scss", gulp.series('sass'));
    gulp.watch("**/*.html").on("change", browserSync.reload);

});

gulp.task('sass', function() {
    return gulp.src("assets/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

// Default
gulp.task('default', gulp.series('server'));