const {src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildConstellationUI() {
  return src('scss/index.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['scss/index.scss'], buildConstellationUI)
}

exports.default = series(buildConstellationUI, watchTask)