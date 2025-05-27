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
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative transition-all duration-1000 ${benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gray-900 text-white rounded-full px-4 py-2">⭐ Benefits</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why use Clara?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What makes us different to human staff, expensive phone systems and other alternatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Old way</h3>
              <div className="space-y-4">
                {[
                  "Miss calls when staff is busy",
                  "Hire expensive phone staff",
                  "Spend hours training employees",
                  "Lose revenue on missed opportunities",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The New Way</h3>
              <div className="space-y-4">
                {[
                  "100% call coverage, 24/7",
                  "Cheaper than any staff member",
                  "Setup in minutes, not hours",
                  "Generate revenue that converts",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
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