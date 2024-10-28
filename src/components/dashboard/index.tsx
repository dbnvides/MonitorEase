import { databaseStreaming, type DataStream } from "@/data";
import { Card } from "../card";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { ModalViewService } from "../modal/index";
import { Wallet,UserRoundPen,Calendar } from 'lucide-react';
import { ModalContext } from "@/context/ModalContext";
import { ModalAddService } from "../modal/modalAddnewService";
import { ModalLogin } from "../modal/modalLogin";


export const Dashboard = () => {
  const [mySubs, setMySubs] = useState<DataStream[] | []>([])
  const {openModal,openAddModal, modalLogin} = useContext(ModalContext)

  useEffect(()=>{
    const addnewStream = () =>{
      const result = databaseStreaming.filter(stream => stream.id <= 4)
      setMySubs(result)
    }
    addnewStream()
  },[])

 return (
  <>
  <ModalViewService />
  <ModalAddService />
  <ModalLogin />

   <main className="bg-zinc-950 min-h-screen w-full py-20">
    {/* <section className="text-zinc-50 h-[200px] w-full">
      <div className="container p-4 flex flex-col gap-4 mx-auto">
        <h2 className="text-zinc-50 font-thin text-xl">Add new subinscribe</h2>
        <div>
          <button type="button" className="w-[100px] h-[100px] rounded-2xl flex justify-center items-center text-zinc-50 border-zinc-50 border-2 hover:bg-zinc-700">
          <Modal />
          </button>
        </div>
      </div>
    </section> */}
    <section>
      <div className="container mx-auto p-4">
        <main className="flex gap-2 bg-gradient-to-r justify-between items-center from-zinc-900 to-blue-600 rounded-[8px] h-[100px] border-2 p-2">
          <section className="w-full flex p-2 justify-between">
           <div className="flex flex-row items-center h-20 text-white text-xl md:text-2xl">
            <UserRoundPen/>
              <div className="p-2 w-10 h-10 flex items-center justify-center">
                14
              </div>
              {/* <h2 className="text-white text-lg">Assinaturas</h2> */}
           </div>
           <div className="flex flex-row items-center h-20 text-white text-xl md:text-2xl">
                <Wallet/>
              <div className="text-white p-2 min-w-max h-max flex items-center justify-center">
                R$ 30,00
              </div>
           </div>
           <div className="flex flex-row items-center h-20  text-white text-lg md:text-2xl">
            <Calendar/>
              <div className="text-white p-2 min-w-max h-max flex items-center justify-center">
                20/10/2024
              </div>
           </div>
          </section>
        </main>
      </div>
    </section>
    <section className="text-zinc-50 h-[200px] w-full">
      <div className="container p-4 flex flex-col gap-4 mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-zinc-50 font-thin text-xl">My Subscribe</h2>
          <Button className=" border-green-500 border text-green-500 hover:bg-green-500 hover:text-zinc-50 hover:border-zinc-50 rounded-xl"
          onClick={openAddModal}>Add new Service</Button>
        </div>
        <ul className="flex flex-wrap gap-4 justify-start py-2">
        {
          mySubs.length > 0 && mySubs.map(stream => (
            <Card id={stream.id} descricao={stream.descricao} imagem={stream.imagem} nome={stream.nome} key={stream.id} modal={() => openModal(item)}/>
          ))
        }
        </ul>
      </div>
    </section>
    {/* <section className="h-min-screen">
     <div className="container p-4 mx-auto flex flex-col gap-4">
     <div className="flex justify-between items-center">
          <h2 className="text-zinc-50 font-thin text-xl">All services</h2>
          <Button className="border-zinc-50 border text-zinc-50 rounded-xl">See all</Button>
        </div>
        <ul className="flex flex-wrap w-full h-full gap-2 p-2 items-center justify-center">
        {
          databaseStreaming.map(stream => (
            <Card id={stream.id} descricao={stream.descricao} imagem={stream.imagem} nome={stream.nome} key={stream.id}/>
          ))
        }
        </ul>
      </div>
    </section> */}
   </main>
   </>
 );
}