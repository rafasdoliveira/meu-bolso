import { SidebarButton } from "@shared/types/sidebarButton";
import { FaRegCreditCard } from "react-icons/fa6";

const SideBarButtonsCartoes: SidebarButton[] = [
    {
        label: "Cartões",
        path: "/cartoes",
        disabled: false,
        icon: <FaRegCreditCard />,
    },
    {
        label: "Cartão de Crédito",
        path: "/cartoes/credito",
        disabled: true,
        icon: <FaRegCreditCard />,
    },
    {
        label: "Cartão de Débito",
        path: "/cartoes/debito",
        disabled: true,
        icon: <FaRegCreditCard />,
    },
    {
        label: "Vale Alimentação",
        path: "/cartoes/vale-alimentacao",
        disabled: true,
        icon: <FaRegCreditCard />,
    },
];

export { SideBarButtonsCartoes };