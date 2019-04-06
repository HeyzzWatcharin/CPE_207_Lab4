const path = require('path');
const fs = require('fs');
const http = require('http');


const server = http.createServer((req,res)=>{
   console.log(req.url);
   var url = req.url.toString();
   var s = url.split('/');
  // console.log(s);
   if(s[1] ==='img'){
    fs.readFile(path.join(__dirname,'week3','img',s[2]),(err,content)=>{
        if(err) throw err;
        res.writeHead(200,{'content-type':'jpg/html'})
        res.end(content);
    })
   } 
   
  else  if(req.url === '/'){
        fs.readFile(path.join(__dirname,'week3','index.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'content-type':'text/html'})
            res.end(content);
        })
     }
     else if(req.url === '/Function.css'){
        fs.readFile(path.join(__dirname,'week3','Function.css'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'content-type':'text/css'})
            res.end(content);
        })
     }
     else if(req.url === '/index.html'){
        fs.readFile(path.join(__dirname,'week3','index.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'content-type':'text/html'})
            res.end(content);
        })
     }
     else if(req.url === '/Gallery.html'){
        fs.readFile(path.join(__dirname,'week3','Gallery.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'content-type':'text/html'})
            res.end(content);
        })
     }
     else if(req.url === '/about.html'){
        fs.readFile(path.join(__dirname,'week3','about.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'content-type':'text/html'})
            res.end(content);
        })
     }
     else if(req.url === '/Extrainformation.html'){
        fs.readFile(path.join(__dirname,'week3','Extrainformation.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'content-type':'text/html'})
            res.end(content);
        })
     }
     else if(req.url === '/Test.js'){
        fs.readFile(path.join(__dirname,'week3','Test.js'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'content-type':'text/js'})
            res.end(content);
        })
     }

}
)

const PORT = process.env.PORT || 5500;
server.listen(PORT,()=>console.log(('Server started... at PORT'+ PORT)));