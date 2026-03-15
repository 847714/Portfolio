'use client';

import { Mail, AlertTriangle, ChevronRight } from 'lucide-react';

export default function GrievanceHub() {
  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <a href="/" className="text-zinc-500 hover:text-zinc-900 font-medium flex items-center transition-colors mb-6">
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Home
          </a>
          <h1 className="text-4xl font-bold mb-4 flex items-center">
            <Mail className="w-8 h-8 mr-3 text-zinc-900" />
            Grievance Hub
          </h1>
          <p className="text-zinc-600">
            Raise a complaint regarding data handling. We take all grievances seriously and will respond within the prescribed period.
          </p>
        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm mb-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 outline-none transition-all" placeholder="adv.parulkumar@gmail.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">Category</label>
              <select className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 outline-none transition-all bg-white">
                <option>Consent Issue</option>
                <option>Access Denied</option>
                <option>Incorrect Data</option>
                <option>Suspected Breach</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">Details of Grievance</label>
              <textarea rows={5} className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 outline-none transition-all resize-none" placeholder="Please describe your issue in detail..."></textarea>
            </div>

            <button type="submit" className="w-full py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors">
              Submit Grievance
            </button>
          </form>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start">
          <AlertTriangle className="w-6 h-6 text-amber-600 mr-4 shrink-0" />
          <div>
            <h3 className="font-bold text-amber-900 mb-2">Escalation Path</h3>
            <p className="text-sm text-amber-800 leading-relaxed mb-4">
              If your grievance is not resolved to your satisfaction, you have the right to escalate the matter to the relevant regulatory authority:
            </p>
            <ul className="text-sm text-amber-800 space-y-2 list-disc list-inside">
              <li><strong>India:</strong> Data Protection Board of India (DPDP S.13(3))</li>
              <li><strong>EU:</strong> Your National Supervisory Authority (GDPR Art.77)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
