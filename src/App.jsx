import { useState, useEffect } from 'react'
import NotifyForm from './components/NotifyForm'
import Countdown from './components/Countdown'

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isLogoHovering, setIsLogoHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white relative overflow-hidden">
      {/* Animated Space Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-black" />
      
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's',
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      {/* Logo in Upper Left */}
      <div 
        className="absolute top-8 left-8 z-30"
        onMouseEnter={() => setIsLogoHovering(true)}
        onMouseLeave={() => setIsLogoHovering(false)}
      >
        <div 
          className="relative transition-all duration-500 ease-out cursor-pointer"
          style={{
            transform: isLogoHovering 
              ? `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px) rotate(${mousePosition.x * 0.1}deg) scale(1.1)`
              : 'none'
          }}
        >
          {/* Logo Container with Glow Effect */}
          <div className="relative">
            <img 
              src="/logo (2).png" 
              alt="Troll Trump Coin Logo"
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-2xl border-2 border-white/20"
            />
            {/* Hover Glow */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 to-purple-500 opacity-0 transition-opacity duration-300 ${
              isLogoHovering ? 'opacity-30 blur-md' : ''
            }`} />
            
            {/* Floating Animation */}
            <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-r from-teal-400 to-purple-500 opacity-0 transition-all duration-700 ${
              isLogoHovering ? 'opacity-50 animate-ping' : ''
            }`} />
          </div>
          
          {/* Connection Line to Content */}
          <div className={`absolute top-1/2 left-full ml-4 h-0.5 bg-gradient-to-r from-teal-400 to-purple-500 transition-all duration-500 ${
            isLogoHovering ? 'w-16 opacity-100' : 'w-8 opacity-50'
          }`} />
        </div>
      </div>

      {/* Moving Comet Background */}
      <div 
        className="absolute inset-0 overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Comet Container */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(-50%, -50%) ${
              isHovering 
                ? `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) scale(1.1)`
                : 'scale(1)'
            }`
          }}
        >
          {/* Comet Head */}
          <div className="relative">
            {/* Comet Core Glow */}
            <div className="w-64 h-64 bg-gradient-to-r from-teal-400/80 to-purple-500/80 rounded-full blur-3xl animate-pulse" />
            
            {/* Comet Core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-pulse" />
            </div>
            
            {/* Comet Trail */}
            <div 
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-96 w-96 h-8 bg-gradient-to-r from-transparent via-teal-400/30 to-teal-400/60 blur-xl"
              style={{
                transform: `translateY(-50%) translateX(-384px) skew(${mousePosition.x * 0.1}deg) rotate(${mousePosition.y * 0.05}deg)`
              }}
            />
          </div>
        </div>

        {/* Additional Comet Trail Effects */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-4 bg-gradient-to-r from-transparent via-purple-400/20 to-purple-400/40 blur-lg"
          style={{
            transform: `translate(-50%, -50%) rotate(${mousePosition.x * 0.02}deg)`,
            filter: `blur(20px)`
          }}
        />

        {/* Floating Space Objects */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-2xl animate-float">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full" />
        </div>
        
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full shadow-2xl animate-float" style={{animationDelay: '2s'}}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full" />
        </div>

        <div className="absolute top-2/3 left-1/3 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full shadow-2xl animate-float" style={{animationDelay: '4s'}}>
          <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-transparent rounded-full" />
        </div>

        {/* Solana Network Nodes */}
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-green-400 rounded-full animate-pulse">
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse">
          <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping" />
        </div>
        <div className="absolute top-2/3 right-2/3 w-2 h-2 bg-teal-400 rounded-full animate-pulse">
          <div className="absolute inset-0 bg-teal-400 rounded-full animate-ping" />
        </div>
      </div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* Content Layer */}
      <div className="relative z-20 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto px-6 py-12">
            {/* Header - Adjusted to account for logo space on mobile */}
            <header className="text-center mb-16 mt-16 md:mt-0">
              <div className="flex justify-center items-center mb-8">
                
                <div>
                  <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-400 via-purple-400 to-purple-500 bg-clip-text text-transparent">
                    Troll Trump
                  </h1>
                  <p className="text-3xl lg:text-4xl font-bold text-white mt-2">Coin</p>
                </div>
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                The revolutionary meme coin soaring through the <span className="text-teal-400 font-semibold">Solana universe</span>. 
                Built for speed, powered by community, and ready to launch into orbit.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="text-2xl font-bold text-teal-400 mb-2">65,000+</div>
                  <div className="text-sm text-gray-300">TPS</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="text-2xl font-bold text-purple-400 mb-2">$0.00025</div>
                  <div className="text-sm text-gray-300">Avg. Fee</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="text-2xl font-bold text-blue-400 mb-2">400ms</div>
                  <div className="text-sm text-gray-300">Block Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="text-2xl font-bold text-green-400 mb-2">200+</div>
                  <div className="text-sm text-gray-300">Validators</div>
                </div>
              </div>
            </header>

            {/* Countdown Section */}
            <section className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20 shadow-2xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Launching on Solana</h2>
                <p className="text-gray-300 mb-8 max-w-md mx-auto">
                  Get ready for the most anticipated meme coin launch of 2025
                </p>
                <Countdown targetDate="2025-11-01T00:00:00" />
              </div>
            </section>

            {/* Notification Form */}
            <section className="bg-gradient-to-r from-teal-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-teal-500/30 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-3">Join the Mission</h3>
                <p className="text-gray-300 text-lg">
                  Get launch notifications and early access to the Solana token
                </p>
              </div>
              <div className="max-w-md mx-auto">
                <NotifyForm />
              </div>
            </section>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Lightning Fast</h4>
                <p className="text-gray-400">65,000+ transactions per second on Solana</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔒</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Secure</h4>
                <p className="text-gray-400">Built on Solana's battle-tested blockchain</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🌐</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Decentralized</h4>
                <p className="text-gray-400">Community-driven and transparent</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 pb-6">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex items-center mb-4 lg:mb-0">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-sm">⚡</span>
                </div>
                <span className="text-lg font-semibold">Powered by Solana</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                <span>© 2025 Troll Trump Coin</span>
                <span>•</span>
                <span>The future of meme tokens is here</span>
                <span>•</span>
                <span>Built on Solana ⚡</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Add custom animation for floating */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default App