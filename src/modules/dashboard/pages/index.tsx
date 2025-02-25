import { DashBoardLayout } from '../components/layout';
import { ModuleCard } from '../components/moduleCard';
import { dashboardModules } from '../mocks/dashboardModules';

const DashBoardPage = () => {
  const { modules } = dashboardModules();

  return (
    <DashBoardLayout>
      <div className="p-2">
        <h1 className="font-bold text-xl">Lista de Serviços</h1>
        <h2 className="text-zinc-400 my-4">
          Selecione um módulo abaixo para continuar.
        </h2>
        <div className="w-full grid grid-cols-3 gap-4 mt-10">
          {modules.map((item) => (
            <ModuleCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              path={item.path}
              disabled={item.disabled}
            />
          ))}
        </div>
      </div>
    </DashBoardLayout>
  );
};

export { DashBoardPage };
