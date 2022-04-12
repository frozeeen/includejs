const fs = require("fs");
const path = require("path");

const base_file = "src/base.js"
const build_file = "build/build.js";

console.log(`IncludeJS: ${ build_file } started`)
try{
	const base_data = fs.readFileSync(base_file, "utf-8");
	build_data = base_data.replaceAll(/@include\((\"|').+(.js)?(\"|')\);?/g, function(matched){
		var inclusion_file = matched.match(/(\".+\"|'.+')/)[0];
			inclusion_file = inclusion_file.substring(1, inclusion_file.length - 1);

		var inclusion_data = fs.readFileSync(path.join(path.dirname(base_file), inclusion_file), "utf-8");

		return inclusion_data;
	});

	fs.writeFile(build_file, build_data, function(err){
		if (err) throw err;
		console.log(`IncludeJS: ${ build_file } finished`)
	}); 
}catch(err){
	console.log(err);
}