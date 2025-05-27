import { useState, useEffect } from "react"
import { Phone } from "lucide-react"

export default function VapiCallButton() {
  const [vapiInstance, setVapiInstance] = useState<any>(null)
  const [isMicrophoneOn, setIsMicrophoneOn] = useState(false)
  const [vapiError, setVapiError] = useState<string | null>(null)

  useEffect(() => {
    const assistant = "633d9c9a-bd65-4ea5-9841-c4ddba58d9ef"
    const apiKey = "a2faf751-b40e-42c1-9682-c7b7b42ba1f7"
    const buttonConfig = {}

    if (document.querySelector('script[src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"]')) {
      return
    }

    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"
    script.defer = true
    script.async = true

    script.onload = () => {
      if (!(window as any).vapiSDK) {
        setVapiError("Failed to load Vapi SDK")
        return
      }

      try {
        const vapi = (window as any).vapiSDK.run({
          apiKey: apiKey,
          assistant: assistant,
          config: buttonConfig,
        })

        if (!vapi) {
          setVapiError("Failed to initialize Vapi instance")
          return
        }

        setVapiInstance(vapi)
        console.log("Vapi initialized successfully:", vapi)

        vapi.on("call-start", () => {
          console.log("Vapi call started")
          setIsMicrophoneOn(true)
          setVapiError(null)
        })

        vapi.on("call-end", () => {
          console.log("Vapi call ended")
          setIsMicrophoneOn(false)
          setVapiError(null)
        })

        vapi.on("error", (error: any) => {
          console.error("Vapi error:", error)
          setVapiError("An error occurred with the voice assistant")
          setIsMicrophoneOn(false)
        })
      } catch (error) {
        console.error("Error initializing Vapi:", error)
        setVapiError("Failed to initialize voice assistant")
      }
    }

    script.onerror = () => {
      console.error("Failed to load Vapi script")
      setVapiError("Failed to load voice assistant script")
    }

    document.body.appendChild(script)

    return () => {
      if (vapiInstance) {
        try {
          vapiInstance.stop()
        } catch (error) {
          console.error("Error stopping Vapi instance:", error)
        }
      }
      const scriptElement = document.querySelector('script[src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"]')
      if (scriptElement) {
        document.body.removeChild(scriptElement)
      }
    }
  }, [])

  const toggleMicrophone = () => {
    if (!vapiInstance) {
      setVapiError("Voice assistant not initialized")
      return
    }

    try {
      if (isMicrophoneOn) {
        vapiInstance.stop()
      } else {
        vapiInstance.start()
      }
    } catch (error) {
      console.error("Error toggling microphone:", error)
      setVapiError("Failed to toggle microphone")
      setIsMicrophoneOn(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-2">
      {vapiError && (
        <div className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
          {vapiError}
        </div>
      )}
      <button
        className={
          `w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ` +
          `${isMicrophoneOn ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'} ` +
          `${!vapiInstance ? 'opacity-50 cursor-not-allowed' : ''}`
        }
        onClick={toggleMicrophone}
        disabled={!vapiInstance}
        title={isMicrophoneOn ? 'Turn off microphone' : 'Turn on microphone'}
      >
        <Phone className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}