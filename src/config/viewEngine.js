// file viewEngine.js: là file cấu hình view engine cho ứng dụng
import express from 'express';

const configViewEngine = (app) => {
    app.use(express.static('./src/public')); // thư mục public chứa các file tĩnh như css, js, img ... (cho phép truy cập vào các file trong thư mục public)
    app.set("view engine", "ejs");
    app.set('views', "./src/views");

}

export default configViewEngine;