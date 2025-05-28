"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/clara-landing/HeroSection"
import OffersSection from "@/components/clara-landing/OffersSection"
import BenefitsSection from "@/components/clara-landing/BenefitsSection"
import ResultsSection from "@/components/clara-landing/ResultsSection"
import TestimonialsSection from "@/components/clara-landing/TestimonialsSection"
import PricingSection from "@/components/clara-landing/PricingSection"
import FaqSection from "@/components/clara-landing/FaqSection"
import FooterSection from "@/components/clara-landing/FooterSection"
import ContactFormModal from "@/components/clara-landing/ContactFormModal"
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
    const apiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY
    const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID

    if (!apiKey || !assistantId) {
      console.error("Missing Vapi API key or assistant ID")
      return
    }

    const buttonConfig = {
      position: "bottom-right",
      offset: "40px",
      width: "60px",
      height: "60px",
      style: {
        zIndex: 2147483647, // Maximum z-index
      },
      idle: {
        color: "rgb(255, 153, 0)", // Orange background
        type: "pill",
        title: "Experience Clara Live",
        subtitle: "Connect with our AI Assistant",
        icon: "https://img.icons8.com/ios-filled/50/ffffff/phone.png", // White phone icon
      },
    }

    const script = document.createElement("script") as HTMLScriptElement
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"
    script.defer = true
    script.async = true

    const style = document.createElement("style")
    style.textContent = `
      .vapi-call-widget {
        position: fixed !important;
        z-index: 2147483647 !important;
        pointer-events: auto !important;
      }
      @media (max-width: 1200px) {
        .vapi-call-widget {
          bottom: 70px !important;
          right: 20px !important;
          transform: scale(1) !important;
        }
        video, .hero-section {
          z-index: 1 !important; /* Lower z-index for video and its container */
        }
      }
    `
    document.head.appendChild(style)

    script.onload = () => {
      if ((window as any).vapiSDK) {
        (window as any).vapiSDK.run({
          apiKey,
          assistant: assistantId,
          config: buttonConfig,
        })
      } else {
        console.error("Vapi SDK failed to load")
      }
    }

    script.onerror = () => {
      console.error("Failed to load Vapi script")
    }

    document.body.appendChild(script)

    return () => {
      const scriptElement = document.querySelector('script[src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"]')
      if (scriptElement) {
        document.body.removeChild(scriptElement)
      }
      document.head.removeChild(style) // Cleanup style
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