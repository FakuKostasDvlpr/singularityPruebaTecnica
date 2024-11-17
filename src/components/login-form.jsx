import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { login, register } from '@/lib/auth'
import { useNavigate } from "react-router-dom";


export function LoginFormJsx({ onAuth }) {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({
      email: '',
      password: '',
      confirmPassword: ''
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      let token;
      if (isLogin) {
        token = await login(formData.email, formData.password)
      } else {
        if (formData.password !== formData.confirmPassword) {
          setError('Las contraseñas no coinciden')
          setLoading(false)
          return
        }
        token = await register(formData.email, formData.password)
      }

      if (token) {
        localStorage.setItem('token', token);
        onAuth(token);
        navigate('/home'); 
      }
    } catch (err) {
      setError(err.message || 'Error en el inicio de sesión/registro')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const isFormComplete = () => {
    return formData.email && formData.password && (!isLogin ? formData.confirmPassword : true)
  }

  return (
    <div className="min-h-screen flex items-stretch">
      <div className="hidden lg:flex lg:w-1/2 bg-[#fd5d40] items-center justify-center relative overflow-hidden">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
          <div className="w-20 h-20">
            <img src="pet.svg" alt="" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login' : 'register'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <CardTitle className="text-3xl font-bold tracking-tight text-center">
                  {isLogin ? 'BIENVENIDO' : 'REGISTRO'}
                </CardTitle>
                <CardDescription className="text-center">
                  {isLogin ? 'Inicia sesión en tu cuenta' : 'Crea una nueva cuenta'}
                </CardDescription>
              </motion.div>
            </AnimatePresence>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isLogin ? 'loginForm' : 'registerForm'}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Contraseña</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="••••••••"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>
                    {!isLogin && (
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
              <Button
                type="submit"
                className={`w-full ${isFormComplete() ? 'bg-[#fd5d40] hover:bg-[#e54d32]' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={!isFormComplete()}
              >
                {loading ? 'Cargando...' : isLogin ? 'INICIAR SESIÓN' : 'REGISTRARSE'}
              </Button>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-gray-500 w-full">
              {isLogin ? '¿Aún no tienes cuenta?' : '¿Ya tienes una cuenta?'}{' '}
              <button
                type="button"
                onClick={toggleMode} 
                className="text-[#fd5d40] hover:underline font-medium"
              >
                {isLogin ? 'Regístrate' : 'Inicia sesión'}
              </button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}