import express from 'express'; // thư viện express là thư viện giúp chúng ta tạo ra 1 server
import path from 'path';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
require('dotenv').config(); // thư viện dotenv giúp chúng ta sử dụng biến môi trường
const app = express()
const port = process.env.PORT || 3000 // muốn sử dụng biến môi trường thì phải cài đặt thư viện dotenv ( khi giá trị là undefined thì sẽ lấy giá trị 8080)

configViewEngine(app);// cấu hình view engine
initWebRoutes(app);// khởi tạo các route



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`${path.join(__dirname, 'views')}`);
})