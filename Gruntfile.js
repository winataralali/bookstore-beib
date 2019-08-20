module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/variable.css': 'scss/variable.scss',
                    'css/items.css': 'scss/items.scss',
                    'css/book-detail.css': 'scss/book-detail.scss',
                    'css/cart.css': 'scss/cart.scss',
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/style.min.css': ['css/*.css']
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            build: {
                src: ['js/controller/*.js'],
                dest: 'dist/ctrl.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'uglify', 'cssmin']);

};