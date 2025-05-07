"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Mail, Lock, User, AlertCircle, CheckCircle } from "lucide-react"

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.role) {
      setError("Please select a user role.")
      setSuccess("")
      return
    }

    console.log("Login Data:", formData)

    // Dummy user data
    const dummyUser = {
      email: "arshtiwari@gmail.com",
      password: "ArshTiwari",
      token: "dummyToken123",
    }

    if (formData.email === dummyUser.email && formData.password === dummyUser.password) {
      setSuccess("Successfully logged in!")
      setError("")
      localStorage.setItem("token", dummyUser.token)

      // Redirect based on role
      switch (formData.role) {
        case "Super-Admin":
          navigate("/super")
          break
        case "Admin":
          navigate("/admin")
          break
        case "Faculty":
          navigate("/faculty")
          break
        case "Student":
          navigate("/student")
          break
        default:
          setError("Invalid role selected.")
      }
    } else {
      setError("Invalid credentials. Please try again.")
      setSuccess("")
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-8">
      <div className="w-full md:w-1/2 max-w-lg glass-card p-8 rounded-lg">
        <h2 className="text-2xl text-center font-bold mb-6 text-white">Log In</h2>

        {error && (
          <div className="bg-red-500/20 text-red-500 p-3 rounded-md mb-4 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-500/20 text-green-500 p-3 rounded-md mb-4 flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="arshtiwari@gmail.com (for testing)"
                value={formData.email}
                onChange={handleChange}
                className="pl-10 block w-full bg-gray-800/50 border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="ArshTiwari (for testing)"
                className="pl-10 block w-full bg-gray-800/50 border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Role</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="pl-10 block w-full bg-gray-800/50 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Please select user role</option>
                <option value="Super-Admin">Super-Admin</option>
                <option value="Admin">Admin</option>
                <option value="Faculty">Faculty</option>
                <option value="Student">Student</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full gradient-button text-white py-2 px-4 rounded-md shadow-lg">
            Log In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-400">
            Sign up
          </Link>
        </p>
      </div>

      <div className="hidden md:block md:w-1/2 md:pl-12">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
          <div className="relative glass-card rounded-lg p-6">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Login Illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
