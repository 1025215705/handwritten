 // 处理命令行参数
 import yargs from 'yargs';
 //区分线上和开发环境
 const  args  = yargs
 .option('production',{ //输入命令的参数来判断环境
     boolean: true,
     default: false,
 })
 //监听文件 
 .option('watch',{
     boolean:true,
     default:false,
 })
 //日志
 .option('verbose',{
    boolean:true,
    default:false,
 })
  //日志
  .option('sourcemaps',{
    
 })
 .option('port',{
     string:true,
     default:8080,
     describe:"..."
 })
 
 .argv