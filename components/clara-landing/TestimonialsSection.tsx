import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "../../hooks/useInView"
import { Testimonial } from "../../types"

const testimonials: Testimonial[] = [
  {
    text: "Clara knows how to handle our customers. It's like having our best employee work 24/7.",
    author: "Maria Rodriguez",
    restaurant: "Casa Mexicana",
    rating: 5,
  },
  {
    text: "I use Clara everyday for all my locations, and myself. Would recommend.",
    author: "James Chen",
    restaurant: "Golden Dragon",
    rating: 5,
  },
  {
    text: "Got millions of orders with this for all my restaurants. Helps do 90% of the call handling.",
    author: "Sarah Johnson",
    restaurant: "The Bistro Group",
    rating: 5,
  },
  {
    text: "Insanely useful for my ghostwriting agency. Saves a ton of time.",
    author: "Wing Chung",
    restaurant: "Fast Casual Co",
    rating: 5,
  },
  {
    text: "Wish I found this sooner. Honestly, the best AI content I've tested so far.",
    author: "Julius Nylund",
    restaurant: "Nordic Bites",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [testimonialsRef, testimonialsInView] = useInView()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      ref={testimonialsRef}
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative transition-all duration-1000 ${testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gray-900 text-white rounded-full px-4 py-2">😊 Testimonials</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600">See what other restaurant owners are saying about Clara.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border border-gray-200 max-w-2xl mx-auto transform transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8 text-center">
                      <div className="flex items-center justify-center space-x-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                      <div className="flex items-center justify-center space-x-3">
                        <div
                          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                          style={{
                            backgroundImage: `linear-gradient(135deg, hsl(${index * 60}, 70%, 60%), hsl(${index * 60 + 60}, 70%, 60%))`,
                          }}
                        >
                          <span className="text-white font-semibold">
                            {testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.author}</div>
                          <div className="text-sm text-gray-600">{testimonial.restaurant}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}