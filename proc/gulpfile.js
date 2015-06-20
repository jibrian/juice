/**
* Gulpfile
*/
var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');

var browserifyTargetDir = './public/js/';
var browserifySourceFile = 'main.js';
var browserifyOutputFile = 'bundle.js';

gulp.task('default', ['browserify']);

gulp.task('browserify', function() {
    var production = gutil.env.type === 'production',

    	bundler = browserify({

	        // Required watchify args.
	        cache: {},
	        packageCache: {},
	        fullPaths: true,

	        // Browserify options.
	        entries: [browserifyTargetDir + browserifySourceFile],
	        extensions: ['.jst'],
	        debug: !production
	    }),

    	bundle = function() {
	        return bundler
	            .bundle()
	            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
                .pipe(source(browserifyOutputFile))
                .pipe(buffer())

                // Optional - remove if you dont want sourcemaps.
                // Loads map from browserify file.
                .pipe(sourcemaps.init({loadMaps: true}))
                    // Add transformation tasks to the pipeline here.

                    .pipe(uglify())
                    .pipe(size())

                // Writes .map file.
                .pipe(sourcemaps.write('./config'))
	            .pipe(gulp.dest(browserifyTargetDir));
	    };

    bundler = watchify(bundler);

    // On any dependency update, run the bundler.
    bundler.on('update', bundle);

    // Output build logs to terminal.
    bundler.on('log', gutil.log);
    // }

    return bundle();
});