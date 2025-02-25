import { LuCross } from 'react-icons/lu';
import { DashboardModule } from '../types/dashboardModulesType';

const dashboardModules = () => {
  const modules: DashboardModule[] = [
    {
      title: 'Atendimento Digital',
      description: 'Realize triagens, teleinterconsultas e mais.',
      path: '/farmacias/selecao-beneficiario',
      disabled: false,
      permission: 'A',
      moduleAction: [],
      icon: <LuCross />,
    },
  ];
  return {
    modules,
  };
};

export { dashboardModules };
