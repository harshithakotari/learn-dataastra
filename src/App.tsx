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

