'use client';

import { motion } from 'motion/react';
import { Shield, Scale, Cpu, Search, FileText, Award, BookOpen, Briefcase, Mail, Github, Linkedin, ExternalLink, CheckCircle2, ChevronRight, Database } from 'lucide-react';
import Footer from '@/components/Footer';
import Avatar from '@/components/Avatar';
import { ThemeToggle } from '@/components/ThemeToggle';
import RagArchitecture from '@/components/RagArchitecture';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-40 w-full backdrop-blur-md bg-zinc-50/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-lg tracking-tighter">PARUL_KUMAR</div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">About</a>
            <a href="#experience" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Projects</a>
            <a href="#privacy" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Privacy Hub</a>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available for new opportunities</span>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Cyber Advocate <br/>
                <span className="text-zinc-400 dark:text-zinc-500">& AI Governance.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg leading-relaxed">
                Member Advocate at the Punjab and Haryana High Court. Fostering technology-driven legal frameworks and policymaking aimed at digital justice and cybercrime prevention.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a href="mailto:adv.parulkumar@gmail.com" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
                <a href="https://www.linkedin.com/in/adv-parul-kumar" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
                <a href="https://github.com/Parulkumar51" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-72 md:w-96 md:h-96"
              >
                <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <Avatar />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <motion.section 
          id="about" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-20 bg-white dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-6 flex items-center"><Scale className="w-8 h-8 mr-3 text-zinc-400 dark:text-zinc-500" /> Professional Summary</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Law graduate specializing in cyber law and AI governance with strong research skills in legal policy analysis and public speaking. Experienced in contributing to workshops and awareness campaigns on youth humanitarian action, mediation, and intellectual property rights.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills & Expertise */}
        <motion.section 
          id="skills" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-12 flex items-center"><Cpu className="w-8 h-8 mr-3 text-zinc-400 dark:text-zinc-500" /> Skills & Expertise</motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Legal & Policy */}
              <motion.div variants={fadeInUp} className="group bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10">
                  <Scale className="w-6 h-6 text-zinc-700 dark:text-zinc-300 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Legal & Policy</h3>
                <ul className="space-y-3">
                  {[
                    "Cyber Crime Investigation",
                    "Legal Research & Writing",
                    "AI Governance & Ethics",
                    "Data Privacy (GDPR, DPDP)",
                    "Intellectual Property Rights"
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-600 dark:text-zinc-400 font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Technical Skills */}
              <motion.div variants={fadeInUp} className="group bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10">
                  <Cpu className="w-6 h-6 text-zinc-700 dark:text-zinc-300 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Technical Skills</h3>
                <ul className="space-y-3">
                  {[
                    "A.I. Prompt Engineering",
                    "OSINT Framework",
                    "Kali Linux / Ubuntu",
                    "HTML / CSS / JS",
                    "AWS / GitHub"
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-600 dark:text-zinc-400 font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Soft Skills */}
              <motion.div variants={fadeInUp} className="group bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10">
                  <BookOpen className="w-6 h-6 text-zinc-700 dark:text-zinc-300 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Professional Skills</h3>
                <ul className="space-y-3">
                  {[
                    "Public Speaking",
                    "Mediation & Negotiation",
                    "Policy Analysis",
                    "Workshop Facilitation",
                    "Cross-functional Collaboration"
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-600 dark:text-zinc-400 font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section 
          id="experience" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20 px-6 max-w-6xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-12 flex items-center"><Briefcase className="w-8 h-8 mr-3 text-zinc-400" /> Work Experience</motion.h2>
          <div className="space-y-12">
            <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-zinc-200"></div>
              
              <div className="md:grid md:grid-cols-[8rem_1fr] gap-8 relative">
                <div className="hidden md:block text-sm font-mono text-zinc-500 pt-1 text-right">
                  Present
                </div>
                <div className="relative">
                  <div className="absolute -left-10 md:-left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-zinc-900 ring-4 ring-white"></div>
                  <div className="md:hidden text-sm font-mono text-zinc-500 mb-2">Present</div>
                  <h3 className="text-xl font-bold">Member Advocate</h3>
                  <div className="text-zinc-600 font-medium mb-4">Punjab and Haryana High Court</div>
                  <ul className="space-y-3 text-zinc-600">
                    <li className="flex items-start"><ChevronRight className="w-5 h-5 text-zinc-300 shrink-0 mr-1" /> Practicing advocate representing clients and assisting in legal proceedings at the High Court level.</li>
                    <li className="flex items-start"><ChevronRight className="w-5 h-5 text-zinc-300 shrink-0 mr-1" /> Specializing in cyber law, digital privacy, and technology-related legal matters.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-zinc-200"></div>
              
              <div className="md:grid md:grid-cols-[8rem_1fr] gap-8 relative">
                <div className="hidden md:block text-sm font-mono text-zinc-500 pt-1 text-right">
                  Dec 2025 - Present
                </div>
                <div className="relative">
                  <div className="absolute -left-10 md:-left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-zinc-300 ring-4 ring-white"></div>
                  <div className="md:hidden text-sm font-mono text-zinc-500 mb-2">Dec 2025 - Present</div>
                  <h3 className="text-xl font-bold">Legal-AI Research Contributor</h3>
                  <div className="text-zinc-600 font-medium mb-4">Indian Institute of Technology, Kanpur (IITK)</div>
                  <ul className="space-y-3 text-zinc-600">
                    <li className="flex items-start"><ChevronRight className="w-5 h-5 text-zinc-300 shrink-0 mr-1" /> Conducted comprehensive legal research on IT Act sections 65, 66B-E, analyzing cyber law provisions.</li>
                    <li className="flex items-start"><ChevronRight className="w-5 h-5 text-zinc-300 shrink-0 mr-1" /> Assisted in training and evaluating LLMs (Gemini 3, GPT 5.1) for legal applications.</li>
                    <li className="flex items-start"><ChevronRight className="w-5 h-5 text-zinc-300 shrink-0 mr-1" /> Participated in AI projects involving automation, prompt engineering, and legal document annotation.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-[8rem_1fr] gap-8 relative">
                <div className="hidden md:block text-sm font-mono text-zinc-500 pt-1 text-right">
                  Jun 2022
                </div>
                <div className="relative">
                  <div className="absolute -left-10 md:-left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-zinc-300 ring-4 ring-white"></div>
                  <div className="md:hidden text-sm font-mono text-zinc-500 mb-2">Jun 2022</div>
                  <h3 className="text-xl font-bold">Legal Intern</h3>
                  <div className="text-zinc-600 font-medium mb-4">Advocate B.D. Mishra | District & Session Court</div>
                  <ul className="space-y-3 text-zinc-600">
                    <li className="flex items-start"><ChevronRight className="w-5 h-5 text-zinc-300 shrink-0 mr-1" /> Researched and summarized key legal precedents on cyber fraud, improving team understanding by 60%.</li>
                    <li className="flex items-start"><ChevronRight className="w-5 h-5 text-zinc-300 shrink-0 mr-1" /> Attended 10+ courtroom sessions to observe trial procedures and analyze judicial processes.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section 
          id="projects" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20 bg-zinc-900 text-zinc-50"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-12 flex items-center"><Search className="w-8 h-8 mr-3 text-zinc-500" /> Key Projects</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8 hover:bg-zinc-800 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-zinc-700 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-zinc-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">NyAI Project: Cheque Bounce Automation</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Developing AI-driven tools for legal automation in cheque bounce cases under Section 138 of the Negotiable Instruments Act. Combining machine learning, NLP, and legal reasoning.
                </p>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• Case outcome prediction model</li>
                  <li>• Legal document annotation framework</li>
                  <li>• Feature extraction & dataset structuring</li>
                </ul>
              </motion.div>
              
              {/* Legal AI RAG System */}
              <motion.div variants={fadeInUp} className="md:col-span-2 bg-zinc-900/80 border border-zinc-700/80 rounded-3xl p-8 md:p-10 overflow-hidden relative shadow-2xl mt-4">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
                
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="lg:w-1/3 space-y-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-300">
                        <Database className="w-3 h-3 text-purple-400" />
                        <span>System Architecture</span>
                      </div>
                      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                        <span>Under Development</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Legal AI RAG System</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      An end-to-end Retrieval-Augmented Generation pipeline designed for legal judgments. It processes original case files through lossless OCR into text, generates vector embeddings, and indexes them in a vector database. 
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      User queries are vectorized to perform similarity searches, feeding relevant context to an LLM for highly accurate, structured legal outputs.
                    </p>
                  </div>
                  
                  <div className="lg:w-2/3 w-full">
                    <RagArchitecture />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Education & Certifications */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20 px-6 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-8 flex items-center"><BookOpen className="w-6 h-6 mr-3 text-zinc-400" /> Education</h2>
              <div className="space-y-8">
                <div>
                  <div className="text-sm font-mono text-zinc-500 mb-1">2025 - 2026</div>
                  <h3 className="text-lg font-bold">L.L.M (Cyber Law & Cyber Crime Investigation)</h3>
                  <p className="text-zinc-600">National Forensic Science University, Gandhinagar</p>
                </div>
                <div>
                  <div className="text-sm font-mono text-zinc-500 mb-1">2020 - 2025</div>
                  <h3 className="text-lg font-bold">B.A.L.L.B (Hons.)</h3>
                  <p className="text-zinc-600">Institute of Law, Kurukshetra University</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-8 flex items-center"><Award className="w-6 h-6 mr-3 text-zinc-400" /> Certifications</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-zinc-400 shrink-0 mr-3 mt-0.5" />
                  <div>
                    <div className="font-bold">Anthropic Academy</div>
                    <div className="text-sm text-zinc-600 mt-1 space-y-1">
                      <p>• AI Fluency: Framework & Foundations</p>
                      <p>• Building with the Claude API</p>
                      <p>• Claude 101</p>
                      <p>• Claude Code in Action</p>
                      <p>• Introduction to Agent Skills</p>
                      <p>• Introduction to Model Context Protocol</p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-zinc-400 shrink-0 mr-3 mt-0.5" />
                  <div>
                    <div className="font-bold">ISO/IEC 42001:2023 Lead Auditor</div>
                    <div className="text-sm text-zinc-600">AI Management System</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-zinc-400 shrink-0 mr-3 mt-0.5" />
                  <div>
                    <div className="font-bold">ISO/IEC 27001:2022 Lead Auditor</div>
                    <div className="text-sm text-zinc-600">Information Security Management System</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-zinc-400 shrink-0 mr-3 mt-0.5" />
                  <div>
                    <div className="font-bold">Drone Forensic Training Program</div>
                    <div className="text-sm text-zinc-600">Aeroworks Technologies & Forensic Experts (2025)</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-zinc-400 shrink-0 mr-3 mt-0.5" />
                  <div className="font-bold pt-0.5">Cybercrime Investigation & Digital Forensics</div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Privacy Framework Showcase */}
        <motion.section 
          id="privacy" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20 bg-zinc-50 border-t border-zinc-200"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Privacy by Design Showcase</h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                As a cyber advocate, I believe in practicing what I preach. This website implements a conceptual GDPR + DPDP Act combined privacy framework.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="/privacy-policy" className="block p-6 bg-white border border-zinc-200 rounded-xl hover:border-zinc-400 transition-colors group">
                <FileText className="w-8 h-8 text-zinc-400 mb-4 group-hover:text-zinc-900 transition-colors" />
                <h3 className="font-bold mb-2">Privacy Policy</h3>
                <p className="text-sm text-zinc-500">Full GDPR/DPDP notice in plain English.</p>
              </a>
              <a href="/consent-centre" className="block p-6 bg-white border border-zinc-200 rounded-xl hover:border-zinc-400 transition-colors group">
                <Shield className="w-8 h-8 text-zinc-400 mb-4 group-hover:text-zinc-900 transition-colors" />
                <h3 className="font-bold mb-2">Consent Centre</h3>
                <p className="text-sm text-zinc-500">Manage and withdraw your consent choices.</p>
              </a>
              <a href="/rights-portal" className="block p-6 bg-white border border-zinc-200 rounded-xl hover:border-zinc-400 transition-colors group">
                <Scale className="w-8 h-8 text-zinc-400 mb-4 group-hover:text-zinc-900 transition-colors" />
                <h3 className="font-bold mb-2">My Rights Portal</h3>
                <p className="text-sm text-zinc-500">Exercise your 6 DPDP and 8 GDPR rights.</p>
              </a>
              <a href="/grievance-hub" className="block p-6 bg-white border border-zinc-200 rounded-xl hover:border-zinc-400 transition-colors group">
                <Mail className="w-8 h-8 text-zinc-400 mb-4 group-hover:text-zinc-900 transition-colors" />
                <h3 className="font-bold mb-2">Grievance Hub</h3>
                <p className="text-sm text-zinc-500">Raise and track complaints securely.</p>
              </a>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
