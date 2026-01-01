import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import AllProjectsPage from '@/pages/AllProjectsPage'
import AllPostsPage from '@/pages/AllPostsPage'
import ProjectPage from '@/pages/ProjectPage'
import PostPage from '@/pages/PostPage'
import NotFound from '@/pages/NotFound'
import ExperiencePage from '@/pages/ExperiencePage'

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
      <Routes>
        <Route element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/blog" element={<AllPostsPage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
