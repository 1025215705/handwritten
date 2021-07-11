import gulp from "gulp";
import del from "del";
import args  from "./util/args";
console.log("clean");
gulp.task('clean',gulp.series(()=>{
    console.log("进入clean");
    return del(['server/public','server/views'])
}))