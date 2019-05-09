gulp = require('gulp'); // Подключаем Gulp
cssnano = require('gulp-cssnano'); // Подключаем пакет для минификации CSS
rename = require('gulp-rename'); // Подключаем библиотеку для переименования файлов
autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов


gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/libs.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});