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
                            'favicon.png',
                            'fonts/*',
                            'css/ie/*'
                        ]
                    }
                ]
            }
        },
        // TODO CSS (minify skell and style, minify others)
        // TODO JS (minify and concat)
        // TODO COPY + REPLACE (index, worker and user)
        // TODO MINIFY HTML
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