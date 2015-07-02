module.exports = function ( grunt ) {
	"use strict";

	grunt.initConfig( {
		mochaTest: {
			test: {
				options: {
					reporter: "spec",
					quiet: false,
					clearRequireCache: true
				},
				src: [ "test/**/*.js" ]
			}
		},
		jshint: {
			files: [ "Gruntfile.js", "lib/**/*.js", "test/**/*.js" ],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		watch: {
			js: {
				files: [ "<%= jshint.files %>" ],
				tasks: [ "jshint" ]
			},
			test: {
				options: {
					spawn: false,
				},
				files: [ "test/**/*" ],
				tasks: [ "mochaTest" ]
			}
		}
	} );

	grunt.loadNpmTasks( "grunt-contrib-jshint" );
	grunt.loadNpmTasks( "grunt-mocha-test" );

	grunt.registerTask( "test", [ "jshint", "mochaTest" ] );
	grunt.registerTask( "build", [ "test" ] );
	grunt.registerTask( "default", [ "test" ] );
	grunt.registerTask( "deploy", [ "test" ] );
};