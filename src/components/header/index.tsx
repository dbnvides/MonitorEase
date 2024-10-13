import { MenuDropDown } from "../menu";

export const Header = () => {
 return (
   <header className="h-20 bg-zinc-900 flex items-center px-4 justify-between">
      <div className="flex items-center">
        <h2 className="text-zinc-50 font-thin text-2xl">Monitor</h2><span className="font-bold text-2xl text-blue-600">Ease</span>
      </div>
      <MenuDropDown />
   </header>
 );
}