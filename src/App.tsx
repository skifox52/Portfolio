import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom"
import { Layout } from "./layout/Layout"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Work } from "./pages/Work"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="work" element={<Work />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App
