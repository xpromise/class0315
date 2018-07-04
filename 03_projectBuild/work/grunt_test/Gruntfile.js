/*
  运行grunt指令，会去加载读取的配置文件
 */
module.exports = function (grunt) {
  //此模块被调用时，会注入一个实参进来，要申明形参接受
  // 1. 初始化插件配置
  grunt.initConfig({
    babel: {        //配置任务名
      options: {    //配置选项
        sourceMap: false,
        presets: ['es2015']
      },
      dist: {
        files: [{
          expand:true,     //如果设为true，就表示下面文件名的占位符（即*号）都要扩展成具体的文件名。
          cwd:'src/',      //js目录下
          src:['**/*.js'], //所有js文件
          dest:'build/'    //输出到此目录下
        }]
      }
    },
    jshint: {
      options: {
        "curly": true,
        "eqnull": true,
        "eqeqeq": true,
        // "undef": true,
        "esversion": 6,
        "globals": {
          "jQuery": true
        }
      },
      all: ['Gruntfile.js','src/js/*.js']  //检查的所有文件
    }
  });
  // 2. 加载插件任务
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // 3. 注册构建任务
  grunt.registerTask('default', ['jshint', 'babel']);  //执行顺序从左到右，同步的
};