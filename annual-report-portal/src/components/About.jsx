import { Lock, BarChart2, FileText } from "lucide-react"

const About = () => {
  return (
    <div className="py-16 text-center" id="about-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-white">About Lumina</h2>
        <div className="mb-8">
          <div className="typing-effect inline-block text-2xl font-semibold text-blue-400 mb-4">
            Turning Data into a Story of Success
          </div>
        </div>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Lumina is a cutting-edge platform designed to streamline the process of preparing comprehensive annual reports
          for educational institutes. By integrating data from all departments, we help you transform raw information
          into visually compelling narratives.
        </p>

        {/* Feature Boxes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Box 1: Secure User Roles */}
          <div className="feature-card rounded-lg p-6 text-center">
            <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lock className="text-blue-500 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">User Authentication & Role Management</h3>
            <p className="text-gray-300">
              Secure login for different user roles, ensuring data privacy and role-based access control across
              departments.
            </p>
          </div>

          {/* Box 2: Data Visualization */}
          <div className="feature-card rounded-lg p-6 text-center">
            <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart2 className="text-purple-500 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Data Analysis & Visualization</h3>
            <p className="text-gray-300">
              Visualize key performance indicators with customizable charts and dashboards for better insights and
              reporting.
            </p>
          </div>

          {/* Box 3: Report Generation */}
          <div className="feature-card rounded-lg p-6 text-center">
            <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FileText className="text-blue-500 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Automated Report Generation</h3>
            <p className="text-gray-300">
              Generate comprehensive annual reports in various formats, including PDF and HTML, with customizable
              templates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
