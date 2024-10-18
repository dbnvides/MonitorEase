import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Plus } from 'lucide-react';

export const Modal = () =>{
 return (
    <Dialog>
    <DialogTrigger><Plus size={32}/></DialogTrigger>
    <DialogContent className="bg-zinc-50">
      <DialogHeader>
        <DialogTitle>Adding new service</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
 );
}