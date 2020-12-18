//引用'http'模組
const http = require('http');
console.log("http done")
//設定server網址，因為在本機端測試，所以輸入127.0.0.1
//const hostname = '127.0.0.1'  //上傳至伺服器需拿掉

//port 號會由 Heroku 給予，因此不再自行指定
const port = process.env.PORT || 3000;
console.log("port done")

//新增一個server並指定他的頁面資訊，內容為'Hello World!'
const server = http.createServer((req, res) => {
	console.log("createServer start")
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
    console.log("createServer done")
});
console.log("createServer done 2")
//監聽得到的 port 號開啟
server.listen(port, () => console.log(`Listening on ${port}`));
console.log("end")