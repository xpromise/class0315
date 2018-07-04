//引入gulp模块
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
/*
  任务如果指定了 return  那么这个任务就是个异步的任务
      如果没有指定 return  那么这个任务就是个同步的任务
 */
//定义默认任务
/*gulp.task('jshint', function() {
  // 将你的任务的任务代码放在这
  return gulp.src('./src/js/!*.js')    //将指定目录下的文件以数据流的方式导入到gulp内存中
    .pipe(jshint({esversion: 6}))    //检查js语法错误
    .pipe(jshint.reporter('default'));  //使用默认的错误提示
});

gulp.task('babel', ['jshint'], function () {   //中间数组作用：先执行数组中的任务，在执行本身的任务
  return gulp.src('./src/js/!*.js')
    .pipe(babel({       //语法转换 es6-es5
      presets: ['es2015']
    }))
    .pipe(gulp.dest('build/js'))  //将gulp内存中的数据流输出指定目录下
})

gulp.task('concat', ['babel'], function () {
  return gulp.src(['./build/js/module1.js', './build/js/module2.js'])
    .pipe(concat('built.js'))   //合并所有js文件并命名
    .pipe(gulp.dest('./build/js'))
})

gulp.task('uglify', ['concat'], function () {
  return gulp.src('./build/js/built.js')
    .pipe(uglify())     //压缩js代码
    .pipe(rename('dist.min.js'))   //重命名js文件
    .pipe(gulp.dest('./dist/js/'))
})*/
// 检查语法错误 -- 进行语法转换 -- 合并js文件 -- 压缩js文件
gulp.task('minifyjs', function () {
  return gulp.src('./src/js/*.js')
    .pipe(jshint({esversion: 6}))    //检查js语法错误
    .pipe(jshint.reporter('default'))  //使用默认的错误提示
    .pipe(babel({       //语法转换 es6-es5
        presets: ['es2015']
    }))
    .pipe(gulp.dest('build/js'))
    .pipe(concat('built.js'))   //合并所有js文件并命名
    .pipe(gulp.dest('./build/js'))
    .pipe(uglify())     //压缩js代码
    .pipe(rename('dist.min.js'))   //重命名js文件
    .pipe(gulp.dest('./dist/js/'))
})

gulp.task('default', ['minifyjs'])//异步执行