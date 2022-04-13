const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'))



gulp.task('server', function() {
    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/scss/*.scss", gulp.series('sass'));
    gulp.watch("./src/*.html").on("change", browserSync.reload);

});

gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

// Default
gulp.task('default', gulp.series('server'));