import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext.tsx';
import { ToastProvider } from './context/ToastContext.tsx';
import { OwnerImageProvider } from './context/OwnerImageContext.tsx';
import { OwnerImageUploadModal } from './components/ui/OwnerImageUploadModal.tsx';
import { Navbar } from './components/layout/Navbar.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ProgramsPage } from './pages/ProgramsPage.tsx';
import { MembershipPage } from './pages/MembershipPage.tsx';
import { SupplementsPage } from './pages/SupplementsPage.tsx';
import { JoinPage } from './pages/JoinPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { PrivacyPage } from './pages/PrivacyPage.tsx';
import { TermsPage } from './pages/TermsPage.tsx';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/programs':
        return <ProgramsPage />;
      case '/membership':
        return <MembershipPage />;
      case '/supplements':
        return <SupplementsPage />;
      case '/join':
        return <JoinPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      default:
        // Graceful handling for non-matching paths
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-neutral-950 text-neutral-100 font-sans selection:bg-zinc-700 selection:text-white">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        {renderCurrentPage()}
      </main>
      <Footer />
      <OwnerImageUploadModal />
    </div>
  );
};

export default function App() {
  return (
    <ToastProvider>
      <OwnerImageProvider>
        <RouterProvider>
          <AppContent />
        </RouterProvider>
      </OwnerImageProvider>
    </ToastProvider>
  );
}
