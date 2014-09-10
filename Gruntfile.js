'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            dist: ['.tmp', 'dist/*']
        },
        copy: {
            index: {
                options: {
                    process: function (content) {
                        content = content.replace(/<!--JS0-->[\s\S]*<!--JS0-->/, '<script src="app.min.js?v=' + new Date().getTime() + '"></script>');
                        return content;
                    }
                },
                src: 'index.html',
                dest: 'dist/index.html'
            },
            worker: {
                options: {
                    process: function (content) {
                        content = content.replace(/<!--JS0-->[\s\S]*<!--JS0-->/, '<script src="app.min.js?v=' + new Date().getTime() + '"></script>');
                        content = content.replace(/<!--JS1-->[\s\S]*<!--JS1-->/, '<script src="worker.min.js?v=' + new Date().getTime() + '"></script>');
                        return content;
                    }
                },
                src: 'worker.html',
                dest: 'dist/worker.html'
            },
            user: {
                options: {
                    process: function (content) {
                        content = content.replace(/<!--JS0-->[\s\S]*<!--JS0-->/, '<script src="app.min.js?v=' + new Date().getTime() + '"></script>');
                        content = content.replace(/<!--JS1-->[\s\S]*<!--JS1-->/, '<script src="user.min.js?v=' + new Date().getTime() + '"></script>');
                        return content;
                    }
                },
                src: 'user.html',
                dest: 'dist/user.html'
            },
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
                            'css/**'
                        ]
                    }
                ]
            }
        },
        uglify: {
            dist: {
                files: {
                    'build/app.min.js': ['js/init.js'],
                    'dist/user.min.js': ['js/user.js'],
                    'dist/worker.min.js': ['js/worker.js']
                }
            }
        },
        imagemin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'images/',
                        src: ['**/*.{png,jpg}'],
                        dest: 'dist/images/'
                    }
                ]
            }
        },
        concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            dist: {
                src: ['js/jquery.min.js', 'js/jquery.dropotron.min.js', 'js/skel.min.js', 'js/skel-layers.min.js', 'build/app.min.js'],
                dest: 'dist/app.min.js'
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
        'uglify:dist',
        'concat:dist',
        'imagemin:dist',
        'copy:index',
        'copy:worker',
        'copy:user',
        'copy:dist'
    ]);

    grunt.registerTask('default', ['package']);

    grunt.registerTask('deploy', [
        'package',
        'gh-pages'
    ]);
};