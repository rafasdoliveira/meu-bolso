import { DashboardModule } from '../types/dashboardModulesType';
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { FaRegCreditCard } from "react-icons/fa6";

const dashboardModules = () => {
  const modules: DashboardModule[] = [
    {
      title: 'Receitas',
      description: 'Acompanhe suas receitas.',
      path: '/receitas',
      disabled: false,
      permission: 'A',
      moduleAction: [],
      icon: <GiReceiveMoney />,
    },
    {
      title: 'Despesas',
      description: 'Acompanhe suas despesas.',
      path: '/despesas',
      disabled: false,
      permission: 'A',
      moduleAction: [],
      icon: <GiPayMoney />,
    },
    {
      title: 'Cartões',
      description: 'Cadastre seus cartões e acompanha de perto.',
      path: '/cartoes',
      disabled: false,
      permission: 'A',
      moduleAction: [],
      icon: <FaRegCreditCard />,
    },
    {
      title: 'Objetivos',
      description: 'Trace metas e crie objetivos.',
      path: '/objetivos',
      disabled: false,
      permission: 'A',
      moduleAction: [],
      icon: <GoGoal />,
    },
  ];
  return {
    modules,
  };
};

export { dashboardModules };
