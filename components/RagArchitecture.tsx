'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, ScanText, FileCode2, Binary, Database, MessageSquare, Search, Cpu, FileJson } from 'lucide-react';

const Node = ({ icon: Icon, label, sublabel, delay, color = "#10b981", tooltip }: { icon: any, label: string, sublabel?: string, delay: number, color?: string, tooltip?: string }) => {
  const [isClicked, setIsClicked] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    setIsClicked(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsClicked(false), 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <motion.div 
      className="flex flex-col items-center gap-2 z-10 w-full shrink-0 group relative cursor-pointer"
      animate={{ y: [-2, 2, -2] }}
      transition={{ duration: 4, repeat: Infinity, delay: delay % 2, ease: "easeInOut" }}
      onClick={handleClick}
    >
      {tooltip && (
        <div 
          className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-zinc-800 text-zinc-200 text-xs rounded-lg transition-all duration-200 z-50 w-max max-w-[200px] text-center pointer-events-none ${isClicked ? 'opacity-100 visible scale-105 shadow-xl' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible border border-zinc-700 shadow-xl'}`}
          style={isClicked ? { borderColor: color, borderWidth: '1px', boxShadow: `0 0 15px ${color}80` } : {}}
        >
          {tooltip}
          <div 
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-800 border-b border-r transform rotate-45"
            style={isClicked ? { borderColor: color } : { borderColor: '#3f3f46' }}
          ></div>
        </div>
      )}
      <motion.div
        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl border bg-zinc-800 flex items-center justify-center relative shadow-lg transition-transform duration-200 ${isClicked ? 'scale-110' : ''}`}
        animate={isClicked ? {
          borderColor: color,
          boxShadow: `0px 0px 20px ${color}`
        } : {
          borderColor: ["#3f3f46", color, "#3f3f46"],
          boxShadow: ["0px 0px 0px rgba(0,0,0,0)", `0px 0px 15px ${color}40`, "0px 0px 0px rgba(0,0,0,0)"]
        }}
        transition={isClicked ? { duration: 0.2 } : { duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
      >
        <Icon className={`w-4 h-4 md:w-5 md:h-5 absolute transition-colors duration-200 ${isClicked ? '' : 'text-zinc-500'}`} style={isClicked ? { color } : {}} />
        {!isClicked && (
          <motion.div
             className="absolute inset-0 flex items-center justify-center"
             animate={{ opacity: [0, 1, 0] }}
             transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
          >
             <Icon className="w-4 h-4 md:w-5 md:h-5" style={{ color }} />
          </motion.div>
        )}
      </motion.div>
      <div className="text-center">
        <div className={`font-medium leading-tight text-[10px] md:text-xs transition-colors duration-200 ${isClicked ? 'text-white' : 'text-zinc-300'}`}>{label}</div>
        {sublabel && <div className={`leading-tight mt-0.5 text-[8px] md:text-[10px] transition-colors duration-200 ${isClicked ? 'text-zinc-300' : 'text-zinc-500'}`}>{sublabel}</div>}
      </div>
    </motion.div>
  );
};

const VerticalArrow = ({ delay = 0, color = "#10b981", h = "h-6 md:h-8" }: { delay?: number, color?: string, h?: string }) => (
  <div className={`w-[2px] ${h} bg-zinc-800/80 relative flex justify-center rounded-full overflow-hidden mx-auto my-1`}>
    <motion.div
      className="w-full absolute top-0 h-1/2 rounded-full opacity-70"
      style={{ background: `linear-gradient(180deg, transparent, ${color}, transparent)` }}
      animate={{ top: ["-100%", "200%"] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: delay % 1.5, ease: "linear" }}
    />
  </div>
);

const HorizontalArrow = ({ delay = 0, color = "#10b981" }: { delay?: number, color?: string }) => (
  <div className="h-[2px] w-full bg-zinc-800/80 relative flex items-center rounded-full overflow-hidden">
    <motion.div
      className="h-full absolute left-0 w-1/2 rounded-full opacity-70"
      style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      animate={{ left: ["-100%", "200%"] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: delay % 1.5, ease: "linear" }}
    />
  </div>
);

export default function RagArchitecture() {
  return (
    <div className="w-full overflow-x-auto pb-6 pt-4" style={{ scrollbarWidth: 'none' }}>
      <div className="min-w-[500px] md:min-w-[600px] p-6 bg-zinc-950/50 rounded-2xl border border-zinc-800/50 relative">
        
        {/* Section Labels */}
        <div className="absolute left-6 top-4 text-[10px] font-mono text-blue-500/70 uppercase tracking-wider font-bold">Data Ingestion Pipeline</div>
        <div className="absolute right-6 top-4 text-[10px] font-mono text-emerald-500/70 uppercase tracking-wider font-bold">Retrieval & Generation</div>

        <div className="grid grid-cols-[1fr_30px_1fr_30px_1fr] md:grid-cols-[1fr_50px_1fr_50px_1fr] items-center mt-8">
          
          {/* Row 1 */}
          <Node icon={FileText} label="Real Cases" sublabel="PDF/Images" delay={0} color="#3b82f6" tooltip="Raw legal documents, judgments, and case files in PDF or image format." />
          <div />
          <div />
          <div />
          <Node icon={MessageSquare} label="User Query" sublabel="Legal Question" delay={0.8} color="#10b981" tooltip="A natural language question asked by a user regarding a legal matter." />

          {/* V-Arrows 1 */}
          <VerticalArrow delay={0.2} color="#3b82f6" />
          <div />
          <div />
          <div />
          <VerticalArrow delay={1.0} color="#10b981" />

          {/* Row 2 */}
          <Node icon={ScanText} label="Lossless OCR" sublabel="Text Extraction" delay={0.4} color="#3b82f6" tooltip="Optical Character Recognition extracts text from images and PDFs without losing structural formatting." />
          <div />
          <div />
          <div />
          <Node icon={Binary} label="Query Vector" sublabel="Embedding" delay={1.2} color="#10b981" tooltip="The user's query is converted into a mathematical vector for similarity comparison." />

          {/* V-Arrows 2 */}
          <VerticalArrow delay={0.6} color="#3b82f6" />
          <div />
          <div />
          <div />
          <VerticalArrow delay={1.4} color="#10b981" />

          {/* Row 3 */}
          <Node icon={FileCode2} label="TXT Format" sublabel="Cleaned Data" delay={0.8} color="#3b82f6" tooltip="Extracted text is cleaned, normalized, and converted into plain text format." />
          <div />
          <div />
          <div />
          <VerticalArrow delay={1.6} color="#10b981" h="h-14 md:h-16" /> {/* Pass through node space */}

          {/* V-Arrows 3 */}
          <VerticalArrow delay={1.0} color="#3b82f6" />
          <div />
          <div />
          <div />
          <VerticalArrow delay={1.8} color="#10b981" />

          {/* Row 4: Intersection */}
          <Node icon={Binary} label="Embedding" sublabel="Vectorization" delay={1.2} color="#3b82f6" tooltip="Cleaned text is chunked and converted into vector embeddings representing semantic meaning." />
          <HorizontalArrow delay={1.4} color="#3b82f6" />
          <Node icon={Database} label="Vector DB" sublabel="Indexed Storage" delay={1.6} color="#8b5cf6" tooltip="Embeddings are stored and indexed in a specialized vector database for fast retrieval." />
          <HorizontalArrow delay={1.8} color="#8b5cf6" />
          <Node icon={Search} label="Similarity Search" sublabel="Context Retrieval" delay={2.0} color="#10b981" tooltip="The system searches the Vector DB for documents most semantically similar to the user's query." />

          {/* V-Arrows 4 */}
          <div />
          <div />
          <div />
          <div />
          <VerticalArrow delay={2.2} color="#10b981" />

          {/* Row 5 */}
          <div />
          <div />
          <div />
          <div />
          <Node icon={Cpu} label="Language Model" sublabel="LLM Processing" delay={2.4} color="#10b981" tooltip="A Large Language Model (LLM) processes the user query alongside the retrieved legal context." />

          {/* V-Arrows 5 */}
          <div />
          <div />
          <div />
          <div />
          <VerticalArrow delay={2.6} color="#f59e0b" />

          {/* Row 6 */}
          <div />
          <div />
          <div />
          <div />
          <Node icon={FileJson} label="Structured Output" sublabel="Final Answer" delay={2.8} color="#f59e0b" tooltip="The LLM generates a highly accurate, structured answer based strictly on the retrieved legal context." />

        </div>
      </div>
    </div>
  );
}
