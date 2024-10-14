import type { DataStream } from "@/data";


export const Card = (prop:DataStream) => {
 return (
   <article className="w-[100px] h-[100px] bg-zinc-50 p-2 rounded-2xl flex justify-center flex-shrink-0 items-center  border-zinc-950 hover:bg-zinc-700">
      <img src={prop.imagem} alt={prop.nome} className="w-full h-full object-contain"/>
   </article>
 );
}