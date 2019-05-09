gulp = require('gulp'); // Подключаем Gulp
sass = require('gulp-sass'); //Подключаем Sass пакет,
cfg = require('../package.json').config;

gulp.task('sass', function(){ // Создаем таск Sass
	return gulp.src(cfg.src.sass + '/**/*.+(scss|sass)') // Берем источник
		.pipe(sass().on('error', sass.logError)) 
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest(cfg.build.css)) // Выгружаем результата в папку app/css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});