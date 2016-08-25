const gulp = require("gulp");
const babel = require("gulp-babel");
const nodemon = require("gulp-nodemon");

// default run tasks
gulp.task("default", ["watch", "server"])

// start watcher
gulp.task("watch", () => {
    gulp.watch("./src/**/*.js", ["builder"])
});

// build src use babel
gulp.task("builder", () => {
    return gulp.src("./src/**/*.js")
                .pipe(babel({
                    "presets": ["es2015-node5", "stage-3"]
                }))
                .pipe(gulp.dest("./build"));
});

// start nodemon server
gulp.task("server", () => {
    return nodemon({
        script:　"./build/app.js",
        ignore: [
            "src/**",
            "public/**",
            "test/**"
        ],
        env: {
            "NODE_ENV": "development"
        }
    });
});
