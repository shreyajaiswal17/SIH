import { Trophy, Star, Rocket } from "lucide-react"

const BragAboutUs = () => {
  return (
    <div className="py-16 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2 glass-card p-8 rounded-lg mb-8 md:mb-0 md:mr-8">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Creating a Difference in Education</h2>
          <p className="text-lg text-gray-300 mb-6">
            At Lumina, we are dedicated to transforming the way educational institutions handle their annual reporting.
            Our innovative platform not only simplifies the process but also enhances the quality of reports with
            insightful data analysis and visually appealing presentations.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Our commitment to excellence and customer satisfaction drives us to continuously improve and adapt our
            solutions to meet the evolving needs of our users. Join the revolution in educational reporting and
            experience the difference with Lumina.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500/20 p-3 rounded-full mb-2">
                <Trophy className="text-blue-500 h-6 w-6" />
              </div>
              <p className="font-semibold text-white">Award-Winning</p>
              <p className="text-gray-300 text-sm">Recognized for excellence in educational technology.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500/20 p-3 rounded-full mb-2">
                <Star className="text-yellow-500 h-6 w-6" />
              </div>
              <p className="font-semibold text-white">Top Rated</p>
              <p className="text-gray-300 text-sm">Rated highly by users for its functionality and ease of use.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-500/20 p-3 rounded-full mb-2">
                <Rocket className="text-purple-500 h-6 w-6" />
              </div>
              <p className="font-semibold text-white">Innovative</p>
              <p className="text-gray-300 text-sm">
                Pioneering new features and enhancements in educational reporting.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
            <div className="relative glass-card rounded-lg p-6">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Lumina Dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BragAboutUs
