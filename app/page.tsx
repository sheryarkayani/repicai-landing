"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/clara-landing/HeroSection"
import OffersSection from "@/components/clara-landing/OffersSection"
import BenefitsSection from "@/components/clara-landing/BenefitsSection"
import ResultsSection from "@/components/clara-landing/ResultsSection"
import TestimonialsSection from "@/components/clara-landing/TestimonialsSection"
import ProductFeaturesSection from "@/components/clara-landing/ProductFeaturesSection"
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
      width: "auto",
      height: "auto",
      idle: {
        color: "rgb(255, 153, 0)",
        type: "pill",
        title: "Try Clara",
        subtitle: window.innerWidth <= 480 ? "Demo" : null,
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg",
      },
      loading: {
        color: "rgb(255, 193, 7)",
        type: "pill",
        title: "Connecting",
        subtitle: window.innerWidth <= 480 ? "Wait" : null,
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg",
      },
      active: {
        color: "rgb(220, 53, 69)",
        type: "pill",
        title: "Clara Live",
        subtitle: window.innerWidth <= 480 ? "Tap End" : null,
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg",
      },
    }

    const script = document.createElement("script") as HTMLScriptElement
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"
    script.defer = true
    script.async = true

    const style = document.createElement("style")
    style.textContent = `
      .vapi-btn,
      .vapi-call-widget,
      [id*="vapi"],
      [class*="vapi"] {
        position: fixed !important;
        z-index: 2147483647 !important;
        pointer-events: auto !important;
      }

      .vapi-btn-pill {
        border-radius: 30px !important;
        padding: 12px 20px !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
        transition: all 0.3s ease !important;
        min-height: 60px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        white-space: nowrap !important;
        overflow: visible !important;
      }

      .vapi-btn-pill:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(0,0,0,0.2) !important;
      }

      .vapi-btn .text-container {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        flex-grow: 1 !important;
        overflow: visible !important;
        text-align: center !important;
      }

      .vapi-btn .title,
      .vapi-btn .subtitle {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        font-weight: 600 !important;
        text-align: center !important;
        line-height: 1.3 !important;
        color: white !important;
        text-shadow: 0 1px 2px rgba(0,0,0,0.1) !important;
        display: block !important;
        overflow: visible !important;
        white-space: nowrap !important;
        margin: 0 !important;
        padding: 0 4px !important;
      }

      .vapi-btn .title {
        font-size: 14px !important;
        margin-bottom: 2px !important;
      }

      .vapi-btn .subtitle {
        font-size: 12px !important;
        opacity: 0.9 !important;
        font-weight: 500 !important;
      }

      .vapi-btn .icon {
        margin-right: 8px !important;
        flex-shrink: 0 !important;
      }

      video,
      video *,
      [class*="video"],
      [class*="video"] *,
      .hero-section,
      .hero-section *,
      [class*="hero"],
      [class*="hero"] *,
      .relative,
      .absolute,
      section,
      section *,
      div[class*="flex"],
      div[class*="relative"],
      div[class*="absolute"] {
        z-index: 1 !important;
      }

      @media (min-width: 1201px) {
        .vapi-call-widget,
        .vapi-btn {
          bottom: 40px !important;
          right: 40px !important;
        }
        .vapi-btn-pill {
          min-width: 200px !important;
          max-width: 250px !important;
          padding: 14px 24px !important;
        }
        .vapi-btn .title {
          font-size: 15px !important;
        }
        .vapi-btn .subtitle {
          font-size: 13px !important;
        }
      }

      @media (min-width: 769px) and (max-width: 1200px) {
        .vapi-call-widget,
        .vapi-btn {
          bottom: 60px !important;
          right: 30px !important;
          z-index: 2147483648 !important;
        }
        .vapi-btn-pill {
          min-width: 180px !important;
          max-width: 220px !important;
          padding: 12px 20px !important;
        }
        .vapi-btn .title {
          font-size: 14px !important;
        }
        .vapi-btn .subtitle {
          font-size: 12px !important;
        }
      }

      @media (max-width: 768px) {
        .vapi-call-widget,
        .vapi-btn {
          bottom: 80px !important;
          right: 20px !important;
          z-index: 2147483648 !important;
        }
        .vapi-btn-pill {
          min-width: 160px !important;
          max-width: 180px !important;
          padding: 10px 16px !important;
          min-height: 55px !important;
        }
        .vapi-btn .title {
          font-size: 13px !important;
          line-height: 1.2 !important;
        }
        .vapi-btn .subtitle {
          font-size: 11px !important;
          line-height: 1.2 !important;
        }
      }

      @media (max-width: 480px) {
        .vapi-call-widget,
        .vapi-btn {
          bottom: 70px !important;
          right: 15px !important;
        }
        .vapi-btn-pill {
          min-width: 140px !important;
          max-width: 160px !important;
          padding: 8px 14px !important;
          min-height: 50px !important;
        }
        .vapi-btn .title {
          font-size: 12px !important;
          line-height: 1.1 !important;
        }
        .vapi-btn .subtitle {
          font-size: 10px !important;
          line-height: 1.1 !important;
        }
      }

      @media (max-width: 360px) {
        .vapi-btn-pill {
          min-width: 120px !important;
          max-width: 140px !important;
          padding: 6px 12px !important;
          min-height: 45px !important;
        }
        .vapi-btn .title {
          font-size: 11px !important;
        }
        .vapi-btn .subtitle {
          font-size: 9px !important;
        }
      }

      .vapi-btn * {
        visibility: visible !important;
        opacity: 1 !important;
        display: block !important;
        position: relative !important;
      }

      .vapi-btn > * {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        gap: 4px !important;
      }
    `
    document.head.appendChild(style)

    script.onload = () => {
      if ((window as any).vapiSDK) {
        const vapiInstance = (window as any).vapiSDK.run({
          apiKey,
          assistant: assistantId,
          config: buttonConfig,
        })

        const ensureTextVisibility = () => {
          const vapiBtn = document.querySelector(".vapi-btn")
          if (vapiBtn) {
            const title = vapiBtn.querySelector(".title") as HTMLElement
            const subtitle = vapiBtn.querySelector(".subtitle") as HTMLElement
            if (title) {
              title.style.visibility = "visible"
              title.style.opacity = "1"
            }
            if (subtitle) {
              subtitle.style.visibility = "visible"
              subtitle.style.opacity = "1"
            }
          }
        }

        setTimeout(ensureTextVisibility, 500)
        setTimeout(ensureTextVisibility, 2000)

        if (vapiInstance) {
          vapiInstance.on('call-start', () => {
            console.log('Clara AI call started')
          })

          vapiInstance.on('call-end', () => {
            console.log('Clara AI call ended')
          })

          vapiInstance.on('error', (error: any) => {
            console.error('Clara AI error:', error)
          })
        }
      } else {
        console.error("Vapi SDK failed to load")
      }
    }

    script.onerror = () => {
      console.error("Failed to load Vapi script")
    }

    document.body.appendChild(script)

    const handleResize = () => {
      const vapiWidget = document.querySelector('.vapi-btn') || 
                        document.querySelector('.vapi-call-widget')
      if (vapiWidget) {
        setTimeout(() => {
          const newConfig = {
            ...buttonConfig,
            idle: {
              ...buttonConfig.idle,
              title: "Try Clara",
              subtitle: window.innerWidth <= 480 ? "Demo" : null,
            },
            loading: {
              ...buttonConfig.loading,
              title: "Connecting",
              subtitle: window.innerWidth <= 480 ? "Wait" : null,
            },
            active: {
              ...buttonConfig.active,
              title: "Clara Live",
              subtitle: window.innerWidth <= 480 ? "Tap End" : null,
            }
          }
          
          if ((window as any).vapiSDK) {
            (window as any).vapiSDK.run({
              apiKey,
              assistant: assistantId,
              config: newConfig,
            })
          }
        }, 100)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      const scriptElement = document.querySelector('script[src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"]')
      if (scriptElement) {
        document.body.removeChild(scriptElement)
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white relative">
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
      <ProductFeaturesSection />
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