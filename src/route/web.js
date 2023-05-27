import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/:userId', homeController.getDetailUserPage);
    router.get('/detail', homeController.getDetailUserPage);
    router.get('/about', homeController.getAboutPage);
    router.post('/update-user', homeController.updateUserData);
    router.post('/create-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);

    return app.use("/", router);
}


export default initWebRoutes;