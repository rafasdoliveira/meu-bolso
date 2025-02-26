import { RouteObject } from 'react-router-dom';
import { DespesasPage } from '../pages';

const despesasRoutes: RouteObject[] = [
  {
    path: '/despesas',
    element: <DespesasPage />,
  },
];

export { despesasRoutes };
