/* This line of code is importing specific components from the "react-router-dom" library in a
TypeScript React application. The components being imported are `BrowserRouter`, `Routes`, and
`Route`. These components are used for setting up routing in a React application, allowing for
navigation between different components based on the URL. */
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./Components/Header"

export default function App() {
  return (
    // Wraps the routing functionality around the entire application.
    <BrowserRouter>
      <Header />
      {/* Defines the routes for the application. */}
      <Routes>
        {/* Defines a specific route within the `<Routes>` component. */}
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  )
}