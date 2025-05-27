import { Phone } from "lucide-react"
import { useInView } from "../../hooks/useInView"

export default function FooterSection() {
  const [footerRef, footerInView] = useInView()

  return (
    <>
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
    </>
  )
}