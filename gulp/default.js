var gulp = require('gulp'); // Подключаем Gulp

gulp.task('clean', function() {
	return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('default', ['watch']);
