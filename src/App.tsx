import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "@/components/Header"
import Footer from '@/components/Footer'
import HomePage from '@/pages/HomePage'
import AllProjectsPage from '@/pages/AllProjectsPage'
import AllPostsPage from '@/pages/AllPostsPage'
import ProjectPage from '@/pages/ProjectPage'
import PostPage from '@/pages/PostPage'
import NotFound from '@/pages/NotFound'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check system preference on initial load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      <div className="min-h-screen flex flex-col transition-colors duration-300 bg-background text-text relative overflow-hidden">
        
        {/* Hero Gradient Background - Fixed position to stay in background */}
        <div 
          className="fixed inset-0 -z-10 opacity-15 dark:opacity-20 pointer-events-none"
          style={{ backgroundImage: 'var(--bg-hero-gradient)' }}
        />

        <Header darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<AllProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/blog" element={<AllPostsPage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </Router>
  )
}

export default App
