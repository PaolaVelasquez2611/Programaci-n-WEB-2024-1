import { Route, Routes } from "react-router-dom"
import { Aboutus, AddProject, AdminLogin, Contact, Landing, Profile, Projects, Services } from "../screens"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/addproject" element={<AddProject />}/>
        <Route path="/adminlogin" element={<AdminLogin />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/*" element={<p>404</p>}/>
    </Routes>
  )
}
