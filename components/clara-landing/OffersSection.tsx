import { Card, CardContent } from "@/components/ui/card"
import { Phone, Sparkles, Calendar } from "lucide-react"
import { useInView } from "../../hooks/useInView"
import { Feature } from "../../types"

const features: Feature[] = [
  {
    icon: Phone,
    title: "Call Handling",
    description: "If you don't want to miss calls, you can let AI handle them for you.",
  },
  {
    icon: Sparkles,
    title: "AI Ordering",
    description: "Our trained AI takes orders and suggests add-ons to boost your revenue.",
  },
  {
    icon: Calendar,
    title: "Reservation System",
    description: "Easily manage your reservations and customer database automatically.",
  },
]

export default function OffersSection() {
  const [offersRef, offersInView] = useInView()

  return (
    <section
      ref={offersRef}
      className={`py-16 px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 ${offersInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clara offers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
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