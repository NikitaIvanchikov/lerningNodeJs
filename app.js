const http = require('http');
const url = require('url');
const { parse } = require('querystring')

http.createServer((request, response) => {
    if (request.method == 'GET') {
        /// GET -> получаем и обрабативаем
        console.log('server works');
        console.log(request.method);
        let urlRequest = url.parse(request.url, true);
        // console.log(urlRequest);
        console.log(urlRequest.query.test);
        if (urlRequest.query.test % 2 == 0) {
            response.end('even');
        }else{response.end('odd');}
    }else {
        // POST
        let  body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(body);
            let params = parse(body);
            console.log(params);
            console.log(params.rey);
            response.end('ok');
        });
    }
    
}).listen(3000);

