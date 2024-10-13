import { Header } from "./global/Header";
import { Sidebar } from "./global/Sidebar";
import { SidebarItem } from "./global/Sidebar";
import {
  ChefHat,
  Cherry,
  Heart,
  ClipboardList,
  Users,
  Calendar,
  StickyNote,
} from 'lucide-react';

function App() {
  return (
    <>
      <div className="h-screen flex flex-col bg-gradient-to-tr from-purple-50 to-orange-50">
        <Header />
        <div className="overflow-hidden">
          <Sidebar>
            <SidebarItem
              icon={<ChefHat size={20} />}
              text="Discover Recipe"
            />
            <SidebarItem
              icon={<Cherry size={20} />}
              text="My Recipe"
            />
            <SidebarItem
              icon={<Heart size={20} />}
              text="Favorites"
              active
            />
            <SidebarItem
              icon={<ClipboardList size={20} />}
              text="Meal Plan"
            />
            <SidebarItem
              icon={<Users size={20} />}
              text="Community"
            />
            <SidebarItem
              icon={<Calendar size={20} />}
              text="Calendar"
            />
            <SidebarItem
              icon={<StickyNote size={20} />}
              text="Discover Recipe"
            />
          </Sidebar>
        </div>
      </div>
    </>
  );
}

export default App;
