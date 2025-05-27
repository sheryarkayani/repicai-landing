import { useState, useEffect, useCallback } from "react"
import { Phone, X } from "lucide-react"
import Vapi from "@vapi-ai/web"
import { VapiInstance } from "../../types"

export default function VapiCallButton() {
  const [vapiInstance, setVapiInstance] = useState<VapiInstance | null>(null)
  const [isMicrophoneOn, setIsMicrophoneOn] = useState(false)
  const [vapiError, setVapiError] = useState<string | null>(null)

  // Initialize Vapi instance
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY
    const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID

    if (!apiKey || !assistantId) {
      setVapiError("Missing Vapi API key or assistant ID")
      return
    }

    try {
      const vapi = new Vapi(apiKey)
      setVapiInstance(vapi)

      // Set up event listeners
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

    return () => {
      // Cleanup: Stop the call if it's active
      if (vapiInstance) {
        try {
          vapiInstance.stop()
        } catch (error) {
          console.error("Error stopping Vapi instance:", error)
        }
      }
    }
  }, []) // Empty dependency array ensures this runs only once on mount

  // Function to check microphone permissions
  const checkMicrophonePermission = async (): Promise<boolean> => {
    try {
      const permissionStatus = await navigator.permissions.query({ name: "microphone" as PermissionName })
      return permissionStatus.state === "granted"
    } catch (error) {
      console.error("Error checking microphone permissions:", error)
      return false
    }
  }

  // Toggle the call
  const toggleCall = useCallback(async () => {
    if (!vapiInstance) {
      setVapiError("Voice assistant not initialized")
      return
    }

    const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID
    if (!assistantId) {
      setVapiError("Missing Vapi assistant ID")
      return
    }

    try {
      // Check microphone permissions before starting the call
      if (!isMicrophoneOn) {
        const hasPermission = await checkMicrophonePermission()
        if (!hasPermission) {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
          stream.getTracks().forEach((track) => track.stop()) // Immediately stop the stream after requesting permission
        }
      }

      if (isMicrophoneOn) {
        vapiInstance.stop()
      } else {
        vapiInstance.start(assistantId)
      }
    } catch (error: any) {
      console.error("Error toggling call:", error)
      if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
        setVapiError("Microphone access denied. Please allow microphone permissions.")
      } else {
        setVapiError("Failed to toggle call")
      }
      setIsMicrophoneOn(false)
    }
  }, [vapiInstance, isMicrophoneOn])

  const dismissError = () => {
    setVapiError(null)
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-2 z-50">
      {vapiError && (
        <div className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
          <span>{vapiError}</span>
          <button onClick={dismissError} className="text-white hover:text-gray-200">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      <button
        className={
          `w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ` +
          `${isMicrophoneOn ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'} ` +
          `${!vapiInstance ? 'opacity-50 cursor-not-allowed' : ''}`
        }
        onClick={toggleCall}
        disabled={!vapiInstance}
        title={isMicrophoneOn ? 'End call' : 'Start call'}
      >
        <Phone className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}