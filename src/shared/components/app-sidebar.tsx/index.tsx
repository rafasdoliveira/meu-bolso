import { 
  // Frame, 
  // SquareTerminal, 
  Wallet 
} from "lucide-react";
import * as React from "react";

import { NavMain } from "../nav-main";
import { NavUser } from "../nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "../ui/sidebar";
import { SidebarButton } from "@shared/types/sidebarButton";
// import { useUser } from "../../contexts/UserContext"; 

export function AppSidebar({ navMain, ...props }: { navMain: SidebarButton[] } & React.ComponentProps<typeof Sidebar>) {
  
  // TODO: Aplicar o contexto e remover o mock
  // const { user } = useUser(); 
  const user = {
    name: "Rafael Oliveira",
    email: "rafasdoliveira@outlook.com",
    avatar: "/avatars/shadcn.jpg",
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* Aplicar a logo da Meu Bolso */}
        <Wallet size={20} className="border w-full" />
      </SidebarHeader>
      {/* Conteúdo a ser renderizado no sidebar */}
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      {/* Informações do usuário, redirecionamento para o perfil do usuário e log out */}
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
