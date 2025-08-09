import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { useInView } from "../../hooks/useInView"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "How does Repic AI generate LinkedIn content?",
    answer: "Repic AI uses advanced AI technology to analyze successful LinkedIn posts and your writing style. Simply provide a topic or idea, and our AI will generate engaging posts that match your voice and resonate with your audience."
  },
  {
    question: "Can I customize the writing style of my posts?",
    answer: "Absolutely! Repic AI can adapt to your unique writing style or mimic the style of your favorite creators. You can also choose from various tone options like professional, casual, inspirational, or thought-provoking."
  },
  {
    question: "How many posts can I create with Repic AI?",
    answer: "With our Pro plan, you get unlimited post generation. Our free trial includes 5 AI-generated posts per month, which is perfect for testing the platform and seeing the quality of content we produce."
  },
  {
    question: "Does Repic AI help with post scheduling?",
    answer: "Yes! Repic AI includes smart scheduling features that let you plan and schedule your posts for optimal engagement times. You can schedule posts for weeks in advance and maintain a consistent posting schedule."
  },
  {
    question: "Can I analyze my post performance?",
    answer: "Definitely! Repic AI provides detailed analytics and insights about your post performance, including engagement rates, reach, and audience insights. This helps you understand what content works best for your audience."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a free trial that includes 5 AI-generated posts per month with no credit card required. You can upgrade to our Pro plan anytime to unlock unlimited features."
  }
]

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [faqRef, faqInView] = useInView()

  return (
    <section
      ref={faqRef}
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#cbbbef]/8 via-white to-[#81aaef]/10 relative transition-all duration-1000 ${faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-[#cbbbef]/5 to-transparent"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 hover:border-[#cbbbef]/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-[#cbbbef]/5 hover:to-[#81aaef]/5 transition-all duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <Plus
                    className={`w-5 h-5 text-[#cbbbef] transition-transform duration-300 ${openFaq === index ? "rotate-45" : ""}`}
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
  )
}