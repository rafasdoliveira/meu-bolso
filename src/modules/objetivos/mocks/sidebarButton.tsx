import { SidebarButton } from '@shared/types/sidebarButton';
import { GiPayMoney } from 'react-icons/gi';

const SideBarButtonsDespesas: SidebarButton[] = [
  {
    label: 'Objetivos',
    path: '/objetivos',
    disabled: false,
    icon: <GiPayMoney />,
    items: [
      {
        icon: <GiPayMoney />,
        title: 'Meus Objetivos',
        path: '/objetivos'
      }
    ]
  },
];

export { SideBarButtonsDespesas };
