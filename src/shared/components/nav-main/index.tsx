import { ChevronRight } from "lucide-react"
import {
    Collapsible,
    // CollapsibleContent,
    CollapsibleTrigger,
} from "../ui/collapsible"
import { SidebarButton } from "@shared/types/sidebarButton";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    // SidebarMenuSub,
    // SidebarMenuSubButton,
    // SidebarMenuSubItem,
} from "../ui/sidebar"
import React from "react";
import { Separator } from "@radix-ui/react-separator";
import { LayoutDashboard } from 'lucide-react';
import { useNavigate } from "react-router-dom";

type Props = {
  items: SidebarButton[]
};

export function NavMain({ items }: Props) {
  const navigate = useNavigate()

  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuButton 
          tooltip="Dashboard" 
          onClick={() => navigate("/dashboard")}
          className="rounded-full border bg-zinc-300"
        >
          <LayoutDashboard/>
          <span>Dashboard</span>
          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]collapsible:rotate-90" />
        </SidebarMenuButton>
        <Separator className="my-2 border" />
        <SidebarGroupLabel>Módulos</SidebarGroupLabel>
        {items.map((item) => (
          <Collapsible
            key={item.label}
            asChild
            defaultOpen={item.disabled}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.label}>
                  {item.icon && React.isValidElement(item.icon) ? item.icon : null}
                  <span>{item.label}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {/* <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent> */}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
