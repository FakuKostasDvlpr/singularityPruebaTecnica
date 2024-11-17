import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

export function Animated_404() {
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    const generateNumbers = () => {
      const newNumbers = []
      for (let i = 0; i < 20; i++) {
        newNumbers.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          speed: 0.5 + Math.random() * 2
        })
      }
      setNumbers(newNumbers)
    }

    generateNumbers()

    const animateNumbers = () => {
      setNumbers(prevNumbers =>
        prevNumbers.map(num => ({
          ...num,
          y: (num.y + num.speed) % 100
        })))
    }

    const intervalId = setInterval(animateNumbers, 50)

    return () => clearInterval(intervalId);
  }, [])

  return (
    (<div
      className="h-screen w-full bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center overflow-hidden relative">
      {numbers.map(num => (
        <div
          key={num.id}
          className="absolute text-blue-300 text-opacity-50 select-none pointer-events-none"
          style={{
            left: `${num.x}%`,
            top: `${num.y}%`,
            fontSize: `${num.speed * 20}px`,
            transition: 'top 0.05s linear'
          }}>
          {num.id % 10}
        </div>
      ))}
      <h1 className="text-9xl font-bold text-blue-600 mb-4 relative z-10">404</h1>
      <p className="text-2xl text-blue-800 mb-8 relative z-10">Oops! Page not found</p>
      <Link to="/home" className="relative z-10">
        <Button variant="outline">Go to Home</Button>
      </Link>
    </div>)
  );
}