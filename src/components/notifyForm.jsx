import { useState } from 'react'

const NotifyForm = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (!email) {
      setError('Please enter your email address')
      return
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)

    try {
      // Simulate API call - replace with your actual email service integration
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Here you would typically call your API:
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // })
      
      setSubmitted(true)
      setEmail('')
      
      // Optional: Track conversion for analytics
      console.log('User subscribed:', email)
      
    } catch (err) {
      setError('Failed to subscribe. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center">
        <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30">
          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✅</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">You're on the List!</h3>
          <p className="text-gray-300 mb-4">
            We'll notify you the moment we launch on Solana
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors"
          >
            Add another email
          </button>
        </div>
        
        {/* Additional Info */}
        <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <h4 className="text-sm font-semibold text-white mb-2">What's Next?</h4>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>• Early access to token purchase</li>
            <li>• Exclusive community updates</li>
            <li>• Solana wallet setup guide</li>
            <li>• Launch day instructions</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          Get Early Access
        </h3>
        <p className="text-gray-300 text-sm">
          Be among the first to trade when we launch on Solana
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your best email"
            className={`w-full bg-white/5 backdrop-blur-lg border ${
              error ? 'border-red-400/50' : 'border-white/10 focus:border-teal-400/50'
            } rounded-2xl px-6 py-4 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-teal-400/20`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError('')
            }}
            disabled={loading}
          />
          
          {/* Animated border effect */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none ${
            loading ? 'opacity-10' : ''
          }`} />
        </div>

        {error && (
          <div className="flex items-center space-x-2 text-red-400 text-sm bg-red-400/10 rounded-xl p-3 border border-red-400/20">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gradient-to-r from-teal-400 to-purple-500 text-gray-900 font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
            loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-teal-500/25'
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
              <span>Adding to Waitlist...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <span>🚀</span>
              <span>Notify Me at Launch</span>
            </div>
          )}
        </button>
      </form>

      {/* Trust indicators */}
      <div className="mt-6 text-center">
        <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <span>🔒</span>
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>⚡</span>
            <span>Solana-powered</span>
          </div>
        </div>
        
        <p className="text-xs text-gray-600">
          Join <span className="text-teal-400 font-semibold">2,847+</span> early supporters waiting for launch
        </p>
      </div>
    </div>
  )
}

export default NotifyForm