import { FC } from 'react'
import MainHeader from './main-header'

const Layout = ({children}: any) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  )
}
export default Layout