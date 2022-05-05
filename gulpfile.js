const { watch, src, series, dest, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const bundlePath = "./dist";
const del = require("del");
const gulpSass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const package = require("./package.json");

// Watch HTML Files
function html() {
  return src("./pages/**.html")
    .pipe(dest(bundlePath))
    .pipe(browserSync.stream());
}

// Compile and Minify Img
function baseCss() {
  return src("./assets/styles/*").pipe(dest(`${bundlePath}/styles`));
}

// Compile and Minify Img
function images() {
  return src("./assets/images/**").pipe(dest(`${bundlePath}/images`));
}

// Compile and Minify Img
function demoImages() {
  return src("./assets/demo/*").pipe(dest(`${bundlePath}/demo`));
}

// Compile Svg Icons
function icons() {
  return src("./assets/icons/**").pipe(dest(`${bundlePath}/icons`));
}

function styles() {
  return src("./assets/styles/*.css").pipe(dest(`${bundlePath}/styles`));
}

// Compile SCSS/SASS to CSS
function scss() {
  return src("./scss/main.scss")
    .pipe(gulpSass())
    .on("error", gulpSass.logError)
    .pipe(rename(`${package.name}.css`))
    .pipe(dest(`${bundlePath}/styles`))
    .pipe(browserSync.stream());
}

// Clean Up (deleted `dist` folder)
function clean() {
  return del([bundlePath]);
}

// Web Server / Live Reload
function server() {
  browserSync.init({
    server: {
      baseDir: bundlePath,
    },
    port: 4000,
    // serveStatic: ['./'],
  });
  watch("./pages/**/*.html", html);
  watch("./scss/**/*.scss", scss);
  watch("./assets/images/*.(jpe?g|png)", images);
  watch("./assets/icons/*.svg", icons);
  browserSync.reload();
}

exports.clean = clean;
exports.build = series(
  clean,
  html,
  baseCss,
  scss,
  styles,
  images,
  demoImages,
  icons
);

exports.start = series(
  clean,
  html,
  baseCss,
  scss,
  styles,
  images,
  demoImages,
  icons,
  server
);
