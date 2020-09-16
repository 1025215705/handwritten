import gulp from "gulp";
import gulpif from 'gulp-if';
import cancat from "gulp-concat";
import webpack from "webpack";
import gulpWebpack from "webpack-stream"; // 处理文件流
import named from "vinyl-named"; //处理文件名
import livereload from "gulp-livereload"; // 文件更新
import plumber from "gulp-plumber"; //文件信息流
import gulify from "gulp-uglify"; //压缩
import rename from "gulp-rename";
import {
    log,
    colors
} from "gulp-util"
import args from "./util/args"

gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js']) //打开这个文件
        //集中处理错误
        .pipe(plumber({
            errorHandler: function () {

            }
        }))
        .pipe(named()) //重命名
        .pipe(gulpWebpack({
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel'
                }]
            }
        }),null,(err,stats)=>{
            log(`Finished'${colors.cyan('scripts')}'`,stats.toString({
                chunks:false
            }))
        }).pipe(gulp.dest('server/public/js')) //输出路径
        .pipe(rename({
           basenamed: 'cp',
           extname:'.min.js'
        })) //复制
        .pipe(uglify({
            compress:{properties:false},
            output:{'quote_keys':true}
        }))//压缩
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch,livereload())) //监听文件并且更新
})