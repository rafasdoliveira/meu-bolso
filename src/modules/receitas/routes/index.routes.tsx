import { RouteObject } from 'react-router-dom';
import { ReceitasPage } from '../pages';
import { InvestimentosPage } from '../submodules/investimentos/pages';

const receitasRoutes: RouteObject[] = [
  {
    path: '/receitas',
    element: <ReceitasPage />,
  },
  {
    path: '/investimentos',
    element: <InvestimentosPage />,
  },
];

export { receitasRoutes };
