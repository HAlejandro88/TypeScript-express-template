import http from 'http'

export const server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'})
    res.end(JSON.stringify({data: 'It Works!'}))
})

server.listen(3000, () => console.log('listening on port'))