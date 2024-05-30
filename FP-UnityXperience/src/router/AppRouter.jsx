import { Route, Routes,} from "react-router-dom"
import { Aboutus, AdminLogin, Contact, DetailProject, Error, Landing, Profile, Projects, Services } from "../screens"
import { Footer, Header, PrivateRouter} from "../components"

export const AppRouter = () => {
  return (
    <>
    <Header />
    <section>
    <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/addproject" element={<PrivateRouter />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/projects/:projectTitle" element={<DetailProject />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/*" element={<Error/>}/>
    </Routes>
    </section>
    <Footer />
    </>
  )
}
