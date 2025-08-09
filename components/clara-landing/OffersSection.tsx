import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Calendar, BarChart3 } from "lucide-react"
import { useInView } from "../../hooks/useInView"
import { Feature } from "../../types"

const features: Feature[] = [
  {
    icon: Sparkles,
    title: "AI Post Generation",
    description: "Create LinkedIn posts in just a few clicks with our advanced AI technology.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Schedule your posts for the coming weeks and maintain consistent posting.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Analyze your post metrics and identify opportunities for growth.",
  },
]

export default function OffersSection() {
  const [offersRef, offersInView] = useInView()

  return (
    <section
      ref={offersRef}
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#81aaef]/5 via-white to-[#cbbbef]/12 relative transition-all duration-1000 ${offersInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#81aaef]/8 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Repic AI offers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:border-[#cbbbef]/40 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#cbbbef] to-[#81aaef] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}