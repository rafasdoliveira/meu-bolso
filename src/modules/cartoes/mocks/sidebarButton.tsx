import { SidebarButton } from '@shared/types/sidebarButton';
import { FaRegCreditCard } from 'react-icons/fa6';

const SideBarButtonsCartoes: SidebarButton[] = [
  {
    label: 'Cartões',
    path: '/cartoes',
    disabled: false,
    icon: <FaRegCreditCard />,
    items: [
      {
        icon: <></>,
        title: 'Cartões de Crédito',
        path: '/cartoes/cartoes-de-credito',
      },
      {
        icon: <></>,
        title: 'Cartões de Débito',
        path: '/cartoes/cartoes-de-debito',
      },
      {
        icon: <></>,
        title: 'Vales',
        path: '/cartoes/vale-alimentacao',
      },
    ],
  },
];

export { SideBarButtonsCartoes };
