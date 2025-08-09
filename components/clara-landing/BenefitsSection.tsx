import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, CheckCircle } from "lucide-react"
import { useInView } from "../../hooks/useInView"

export default function BenefitsSection() {
  const [benefitsRef, benefitsInView] = useInView()

  return (
    <section
      id="benefits"
      ref={benefitsRef}
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#cbbbef]/5 via-white to-[#81aaef]/10 relative transition-all duration-1000 ${benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#cbbbef]/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-[#cbbbef] to-[#81aaef] text-white rounded-full px-4 py-2">⭐ Benefits</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why use Repic AI?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What makes us different from manual content creation and other LinkedIn tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Before Repic AI</h3>
              <div className="space-y-4">
                {[
                  "I don't have any results.",
                  "I don't have any ideas for content.",
                  "I spend hours writing my posts.",
                  "I can't seem to keep up.",
                  "I can't analyze my content.",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#cbbbef]/30 bg-gradient-to-br from-white to-[#cbbbef]/5 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">With Repic AI</h3>
              <div className="space-y-4">
                {[
                  "Get inspired by the best viral posts",
                  "Create LinkedIn posts in just a few clicks",
                  "Adapt posts to your audience and style",
                  "Schedule posts for the coming weeks",
                  "Analyze your post metrics in one place",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#cbbbef]" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}