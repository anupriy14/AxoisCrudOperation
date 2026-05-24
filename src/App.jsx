import React, { useState } from 'react';
import StudentPortal from './views/StudentPortal';
import AdminDashboard from './views/AdminDashboard';
import AdminNavbar from './components/AdminNavbar';

function App() {

  const [isAdminMode, setIsAdminMode] = useState(() => {
    return sessionStorage.getItem('adminToken') === 'active';
  });

  const handleAdminLogin = () => {
    sessionStorage.setItem('adminToken', 'active');
    setIsAdminMode(true);
  };

  const handleAdminLogout = () => {
    sessionStorage.removeItem('adminToken');
    setIsAdminMode(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {isAdminMode ? (
        <>
          <AdminNavbar onLogout={handleAdminLogout} />
          <AdminDashboard />
        </>
      ) : (
        <StudentPortal onAdminLogin={handleAdminLogin} />
      )}
    </div>
  );
}

export default App;