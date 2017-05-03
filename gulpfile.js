var gulp = require('gulp');

    gulp.task('default', function() {

    console.log('Hello!');

});

const imagemin = require('gulp-imagemin');
 
gulp.task('image', () =>
    gulp.src('img/*')
    	.pipe(imagemin([
		    imagemin.gifsicle({interlaced: true}),
		    imagemin.jpegtran({progressive: true}),
		    imagemin.optipng({optimizationLevel: 300}),
		    imagemin.svgo({plugins: [{removeViewBox: true}]})
		]))
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);