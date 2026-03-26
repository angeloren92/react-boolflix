import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import { Outlet } from "react-router-dom"

export default function LayoutDefault() {


  return (
    <>
      <AppHeader></AppHeader>
      <Outlet></Outlet>
      <AppFooter></AppFooter>
    </>
  )
}

