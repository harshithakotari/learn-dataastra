import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './app/Layout'
import { HomePage } from './pages/home/HomePage'
import { RolesPage } from './pages/roles/RolesPage'
import RolePage from './pages/role/[slug]'
import RoadmapPage from './pages/roadmap'
import { ProjectsPage } from './pages/projects/ProjectsPage'
import { PortfolioPage } from './pages/static/PortfolioPage'
import AchievementsPage from './pages/achievements/AchievementsPage'
import { MotivationPage } from './pages/static/MotivationPage'
import { ReferencesPage } from './pages/static/ReferencesPage'
import { ROUTES } from './config/routes'

// Handle GitHub Pages SPA redirect BEFORE React Router initializes
if (typeof window !== 'undefined') {
  const urlParams = new URLSearchParams(window.location.search)
  const redirectPath = urlParams.get('/')
  
  if (redirectPath) {
    const cleanPath = redirectPath.replace(/~and~/g, '&')
    const newUrl = window.location.pathname.split('/').slice(0, 2).join('/') + cleanPath
    
    // Replace the URL in history without triggering navigation
    window.history.replaceState(
      { ...window.history.state, fromRedirect: true },
      '',
      newUrl
    )
    
    // Remove the query parameter
    const cleanSearch = window.location.search.replace(/\?\/[^&]*/, '')
    if (cleanSearch && cleanSearch !== '?') {
      window.history.replaceState(window.history.state, '', window.location.pathname + cleanSearch)
    }
  }
  
  // Additional safety check for blank screen issues
  const isRedirected = sessionStorage.getItem('spa-redirect')
  if (isRedirected) {
    sessionStorage.removeItem('spa-redirect')
    // Ensure we're on a valid route
    const currentPath = window.location.pathname
    const validRoutes = ['/', '/roles', '/roadmap', '/projects', '/portfolio', '/achievements', '/motivation', '/references']
    const isRoleRoute = currentPath.startsWith('/role/')
    
    if (!validRoutes.includes(currentPath) && !isRoleRoute) {
      // Redirect to home if we're on an invalid route
      window.history.replaceState(null, '', '/learn-dataastra/')
    }
  }
}

function App() {
  return (
    <BrowserRouter basename="/learn-dataastra">
      <Layout>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.roles} element={<RolesPage />} />
          <Route path="/role/:slug" element={<RolePage />} />
          <Route path={ROUTES.roadmap} element={<RoadmapPage />} />
          <Route path={ROUTES.projects} element={<ProjectsPage />} />
          <Route path={ROUTES.portfolio} element={<PortfolioPage />} />
          <Route path={ROUTES.achievements} element={<AchievementsPage />} />
          <Route path={ROUTES.motivation} element={<MotivationPage />} />
          <Route path={ROUTES.references} element={<ReferencesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

