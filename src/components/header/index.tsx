import { useContext } from "react";
import { MenuDropDown } from "../menu";
import { ModalContext } from "@/context/ModalContext";
import { Button } from '@/components/ui/button'

export const Header = () => {
  const {setModalLogin, setModalRegister} = useContext(ModalContext)
  
  const user = false

 return (
   <header className="h-20 bg-zinc-900 flex fixed w-full">
    <div className="container mx-auto">
      <div className="flex items-center px-4 w-full justify-between h-full">
      <div className="flex items-center">
        <h2 className="text-zinc-50 font-thin text-2xl">Monitor</h2><span className="font-bold text-2xl text-blue-600">Ease</span>
      </div>
      {user ?  <MenuDropDown /> 
      : 
        <div className="flex gap-2">
          <Button type="button" className="border-green-500 border text-green-500 hover:bg-green-500 hover:text-zinc-50 hover:border-zinc-50 rounded" onClick={() => setModalRegister(true)}>Sing up</Button>
          <Button type="button" className="text-white bg-zinc-950 rounded-[4px] border" onClick={() => setModalLogin(true)}>Sing in</Button>
        </div>
        }
      </div>
    </div>
   </header>
 );
}