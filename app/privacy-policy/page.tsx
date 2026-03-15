import { Scale, Shield, FileText, Mail, ChevronRight } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="mb-12 border-b border-zinc-100 pb-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-zinc-500">Last Updated: March 2026</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm font-medium border border-zinc-200">GDPR Compliant</span>
            <span className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm font-medium border border-zinc-200">DPDP Act (India)</span>
          </div>
        </div>

        <div className="prose prose-zinc max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to the digital portfolio of Parul Kumar. This Privacy Policy explains how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation (GDPR) and India's Digital Personal Data Protection Act, 2023 (DPDP Act).
          </p>

          <h2>2. Data We Collect</h2>
          <p>We believe in data minimization. We only collect data that is strictly necessary:</p>
          <ul>
            <li><strong>Analytics Data:</strong> If you consent, we collect anonymized usage data to understand how visitors interact with the site.</li>
            <li><strong>Communication Data:</strong> If you contact us via email or forms, we collect your name, email address, and message content.</li>
          </ul>

          <h2>3. Lawful Basis for Processing</h2>
          <p>Under GDPR (Art. 6) and DPDP Act (S.4), we process your data based on:</p>
          <ul>
            <li><strong>Consent:</strong> For analytics and non-essential cookies.</li>
            <li><strong>Legitimate Interest:</strong> To ensure the security and functionality of this website.</li>
          </ul>

          <h2>4. Your Rights</h2>
          <p>You have extensive rights over your data under both frameworks:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
            <div className="p-4 border border-zinc-200 rounded-lg">
              <h4 className="font-bold flex items-center mb-2"><Scale className="w-4 h-4 mr-2" /> GDPR Rights</h4>
              <ul className="text-sm text-zinc-600 space-y-1">
                <li>• Right to be informed</li>
                <li>• Right of access</li>
                <li>• Right to rectification</li>
                <li>• Right to erasure</li>
                <li>• Right to restrict processing</li>
                <li>• Right to data portability</li>
                <li>• Right to object</li>
              </ul>
            </div>
            <div className="p-4 border border-zinc-200 rounded-lg">
              <h4 className="font-bold flex items-center mb-2"><Shield className="w-4 h-4 mr-2" /> DPDP Act Rights</h4>
              <ul className="text-sm text-zinc-600 space-y-1">
                <li>• Right to access information</li>
                <li>• Right to correction & erasure</li>
                <li>• Right to grievance redressal</li>
                <li>• Right to nominate (S.14)</li>
                <li>• Right to withdraw consent</li>
              </ul>
            </div>
          </div>

          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security safeguards (DPDP S.8(5)) and encryption (GDPR Art.32) to protect your data against unauthorized access, disclosure, or destruction.
          </p>

          <h2>6. Contact the Data Protection Officer</h2>
          <p>
            For any privacy-related inquiries or to exercise your rights, please contact our designated Data Protection Officer:
          </p>
          <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200 not-prose mt-4">
            <div className="font-bold text-lg mb-1">Parul Kumar</div>
            <div className="text-zinc-600 mb-4">Cyber Advocate & DPO</div>
            <a href="mailto:adv.parulkumar@gmail.com" className="inline-flex items-center text-zinc-900 font-medium hover:underline">
              <Mail className="w-4 h-4 mr-2" />
              adv.parulkumar@gmail.com
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-100 flex justify-between items-center">
          <a href="/" className="text-zinc-500 hover:text-zinc-900 font-medium flex items-center transition-colors">
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Home
          </a>
          <a href="/rights-portal" className="px-6 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors">
            Exercise Your Rights
          </a>
        </div>
      </div>
    </div>
  );
}
