import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "../../hooks/useInView"
import { Star } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: "Matt Barker",
    role: "LinkedIn Creator",
    company: "171,000 followers on LinkedIn",
    content: "Writing content on LinkedIn can be a stressful experience. If I was starting again now, Repic AI would've saved me A LOT of stress and time.",
    rating: 5,
    avatar: "MB"
  },
  {
    name: "Charlie Hills",
    role: "Content Creator",
    company: "115k+ LinkedIn followers",
    content: "I rebuilt my LinkedIn strategy from scratch and went from zero to 115k+ in 494 days. Repic AI has been instrumental in creating engaging posts consistently.",
    rating: 5,
    avatar: "CH"
  },
  {
    name: "Chris Donnelly",
    role: "Business Coach",
    company: "LinkedIn Thought Leader",
    content: "Repic AI helps me create authentic content that resonates with my audience. The AI understands my writing style perfectly.",
    rating: 5,
    avatar: "CD"
  }
]

export default function TestimonialsSection() {
  const [testimonialsRef, testimonialsInView] = useInView()

  return (
    <section
      id="testimonials"
      ref={testimonialsRef}
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#cbbbef]/10 to-[#81aaef]/20 relative transition-all duration-1000 ${testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#cbbbef]/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-[#cbbbef] to-[#81aaef] text-white rounded-full px-4 py-2">💬 Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="bg-gradient-to-r from-[#cbbbef] to-[#81aaef] bg-clip-text text-transparent">20,000+</span> LinkedIn creators
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-2xl font-bold ml-2">4.8</span>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-2xl font-bold ml-2">4.6</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:border-[#cbbbef] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#cbbbef] to-[#81aaef] text-white rounded-full flex items-center justify-center font-semibold mr-4 shadow-md">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm bg-gradient-to-r from-[#cbbbef] to-[#81aaef] bg-clip-text text-transparent font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}