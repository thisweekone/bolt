import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompanyDetails from './pages/CompanyDetails';
import CompaniesListPage from './pages/CompaniesListPage';
import PromotionsPage from './pages/PromotionsPage';
import PromotionDetailPage from './pages/PromotionDetailPage';
import CompanyRegistration from './pages/registration/CompanyRegistration';
import RegistrationSuccess from './pages/registration/RegistrationSuccess';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProfile from './pages/admin/AdminProfile';
import AdminPromotions from './pages/admin/AdminPromotions';
import AdminProducts from './pages/admin/AdminProducts';
import AdminLoyalty from './pages/admin/AdminLoyalty';
import AdminReviews from './pages/admin/AdminReviews';
import AdminMessages from './pages/admin/AdminMessages';
import AdminReports from './pages/admin/AdminReports';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/empresa/:id" element={<CompanyDetails />} />
        <Route path="/empresas" element={<CompaniesListPage />} />
        <Route path="/promocoes" element={<PromotionsPage />} />
        <Route path="/promocao/:id" element={<PromotionDetailPage />} />
        <Route path="/registro" element={<CompanyRegistration />} />
        <Route path="/registro/sucesso" element={<RegistrationSuccess />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="perfil" element={<AdminProfile />} />
          <Route path="promocoes" element={<AdminPromotions />} />
          <Route path="produtos" element={<AdminProducts />} />
          <Route path="fidelidade" element={<AdminLoyalty />} />
          <Route path="avaliacoes" element={<AdminReviews />} />
          <Route path="mensagens" element={<AdminMessages />} />
          <Route path="relatorios" element={<AdminReports />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;