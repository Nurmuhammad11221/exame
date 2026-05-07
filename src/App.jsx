import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Career from './Pages/Career';
import CompanyPage from './Pages/Company';
import Blog from './Pages/Blog';
import TeamTemplate from './Pages/TeamTemplete'; 
import CarerrInner from './Pages/CareerInner';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import BlogInner from './Pages/BlogInner'; 

function App() {
  return (
    <BrowserRouter>
      <Routes> 
          <Route path="/" element={<CompanyPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/team/:id" element={<TeamTemplate />} />
          <Route path="/careers/:id" element={<CarerrInner />} />
          <Route path="/BlogInner" element={<BlogInner />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;