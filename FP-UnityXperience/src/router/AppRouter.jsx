import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Aboutus, AddProject, AdminLogin, Contact, DetailProject, Error, Landing, Profile, Projects, Services } from "../screens"
import { Header } from "../components"


export const AppRouter = () => {
  return (

    <>
    <Header />
    <section>
    <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/addproject" element={<AddProject />}/>
        <Route path="/adminlogin" element={<AdminLogin />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/detailproject" element={<DetailProject />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/*" element={<Error/>}/>
    </Routes>
    </section>
    </>
  )
}
