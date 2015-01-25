module.exports = function(grunt) {
	'use strict';

	// Load all tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		// config
		config: {
			paths: {
				app:   		'app/',
	            sass:   	'app/assets/sass/',
	            css:    	'app/assets/css/',
	            js:     	'app/assets/js/',
	            img:   		'app/assets/img/'
			}
        },

		// compile scss
		compass: {
			dev: { 
				options: { 
					config: 'config.rb',
					sassDir: '<%= config.paths.sass %>',
					cssDir: '<%= config.paths.css %>',
					outputStyle: 'nested'
				}
			},
			dist: { 
				options: { 
					force: true,
					config: 'config.rb',
					sassDir: '<%= config.paths.sass %>',
					cssDir: '<%= config.paths.css %>',
					outputStyle: 'compressed'
				}
			}
		},

		// keep multiple browsers & devices in sync when building websites.
		browserSync: {
		    dev: {
		        bsFiles: {
		            src : [
		            	'<%= config.paths.css %>**/*.css',
		            	'<%= config.paths.js %>**/*.js',
		            	'<%= config.paths.app %>**/*.html'
		            ]
		        },
		        options: {
                    watchTask: true,
					server: {
						baseDir: "app/"
					}
                }
		    }
		},

		// watcher project
		watch: {
			sass: {
				files: ['<%= config.paths.sass %>**/*'],
				tasks: ['compass:dev']
			}
		}
	});


	// task for development(run compass for assure css generation)
	grunt.registerTask('dev', ['compass:dist', 'browserSync', 'watch']);
};
