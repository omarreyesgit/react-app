import { Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes'
const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='logo-react' />
            <ul>
              {routes?.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route path={path} key={path} element={<Component />} />
            ))}

            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation
