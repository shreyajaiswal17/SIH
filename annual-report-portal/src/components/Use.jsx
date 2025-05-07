import { Quote, School } from "lucide-react"

// Sample reviews array
const reviews = [
  {
    review: "Lumina has revolutionized the way we prepare our annual reports. It's seamless and efficient.",
    school: "Greenwood High School",
  },
  {
    review: "With Lumina, we can now integrate all our departmental data into one comprehensive report.",
    school: "Oakridge International School",
  },
  {
    review: "The real-time syncing and secure data storage are just amazing features that Lumina offers.",
    school: "Silver Oak School",
  },
  {
    review: "Our reporting process is now automated and hassle-free thanks to Lumina.",
    school: "Sunrise Academy",
  },
  {
    review: "The ability to visualize our data through customizable dashboards has been a game-changer.",
    school: "Bright Future School",
  },
]

const ReviewsCarousel = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Why Institutes Love Lumina</h2>
        <div className="max-w-4xl mx-auto glass-card rounded-lg p-8">
          {/* Testimonial Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex flex-col space-y-8">
                {reviews.map((item, index) => (
                  <div key={index} className="p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg">
                    <Quote className="text-blue-500 h-8 w-8 mx-auto mb-4" />
                    <p className="text-lg italic text-gray-300 mb-4">{item.review}</p>
                    <div className="flex justify-center items-center">
                      <School className="text-blue-500 mr-2 h-5 w-5" />
                      <h3 className="text-xl text-blue-400 font-semibold">{item.school}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsCarousel
