import { Sidebar } from "./pages/Sidebar";
import SidebarItem from "./pages/Sidebar";
import {
  LifeBuoy,
  LayoutDashboard,
  Settings,
  BarChart3,
  UserCircle,
  Package,
  Boxes,
  Receipt
} from "lucide-react";

function App() {
  return (
    <div className="App">
      <main className="content">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20} />} text={'Dashboard'} />
          <SidebarItem icon={<BarChart3 size={20} />} text={'Statistics'} active />
          <SidebarItem icon={<UserCircle size={20} />} text={'Users'} />
          <SidebarItem icon={<Boxes size={20} />} text={'Inventory'} />
          <SidebarItem icon={<Package size={20} />} text={'Orders'} alert/>
          <SidebarItem icon={<Receipt size={20} />} text={'Transactions'} />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text={'Settings'} />
          <SidebarItem icon={<LifeBuoy size={20} />} text={'Help'} />
        </Sidebar>
      </main>
    </div>
  );
}

export default App;