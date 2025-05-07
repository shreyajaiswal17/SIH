import { Bell, User, LogOut } from "lucide-react"

function Navb() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 p-4 flex justify-between items-center shadow-md">
      <div className="text-white text-lg font-semibold gradient-text">ANNUAL REPORT DASHBOARD</div>
      <div className="flex items-center space-x-4">
        <button className="text-white flex items-center hover:text-blue-300 transition-colors">
          <Bell className="h-5 w-5 mr-1" />
          <span className="hidden md:inline">Notifications</span>
        </button>
        <button className="text-white flex items-center hover:text-blue-300 transition-colors">
          <User className="h-5 w-5 mr-1" />
          <span className="hidden md:inline">Profile</span>
        </button>
        <button className="text-white flex items-center hover:text-blue-300 transition-colors">
          <LogOut className="h-5 w-5 mr-1" />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    </nav>
  )
}

export default Navb