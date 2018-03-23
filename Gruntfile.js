/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dependency : ["src/angular-visible.js"],
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options : { jshintrc: true }
    },
    concat : {
      concat : {
        src : ["src/angular-visible.js"],
        dest : "dist/<%=pkg.name%>.js",
        level : "nocomment"
      },
      min : {
        src : ["src/angular-visible.js"],
        dest : "dist/<%=pkg.name%>.min.js",
        level : "min"
      }
    }
    // watch: {
    //   files: ['<%= jshint.files %>'],
    //   tasks: ['jshint']
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['jshint', 'concat']);
};
