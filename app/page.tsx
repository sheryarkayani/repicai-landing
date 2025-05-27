"use client"

import { useState } from "react"
import HeroSection from "../components/clara-landing/HeroSection"
import OffersSection from "../components/clara-landing/OffersSection"
import BenefitsSection from "../components/clara-landing/BenefitsSection"
import ResultsSection from "../components/clara-landing/ResultsSection"
import TestimonialsSection from "../components/clara-landing/TestimonialsSection"
import PricingSection from "../components/clara-landing/PricingSection"
import FaqSection from "../components/clara-landing/FaqSection"
import FooterSection from "../components/clara-landing/FooterSection"
import ContactFormModal from "../components/clara-landing/ContactFormModal"
import VapiCallButton from "../components/clara-landing/VapiCallButton"
import { FormData } from "../types"

export default function ClaraLanding() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", restaurant: "", phone: "" })
  const [showContactForm, setShowContactForm] = useState(false)

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
      <VapiCallButton />
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