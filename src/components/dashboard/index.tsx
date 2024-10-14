import { databaseStreaming, type DataStream } from "@/data";
import { Card } from "../card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react';

export const Dashboard = () => {
  const [mySubs, setMySubs] = useState<DataStream[] | []>([])

  useEffect(()=>{
    const addnewStream = () =>{
      const result = databaseStreaming.filter(stream => stream.id <= 4)
      setMySubs(result)
    }
    addnewStream()
  },[])

 return (
   <main className="bg-zinc-950 min-h-screen w-full py-20">
    <section className="text-zinc-50 h-[200px] w-full">
      <div className="container p-4 flex flex-col gap-4 mx-auto">
        <h2 className="text-zinc-50 font-thin text-xl">Add new subinscribe</h2>

        <div>
          <button type="button" className="w-[100px] h-[100px] rounded-2xl flex justify-center items-center text-zinc-50 border-zinc-50 border-2 hover:bg-zinc-700">
          <Plus size={32}/>
          </button>
        </div>
      </div>
    </section>
    <section className="text-zinc-50 h-[200px] w-full">
      <div className="container p-4 flex flex-col gap-4 mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-zinc-50 font-thin text-xl">My Subscribe</h2>
          <Button className="border-zinc-50 border text-zinc-50 rounded-xl">See all</Button>
        </div>
        <ul className="flex gap-2 p-2 overflow-x-auto ">
        {
          mySubs.length > 0 && mySubs.map(stream => (
            <Card id={stream.id} descricao={stream.descricao} imagem={stream.imagem} nome={stream.nome} key={stream.id}/>
          ))
        }
        </ul>
      </div>
    </section>
    <section className="h-min-screen">
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
    </section>
   </main>
 );
}