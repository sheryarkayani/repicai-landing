import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "../../hooks/useInView"

export default function ResultsSection() {
  const [resultsRef, resultsInView] = useInView()

  return (
    <section
      id="results"
      ref={resultsRef}
      className={`py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-1000 ${resultsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-purple-50/20 to-orange-50/20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gray-900 text-white rounded-full px-4 py-2 animate-bounce">📊 Proof</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">We're not all talk.</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">TODAY</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                We've been using Clara for 3 months everyday and never got more than 5 missed calls.
              </p>
              <p className="text-sm text-gray-600 mb-6">This Clara tool is crazy! Just had my first viral order.</p>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-4">Analytics 📊</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold">2,847</div>
                    <div className="text-sm text-gray-600">Calls handled</div>
                    <div className="text-sm text-green-600">↗ 113.4% past 7 days</div>
                  </div>
                  <div className="text-sm text-gray-600">74% conversion rate</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="bg-gray-900 rounded-lg p-4 text-white mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                  <span className="font-medium">Tom 🔥</span>
                </div>
                <p className="text-sm mb-2">Great tool</p>
                <p className="text-sm">Replaced a $30k employee with a good friend 🔥</p>
                <div className="mt-3 flex space-x-2">
                  <Badge className="bg-green-600 text-white text-xs">Best in class</Badge>
                  <Badge className="bg-blue-600 text-white text-xs">Recommended</Badge>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Content performance 📈</h4>
                <div className="text-2xl font-bold">180,223</div>
                <div className="text-sm text-gray-600">Total orders processed</div>
                <div className="text-sm text-green-600">↗ 89.1% past 30 days</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4">Top performing results 🔥</h4>
              <div className="space-y-4">
                {[
                  { metric: "351,556", label: "Revenue generated", change: "+89.1%" },
                  { metric: "84,789", label: "Calls answered", change: "+67.2%" },
                  { metric: "4,431", label: "Tables booked", change: "+45.8%" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <div className="font-bold">{item.metric}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                    <div className="text-sm text-green-600">{item.change}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  "Dude we're north of 25k revenue this week using this tool and tweaking slightly. I'm very
                  impressed. Already got two sales calls that came in Tuesday from all the engagement."
                </p>
                <div className="mt-2 text-sm text-gray-500">- Restaurant Owner</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}