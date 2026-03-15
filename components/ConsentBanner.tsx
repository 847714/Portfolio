'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, X } from 'lucide-react';
import { useConsent } from '@/hooks/useConsent';

export default function ConsentBanner() {
  const { consent, updateConsent, acceptAll, rejectAll, hasConsented, isLoaded } = useConsent();
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomise, setShowCustomise] = useState(false);
  const [tempConsent, setTempConsent] = useState(consent);

  useEffect(() => {
    if (isLoaded && !hasConsented) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, hasConsented]);

  useEffect(() => {
    setTempConsent(consent);
  }, [consent]);

  const handleAcceptAll = () => {
    acceptAll();
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    updateConsent(tempConsent);
    setIsVisible(false);
  };

  if (!isLoaded) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto bg-white border border-zinc-200 shadow-2xl rounded-2xl p-6 pointer-events-auto flex flex-col md:flex-row gap-6 items-start md:items-center">
            
            <div className="flex-grow">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-zinc-900" />
                <h3 className="font-bold text-zinc-900">Your Privacy Choices</h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze traffic, and support our compliance with the GDPR (EU) and DPDP Act (India). You can choose to accept all, reject all non-essential cookies, or customize your preferences.
              </p>
            </div>

            {!showCustomise ? (
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <button 
                  onClick={() => setShowCustomise(true)}
                  className="px-5 py-2.5 text-sm font-medium bg-zinc-100 text-zinc-900 border border-zinc-200 rounded-lg hover:bg-zinc-200 transition-colors flex-1 md:flex-none text-center"
                >
                  Customise
                </button>
                <button 
                  onClick={handleRejectAll}
                  className="px-5 py-2.5 text-sm font-medium bg-zinc-100 text-zinc-900 border border-zinc-200 rounded-lg hover:bg-zinc-200 transition-colors flex-1 md:flex-none text-center"
                >
                  Reject All
                </button>
                <button 
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 text-sm font-medium bg-zinc-100 text-zinc-900 border border-zinc-200 rounded-lg hover:bg-zinc-200 transition-colors flex-1 md:flex-none text-center"
                >
                  Accept All
                </button>
              </div>
            ) : (
              <div className="w-full md:w-auto shrink-0 bg-zinc-50 p-4 rounded-xl border border-zinc-200">
                <div className="space-y-3 mb-4">
                  <label className="flex items-center justify-between space-x-4">
                    <span className="text-sm font-medium text-zinc-700">Strictly Necessary</span>
                    <input type="checkbox" checked disabled className="accent-zinc-900" />
                  </label>
                  <label className="flex items-center justify-between space-x-4">
                    <span className="text-sm font-medium text-zinc-700">Analytics</span>
                    <input 
                      type="checkbox" 
                      checked={tempConsent.analytics} 
                      onChange={(e) => setTempConsent({...tempConsent, analytics: e.target.checked})}
                      className="accent-zinc-900" 
                    />
                  </label>
                  <label className="flex items-center justify-between space-x-4">
                    <span className="text-sm font-medium text-zinc-700">Marketing</span>
                    <input 
                      type="checkbox" 
                      checked={tempConsent.marketing}
                      onChange={(e) => setTempConsent({...tempConsent, marketing: e.target.checked})}
                      className="accent-zinc-900" 
                    />
                  </label>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setShowCustomise(false)}
                    className="px-4 py-2 text-xs font-medium border border-zinc-200 rounded-lg hover:bg-white transition-colors flex-1"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleSavePreferences}
                    className="px-4 py-2 text-xs font-medium bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors flex-1"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
            
            <button 
              onClick={handleRejectAll}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 md:hidden"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
