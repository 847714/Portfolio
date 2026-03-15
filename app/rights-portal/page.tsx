'use client';

import { Scale, Download, Edit3, Trash2, UserPlus, EyeOff, ChevronRight } from 'lucide-react';

export default function RightsPortal() {
  const rights = [
    {
      id: 'access',
      title: 'Request Access',
      description: 'Get a copy of all personal data we hold about you.',
      icon: <Download className="w-6 h-6" />,
      laws: 'GDPR Art.15 | DPDP S.11',
      action: 'Request Export'
    },
    {
      id: 'correction',
      title: 'Request Correction',
      description: 'Update or correct inaccurate personal data.',
      icon: <Edit3 className="w-6 h-6" />,
      laws: 'GDPR Art.16 | DPDP S.12(1)',
      action: 'Update Data'
    },
    {
      id: 'erasure',
      title: 'Request Erasure',
      description: 'Ask us to delete your personal data ("Right to be forgotten").',
      icon: <Trash2 className="w-6 h-6" />,
      laws: 'GDPR Art.17 | DPDP S.12(3)',
      action: 'Delete Data'
    },
    {
      id: 'nomination',
      title: 'Nominate Representative',
      description: 'Designate someone to exercise your rights on your behalf.',
      icon: <UserPlus className="w-6 h-6" />,
      laws: 'DPDP S.14 (Unique to India)',
      action: 'Add Nominee'
    },
    {
      id: 'restrict',
      title: 'Restrict Processing',
      description: 'Limit how we use your personal data.',
      icon: <EyeOff className="w-6 h-6" />,
      laws: 'GDPR Art.18',
      action: 'Manage Restrictions'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <a href="/" className="text-zinc-500 hover:text-zinc-900 font-medium flex items-center transition-colors mb-6">
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Home
          </a>
          <h1 className="text-4xl font-bold mb-4 flex items-center">
            <Scale className="w-8 h-8 mr-3 text-zinc-900" />
            My Rights Portal
          </h1>
          <p className="text-zinc-600 max-w-2xl">
            Exercise your legal rights under the GDPR and DPDP Act. We are committed to responding to all valid requests within 30 days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((right) => (
            <div key={right.id} className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4">
                {right.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{right.title}</h3>
              <p className="text-sm text-zinc-600 mb-4 flex-grow">
                {right.description}
              </p>
              <div className="text-xs font-mono text-zinc-400 mb-6 bg-zinc-50 px-2 py-1 rounded inline-block self-start">
                {right.laws}
              </div>
              <button className="w-full py-2.5 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors">
                {right.action}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border border-zinc-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Request Tracker</h2>
          <div className="text-center py-12 border-2 border-dashed border-zinc-200 rounded-xl">
            <p className="text-zinc-500">You have no active requests.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
