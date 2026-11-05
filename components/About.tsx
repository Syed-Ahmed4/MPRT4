/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { LINKEDIN_URL } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#EBE7DE] dark:bg-[#181715] transition-colors duration-400">
      
      {/* Introduction / Story */}
      <div className="py-16 md:py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C2A26] dark:text-[#E8E4DA] leading-tight">
            Engineering solutions through <br/> <span className="italic text-[#5D5A53] dark:text-[#A8A29E]">edge AI & computation.</span>
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#5D5A53] dark:text-[#B5B0A4] font-light leading-relaxed mb-6">
            I am a second-year Computer Science Engineering student at Deccan College of Engineering & Technology in Hyderabad, building at the intersection of on-device AI systems, scientific computing, and low-level software.
          </p>
          <p className="text-lg md:text-xl text-[#5D5A53] dark:text-[#B5B0A4] font-light leading-relaxed mb-10">
            My work focuses on practical, edge-native engineering—such as SevaLens, an offline multilingual document reader built for Snapdragon PCs that performs on-device OCR and ID redaction without sending citizen data to the cloud. From exploring NPU acceleration and memory management in C to simulating heat transfer and numerical convergence in Python, I am driven by understanding systems from first principles. I am actively seeking software engineering, AI systems, and research internships for 2026.
          </p>
          
          {/* Focus Areas */}
          <div className="mb-12 bg-[#D6D1C7]/20 dark:bg-[#22201D] p-6 border-l-2 border-[#A8A29E] dark:border-[#5A554D]">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2C2A26] dark:text-[#E8E4DA] mb-4">Focus Areas</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                <div className="flex items-center gap-3 text-[#5D5A53] dark:text-[#D5CFC4] text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-[#2C2A26] dark:bg-[#E8E4DA] rounded-full"></span>
                    <span>On-Device AI & NPU Acceleration</span>
                </div>
                <div className="flex items-center gap-3 text-[#5D5A53] dark:text-[#D5CFC4] text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-[#2C2A26] dark:bg-[#E8E4DA] rounded-full"></span>
                    <span>Scientific Computing & Simulation</span>
                </div>
                <div className="flex items-center gap-3 text-[#5D5A53] dark:text-[#D5CFC4] text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-[#2C2A26] dark:bg-[#E8E4DA] rounded-full"></span>
                    <span>Systems-Level Programming (C)</span>
                </div>
                <div className="flex items-center gap-3 text-[#5D5A53] dark:text-[#D5CFC4] text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-[#2C2A26] dark:bg-[#E8E4DA] rounded-full"></span>
                    <span>Data Structures & Algorithmic Optimization</span>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#D6D1C7] dark:border-[#2E2C28] pt-8">
             <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#2C2A26] dark:text-[#E8E4DA] mb-4">Education</h4>
                <p className="text-[#2C2A26] dark:text-[#E8E4DA] font-medium text-lg font-serif mb-1">B.E. in Computer Science & Eng.</p>
                <p className="text-[#A8A29E] dark:text-[#8C867C] text-sm mb-2">Deccan College of Eng. & Tech, Hyderabad</p>
                <p className="text-[#5D5A53] dark:text-[#B5B0A4] font-mono text-xs bg-[#D6D1C7]/40 dark:bg-[#2A2824] inline-block px-2 py-1 rounded">CGPA: 7.95 / 10</p>
             </div>
             <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#2C2A26] dark:text-[#E8E4DA] mb-4">Contact & Links</h4>
                <ul className="space-y-2 text-sm text-[#5D5A53] dark:text-[#B5B0A4]">
                    <li className="flex gap-3 items-center">
                        <span className="w-16 font-bold text-[#A8A29E] dark:text-[#8C867C] text-xs uppercase tracking-wider">Email</span>
                        <a href="mailto:syedahmedsda@gmail.com" className="hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors border-b border-transparent hover:border-[#2C2A26] dark:hover:border-[#E8E4DA]">syedahmedsda@gmail.com</a>
                    </li>
                    <li className="flex gap-3 items-center">
                        <span className="w-16 font-bold text-[#A8A29E] dark:text-[#8C867C] text-xs uppercase tracking-wider">Phone</span>
                        <span>+91 9705363962</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <span className="w-16 font-bold text-[#A8A29E] dark:text-[#8C867C] text-xs uppercase tracking-wider">GitHub</span>
                        <a href="https://github.com/Syed-Ahmed4" target="_blank" rel="noreferrer" className="hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors border-b border-transparent hover:border-[#2C2A26] dark:hover:border-[#E8E4DA]">github.com/Syed-Ahmed4</a>
                    </li>
                    <li className="flex gap-3 items-center">
                        <span className="w-16 font-bold text-[#A8A29E] dark:text-[#8C867C] text-xs uppercase tracking-wider">LinkedIn</span>
                        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors border-b border-transparent hover:border-[#2C2A26] dark:hover:border-[#E8E4DA]">linkedin.com/in/syed-ahmed4</a>
                    </li>
                </ul>
             </div>
          </div>
        </div>
      </div>

      {/* Skills Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        <div className="order-2 lg:order-1 relative h-auto min-h-[400px] lg:h-auto overflow-hidden group bg-[#2C2A26] dark:bg-[#100F0E] p-8 md:p-12 lg:p-24 text-[#F5F2EB] dark:text-[#E8E4DA]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] dark:text-[#8C867C] mb-6 block">Technical Arsenal</span>
           <h3 className="text-3xl md:text-4xl font-serif mb-8 text-[#F5F2EB] dark:text-[#E8E4DA] leading-tight">
             Core Technologies
           </h3>
           <ul className="space-y-4 font-light text-[#A8A29E] dark:text-[#9E988F]">
             <li className="flex items-center gap-4">
                <span className="w-24 text-white font-medium">Python</span>
                <span className="h-px bg-[#A8A29E]/30 dark:bg-[#A8A29E]/20 flex-1"></span>
                <span>NumPy, SciPy, Streamlit, EasyOCR</span>
             </li>
             <li className="flex items-center gap-4">
                <span className="w-24 text-white font-medium">C</span>
                <span className="h-px bg-[#A8A29E]/30 dark:bg-[#A8A29E]/20 flex-1"></span>
                <span>Pointers, Heap Layout, Custom DSA</span>
             </li>
             <li className="flex items-center gap-4">
                <span className="w-24 text-white font-medium">ONNX / QNN</span>
                <span className="h-px bg-[#A8A29E]/30 dark:bg-[#A8A29E]/20 flex-1"></span>
                <span>Snapdragon Hexagon NPU Acceleration</span>
             </li>
             <li className="flex items-center gap-4">
                <span className="w-24 text-white font-medium">MATLAB</span>
                <span className="h-px bg-[#A8A29E]/30 dark:bg-[#A8A29E]/20 flex-1"></span>
                <span>Numerical Approximation & PDE Solvers</span>
             </li>
             <li className="flex items-center gap-4">
                <span className="w-24 text-white font-medium">Java</span>
                <span className="h-px bg-[#A8A29E]/30 dark:bg-[#A8A29E]/20 flex-1"></span>
                <span>Object-Oriented Architecture & DSA</span>
             </li>
           </ul>
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-8 md:p-12 lg:p-24 bg-[#D6D1C7] dark:bg-[#1C1B18]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] dark:text-[#A8A29E] mb-6">Capabilities</span>
           <h3 className="text-3xl md:text-4xl font-serif mb-8 text-[#2C2A26] dark:text-[#E8E4DA] leading-tight">
             Engineering Domains
           </h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-[#2C2A26] dark:text-[#E8E4DA] mb-2">On-Device AI & OCR</h4>
                <p className="text-sm text-[#5D5A53] dark:text-[#ABA59B] leading-relaxed">Local multilingual OCR, privacy redaction, and quantized neural inference on Snapdragon hardware.</p>
              </div>
              <div>
                <h4 className="font-medium text-[#2C2A26] dark:text-[#E8E4DA] mb-2">Scientific Computing</h4>
                <p className="text-sm text-[#5D5A53] dark:text-[#ABA59B] leading-relaxed">Numerical methods (Newton-Raphson, Euler, Simpson), error convergence rates, and physical simulations.</p>
              </div>
              <div>
                <h4 className="font-medium text-[#2C2A26] dark:text-[#E8E4DA] mb-2">Core CS & Systems</h4>
                <p className="text-sm text-[#5D5A53] dark:text-[#ABA59B] leading-relaxed">Memory management, pointers, cache locality, data structures, and algorithmic complexity.</p>
              </div>
              <div>
                <h4 className="font-medium text-[#2C2A26] dark:text-[#E8E4DA] mb-2">Financial Modeling</h4>
                <p className="text-sm text-[#5D5A53] dark:text-[#ABA59B] leading-relaxed">Corporate credit evaluation (Intelli.Credit), balance sheet ratio analysis, and automated underwriting memos.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;