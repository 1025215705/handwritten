//将文件串起来
import gulp from 'gulp'
import gulpSequence from "gulp4-run-sequence"

gulp.task('build', gulpSequence('clean','css', 'pages', 'srcipts',['browser','serve']));
// 清空  css 拷贝  模板编译  js脚本执行 

