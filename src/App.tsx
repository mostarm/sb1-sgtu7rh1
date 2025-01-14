import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './components/Navigation';
import Agenda from './pages/Agenda';
import Speakers from './pages/Speakers';
import Sponsors from './pages/Sponsors';
import Notifications from './pages/Notifications';
import TalkDetails from './pages/TalkDetails';
import SpeakerDetails from './pages/SpeakerDetails';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Agenda />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/talk/:id" element={<TalkDetails />} />
              <Route path="/speaker/:id" element={<SpeakerDetails />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;