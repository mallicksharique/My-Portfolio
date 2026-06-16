import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/experience",
    element: <Experience />
  },
  {
    path: "/contact",
    element: <Contact />,
  },
], {
  basename: "/My-Portfolio", // <-- Yeh object yahan add karna tha taaki GitHub Pages routes ko dhoondh sake
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;