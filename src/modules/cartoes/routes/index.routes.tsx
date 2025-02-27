import { RouteObject } from 'react-router-dom';
import { CartoesPage } from '../pages';
import { CartoesCredito } from '../submodules/cartoesCredito/pages'; 

const cartoesRoutes: RouteObject[] = [
  {
    path: '/cartoes',
    element: <CartoesPage />,
  },
  {
    path: '/cartoes/cartoes-de-credito',
    element: <CartoesCredito />,
  },
];

export { cartoesRoutes };
