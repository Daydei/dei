gulp = require('gulp'); // Подключаем Gulp
imagemin = require('gulp-imagemin'); // Подключаем библиотеку для работы с изображениями

gulp.task('imgs', function() {
    return gulp.src("src/images/*.+(jpg|jpeg|png|gif)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/images"))
});