module.exports = function(grunt) {
grunt.initConfig({
    connect: {
        server: {
            options: {
                port: 9000,
                keepalive: true,
                base: 'www'
            }
        }
    },
  watch: {
    all: {
      options: { livereload: true },
      files: [
          'www/*.js',
          'www/*.html'
      ]
      //tasks: [''],
    },
  }
});
grunt.loadNpmTasks('grunt-contrib-watch')
grunt.loadNpmTasks('grunt-contrib-connect');
};
