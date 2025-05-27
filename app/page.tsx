"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle, Star, Menu, X, Calendar, Sparkles, Plus } from "lucide-react"

export default function ClaraLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">Clara</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#results" className="text-gray-300 hover:text-white transition-colors">
                Results
              </a>
              <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6">Log In</Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-300">
                Features
              </a>
              <a href="#pricing" className="block text-gray-300">
                Pricing
              </a>
              <a href="#results" className="block text-gray-300">
                Results
              </a>
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 rounded-full">Log In</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-gray-600 font-medium">Join 500+ restaurants</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Never miss a call, on autopilot
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Replace your $3,000/month staff with an AI that handles calls, orders, and reservations in seconds.
            </p>

            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-4 text-lg font-medium mb-12"
            >
              Try for free
            </Button>

            {/* Hero Visual - Restaurant Dashboard */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border">
                <div className="bg-gray-50 px-6 py-4 border-b flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">Clara Dashboard - Tony's Pizzeria</span>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">47</div>
                      <div className="text-sm text-gray-600">Calls answered today</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">$1,240</div>
                      <div className="text-sm text-gray-600">Revenue generated</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-600">23</div>
                      <div className="text-sm text-gray-600">Tables booked</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">Live Call - Customer booking table</span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>
                        <strong>Customer:</strong> "Hi, I'd like to book a table for 4 tonight at 7 PM"
                      </p>
                      <p>
                        <strong>Clara:</strong> "Perfect! I have availability at 7 PM. Can I get your name and phone
                        number?"
                      </p>
                      <div className="mt-2 text-green-600 font-medium">
                        ✓ Booking confirmed • Customer added to database
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Clara Offers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clara offers</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
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

      {/* Why use Clara */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gray-900 text-white rounded-full px-4 py-2">⭐ Benefits</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why use Clara?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes us different to human staff, expensive phone systems and other alternatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200">
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

            <Card className="border-2 border-gray-200">
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

      {/* Social Proof */}
      <section id="results" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gray-900 text-white rounded-full px-4 py-2">📊 Proof</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">We're not all talk.</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Analytics Card */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
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

            {/* Message Card */}
            <Card className="border border-gray-200">
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

            {/* Performance Card */}
            <Card className="border border-gray-200">
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

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gray-900 text-white rounded-full px-4 py-2">😊 Testimonials</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">See what other restaurant owners are saying about Clara.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
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
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
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
            <Card className="border-2 border-gray-200 relative">
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

            <Card className="border-2 border-gray-200 relative">
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

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                question: "How is Clara better than hiring staff?",
                answer:
                  "Clara works 24/7 without breaks, never gets sick, and costs less than minimum wage. Plus, it never forgets to upsell or take accurate orders.",
              },
              {
                question: "Do I need to pay for any other tools?",
                answer:
                  "No, Clara integrates with your existing phone system and POS. No additional hardware or software required.",
              },
              {
                question: "Do I need to upload the menu myself?",
                answer:
                  "We'll help you set up your menu during onboarding. It takes less than 30 minutes and you can update it anytime.",
              },
              {
                question: "How many calls do I need to grow?",
                answer:
                  "Most restaurants see ROI with just 2-3 additional orders per day. Clara typically captures 5-10 calls that would have been missed.",
              },
              {
                question: "What is your refund policy?",
                answer:
                  "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your first month completely.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <Plus
                      className={`w-5 h-5 text-gray-600 transition-transform ${openFaq === index ? "rotate-45" : ""}`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Never miss a call, on autopilot</h2>

          <div className="flex justify-center space-x-8 mb-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#results" className="text-gray-600 hover:text-gray-900 transition-colors">
              Results
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 Clara by Trendtial. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
