import { Artist, Browse, Browser, Charts, Header, Home, Layout, LayoutSidebar } from "./router"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/browser'
          element={
            <Layout>
              <Browser />
            </Layout>
          }
        />
        <Route
          path='/charts'
          element={
            <Layout>
              <Charts />
            </Layout>
          }
        />
        <Route
          path='/artists'
          element={
            <Layout>
              <Artist />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
