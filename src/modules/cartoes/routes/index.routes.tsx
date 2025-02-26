import { RouteObject } from 'react-router-dom';
import { CartoesPage } from '../pages';

const cartoesRoutes: RouteObject[] = [
  {
    path: '/cartoes',
    element: <CartoesPage />,
  },
];

export { cartoesRoutes };
