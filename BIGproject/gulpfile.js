var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var minfycss = require("gulp-minify-css");
gulp.task("es",function(){
    gulp.src("js/banner.js").pipe(babel({presets: ['es2015']})).pipe(gulp.dest("D:/cao"));
});

gulp.task("_uglify",function(){
    console.log("这是压缩");
    gulp.src("js/banner.js",{allowEmpty:true}).pipe(uglify()).pipe(gulp.dest("D:/cao"));
});
gulp.task("sass",function(){
	gulp.src("css/first.css").pipe(minfycss()).pipe(gulp.dest("D:/cao"));
	
})