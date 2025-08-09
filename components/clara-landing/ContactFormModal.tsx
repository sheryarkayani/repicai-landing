import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { FormData } from "../../types"

interface ContactFormModalProps {
  showContactForm: boolean
  setShowContactForm: (show: boolean) => void
  formData: FormData
  setFormData: (data: FormData) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export default function ContactFormModal({
  showContactForm,
  setShowContactForm,
  formData,
  setFormData,
  isLoading,
  setIsLoading,
}: ContactFormModalProps) {
  if (!showContactForm) return null

  return (
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cbbbef] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cbbbef] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
              <input
                type="text"
                required
                value={formData.restaurant}
                onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cbbbef] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cbbbef] focus:border-transparent"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#cbbbef] to-[#81aaef] hover:from-[#81aaef] hover:to-[#cbbbef] text-white rounded-lg py-3 shadow-lg transition-all duration-300"
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
  )
}