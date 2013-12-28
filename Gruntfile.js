module.exports = function(grunt) {
grunt.initConfig({
  watch: {
    all: {
      options: { livereload: true },
      files: ['www/*.*'],
      //tasks: [''],
    },
  },
});
grunt.loadNpmTasks('grunt-contrib-watch')
};
