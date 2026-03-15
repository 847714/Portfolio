import { useState, useEffect } from 'react';

export type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);
  const [hasConsented, setHasConsented] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem('privacy_consent_settings');
    if (stored) {
      try {
        setConsent(JSON.parse(stored));
        setHasConsented(true);
      } catch (e) {
        console.error('Failed to parse consent settings', e);
      }
    }
    setIsLoaded(true);
  }, []);

  const updateConsent = (newConsent: Partial<ConsentState>) => {
    const updated = { ...consent, ...newConsent, necessary: true };
    setConsent(updated);
    localStorage.setItem('privacy_consent_settings', JSON.stringify(updated));
    setHasConsented(true);
  };

  const acceptAll = () => {
    updateConsent({ necessary: true, analytics: true, marketing: true });
  };

  const rejectAll = () => {
    updateConsent({ necessary: true, analytics: false, marketing: false });
  };

  const withdrawAll = () => {
    updateConsent({ necessary: true, analytics: false, marketing: false });
  };

  return { 
    consent, 
    updateConsent, 
    acceptAll, 
    rejectAll, 
    withdrawAll, 
    hasConsented, 
    isLoaded 
  };
}
