import { Phone } from "lucide-react"
import { useInView } from "../../hooks/useInView"

export default function FooterSection() {
  const [footerRef, footerInView] = useInView()

  return (
    <>
      <section
        ref={footerRef}
        className={`py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-[#81aaef]/5 via-white to-[#cbbbef]/10 relative transition-all duration-1000 ${footerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#cbbbef]/8 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-16 h-16 bg-gradient-to-r from-[#cbbbef] to-[#81aaef] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Never miss a LinkedIn opportunity again</h2>

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

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">Repic AI the future of LinkedIn Content Creation</p>
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
    </>
  )
}