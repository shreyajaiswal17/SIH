"use client"
import Sidebar from "./sidebar"
import Navb from "./nav"
import KPISection from "./kpi-section"
import ChartCard from "./chart-card"
import { useNavigate } from "react-router-dom"
import { FileText } from "lucide-react"

// Dummy KPI Data
const kpiData = [
  { title: "Number of Students Enrolled", value: "1500" },
  { title: "Programs Offered", value: "10" },
  { title: "NIRF Ranking", value: "150-200" },
  { title: "Students Placed", value: "85%" },
]

const DashboardView = () => {
  const navigate = useNavigate()

  const handleGeneratePDF = () => {
    navigate("/pdf")
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-grow ml-64">
        <Navb />
        <main className="flex-grow p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <KPISection kpis={kpiData} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="glass-card p-4 rounded-lg flex items-center justify-center flex-col">
              <img
                src="/placeholder.svg?height=150&width=300"
                alt="College"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-white">Bhagwan Parshuram Institute of Technology</h2>
            </div>

            <ChartCard
              title="Students Placed"
              data={{
                labels: ["Placed", "Not Placed"],
                datasets: [
                  {
                    data: [85, 15],
                    backgroundColor: ["#3b82f6", "#ef4444"],
                  },
                ],
              }}
              type="pie"
            />

            <div className="glass-card p-4 rounded-lg flex items-center justify-center flex-col">
              <h3 className="text-lg font-semibold mb-2 text-white">Number of Students Enrolled</h3>
              <p className="text-2xl font-bold text-blue-500">
                {kpiData.find((kpi) => kpi.title === "Number of Students Enrolled")?.value}
              </p>
            </div>

            <div className="glass-card p-4 rounded-lg flex items-center justify-center flex-col">
              <h3 className="text-lg font-semibold mb-2 text-white">Programs Offered</h3>
              <p className="text-lg text-gray-300">M.Tech, MBA, BBA, B.Tech</p>
            </div>

            <div className="glass-card p-4 rounded-lg flex items-center justify-center flex-col">
              <h3 className="text-lg font-semibold mb-2 text-white">NIRF Ranking</h3>
              <p className="text-lg text-blue-500">{kpiData.find((kpi) => kpi.title === "NIRF Ranking")?.value}</p>
            </div>

            <div className="glass-card p-4 rounded-lg flex items-center justify-center flex-col">
              <h3 className="text-lg font-semibold mb-2 text-white">Student Placement</h3>
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path
                    className="text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="100, 100"
                    d="M18 2a16 16 0 0 1 0 32 16 16 0 0 1 0-32"
                  />
                  <path
                    className="text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="85, 100"
                    d="M18 2a16 16 0 0 1 0 32 16 16 0 0 1 0-32"
                  />
                  <text
                    x="50%"
                    y="50%"
                    dy=".3em"
                    textAnchor="middle"
                    className="text-lg font-bold fill-current text-blue-500"
                  >
                    85%
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Generate PDF Button */}
          <button
            className="gradient-button text-white px-6 py-3 rounded-md mt-8 flex items-center shadow-lg"
            onClick={handleGeneratePDF}
          >
            <FileText className="mr-2 h-5 w-5" />
            Generate PDF
          </button>
        </main>
      </div>
    </div>
  )
}

export default DashboardView
