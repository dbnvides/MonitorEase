import { databaseStreaming, type DataStream } from "@/data";
import { Card } from "../card";
import { useEffect, useState } from "react";

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
   <main className="bg-zinc-950 flex-1">
    
    <section className="text-zinc-50 h-[200px] w-full">
      <div className="container p-4">
        <h2 className="text-zinc-50 font-thin text-xl">My Subscribe</h2>
        <ul className="flex overflow-scroll gap-2 p-2">
        {
          mySubs.length > 0 && mySubs.map(stream => (
            <Card id={stream.id} descricao={stream.descricao} imagem={stream.imagem} nome={stream.nome} key={stream.id}/>
          ))
        }
        </ul>
      </div>
    </section>
    <section className="h-min-screen">
    <div className="container p-4">
    <h2 className="text-zinc-50 font-thin text-xl">All Services</h2>
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