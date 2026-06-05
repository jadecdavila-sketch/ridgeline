import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

/** The persistent frame: collapsible rail + main column. Each page renders its
 *  own topbar + content into the Outlet. Starts collapsed, like the prototype. */
export function AppShell() {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <div className={collapsed ? 'app collapsed' : 'app'}>
      <Sidebar onToggle={() => setCollapsed((c) => !c)} />
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
