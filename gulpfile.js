'use strict'

const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile() {
  return src('./src/theme-chalk/*.scss')
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(cssmin())
    .pipe(dest('./lib/theme-chalk'))
}

function copyfont() {
  return src('./src/theme-chalk/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/theme-chalk/fonts'))
}

exports.build = series(compile, copyfont)
