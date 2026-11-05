/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Project, JournalArticle } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'SevaLens: On-Device OCR',
    tagline: 'Snapdragon® NPU Multilingual Document Assistant',
    description: 'An offline, privacy-preserving document reader and ID masking system designed for local citizen service center (eSeva) workflows.',
    longDescription: 'I built SevaLens after noticing how local citizen service (eSeva) centers in Hyderabad routinely photocopy physical ID cards or upload them to untrusted web portals to fill simple forms. SevaLens runs entirely on-device on Snapdragon PCs. It reads scanned forms in English, Hindi, Urdu, and Telugu using EasyOCR, automatically extracts required fields, masks sensitive 12-digit ID numbers, and formats verified applicant records as structured JSON without a single byte of data leaving the machine. The pipeline is architected to transition heavy OCR inference onto the Qualcomm Hexagon NPU via ONNX Runtime QNN providers to ensure zero CPU thermal throttling and long battery life.',
    year: 2026,
    category: 'AI Systems',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000&fm=webp',
    technologies: ['Python', 'Streamlit', 'EasyOCR', 'ONNX Runtime', 'Qualcomm QNN', 'ID Masking', 'Multilingual NLP'],
    repoUrl: 'https://github.com/Syed-Ahmed4/SEVALENS'
  },
  {
    id: 'p2',
    name: 'Intelli.Credit Appraisal Engine',
    tagline: 'Automated Financial Underwriting for Indian Corporates',
    description: 'Corporate balance sheet analysis tool computing debt-service coverage, solvency metrics, and credit risk indicators.',
    longDescription: 'Corporate credit appraisal in India is often slowed down by fragmented balance sheet notes, manual debt-service checks, and scattered GST filing reconciliation. Intelli.Credit automates corporate financial appraisal by parsing balance sheet line items, calculating Debt-Service Coverage Ratios (DSCR), interest coverage, liquidity cushions, and Altman Z-score indicators. It generates structured appraisal summaries that immediately highlight solvency hazards before underwriting commitments are finalized.',
    year: 2025,
    category: 'Financial Tech',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000&fm=webp',
    technologies: ['Python', 'Financial Modeling', 'DSCR Analysis', 'Data Analytics', 'Risk Assessment'],
    repoUrl: 'https://github.com/Syed-Ahmed4/Intelli.Credit'
  },
  {
    id: 'p3',
    name: 'Numerical Methods Suite',
    tagline: 'Newton-Raphson, Euler’s ODE & Simpson’s Quadrature',
    description: 'A computational engineering library evaluating floating-point convergence rates and error propagation in scientific calculus.',
    longDescription: 'Developed during my engineering coursework to bridge abstract calculus with practical code. I implemented core numerical approximation algorithms in Python (NumPy) and MATLAB to explore iterative convergence behavior and error propagation in non-linear engineering equations. Evaluated root-finding via Newton-Raphson, initial value differential equations via Euler\'s method, and numerical quadrature via Simpson\'s rule, generating comparative visualization plots showing the exact trade-off between computational iterations and floating-point precision.',
    year: 2024,
    category: 'Scientific Computing',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000&fm=webp',
    technologies: ['Python (NumPy, SciPy)', 'MATLAB', 'Error Convergence Analysis', 'Matplotlib', 'Numerical Quadrature'],
    repoUrl: 'https://github.com/Syed-Ahmed4?tab=repositories'
  },
  {
    id: 'p4',
    name: 'Beam Deflection Simulator',
    tagline: 'Computational Structural Stress & Deformation Modeling',
    description: 'Simulating bending moments, shear forces, and elastic deformation curves across structural cantilever beams.',
    longDescription: 'An engineering tool that translates classical Euler-Bernoulli beam theory into numerical code. It models deflection, slope, and shear force distributions across simply supported and cantilever beams under point and distributed loads, providing immediate visual feedback for mechanical and structural design checks.',
    year: 2025,
    category: 'Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000&fm=webp',
    technologies: ['Python', 'Structural Mechanics', 'Finite Element Concepts', 'Data Visualization'],
    repoUrl: 'https://github.com/Syed-Ahmed4?tab=repositories'
  },
  {
    id: 'p5',
    name: '2D Heat Transfer Model',
    tagline: 'Finite Difference Solution for Thermal Gradient Flow',
    description: 'Solving partial differential equations to simulate 2D transient conductive heat flow through non-uniform materials.',
    longDescription: 'Developed a transient 2D thermal conduction simulator solving the heat equation via finite-difference time-domain (FDTD) schemes. Simulates thermal flux through heterogeneous boundaries, showing how heat disperses over time and converging toward steady-state equilibrium under varied boundary temperatures.',
    year: 2025,
    category: 'Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000&fm=webp',
    technologies: ['PDE Solving', 'Finite Difference Method', 'Python', 'Thermal Simulation'],
    repoUrl: 'https://github.com/Syed-Ahmed4?tab=repositories'
  },
  {
    id: 'p6',
    name: 'Systems Programming in C',
    tagline: 'Memory Layout, Pointer Arithmetic & Core Data Structures',
    description: 'Low-level implementation of dynamic memory allocators, graph structures, and cache-conscious search algorithms.',
    longDescription: 'Built custom implementations of fundamental data structures (dynamic arrays, balanced trees, and adjacency-list graphs) directly in C and Java. Explored pointer arithmetic, heap allocation overhead, and cache locality to deeply understand how software interfaces with underlying silicon and memory hierarchies rather than treating the machine as a black box.',
    year: 2024,
    category: 'Systems & Algorithms',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000&fm=webp',
    technologies: ['C Programming', 'Memory Management', 'Pointers', 'Data Structures', 'Java'],
    repoUrl: 'https://github.com/Syed-Ahmed4?tab=repositories'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "Why On-Device Inference Matters for Citizen Data: The SevaLens Story",
        date: "Flagship Project",
        excerpt: "Building an offline, multilingual OCR tool for local eSeva centers without sending sensitive IDs to the cloud.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000&fm=webp",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53] dark:text-[#ABA59B]" },
                "Whenever citizens in Hyderabad visit an eSeva kiosk or government service point to apply for a certificate, they hand over physical ID cards. These documents are routinely scanned and sent across unverified web portals. That realization sparked SevaLens."
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53] dark:text-[#ABA59B]" },
                "Instead of building another cloud-dependent web application, I chose to target Snapdragon PCs running locally. The goal was simple: zero bytes leaving the physical machine. Using EasyOCR with multilingual language packs for English, Hindi, Urdu, and Telugu, the software extracts form data, masks national ID digits, and exports verified JSON—all entirely offline."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] dark:border-[#E8E4DA] pl-6 italic text-xl text-[#2C2A26] dark:text-[#E8E4DA] my-10 font-serif" },
                "\"Real privacy in public service centers isn't about lengthy terms of service; it's about software that physically never touches the internet.\""
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53] dark:text-[#ABA59B]" },
                "The next milestone is quantizing the models to ONNX and utilizing the Qualcomm Hexagon NPU via the QNN Execution Provider, ensuring that local batch processing runs with near-zero CPU power draw."
            )
        )
    },
    {
        id: 2,
        title: "From Calculus to Code: Scientific Computing at Deccan College",
        date: "Engineering Mindset",
        excerpt: "Why understanding mathematical convergence rates transforms how you write software.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000&fm=webp",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53] dark:text-[#ABA59B]" },
                "In computer science, it is tempting to view coding merely as gluing libraries together. But studying numerical methods opened a completely different perspective: computer code as an engine for solving physical equations."
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53] dark:text-[#ABA59B]" },
                "Implementing Newton-Raphson root finding, Simpson's quadrature, and Euler's methods taught me how floating-point numbers behave, when algorithms diverge, and how to evaluate computational error. Whether predicting heat conduction or beam stress, writing numerical solvers forces you to think rigorously about complexity and edge cases."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] dark:border-[#E8E4DA] pl-6 italic text-xl text-[#2C2A26] dark:text-[#E8E4DA] my-10 font-serif" },
                "\"When you understand how an algorithm converges, you stop guessing why your code is slow.\""
            )
        )
    },
    {
        id: 3,
        title: "Thinking in Memory: Balancing C with Modern Python",
        date: "Systems Exploration",
        excerpt: "Why spending time with manual pointer allocation in C makes you a far better Python developer.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000&fm=webp",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53] dark:text-[#ABA59B]" },
                "High-level languages like Python and TypeScript offer incredible developer velocity. But without understanding memory layout, cache lines, and heap allocations, it is easy to write inadvertently inefficient software."
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53] dark:text-[#ABA59B]" },
                "By writing custom data structures in C—manually handling malloc, free, and pointer references—I gained a concrete mental model of what the operating system is doing under the hood. That awareness directly informs how I write vectorized NumPy code and structure local ML inference pipelines."
            )
        )
    }
];

export const BRAND_NAME = 'Syed Ahmed';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/syed-ahmed4/';
export const GITHUB_PLACEHOLDER_URL = 'https://github.com/Syed-Ahmed4';
export const CONTACT_EMAIL = 'syedahmedsda@gmail.com';
export const PHONE_NUMBER = '+91 9705363962';
export const LOCATION = 'Hyderabad, India';
export const WEB3FORMS_ACCESS_KEY = 'f5ad4a82-2d8b-49f5-82d9-9e16991a9562';
