var gulp = require("gulp")
var gulpYaml = require("gulp-yaml")

var quoteFiles = __dirname +  "/quote-src/**/*.yml"
var targetDir = __dirname + "/public/quotes/"

gulp.task('build', () => {
	return gulp.src(quoteFiles)
		.pipe(gulpYaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
		.pipe(gulp.dest(targetDir))
})

gulp.task('default', ['build'])
