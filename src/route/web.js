import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/about', homeController.getAboutPage)

    return app.use("/", router);
}


export default initWebRoutes;