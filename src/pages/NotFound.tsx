import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Logo from '../components/ui/Logo';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | VRP Engineering Services</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="min-h-screen flex items-center justify-center bg-navy-950 px-4 py-20 relative overflow-hidden">
        {/* Blueprint grid */}
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

        <div className="container-custom relative z-10 text-center max-w-lg mx-auto">
          <div className="flex justify-center mb-6">
            <Logo size={70} />
          </div>

          <span className="text-sm font-mono text-gold-400 font-bold px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block mb-4">
            ERROR 404
          </span>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-off-white mb-4">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-off-white/70 mb-8 leading-relaxed">
            The architectural blueprint for this route does not exist or has been relocated.
            Return to our homepage to explore civil engineering services.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-gold text-sm px-6 py-3 w-full sm:w-auto">
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline text-sm px-6 py-3 w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;

