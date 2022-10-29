import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './componentes/Layout'
import Home from './componentes/Home'
import Users from './componentes/Users'
import NotFound from './componentes/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
