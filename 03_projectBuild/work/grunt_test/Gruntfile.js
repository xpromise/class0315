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
    },
    concat: {
      options: {
        separator: ';',     //连接符
      },
      dist: {
        src: ['build/js/module1.js', 'build/js/module2.js'], //指定要合并哪些文件
        dest: 'build/js/built.js',    //合并的文件输出哪去
      },
    },
    pkg: grunt.file.readJSON('package.json'),   //读取package.json文件
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'    //向压缩文件最上面添加一些注释信息
      },
      my_target: {
        files: {
          'dist/js/dist.min.js': ['build/js/built.js']
        }
      }
    },
    less: {    //将less文件编译成css文件，将编译后的文件合并成一个文件
      production: {
        options: {
          paths: ['build/css'],
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions", "> 5%", "Firefox > 20", "ie 6-8"]})
          ]
        },
        files: {
          'build/css/built.css': 'src/less/*.less'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,   //禁止合并css属性
        roundingPrecision: false     //不去四舍五入
      },
      target: {
        files: {
          'dist/css/dist.min.css': ['build/css/built.css']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,       //移除注释
          collapseWhitespace: true    //移除多余的空格
        },
        files: {
          'dist/index.html': 'src/index.html'
        }
      }
    },
    watch: {
      scripts: {    //监视js文件
        files: ['src/js/*.js'],  //监视的文件
        tasks: ['jshint', 'babel', 'concat', 'uglify'],       //一旦监视的文件发生改变，就会自动执行任务列表中的任务
        options: {
          spawn: false  //加快任务速度
        },
      },
      css: {
        files: 'src/less/*.less',
        tasks: ['less', 'cssmin'],
        options: {
          spawn: false  //加快任务速度
        },
      },
      html: {
        files: 'src/index.html',
        tasks: ['htmlmin'],
        options: {
          spawn: false  //加快任务速度
        },
      },
    },
  });
  // 2. 加载插件任务
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // 3. 注册构建任务
  grunt.registerTask('default', ['jshint', 'babel', 'concat', 'uglify', 'less', 'cssmin', 'htmlmin']);  //执行顺序从左到右，同步的
  grunt.registerTask('myWatch', ['default', 'watch']);
  
};