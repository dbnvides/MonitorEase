import { ModalViewService } from "../modal/index";
import { ModalAddService } from "../modal/modalAddnewService";
import { ModalLogin } from "../modal/modalLogin";
import { ModalRegister } from "../modal/modalRegister";
import { UserAutenticated } from "./userAutenticated";


export const Dashboard = () => {

  const user = true

 return (
  <>
  <ModalViewService />
  <ModalAddService />
  <ModalLogin />
  <ModalRegister />

   <main className="bg-zinc-950 min-h-screen w-full py-20">
    {!user ? 
    <div className="bg-white">Não autenticado</div> 
    : 
    <UserAutenticated/>
    }
   </main>
   </>
 );
}