import { Router } from "express";
import * as PageController from  './../controllers/PageController';
import * as SearchController from './../controllers/searchController';

const router = Router();

router.get('/', PageController.home);

router.get('/dogs', PageController.dogs);

router.get('/cats', PageController.cats);

router.get('/fish', PageController.fish);

router.get('/search', SearchController.search);


export default router;