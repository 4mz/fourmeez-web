'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            dist: ['.tmp', 'dist/*']
        },
        cssmin: {
            dist: {
                files: {
                    'dist/css/main.css %>': [
                        'css/*.css'
                    ]
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: './',
                        dest: 'dist/',
                        src: [
                            '*.png',
                            'fonts/*',
                            'css/**/*',
                            'images/*',
                            'index.html',
                            'user.html',
                            'worker.html',
                            'js/*'
                        ]
                    }
                ]
            }
        },
        'gh-pages': {
            options: {
                base: 'dist'
            },
            src: ['**']
        }
    });

    grunt.registerTask('package', [
        'clean:dist',
        'copy:dist'
    ]);

    grunt.registerTask('default', ['package']);

    grunt.registerTask('deploy', [
        'package',
        'gh-pages'
    ]);
};