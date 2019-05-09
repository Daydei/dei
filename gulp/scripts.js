gulp = require('gulp'); // Подключаем Gulp
concat = require('gulp-concat'); // Подключаем gulp-concat (для конкатенации файлов)
uglify = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)

gulp.task('scripts', function() {
	return gulp.src([ // Берем все необходимые библиотеки
		'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
		'app/libs/slick-carousel/slick/slick.min.js',
		])
		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});

gulp.task('scripts-only', function() {
	return gulp.src([
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/gsap/src/uncompressed/TimelineLite.js',
		'node_modules/gsap/src/uncompressed/TimelineMax.js',
		'node_modules/gsap/src/uncompressed/TweenLite.js',
		'node_modules/gsap/src/uncompressed/TweenMax.js',
		])
		.pipe(concat('phone-libs.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});