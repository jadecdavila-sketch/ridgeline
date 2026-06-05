import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppShell } from './components/shell/AppShell'
import { PipelinePage } from './pages/PipelinePage'
import { ScorecardPage } from './pages/ScorecardPage'

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<PipelinePage />} />
          <Route path="/deal/:id" element={<ScorecardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
