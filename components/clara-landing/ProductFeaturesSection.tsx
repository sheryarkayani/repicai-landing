import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useInView } from "../../hooks/useInView"
import { 
  Sparkles, 
  MessageSquare, 
  Brain, 
  Target, 
  Calendar, 
  BarChart3, 
  Zap,
  Heart,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react"

export default function ProductFeaturesSection() {
  const [featuresRef, featuresInView] = useInView()

  const postTypes = [
    { 
      icon: "😍", 
      name: "Inspiring Post", 
      color: "from-[#cbbbef] to-[#81aaef]",
      description: "Motivate and inspire your audience"
    },
    { 
      icon: "🧠", 
      name: "Instructive post", 
      color: "from-[#81aaef] to-[#cbbbef]",
      description: "Share knowledge and educate",
      active: true
    },
    { 
      icon: "💭", 
      name: "Introspective post", 
      color: "from-[#cbbbef]/70 to-[#81aaef]/70",
      description: "Reflect and share insights"
    },
  ]

  const features = [
    {
      icon: Brain,
      title: "Generate ideas in seconds",
      description: "No more time lost brainstorming content ideas for LinkedIn. Repic AI will bring LinkedIn post ideas for business to life in seconds.",
      highlight: "Idea generator",
      image: "idea-generator"
    },
    {
      icon: Target,
      title: "Craft posts that resonate with your audience",
      description: "Write standout posts with our AI LinkedIn Posts Generator powered by most advanced generative models and an internal algorithm trained for LinkedIn.",
      highlight: "AI Post Generation",
      image: "post-generator"
    },
    {
      icon: Calendar,
      title: "Import your favorite LinkedIn posts",
      description: "You have a type of posts that you publish regularly (e.g., job offers, new podcast episodes, etc.)? Is there a creator whose post structure you love? Simply use our templates feature to make your posts the most accurate!",
      highlight: "My templates",
      image: "templates"
    },
    {
      icon: Clock,
      title: "Go live anytime (100% safe)",
      description: "Publish your posts right away, or schedule them for later. Repic AI is a verified partner of LinkedIn ✅",
      highlight: "Schedule post",
      image: "scheduling"
    },
    {
      icon: BarChart3,
      title: "Analyze your success and identify opportunities",
      description: "With Repic AI you can access all your LinkedIn metrics in one place. With advanced information and analysis.",
      highlight: "Analytics",
      image: "analytics"
    }
  ]

  return (
    <section
      id="features"
      ref={featuresRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#cbbbef]/10 to-[#81aaef]/20 relative transition-all duration-1000 ${featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#cbbbef]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-[#cbbbef] to-[#81aaef] text-white rounded-full px-6 py-3 text-sm font-medium">
            ⚡ Product Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover our AI LinkedIn Post Generator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The all-in-one platform for effortlessly creating engaging content on LinkedIn.
          </p>
        </div>

        {/* Post Types Selection */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#cbbbef]/20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Select post types for each use case
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our AI allows you to craft LinkedIn posts of various types: actionable, inspiring, introspective, and promotional. This way, it covers all your needs.
                  </p>
                  
                  <div className="space-y-4">
                    {postTypes.map((type, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-4 p-4 rounded-2xl border-2 transition-all duration-300 ${
                          type.active 
                            ? 'border-[#cbbbef] bg-gradient-to-r from-[#cbbbef]/10 to-[#81aaef]/10 shadow-lg' 
                            : 'border-gray-200 bg-white/50 hover:border-[#cbbbef]/50'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${type.color} flex items-center justify-center text-xl shadow-md`}>
                          {type.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{type.name}</h4>
                          <p className="text-sm text-gray-600">{type.description}</p>
                        </div>
                        {type.active && (
                          <CheckCircle className="w-6 h-6 text-[#cbbbef] ml-auto" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#cbbbef]/20 to-[#81aaef]/20 rounded-2xl p-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="font-semibold text-gray-900 mb-4">Add a theme</h4>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="SEO" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cbbbef] focus:border-transparent"
                        />
                        <Button size="sm" className="absolute right-2 top-2 bg-[#cbbbef] hover:bg-[#81aaef] text-white">
                          <Sparkles className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="mt-6">
                        <Badge className="bg-gradient-to-r from-[#cbbbef] to-[#81aaef] text-white mb-4">
                          ✨ Idea generator
                        </Badge>
                        <div className="grid grid-cols-1 gap-3">
                          <div className="bg-gray-50 rounded-lg p-3 hover:bg-gradient-to-r hover:from-[#cbbbef]/5 hover:to-[#81aaef]/5 transition-all cursor-pointer">
                            <h5 className="font-medium text-sm">5 essential tools for monitoring and analyzing your SEO performance.</h5>
                            <p className="text-xs text-gray-500 mt-1">Useful resources</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3 hover:bg-gradient-to-r hover:from-[#cbbbef]/5 hover:to-[#81aaef]/5 transition-all cursor-pointer">
                            <h5 className="font-medium text-sm">9 little-known SEO techniques to rank first on Google.</h5>
                            <p className="text-xs text-gray-500 mt-1">Explanation / analysis</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <Badge className="mb-4 bg-gradient-to-r from-[#cbbbef] to-[#81aaef] text-white rounded-full px-4 py-2">
                  {feature.highlight}
                </Badge>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {feature.description}
                </p>
                <Button className="bg-gradient-to-r from-[#cbbbef] to-[#81aaef] hover:from-[#81aaef] hover:to-[#cbbbef] text-white rounded-full px-8 py-3 shadow-lg transition-all duration-300 hover:scale-105">
                  Try Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-gradient-to-br from-[#cbbbef]/20 to-[#81aaef]/20 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    {/* Feature Preview Cards */}
                    {feature.image === 'post-generator' && (
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <Zap className="w-5 h-5 text-[#cbbbef]" />
                          <span className="font-medium">My post</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                          <h4 className="font-medium mb-2">Start with the basics 👍</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            The first step is to understand the editing format you're using.
                          </p>
                          <p className="text-sm text-gray-600">
                            Without that, it's impossible to have a professional rendering that's consistent with your editorial line 😊
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-4 text-sm text-gray-500">
                            <span>😊 Emojis</span>
                            <span>📷 Add media</span>
                          </div>
                          <Button size="sm" className="bg-gradient-to-r from-[#cbbbef] to-[#81aaef] text-white">
                            🔄 Regenerate
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {feature.image === 'templates' && (
                      <div>
                        <Badge className="mb-4 bg-gradient-to-r from-[#cbbbef] to-[#81aaef] text-white">
                          ✨ My templates
                        </Badge>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gradient-to-br from-[#cbbbef]/10 to-[#81aaef]/10 rounded-lg p-4 border-2 border-dashed border-[#cbbbef]/30">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-[#cbbbef] to-[#81aaef] rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-2xl">+</span>
                              </div>
                              <p className="text-sm font-medium text-gray-700">New template</p>
                            </div>
                          </div>
                          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="space-y-2 text-xs text-gray-600">
                              <p>[Activity] has transformed my life:</p>
                              <p>- [benefit 1]</p>
                              <p>- [benefit 2]</p>
                              <p>- [benefit 3]</p>
                              <p>- [benefit 4]</p>
                              <p>- [benefit 5]</p>
                              <p className="mt-3">I began by [initial goal].</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {feature.image === 'scheduling' && (
                      <div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-medium">Schedule post</h4>
                            <button className="text-gray-400">×</button>
                          </div>
                          <p className="text-sm text-gray-500 mb-4">Mon, Mar 24 to 09:00 AM, in your timezone.</p>
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-medium">Date</label>
                              <input type="date" value="2025-03-24" className="w-full mt-1 p-2 border rounded" />
                            </div>
                            <div>
                              <label className="text-sm font-medium">Time</label>
                              <div className="flex space-x-2 mt-1">
                                <input type="number" value="08" className="w-16 p-2 border rounded text-center" />
                                <input type="number" value="00" className="w-16 p-2 border rounded text-center" />
                                <select className="p-2 border rounded">
                                  <option>AM</option>
                                  <option>PM</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between mt-6">
                            <Button variant="outline">Back</Button>
                            <Button className="bg-gradient-to-r from-[#cbbbef] to-[#81aaef] text-white">Schedule</Button>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {feature.image === 'analytics' && (
                      <div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Heart className="w-5 h-5 text-red-500" />
                              <span className="font-bold text-lg">+1,836</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="w-5 h-5 text-[#cbbbef]" />
                              <span className="font-bold text-lg">+746</span>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-[#cbbbef] to-[#81aaef] rounded-lg p-4 h-32 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#cbbbef]/50 to-transparent"></div>
                            <div className="relative">
                              <div className="text-white text-xs mb-2">Growth Analytics</div>
                              <div className="flex justify-between text-xs text-white/80">
                                <span>APR</span>
                                <span>MAY</span>
                                <span>JUN</span>
                                <span>JUL</span>
                                <span>AUG</span>
                                <span>SEP</span>
                                <span>OCT</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {feature.image === 'idea-generator' && (
                      <div>
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-r from-[#cbbbef] to-[#81aaef] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Brain className="w-10 h-10 text-white" />
                          </div>
                          <h4 className="font-bold text-lg mb-2">AI Idea Generator</h4>
                          <p className="text-gray-600 text-sm">Generate unlimited content ideas in seconds</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 