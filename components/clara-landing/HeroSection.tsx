import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

interface HeroSectionProps {
  setShowContactForm: (show: boolean) => void
  isLoading: boolean
}

export default function HeroSection({ setShowContactForm, isLoading }: HeroSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    if (!videoLoaded) {
      const video = document.createElement("iframe")
      video.src = "https://www.youtube.com/embed/VvIicY1Hzgc?autoplay=1"
      video.className = "w-full h-full"
      video.allowFullscreen = true
      video.allow = "autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      const element = document.querySelector(".aspect-video")
      if (element) {
        element.innerHTML = ""
        element.appendChild(video)
        setVideoLoaded(true)
      }
    }
  }, [videoLoaded])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
          <div className="flex items-center justify-between bg-[#0C0C0C] rounded-full px-4 py-2 shadow-md" style={{ opacity: 1 }}>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#FF6200] rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 Specifications: 3.59 8 8-3.59 8-8 8zm-2-13h4v6h-4zm0 8h4v2h-4z"/>
                </svg>
              </div>
              <span className="text-white font-bold text-lg">Clara</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#benefits" className="text-[#A1A1A1] hover:text-white transition-colors font-medium">
                Benefits
              </a>
              <a href="#pricing" className="text-[#A1A1A1] hover:text-white transition-colors font-medium">
                Pricing
              </a>
              <a href="#results" className="text-[#A1A1A1] hover:text-white transition-colors font-medium">
                Results
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 hover:bg-gray-700 rounded-full transition-colors">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            <Button variant="outline" size="sm" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-2 shadow-md">
              Log In
            </Button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="absolute top-full left-4 right-4 bg-[#0C0C0C] rounded-2xl mt-2 p-4 md:hidden shadow-md">
            <div className="flex flex-col space-y-4">
              <a href="#benefits" className="text-[#A1A1A1] hover:text-white transition-colors py-2 font-medium">
                Benefits
              </a>
              <a href="#pricing" className="text-[#A1A1A1] hover:text-white transition-colors py-2 font-medium">
                Pricing
              </a>
              <a href="#results" className="text-[#A1A1A1] hover:text-white transition-colors py-2 font-medium">
                Results
              </a>
            </div>
          </div>
        )}

        <div className="space-y-8 mt-32 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
            </div>
            <span>Join 3,300+ restaurant owners</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Never miss a call, order,
            </span>
            <span className="bg-gradient-to-r from-orange-500 via-[#FF6200] to-orange-500 bg-clip-text text-transparent block">
              or customer again
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Replace your missed calls with an AI that answers every call, books tables, and grows your revenue 24/7
          </p>

          <div className="flex justify-center items-center space-x-4">
            <div className="relative">
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-[#FF6200]">
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
                className="bg-[#FF6200] hover:bg-orange-600 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
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

          <div className="my-16">
            <div className="relative mx-auto w-full max-w-4xl">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="text-center">
                  <div
                    className="w-16 h-16 bg-[#FF6200] rounded-full mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
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
  )
}