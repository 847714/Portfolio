'use client';

import { useState, useEffect } from 'react';
import { Shield, CheckCircle2, XCircle, AlertCircle, ChevronRight } from 'lucide-react';
import { useConsent } from '@/hooks/useConsent';

export default function ConsentCentre() {
  const { consent, updateConsent, withdrawAll, isLoaded } = useConsent();
  const [localConsent, setLocalConsent] = useState(consent);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setLocalConsent(consent);
  }, [consent]);

  const handleSave = () => {
    updateConsent(localConsent);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleWithdrawAll = () => {
    withdrawAll();
    setLocalConsent({ necessary: true, analytics: false, marketing: false });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <a href="/" className="text-zinc-500 hover:text-zinc-900 font-medium flex items-center transition-colors mb-6">
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Home
          </a>
          <h1 className="text-4xl font-bold mb-4 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-zinc-900" />
            Consent Centre
          </h1>
          <p className="text-zinc-600">
            Manage your privacy preferences. You have the right to withdraw your consent at any time under GDPR Art.7(3) and DPDP Act S.6(4).
          </p>
        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm mb-8">
          <div className="p-6 border-b border-zinc-100 bg-zinc-50/50 flex justify-between items-center">
            <h2 className="text-lg font-bold">Your Current Status</h2>
            <div className="flex gap-2">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-bold uppercase tracking-wider">Active</span>
            </div>
          </div>

          <div className="divide-y divide-zinc-100">
            {/* Necessary */}
            <div className="p-6 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
              <div>
                <div className="flex items-center mb-1">
                  <h3 className="font-bold text-zinc-900 mr-2">Strictly Necessary</h3>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <p className="text-sm text-zinc-500 max-w-md">
                  Required for the website to function properly. Cannot be disabled.
                </p>
              </div>
              <div className="shrink-0">
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-300 cursor-not-allowed">
                  <span className="translate-x-6 inline-block h-4 w-4 rounded-full bg-white transition" />
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="p-6 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
              <div>
                <div className="flex items-center mb-1">
                  <h3 className="font-bold text-zinc-900 mr-2">Analytics</h3>
                  {localConsent.analytics ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-zinc-400" />}
                </div>
                <p className="text-sm text-zinc-500 max-w-md">
                  Helps us understand how visitors interact with the website by collecting and reporting information anonymously.
                </p>
              </div>
              <div className="shrink-0">
                <button 
                  onClick={() => setLocalConsent({...localConsent, analytics: !localConsent.analytics})}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${localConsent.analytics ? 'bg-zinc-900' : 'bg-zinc-200'}`}
                >
                  <span className={`${localConsent.analytics ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 rounded-full bg-white transition transform`} />
                </button>
              </div>
            </div>

            {/* Marketing */}
            <div className="p-6 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
              <div>
                <div className="flex items-center mb-1">
                  <h3 className="font-bold text-zinc-900 mr-2">Marketing</h3>
                  {localConsent.marketing ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-zinc-400" />}
                </div>
                <p className="text-sm text-zinc-500 max-w-md">
                  Used to track visitors across websites to display relevant advertisements.
                </p>
              </div>
              <div className="shrink-0">
                <button 
                  onClick={() => setLocalConsent({...localConsent, marketing: !localConsent.marketing})}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${localConsent.marketing ? 'bg-zinc-900' : 'bg-zinc-200'}`}
                >
                  <span className={`${localConsent.marketing ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 rounded-full bg-white transition transform`} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button 
              onClick={handleWithdrawAll}
              className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
            >
              Withdraw All Consent
            </button>
            <div className="flex items-center gap-4">
              {saved && <span className="text-sm text-emerald-600 flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Saved</span>}
              <button 
                onClick={handleSave}
                className="px-6 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-medium"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start">
          <AlertCircle className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800">
            <strong>Consent History:</strong> Your consent choices are securely logged with a timestamp to comply with DPDP S.6(10) and GDPR Art.7(1). You can request a copy of your consent history via the <a href="/rights-portal" className="underline font-medium">Rights Portal</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
