
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Sparkles,
  ChartNoAxesColumn,
  GraduationCap,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "IELTS Preparation", icon: BookOpen, path: "/ielts" },
  { name: "AI Writing Tutor", icon: Sparkles, path: "/ai-tutor" },
  { name: "My Progress", icon: ChartNoAxesColumn, path: "/progress" },
];

export default function Sidebar() {
  return (
    <aside className="w-full shrink-0 border-b border-gray-100 bg-white p-5 md:sticky md:top-0 md:h-screen md:w-64 md:border-b-0 md:border-r md:p-6">
      {/* Logo */}
      <NavLink to="/" className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100">
          <GraduationCap className="text-violet-600" size={25} />
        </div>

        <div>
          <h1 className="text-lg font-extrabold tracking-tight text-violet-700">
            PrepMaster AI
          </h1>
          <p className="text-xs text-gray-400">Learn. Practise. Improve.</p>
        </div>
      </NavLink>

      {/* Navigation */}
      <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-gray-400">
        Main Menu
      </p>

      <nav className="space-y-2">
        {menuItems.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              `group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-violet-100 font-semibold text-violet-700 shadow-sm"
                  : "text-gray-500 hover:bg-gray-50 hover:text-violet-600"
              }`
            }
          >
            <Icon size={20} />
            <span className="text-sm">{name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom branding */}
      <div className="mt-10 hidden rounded-2xl bg-[#F7F6FF] p-4 md:block">
        <Sparkles size={19} className="mb-2 text-violet-500" />
        <p className="text-sm font-semibold text-[#49466E]">
          Learn smarter with AI
        </p>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          Your companion for IELTS preparation and academic English.
        </p>
      </div>
    </aside>
  );
}
