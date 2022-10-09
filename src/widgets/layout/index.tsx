import { Outlet } from 'react-router-dom';
import './App.css'
import { SidebarLeft } from 'src/widgets/layout/SidebarLeft'
import SideBar from 'src/widgets/layout/SideBar'
import 'src/styles/styles.scss';


export const Layout = () =>
  <div className="h-full grid grid-cols-[83px_1fr]">
    <SidebarLeft/>
    <div className="flex w-full overflow-y-scroll">
      <div className="p-8 w-[calc(100%-400px)]">
        <Outlet/>
      </div>

      <div className="bg-gray-200 w-[400px]">
        <SideBar/>
      </div>
    </div>
  </div>
