gulp = require('gulp'); // Подключаем Gulp
browserSync  = require('browser-sync'); // Подключаем Browser Sync

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts', 'sass'], function() {
	gulp.watch('app/sass/**/*.+(scss|sass) ', ['sass']); // Наблюдение за sass файлами в папке sass
	gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('app/**/*.php', browserSync.reload); 
	gulp.watch('app/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		proxy: "dei/app",
		notify: false // Отключаем уведомления
	});
});