import { AppSidebar } from "../app-sidebar.tsx/index";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Breadcrumb } from "@shared/types/breadcrumb";
import { SidebarButton } from "@shared/types/sidebarButton";
import { Separator } from "../ui/separator";
import BreadcrumbLayout from "../breadcrumb/index";

type Props = {
  children: React.ReactNode;
  sidebarButton: SidebarButton[];
  breadcrumbs?: Breadcrumb[];
};

const Layout = ({ children, sidebarButton, breadcrumbs = [] }: Props) => {
  return (
    <SidebarProvider>
      <AppSidebar navMain={sidebarButton} />
      <SidebarInset>
        <header className="flex h-10 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            {/* Sidebar */}
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            {/* Breadcrumb */}
            <BreadcrumbLayout
              items={breadcrumbs.map(({ label, path }) => ({
                label,
                path,
              }))}
            />
          </div>
        </header>
        {/* Conteúdo principal a ser renderizado, módulos */}
        <div className="flex max-w-full min-h-[94%] max-h-[95%]">
          <ScrollArea className="w-full p-4">{children}</ScrollArea>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export { Layout };
