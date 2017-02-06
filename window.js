var http = require('http');
var url = require('url');
var router = require('./router');

http.createServer(function(request,response){
  // response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  if(request.url!=="/favicon.ico"){
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);
    pathname = pathname.replace(/\//,'');
    router[pathname](request,response);
    console.log(pathname);
    // response.write('hello world');
    // response.end();
  }
}).listen(8000);
console.log("server runnning at http:8888");