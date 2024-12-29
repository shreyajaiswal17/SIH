import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.role) {
      setError('Please select a user role.');
      setSuccess('');
      return;
    }
  
    console.log('Login Data:', formData);
  
    // Dummy user data
    const dummyUser = {
      email: "arshtiwari@gmail.com",
      password: "ArshTiwari",
      token: "dummyToken123",
    };
  
    if (
      formData.email === dummyUser.email &&
      formData.password === dummyUser.password
    ) {
      setSuccess('Successfully logged in!');
      setError('');
      toast.success("Login Successful!");
      localStorage.setItem('token', dummyUser.token);
  
      // Redirect based on role
      switch (formData.role) {
        case "Super-Admin":
          navigate("/super");
          break;
        case "Admin":
          navigate("/admin");
          break;
        case "Faculty":
          navigate("/faculty");
          break;
        case "Student":
          navigate("/student");
          break;
        default:
          setError("Invalid role selected.");
          toast.error("Invalid role!");
      }
    } else {
      setError('Invalid credentials. Please try again.');
      setSuccess('');
      toast.error("Invalid credentials!");
    }
  };
  

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-8">
      <div className="w-full md:w-1/2 max-w-lg p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl text-center font-bold mb-4">Log In</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="arshtiwari@gmail.com(for testing)"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="ArshTiwari(for testing)"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            >
              <option value="">Please select user role ( if updated select new one )</option>
              <option value="Super-Admin">Super-Admin</option>
              <option value="Admin">Admin</option>
              <option value="Faculty">Faculty</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-indigo-600 hover:text-indigo-800">
            Sign up
          </Link>
        </p>
      </div>
      <div className="hidden md:block md:w-1/2 md:pl-60">
        <img
          src="/login.png"
          alt="Login Illustration"
          className="w-full h-auto" // Ensure image scales properly
        />
      </div>
    </div>
  );
};

export default Login;