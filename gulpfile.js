var gulp = require("gulp")
var gulpYaml = require("gulp-yaml")

var quoteFiles = __dirname +  "/quotes/**/*.yml"
var targetDir = __dirname + "/dist/"

gulp.task('build', () => {
	return gulp.src(quoteFiles)
		.pipe(gulpYaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
		.pipe(gulp.dest(targetDir))
})
