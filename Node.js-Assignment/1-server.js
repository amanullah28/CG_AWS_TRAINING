const PORT = 3000;
const http = require('http');
const server = http.createServer((req, res)=>{
    console.log(req);
});

server.listen(PORT, function(){
    console.log(`Server listning on port ${PORT}`);
});