gulp = require('gulp'); // Подключаем Gulp
del = require('del'); // Подключаем библиотеку для удаления файлов и папок

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

	var buildCss = gulp.src([ // Переносим библиотеки в продакшен
		'app/css/*.css'
		])
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/font/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/js/*') // Переносим скрипты в продакшен
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
	.pipe(gulp.dest('dist'));

	var buildHtml = gulp.src('app/*.php')
	.pipe(gulp.dest('dist'));

});