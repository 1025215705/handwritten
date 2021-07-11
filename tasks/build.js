//将文件串起来
import gulp from 'gulp'
//gulp.task('build', gulp.series('clean', 'css', 'pages', 'srcipts', gulp.parallel('browser', 'serve')));
gulp.task('build',gulp.series('css'));
// 清空  css 拷贝  模板编译  js脚本执行 