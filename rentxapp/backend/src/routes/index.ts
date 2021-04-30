import { Router } from 'express';
import multer from 'multer';

import UsersController from '../controllers/UsersController';
import SessionController from '../controllers/SessionControlller';
import CarsController from '../controllers/CarsController';
import DetailsController from '../controllers/DetailsController';
import RentalsController from '../controllers/RentalsController';
import FiltersController from '../controllers/FiltersController';

import multerConfig from '../config/multer';
import auth from '../middlewares/auth';
import roles from '../middlewares/roles';

const routes = Router();
const upload = multer(multerConfig.multer);

const usersController = new UsersController();
const sessionController = new SessionController();
const carsController = new CarsController();
const detailsController = new DetailsController();
const rentalsController = new RentalsController();
const filtersController = new FiltersController();

routes.post('/users', upload.single('file'), usersController.createUser)
routes.put('/users/:id/image', upload.single('file'), usersController.updateImage)

routes.post('/auth', sessionController.login)

routes.use(auth)

routes.put('/users/:id', usersController.updateUser)
routes.get('/users', usersController.listAll)
routes.get('/users/:id', usersController.listById)

// Rentals
routes.post('/rentals', rentalsController.create)
routes.get('/rentals/:id', rentalsController.listByClientId)
routes.get('/rentals', rentalsController.listAll)

// Filters
routes.get('/availability', filtersController.availabilityFilter)
routes.get('/carname', filtersController.nameFilter)
routes.get('/price', filtersController.priceFilter)
routes.get('/fuel', filtersController.fuelFilter)
routes.get('/transmission', filtersController.transmissionFilter)

routes.use(roles);

// Cars
routes.post('/cars', carsController.create)
routes.put('/cars/:id', carsController.update)
routes.put('/cars/:id/image', upload.single('file'), carsController.updateCarImage)
routes.get('/cars', carsController.listAll)
routes.get('/cars/:id', carsController.listById)
routes.delete('/cars/:id', carsController.delete)

// Details
routes.post('/details', detailsController.create)
routes.get('/details/:id', detailsController.listByCarId)

export default routes;
