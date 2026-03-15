export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 text-sm">
      <div className="max-w-6xl mx-auto px-6">
        {/* Privacy Promise Strip */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 mb-12 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <div>
            <strong className="text-zinc-200 block sm:inline">Privacy Promise: </strong>
            We respect your data under GDPR (EU) and DPDP Act (India).
          </div>
          <a href="/privacy-policy" className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-zinc-200 rounded-lg transition-colors whitespace-nowrap">
            See how we protect you
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="font-mono font-bold text-lg tracking-tighter text-zinc-200 mb-4">PARUL_KUMAR</div>
            <p className="max-w-xs">
              Cyber Advocate & AI Governance Specialist. Committed to digital justice and secure technological frameworks.
            </p>
          </div>
          
          <div>
            <h4 className="text-zinc-200 font-bold mb-4">Compliance</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:text-zinc-200 transition-colors">Privacy Policy</a></li>
              <li><a href="/consent-centre" className="hover:text-zinc-200 transition-colors">Consent Centre</a></li>
              <li><a href="/rights-portal" className="hover:text-zinc-200 transition-colors">My Rights Portal</a></li>
              <li><a href="/grievance-hub" className="hover:text-zinc-200 transition-colors">Grievance Hub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-200 font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:adv.parulkumar@gmail.com" className="hover:text-zinc-200 transition-colors">Email</a></li>
              <li><a href="https://www.linkedin.com/in/adv-parul-kumar" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/Parulkumar51" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-zinc-200 transition-colors">Contact DPO</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Parul Kumar. All rights reserved.</p>
          <div className="flex space-x-4">
            <span className="text-xs px-2 py-1 rounded bg-zinc-800 border border-zinc-700">GDPR Compliant</span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-800 border border-zinc-700">DPDP Act Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
