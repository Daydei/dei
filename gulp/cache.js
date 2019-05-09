gulp = require('gulp'); // Подключаем Gulp
cache = require('gulp-cache'); // Подключаем библиотеку кеширования

gulp.task('clear', function (callback) {
	return cache.clearAll();
})