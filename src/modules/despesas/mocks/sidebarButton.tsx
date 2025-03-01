import { SidebarButton } from '@shared/types/sidebarButton';
import { GiPayMoney } from 'react-icons/gi';

const SideBarButtonsDespesas: SidebarButton[] = [
  {
    label: 'Despesas',
    path: '/despesas',
    disabled: false,
    icon: <GiPayMoney />,
    items: [
      {
        icon: <GiPayMoney />,
        title: 'despesas',
        path: '/despesas'
      }
    ]
  },
];

export { SideBarButtonsDespesas };
