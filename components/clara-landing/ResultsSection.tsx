import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "../../hooks/useInView"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ResultsSection() {
  const [resultsRef, resultsInView] = useInView()
  const [currentCard, setCurrentCard] = useState(0)
  const [copied, setCopied] = useState(false)

  const cards = [
    {
      header: (
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">TODAY</span>
        </div>
      ),
      content: (
        <>
          <p className="text-sm text-gray-600 mb-4">
            Writing content on LinkedIn can be a stressful experience. If I was starting again now, Repic AI would've saved me A LOT of stress and time.
          </p>
          <p className="text-sm text-gray-600 mb-6">— Matt Barker, 171,000 followers on LinkedIn</p>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-4">Content Performance 📊</h4>
            <div className="space-y-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: resultsInView ? '100%' : 0 }}
                        transition={{ duration: 1.5 }}
                        className="text-2xl font-bold"
                      >
                        4.8
                      </motion.div>
                      <div className="text-sm text-gray-600">User Rating</div>
                      <div className="text-sm text-green-600">↗ 4.6 Trustpilot Score</div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Click to copy metrics</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="text-sm text-gray-600">20,000+ creators trust us</div>
            </div>
          </div>
        </>
      )
    },
    {
      header: (
        <div className="bg-gray-900 rounded-lg p-4 text-white mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-gradient-to-r from-[#cbbbef] to-[#81aaef] rounded-full"></div>
            <span className="font-medium">Matt Swain 🔥</span>
          </div>
          <p className="text-sm mb-2">Been really enjoying Repic AI</p>
          <p className="text-sm">Especially the ideation tool & how it converts YouTube content into written text. So easy to use as well.</p>
          <div className="mt-3 flex space-x-2">
            <Badge className="bg-green-600 text-white text-xs">Verified User</Badge>
            <Badge className="bg-blue-600 text-white text-xs">Recommended</Badge>
          </div>
        </div>
      ),
      content: (
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">User Satisfaction 📈</h4>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: resultsInView ? '100%' : 0 }}
                  transition={{ duration: 1.5 }}
                  className="text-2xl font-bold"
                >
                  98%
                </motion.div>
                <div className="text-sm text-gray-600">User satisfaction rate</div>
                <div className="text-sm text-green-600">↗ 95% past 30 days</div>
              </TooltipTrigger>
              <TooltipContent>Click to copy metrics</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )
    },
    {
      header: (
        <h4 className="font-semibold mb-4">Top performing results 🔥</h4>
      ),
      content: (
        <>
          <div className="space-y-4">
            {[
              { metric: "500k+", label: "Posts for inspiration", change: "+89.1%" },
              { metric: "7", label: "Languages supported", change: "+67.2%" },
              { metric: "Unlimited", label: "Post generation", change: "+45.8%" },
            ].map((item, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex justify-between items-center">
                      <div>
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: resultsInView ? '100%' : 0 }}
                          transition={{ duration: 1.5 }}
                          className="font-bold"
                        >
                          {item.metric}
                        </motion.div>
                        <div className="text-sm text-gray-600">{item.label}</div>
                      </div>
                      <div className="text-sm text-green-600">{item.change}</div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Click to copy metrics</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          <div 
            className="mt-6 p-4 bg-gray-50 rounded-lg relative cursor-pointer group"
            onClick={() => {
              navigator.clipboard.writeText("Repic AI has been a game-changer for my digital marketing efforts. This tool simplifies the process of creating engaging and professional LinkedIn posts.")
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
            }}
          >
            <p className="text-sm text-gray-700">
              "Repic AI has been a game-changer for my digital marketing efforts. This tool simplifies the process of creating engaging and professional LinkedIn posts."
            </p>
            <div className="mt-2 text-sm text-gray-500">- Luis Kohl, Digital Marketer</div>
            <Copy className="absolute top-2 right-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            {copied && (
              <div className="absolute top-2 right-8 text-xs text-green-600">Copied!</div>
            )}
          </div>
        </>
      )
    }
  ]

  const nextCard = () => setCurrentCard((prev) => (prev + 1) % cards.length)
  const prevCard = () => setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length)

  return (
    <section
      id="results"
      ref={resultsRef}
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#cbbbef]/10 via-white to-[#81aaef]/15 relative overflow-hidden transition-all duration-1000 ${resultsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-[#cbbbef]/20 to-[#81aaef]/20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-[#cbbbef] to-[#81aaef] text-white rounded-full px-4 py-2 animate-bounce">📊 Proof</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">We're not all talk.</h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 mx-auto max-w-md">
                <CardContent className="p-6">
                  {cards[currentCard].header}
                  {cards[currentCard].content}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevCard}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextCard}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentCard === index ? 'bg-gray-900' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}