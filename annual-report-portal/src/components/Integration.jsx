"use client"
import { Database, RefreshCw, Upload, Shield } from "lucide-react"
import { useState } from "react"

const IntegrationSystem = () => {
  const [integrations] = useState([
    {
      id: 1,
      title: "Database Integration",
      icon: <Database className="h-12 w-12" />,
      description: "Seamlessly integrates with your existing databases, including SQL and NoSQL systems.",
    },
    {
      id: 2,
      title: "Real-time Sync",
      icon: <RefreshCw className="h-12 w-12" />,
      description: "Keep your data synchronized across departments and systems in real-time.",
    },
    {
      id: 3,
      title: "Cloud Upload",
      icon: <Upload className="h-12 w-12" />,
      description: "Securely upload and store data on popular cloud platforms like AWS, GCP, and Azure.",
    },
    {
      id: 4,
      title: "Data Security",
      icon: <Shield className="h-12 w-12" />,
      description: "End-to-end encryption ensures that your sensitive data is protected at all times.",
    },
  ])

  return (
    <div className="py-16" id="integrations">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-white">Integration Options</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Enhance your institution's productivity with our seamless integration options
        </p>

        {/* Grid Layout for Integrations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration) => (
            <div key={integration.id} className="feature-card p-6 rounded-lg text-center">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-500">{integration.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{integration.title}</h3>
              <p className="text-gray-300">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IntegrationSystem
