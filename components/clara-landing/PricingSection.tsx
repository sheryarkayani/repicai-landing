import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { useInView } from "../../hooks/useInView"

export default function PricingSection() {
  const [pricingRef, pricingInView] = useInView()

  return (
    <section
      id="pricing"
      ref={pricingRef}
      className={`py-16 px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 ${pricingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gray-900 text-white rounded-full px-4 py-2">💰 PRICE INCREASE SOON</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Pricing</h2>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1 flex">
              <button className="px-6 py-2 rounded-full bg-white shadow-sm font-medium">Monthly</button>
              <button className="px-6 py-2 rounded-full text-gray-600 font-medium">Yearly</button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-gray-200 relative hover:shadow-xl transition-shadow">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gray-900 text-white px-4 py-1 rounded-full">Most Popular</Badge>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold text-gray-900">$49</span>
                <span className="text-xl text-gray-600 ml-2">/per month</span>
              </div>
              <p className="text-gray-600 mb-6">For one restaurant location</p>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 mb-8">
                Start Trial
              </Button>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">What's Included</h4>
                <div className="space-y-3">
                  {[
                    "200 Monthly Calls",
                    "Call Handling",
                    "Unlimited Regeneration",
                    "Any Language",
                    "Order Processing",
                    "Reservation System",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 relative hover:shadow-xl transition-shadow">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gray-900 text-white px-4 py-1 rounded-full">Best Value</Badge>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold text-gray-900">$200</span>
                <span className="text-xl text-gray-600 ml-2">/per month</span>
              </div>
              <p className="text-gray-600 mb-6">For teams or multiple locations</p>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 mb-8">
                Start Trial
              </Button>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">What's Included</h4>
                <div className="space-y-3">
                  {[
                    "Unlimited Monthly Calls",
                    "Call Handling",
                    "Unlimited Regeneration",
                    "Any Language",
                    "Order Processing",
                    "Reservation System",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}