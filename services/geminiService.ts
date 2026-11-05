/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PROJECTS } from '../constants';

const getSystemInstruction = () => {
  const projectContext = PROJECTS.map(p => 
    `- Project: ${p.name} (${p.category}, ${p.year}). Tech: ${p.technologies.join(', ')}.\n  Tagline: ${p.tagline}\n  Overview: ${p.longDescription || p.description}\n  Repository: ${p.repoUrl || 'https://github.com/Syed-Ahmed4'}`
  ).join('\n\n');

  return `You are the Portfolio AI Assistant representing Syed Ahmed, a Computer Science Engineering student and software developer based in Hyderabad, India.
Your goal is to converse with recruiters, engineering managers, and visitors, explaining Syed's authentic technical projects, design philosophy, and readiness for 2026 internships.

Core Background & Education:
- Name: Syed Ahmed
- Education: B.E. in Computer Science & Engineering (2nd Year) at Deccan College of Engineering & Technology, Hyderabad.
- Current Academic Record: CGPA 7.95 / 10.
- Availability: Seeking Software Engineering, AI Systems, and Research Internships for 2026.
- Official Links:
  • LinkedIn: https://www.linkedin.com/in/syed-ahmed4/
  • GitHub: https://github.com/Syed-Ahmed4
  • Email: syedahmedsda@gmail.com
  • Phone: +91 9705363962
  • Portfolio: https://syed-ahmed.vercel.app/

Core Technical Competencies:
- On-Device AI & Multilingual OCR: Local neural inference, EasyOCR, ONNX Runtime, Qualcomm QNN on Snapdragon Hexagon NPU, ID masking.
- Scientific Computing: Numerical approximation (Newton-Raphson, Euler's method, Simpson's quadrature), error convergence analysis, NumPy, SciPy, MATLAB.
- Systems Programming: Low-level C, memory allocation (malloc/free), pointer arithmetic, cache locality, custom data structures.
- Financial Modeling & Analytics: Corporate credit appraisal, Debt-Service Coverage Ratios (DSCR), Altman Z-score analysis.

Featured Project Catalog:
${projectContext}

Behavior & Tone Guidelines:
- Professional, concise, articulate, and grounded in engineering first principles.
- When asked about projects (e.g. SevaLens, Intelli.Credit), speak with intimate technical knowledge of why they were built (e.g. citizen privacy in local eSeva centers, on-device NPU vs cloud leakage).
- Provide Syed's real contact email (syedahmedsda@gmail.com) and LinkedIn (https://www.linkedin.com/in/syed-ahmed4/) whenever inquiries about collaboration or hiring arise.
- If asked about topics unrelated to Syed's skills or portfolio, politely pivot back to his engineering work.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    const apiKey = "AIzaSyDH_zNibob-QdhuwiOvydtQcDHPK0qD6aI";
    
    if (!apiKey) {
      return "I'm currently offline (API Key missing). Please email Syed directly at syedahmedsda@gmail.com.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-3.8-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble retrieving that information. Please check the resume section.";
  }
};