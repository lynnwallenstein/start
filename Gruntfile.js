module.exports = function(grunt) {
  grunt.initConfig({

    watch: {
      files: ['sass/*.scss', 'index.html'],
      tasks: 'sass:dev'
    },

    sass: {
      dev: {
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    }

  });

  grunt.registerTask('default', 'sass:dev');

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
}
