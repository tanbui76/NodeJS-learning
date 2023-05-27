import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/:userId', homeController.getDetailUserPage);
    router.get('/about', homeController.getAboutPage);
    router.post('/update-user', homeController.updateUserData);

    return app.use("/", router);
}


export default initWebRoutes;