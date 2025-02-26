import { despesasRoutes } from '../modules/despesas/routes/index.routes';
import { createBrowserRouter } from 'react-router-dom';
import { dashboardRoutes } from '../modules/dashboard/routes/index.routes';
import { loginRoutes } from '../modules/login/routes/index.routes';
import { receitasRoutes } from '../modules/receitas/routes/index.routes';
import { cartoesRoutes } from '../modules/cartoes/routes/index.routes';

const router = createBrowserRouter([
  ...loginRoutes,
  ...cartoesRoutes,
  ...despesasRoutes,
  ...receitasRoutes,
  ...dashboardRoutes,
]);

export { router };
