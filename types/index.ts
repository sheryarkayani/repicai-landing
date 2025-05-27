export interface Testimonial {
  text: string
  author: string
  restaurant: string
  rating: number
}

export interface FormData {
  name: string
  email: string
  restaurant: string
  phone: string
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface Faq {
  question: string
  answer: string
}

// Define the Vapi instance type based on @vapi-ai/web
export interface VapiInstance {
  start: (assistantId: string) => void
  stop: () => void
  on: (event: string, callback: (data?: any) => void) => void
}