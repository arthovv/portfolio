var gulp = require('gulp');
const imagemin = require('gulp-imagemin');

var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = 'Icons';

gulp.task('iconfont', function(){
  gulp.src(['pre-assets/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      //path: 'app/assets/css/templates/_icons.scss',
      //targetPath: '../../css/_icons.scss',
      //fontPath: '../../fonts/icons/'
    }))
    .pipe(iconfont({
      fontName: fontName
     }))
    .pipe(gulp.dest('assets/fonts/icons/'));
});


gulp.task('default', function() {

    console.log('Hello!');

});


gulp.task('image', () =>
    gulp.src('pre-assets/images/*')
    	.pipe(imagemin([
		    imagemin.gifsicle({interlaced: true}),
		    imagemin.jpegtran({progressive: true}),
		    imagemin.optipng({optimizationLevel: 300}),
		    imagemin.svgo({plugins: [{removeViewBox: true}]})
		]))
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img'))
);