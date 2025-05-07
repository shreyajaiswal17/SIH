import { CheckCircle } from "lucide-react"

const WhyLumina = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left side: Detailed and appealing UI */}
        <div className="md:w-2/3 glass-card p-8 rounded-lg mb-8 md:mb-0 md:mr-8">
          <h2 className="text-4xl text-center font-bold gradient-text mb-6">Why Use Lumina?</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Lumina is revolutionizing the way educational institutions handle their reporting process by transforming
            data into insightful and interactive dashboards. Our platform not only integrates seamlessly with existing
            systems but also allows educational institutions to visualize academic, financial, and extracurricular data
            in ways that drive decision-making and growth.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            By utilizing cutting-edge security measures and AI-powered data processing, Lumina ensures accuracy,
            compliance, and collaboration. Whether it's streamlining annual report creation or empowering stakeholders
            with actionable insights, Lumina provides an intuitive, user-friendly experience designed to elevate
            educational reporting to new heights.
          </p>

          {/* Features Highlight */}
          <div className="mt-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-blue-500 h-6 w-6 mr-4 flex-shrink-0" />
                <span className="text-lg text-blue-400">Seamless integration with existing databases and systems.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-500 h-6 w-6 mr-4 flex-shrink-0" />
                <span className="text-lg text-blue-400">Automated report generation with real-time data analysis.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-500 h-6 w-6 mr-4 flex-shrink-0" />
                <span className="text-lg text-blue-400">
                  AI-driven data processing for accurate insights and trend identification.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-500 h-6 w-6 mr-4 flex-shrink-0" />
                <span className="text-lg text-blue-400">
                  User-friendly interface designed for easy collaboration across departments.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right side: Illustration */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
            <div className="relative glass-card rounded-lg p-6">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Data Visualization"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyLumina
