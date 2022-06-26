import express from 'express';
import dashboardRouter from './dashboard';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/dashboard',
    route: dashboardRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;