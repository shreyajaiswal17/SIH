import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Dashboard from "./components/dashboard"
import AcademicPerformance from "./pages/academic-performance"
import ResearchPublications from "./pages/research-publications"
import FinancialOverview from "./pages/financial-overview"
import StudentLife from "./pages/student-life"
import Login from "./components/login"
import About from "./components/about"
import Signup from "./components/signup"
import SuperAdminUpload from "./components/super"
import Work from "./components/work"
import DashboardView from "./components/dashboard-view"
import AdminPage from "./components/admin-page"
import StudentPage from "./components/student-page"
import WhyLumina from "./components/why-lumina"
import IntegrationSystem from "./components/integration-system"
import GetStartedSection from "./components/get-started-section"
import PDF from "./components/pdf"
import ProcessingPage from "./components/processing"
import ReviewsCarousel from "./components/reviews-carousel"
import FeasibilityAndViability from "./components/feasibility-and-viability"
import BragAboutUs from "./components/brag-about-us"
import AdminInfo from "./components/role-based-signup-details/admin-info"
import StudentInfo from "./components/role-based-signup-details/student-info"
import FacultyInfo from "./components/role-based-signup-details/faculty-info"
import SuperAdminInfo from "./components/role-based-signup-details/super-admin-info"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16 pb-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/academic-performance" element={<AcademicPerformance />} />
            <Route path="/research-publications" element={<ResearchPublications />} />
            <Route path="/financial-overview" element={<FinancialOverview />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/super" element={<SuperAdminUpload />} />
            <Route path="/work" element={<Work />} />
            <Route path="/dashboard-view" element={<DashboardView />} />
            <Route path="/adminpage" element={<AdminPage />} />
            <Route path="/studentpage" element={<StudentPage />} />
            <Route path="/processing" element={<ProcessingPage />} />
            <Route path="/super-admin-info" element={<SuperAdminInfo />} />
            <Route path="/admin-info" element={<AdminInfo />} />
            <Route path="/student-info" element={<StudentInfo />} />
            <Route path="/faculty-info" element={<FacultyInfo />} />
            <Route path="/pdf" element={<PDF />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Dashboard />
      <About />
      <WhyLumina />
      <IntegrationSystem />
      <ReviewsCarousel />
      <FeasibilityAndViability />
      <BragAboutUs />
      <GetStartedSection />
    </div>
  )
}

export default App
