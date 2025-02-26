import { SidebarButton } from '@shared/types/sidebarButton';
import { SquareActivity } from 'lucide-react';
import { GiPayMoney } from 'react-icons/gi';

const SideBarButtonsDespesas: SidebarButton[] = [
  {
    label: 'Despesas',
    path: '/despesas',
    disabled: false,
    icon: <GiPayMoney />,
  },
  {
    label: 'Monitor de Saúde',
    path: '/atendimento-presencial/monitor-saude',
    disabled: true,
    icon: <SquareActivity />,
  },
];

export { SideBarButtonsDespesas };
