import { Shield, Users, Server, Cog, Maximize, PenToolIcon as Tool } from "lucide-react"

const FeasibilityAndViability = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Robust",
      description: "Built to handle large volumes of data with ease and reliability.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User-Friendly",
      description: "Designed with an intuitive interface to ensure ease of use for all users.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Secure",
      description: "Features advanced security measures to protect sensitive data.",
    },
    {
      icon: <Maximize className="h-8 w-8" />,
      title: "Scalable",
      description: "Easily adapts to growing data needs and organizational requirements.",
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Flexible",
      description: "Offers customizable features to fit diverse reporting needs.",
    },
    {
      icon: <Tool className="h-8 w-8" />,
      title: "Efficient",
      description: "Optimized for maximum performance and minimal resource usage.",
    },
  ]

  return (
    <div className="py-16 text-center" id="feasability">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">Feasibility and Viability</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card p-8 rounded-lg">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-500">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeasibilityAndViability
