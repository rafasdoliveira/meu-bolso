import { SidebarButton } from '@shared/types/sidebarButton';
import { GiPayMoney } from 'react-icons/gi';
import { TbPigMoney } from 'react-icons/tb';

const SideBarButtonsReceitas: SidebarButton[] = [
  {
    label: 'Receitas',
    // path: '/receitas',
    disabled: false,
    icon: <GiPayMoney />,
    items: [
      {
        icon: <GiPayMoney />,
        title: 'Minhas Receitas',
        path: '/receitas',
      },
      {
        icon: <GiPayMoney />,
        title: 'Cadastro de Receitas',
        path: '/receitas-cadastro',
      },
    ],
  },
  {
    label: 'Investimentos',
    // path: '/investimentos',
    disabled: false,
    icon: <TbPigMoney />,
    items: [
      {
        icon: <GiPayMoney />,
        title: 'Meus Investimentos',
        path: '/investimentos/',
      },
      {
        icon: <GiPayMoney />,
        title: 'Renda Fixa',
        path: '/investimentos/renda-fixa',
      },
      {
        icon: <GiPayMoney />,
        title: 'Ações',
        path: '/receitas-listagem',
      },
      {
        icon: <GiPayMoney />,
        title: 'Fundos Imobiliários',
        path: '/receitas-listagem',
      },
    ],
  },
];

export { SideBarButtonsReceitas };
