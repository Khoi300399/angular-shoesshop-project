const { src, task, series, dest, watch } = require("gulp");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");

// Biên dịch Pug thành HTML
task("compilePug", function () {
  return src(["./src/**/**/**/*.pug"])
    .pipe(
      plumber(function (err) {
        console.log("Pug Task Error");
        console.log(err);
        this.emit("end");
      })
    )
    .pipe(pug({ pretty: true }))
    .pipe(dest((file) => file.base.replace(".pug", "")));
});
function watching() {
  watch("./src/**/*.pug", series("compilePug"));
}

// Tác vụ mặc định
task("default", series("compilePug", watching));
