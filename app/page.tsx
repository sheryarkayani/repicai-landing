"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle, Star, X, Calendar, Sparkles, Plus, ChevronLeft, ChevronRight, Menu } from "lucide-react"

// Add this custom hook for scroll animations
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isInView]
}

export default function ClaraLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", restaurant: "", phone: "" })
  const [showContactForm, setShowContactForm] = useState(false)

  const testimonials = [
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

  const [offersRef, offersInView] = useInView()
  const [benefitsRef, benefitsInView] = useInView()
  const [resultsRef, resultsInView] = useInView()
  const [testimonialsRef, testimonialsInView] = useInView()
  const [pricingRef, pricingInView] = useInView()
  const [faqRef, faqInView] = useInView()
  const [footerRef, footerInView] = useInView()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Header with navigation */}
          <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex items-center justify-between bg-gray-900 rounded-full px-6 py-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-white font-semibold">Clara</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">
                  Benefits
                </a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
                <a href="#results" className="text-gray-300 hover:text-white transition-colors">
                  Results
                </a>
              </div>
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
              <Button variant="outline" size="sm" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full">
                Log In
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-900 rounded-2xl mt-2 p-4 md:hidden">
              <div className="flex flex-col space-y-4">
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors py-2">
                  Benefits
                </a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors py-2">
                  Pricing
                </a>
                <a href="#results" className="text-gray-300 hover:text-white transition-colors py-2">
                  Results
                </a>
              </div>
            </div>
          )}

          <div className="space-y-8 mt-32 animate-fade-in">
            {/* Social proof badge */}
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
              </div>
              <span>Join 3,300+ restaurant owners</span>
            </div>

            {/* Main headline with gradient effect */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Never miss a call, order,
              </span>
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent block">
                or customer again
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Replace your missed calls with an AI that answers every call, books tables, and grows your revenue 24/7
            </p>

            {/* CTA Button with Arrow */}
            <div className="flex justify-center items-center space-x-4">
              <div className="relative">
                {/* Orange Arrow */}
                <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-orange-500">
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="animate-bounce">
                    <path
                      d="M2 10 L30 10 M25 5 L30 10 L25 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <Button
                  size="lg"
                  disabled={isLoading}
                  onClick={() => setShowContactForm(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading...</span>
                    </div>
                  ) : (
                    "Try for free"
                  )}
                </Button>
              </div>
            </div>

            {/* Video preview with lazy loading */}
            <div className="my-16">
              <div className="relative mx-auto w-full max-w-4xl">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                      onClick={() => {
                        // Lazy load video when clicked
                        const video = document.createElement("iframe")
                        video.src = "https://www.youtube.com/embed/dQw4w9WgXcQ"
                        video.className = "w-full h-full"
                        video.allowFullscreen = true
                        const element = document.querySelector(".aspect-video")
                        if (element) {
                          element.innerHTML = ""
                          element.appendChild(video)
                        }
                      }}
                    >
                      <span className="text-white text-2xl">▶️</span>
                    </div>
                    <p className="text-white font-medium">How to never miss a call with Clara</p>
                    <p className="text-gray-300 text-sm mt-2">Watch Clara handle real restaurant calls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Clara Offers */}
      <section
        ref={offersRef}
        className={`py-16 px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 ${offersInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
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

      {/* Why use Clara */}
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

      {/* Social Proof - Moved under Benefits */}
      <section
        id="results"
        ref={resultsRef}
        className={`py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-1000 ${resultsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-purple-50/20 to-orange-50/20 animate-pulse"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gray-900 text-white rounded-full px-4 py-2 animate-bounce">📊 Proof</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">We're not all talk.</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Analytics Card */}
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

            {/* Message Card */}
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

            {/* Performance Card */}
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

      {/* Testimonials - Sliding Carousel */}
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

          {/* Sliding Testimonials */}
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

            {/* Navigation Buttons */}
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

            {/* Dots Indicator */}
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

      {/* Pricing */}
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

      {/* FAQ */}
      <section
        ref={faqRef}
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative transition-all duration-1000 ${faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
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
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
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

      {/* Final Footer CTA Section */}
      <section
        ref={footerRef}
        className={`py-16 px-4 sm:px-6 lg:px-8 text-center relative transition-all duration-1000 ${footerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Never miss a call, order, or customer again</h2>

          <div className="flex justify-center space-x-8 mb-8">
            <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Pricing
            </a>
            <a href="#results" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Results
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Schedule Your Demo</h3>
                <button onClick={() => setShowContactForm(false)}>
                  <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
                </button>
              </div>
              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  setIsLoading(true)
                  // Simulate API call
                  await new Promise((resolve) => setTimeout(resolve, 2000))
                  setIsLoading(false)
                  setShowContactForm(false)
                  alert("Demo scheduled! We'll contact you soon.")
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
                  <input
                    type="text"
                    required
                    value={formData.restaurant}
                    onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Scheduling...</span>
                    </div>
                  ) : (
                    "Schedule Demo"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">Founders: Joyce Turchetti & Samuel Beck</p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">in</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">𝕏</span>
              </div>
            </div>
            <p className="text-gray-400">Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
