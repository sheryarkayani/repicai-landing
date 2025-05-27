import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { useInView } from "../../hooks/useInView"
import { Faq } from "../../types"

const faqs: Faq[] = [
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
]

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [faqRef, faqInView] = useInView()

  return (
    <section
      ref={faqRef}
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative transition-all duration-1000 ${faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
  )
}