var fs=require('fs');
fs.readFile('read.html',function(err,data){
	console.log(data);
    //write.end();
});
