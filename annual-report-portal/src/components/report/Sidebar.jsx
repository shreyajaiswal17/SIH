import { Link } from "react-router-dom"
import { LayoutDashboard, GraduationCap, BookOpen, DollarSign, Users, Settings, Star } from "lucide-react"

function Sidebar() {
  return (
    <aside className="bg-gradient-to-b from-gray-900 to-gray-800 text-white w-64 h-screen p-4 fixed left-0 top-0">
      <div className="text-xl font-semibold mb-6 gradient-text">Lumina Dashboard</div>
      <ul className="space-y-2">
        <li className="hover:bg-gray-700 rounded-md transition-colors">
          <Link to="/" className="flex items-center p-3">
            <LayoutDashboard className="h-5 w-5 mr-3 text-blue-500" />
            <span className="border-b border-gray-600 block pb-2 w-full">Dashboard</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 rounded-md transition-colors">
          <Link to="/academic-performance" className="flex items-center p-3">
            <GraduationCap className="h-5 w-5 mr-3 text-blue-500" />
            <span className="border-b border-gray-600 block pb-2 w-full">Academic Performance</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 rounded-md transition-colors">
          <Link to="/research-publications" className="flex items-center p-3">
            <BookOpen className="h-5 w-5 mr-3 text-blue-500" />
            <span className="border-b border-gray-600 block pb-2 w-full">Research & Publications</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 rounded-md transition-colors">
          <Link to="/financial-overview" className="flex items-center p-3">
            <DollarSign className="h-5 w-5 mr-3 text-blue-500" />
            <span className="border-b border-gray-600 block pb-2 w-full">Financial Overview</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 rounded-md transition-colors">
          <Link to="/student-life" className="flex items-center p-3">
            <Users className="h-5 w-5 mr-3 text-blue-500" />
            <span className="border-b border-gray-600 block pb-2 w-full">Student Life</span>
          </Link>
        </li>
        <li className="mt-6 border-t border-gray-600 pt-4">
          <div className="text-lg font-semibold mb-2 text-gray-300">Additional Links</div>
          <ul className="space-y-2">
            <li className="hover:bg-gray-700 rounded-md transition-colors">
              <Link to="/new-feature" className="flex items-center p-3">
                <Star className="h-5 w-5 mr-3 text-blue-500" />
                <span className="border-b border-gray-600 block pb-2 w-full">New Feature</span>
              </Link>
            </li>
            <li className="hover:bg-gray-700 rounded-md transition-colors">
              <Link to="/settings" className="flex items-center p-3">
                <Settings className="h-5 w-5 mr-3 text-blue-500" />
                <span className="border-b border-gray-600 block pb-2 w-full">Settings</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
