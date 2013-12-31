module.exports = function(grunt) {
    path = require('path')
    grunt.initConfig({
        express: {
            all: {
                options: {
                    port: 9000,
                    keepalive: true,
                    bases: [path.join(__dirname,'www')],
                    livereload: true
                }
            }
        },
        open:{
            all:{
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        },
        watch: {
            all: {
                options: { livereload: true },
                files: [
                    'www/js/*.js',
                    'www/templates/*.html',
                    'www/css/*.css',
                    'www/index.html'
                ]
                //tasks: [''],
            }
        }
    });
grunt.loadNpmTasks('grunt-contrib-watch');
//grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-express');
grunt.loadNpmTasks('grunt-open');
    grunt.registerTask('server', [
        'express',
        'open',
//        'express-keepalive'
        'watch'
    ]);
};
