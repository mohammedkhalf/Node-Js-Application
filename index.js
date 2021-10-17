const fs = require('fs');

// const folderPath = "C:\\Users\\TW\\Desktop\\Meetup";

// fs.readdir(folderPath , (err , files)=> {
// 	// console.log("files : " + files);
// 	files.forEach((filename, index) => {
// 		console.log("filename : " + filename);
// 	})
// })

const filePath = "C:\\Users\\TW\\Desktop\\Meetup\\package.json";
var content = fs.readFileSync(filePath);
console.log("content is : " + content);
