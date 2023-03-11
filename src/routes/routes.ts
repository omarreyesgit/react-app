import { LazyExoticComponent, lazy } from 'react'
import NoLazy from '../01-lazyload/pages/NoLazy'
type JSXComponent = () => JSX.Element
interface Route {
  to: string
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}
const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: 'Lazylayout' */ '../01-lazyload/layout/LazyLayout'
    )
)

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'Lazy layout dashboard',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No lazy',
  },
]
