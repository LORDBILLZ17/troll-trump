import { useState, useEffect } from 'react'

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ 
    days: 0, 
    hours: 0, 
    minutes: 0, 
    seconds: 0 
  })
  const [isLaunched, setIsLaunched] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const distance = new Date(targetDate).getTime() - now

      if (distance < 0) {
        setIsLaunched(true)
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  if (isLaunched) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            <span className="text-white font-bold text-xl">🚀 LIVE ON SOLANA</span>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
        <p className="text-gray-300 mt-4 text-lg">
          The token is now available on Solana!
        </p>
      </div>
    )
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, color: 'from-purple-500 to-pink-500' },
    { label: 'Hours', value: timeLeft.hours, color: 'from-blue-500 to-teal-400' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'from-green-500 to-blue-500' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'from-yellow-500 to-orange-500' }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Preparing Launch</span>
          <span>Live on Solana</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-teal-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${Math.min(100 - (timeLeft.days / 30) * 100, 95)}%`
            }}
          />
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {timeUnits.map((unit) => (
          <div 
            key={unit.label}
            className="relative group"
          >
            <div className={`bg-gradient-to-br ${unit.color} rounded-2xl p-6 text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-mono">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-white/80 text-sm font-medium uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
          </div>
        ))}
      </div>

      {/* Status Message */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">
            Smart Contract: <span className="text-green-400 font-semibold">Ready</span>
          </span>
        </div>
        
        <p className="text-gray-400 mt-4 text-sm max-w-md mx-auto">
          Deploying to Solana Mainnet in{' '}
          <span className="text-teal-400 font-semibold">
            {timeLeft.days} days, {timeLeft.hours}h {timeLeft.minutes}m
          </span>
        </p>
      </div>
    </div>
  )
}

export default Countdown