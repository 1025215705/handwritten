import gulp from "gulp";
import gulpif from 'gulp-if';
import livereload from "gulp-livereload"; // 文件更新
import args  from "./util/args";

gulp.task('pages',()=>{
    return gulp.src('app/**/*.ejs')
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch,livereload()))
})