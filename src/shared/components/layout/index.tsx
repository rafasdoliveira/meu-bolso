import { AppSidebar } from '../app-sidebar.tsx/index';
import { SidebarProvider, SidebarTrigger, SidebarInset } from '../ui/sidebar';
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';
import { Separator } from '../ui/separator';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { SidebarButton } from '@shared/types/sidebarButton';
// import { Breadcrumb } from '@shared/types/breadcrumb';

type Props = {
  children: React.ReactNode
  sidebarButton: SidebarButton[]
  // breadcrumbs?: Breadcrumb[]
};

const Layout = ({children, sidebarButton}: Props) => {

  return (
    <SidebarProvider>
    <AppSidebar navMain={sidebarButton} />
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          {/* Sidebar */}

          <SidebarTrigger className="-ml-1" />
          
          <Separator orientation="vertical" className="mr-2 h-4" />
          {/* Breadcrumb */}
          {/* <Breadcrumb className='border'>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
        </div>
      </header>
      {/* Conteúdo principal a ser renderizado, módulos */}
      <div className="flex max-w-full min-h-[90%] max-h-[90%] p-4">
					<ScrollArea className="w-full p-4">
						{children}
					</ScrollArea>
				</div>
    </SidebarInset>
  </SidebarProvider>
  );
};

export { Layout };
