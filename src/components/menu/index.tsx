import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Menu } from 'lucide-react';

export const MenuDropDown = () => {
 return (
    <DropdownMenu>
        <DropdownMenuTrigger className="bg-zinc-900 p-2 rounded-md border-2 text-zinc-50 "><Menu /></DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>DBnvides</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Minhas assinaturas</DropdownMenuItem>
            <DropdownMenuItem>Configurações</DropdownMenuItem>
            <DropdownMenuItem>Sair</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>  
   
 );
}