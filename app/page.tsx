"use client"

import { useEffect, useState } from "react"
import HeroSection from "../components/clara-landing/HeroSection"
import OffersSection from "../components/clara-landing/OffersSection"
import BenefitsSection from "../components/clara-landing/BenefitsSection"
import ResultsSection from "../components/clara-landing/ResultsSection"
import TestimonialsSection from "../components/clara-landing/TestimonialsSection"
import PricingSection from "../components/clara-landing/PricingSection"
import FaqSection from "../components/clara-landing/FaqSection"
import FooterSection from "../components/clara-landing/FooterSection"
import ContactFormModal from "../components/clara-landing/ContactFormModal"
//import VapiCallButton from "../components/clara-landing/VapiCallButton"
import { FormData } from "../types"

export default function ClaraLanding() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    restaurant: "",
    phone: "",
  })
  const [showContactForm, setShowContactForm] = useState(false)

  useEffect(() => {
    const assistant = "633d9c9a-bd65-4ea5-9841-c4ddba58d9ef"
    const apiKey = "a2faf751-b40e-42c1-9682-c7b7b42ba1f7"
    const buttonConfig = {} // Optional customization

    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"
    script.defer = true
    script.async = true

    script.onload = () => {
      if (window.vapiSDK) {
        window.vapiSDK.run({
          apiKey: apiKey,
          assistant: assistant,
          config: buttonConfig,
        })
      }
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script) // Cleanup on unmount
    }
  }, [])

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

      <HeroSection setShowContactForm={setShowContactForm} isLoading={isLoading} />
      <OffersSection />
      <BenefitsSection />
      <ResultsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FooterSection />
      {/* <VapiCallButton /> */}
      <ContactFormModal
        showContactForm={showContactForm}
        setShowContactForm={setShowContactForm}
        formData={formData}
        setFormData={setFormData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  )
}
