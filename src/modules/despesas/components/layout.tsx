import { Layout } from '../../../shared/components/layout/index';
import { Breadcrumb } from '@shared/types/breadcrumb';
import { ScrollArea } from '../../../shared/components/ui/scroll-area';
import { SideBarButtonsDespesas } from '../mocks/sidebarButton';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

function DespesasLayout({ children }: Props) {
  const location = useLocation();

  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([
    { label: 'Despesas', path: '/despesas' },
  ]);

  const handleBreadcrumbs = () => {
    const currentPath = location.pathname;

    if (currentPath === '/despesas') return;

    for (const { label, path } of SideBarButtonsDespesas) {
      if (
        path === currentPath &&
        !breadcrumbs.some((item) => item.label === label)
      ) {
        if (breadcrumbs.length > 1) {
          setBreadcrumbs([breadcrumbs[0], { label, path }]);
          return;
        }
        setBreadcrumbs([...breadcrumbs, { label, path }]);
      }
    }
  };

  useEffect(() => {
    handleBreadcrumbs();
  }, [location]);

  return (
    <Layout
      // breadcrumbs={breadcrumbs}
      sidebarButton={SideBarButtonsDespesas}
    >
      <ScrollArea>{children}</ScrollArea>
    </Layout>
  );
}

export { DespesasLayout };
