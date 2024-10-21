import { ModalContext } from "@/context/ModalContext";
import type { DataStream } from "@/data";
import type { SubscribeInterface } from "@/interfaces/data";
import { useContext } from "react";

interface CardDrop extends DataStream{
 modal: (service: SubscribeInterface) => void
}

export const Card = (prop:CardDrop) => {
  const {openModal} = useContext(ModalContext)

  const handleClick = () => {
    console.log('Elemento clicado ou pressionado');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(); // Executa a mesma ação que o clique
    }
  };

 return (
   <li
   onKeyDown={handleKeyDown} 
   className="w-[100px] h-[100px] bg-zinc-50 p-2 rounded-2xl flex justify-center flex-shrink-0 items-center border-zinc-950 hover:bg-zinc-700">
      <button type="button" onClick={() => openModal(prop)} className="w-full h-full" >
      <img src={prop.imagem} alt={prop.nome} className="w-full h-full object-contain"/>
      </button>
   </li>
 );
}