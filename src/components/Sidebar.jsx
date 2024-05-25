import Image from "next/image";
import {IoBrowsersOutline, IoCalculator, IoFootball } from "react-icons/io5";
import SidebarMenuItem from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40}/>,
    title: "Dashboard",
    subTitle: "Visualizacion",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Counter Side",
  },
  {
    path: "/dashboard/pokemones",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "Pokemons Page",
  }
];

export default function Sidebar() {
  return (
    <div
      style={{ width: 400 }}
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Mia<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="Profile image"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Christian Gallegos
          </span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((menu) => (
          <SidebarMenuItem key={menu.path} path={menu.path} icon={menu.icon} title={menu.title} subTitle={menu.subTitle} />
        ))}
      </div>
    </div>
  );
}
