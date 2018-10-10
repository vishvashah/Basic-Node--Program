var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');

  res.write('Name');
  res.write('<input type="text" name="Name"><br>');
  res.write('City');
  res.write('<input type="text" name="City"><br>');
  res.write('Branch');
  res.write('<input type="text" name="Branch"><br>');
  
  res.write('<input type="file" name="filetoupload"><br>');
  
  res.write('<input type="submit" >');
  res.write('</form>');
  return res.end();
}).listen(8080);
