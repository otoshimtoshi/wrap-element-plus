"use strict";

const { series, src, dest } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");

function compile() {
  return src("./src/theme-chalk/src/*.scss")
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cssmin())
    .pipe(dest("./src/theme-chalk/lib"));
}

function copyfont() {
  return src("./src/theme-chalk/src/fonts/**")
    .pipe(cssmin())
    .pipe(dest("./src/theme-chalk/lib/fonts"));
}

exports.build = series(compile, copyfont);
