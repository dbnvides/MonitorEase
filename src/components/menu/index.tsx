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
        <DropdownMenuTrigger className="bg-zinc-900 p-2 rounded border-2 text-zinc-50"><Menu /></DropdownMenuTrigger>
        <DropdownMenuContent className="bg-zinc-50 rounded">
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