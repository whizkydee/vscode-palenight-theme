import gulp from 'gulp';
import gulpStats from 'gulp-stats';
import tasks from './.gulp';

// trigger gulp-stats
gulpStats(gulp);

// initialize default task
gulp.task('default', tasks);
