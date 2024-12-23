import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";
import Editor from "./pages/editor.pages";
import { createContext } from "react";

export const UserContext = createContext({})

const App = () => {
    return (
     <Routes>
        <Route path="/editor" element={<Editor/>}/>
        <Route path="/" element={<Navbar/>}>
            <Route path="signin" element={<UserAuthForm  type="sign-in"/>}/>
            <Route path="signup" element={<UserAuthForm type="sing-up"/>}/>
        </Route>
        
     </Routes>
    )
}

export default App;