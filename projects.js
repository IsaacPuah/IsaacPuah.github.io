var PROJECTS = [
  {
    title: "Autonomous Drone",
    titleItalic: "— Infineon Sponsored",
    desc: "An Infineon-sponsored autonomous drone achieving 92% parking spot detection accuracy. Integrates PSoC 6 edge inference, a dual Raspberry Pi compute architecture, and a full DroneKit-Python autonomous flight stack interfacing with a Pixhawk flight controller.",
    tags: ["C++", "Python", "PSoC 6", "YOLOv8n", "Raspberry Pi", "DroneKit"],
    image: "images/drone_overview.jpg",
    imageAlt: "Drone overview",
    link: "",
    sections: [
      {
        heading: "Computer Vision — Parking Detection",
        body: "Fine-tuned YOLOv8n on a custom parking dataset and optimized inference for constrained edge hardware by pruning irrelevant classes, reducing model size while preserving 92% detection accuracy. Inference runs on a PSoC 6 AI board at the edge."
      },
      {
        heading: "Autonomous Flight Stack",
        body: "Developed a DroneKit-Python control stack covering autonomous takeoff, perimeter calibration, spatial memory navigation, and precision landing. A UDP/TCP networking layer streams real-time GPS coordinates to remote devices during flight."
      },
      {
        heading: "Edge Classification",
        body: "The PSoC 6 board runs concurrent emergency siren classification alongside parking detection, allowing the drone to abort or reroute autonomously in response to audio events without offloading to the ground station."
      }
    ]
  },
  {
    title: "Silicarise Technology",
    titleItalic: "— Software Validation Intern",
    desc: "Software Validation Engineer Intern at Silicarise Technology, Penang, Malaysia (Jul – Aug 2025). Overhauled the embedded software test infrastructure for K80 embedded systems, expanding API test coverage from 45% to 87% and surfacing critical concurrency bugs before deployment.",
    tags: ["C/C++", "GoogleTest", "QEMU", "Docker", "RISC-V", "Multithreading"],
    image: "",
    imageAlt: "",
    link: "",
    sections: [
      {
        heading: "Test Suite Migration",
        body: "Migrated the existing C unit test suite to the GoogleTest framework and authored 50+ additional test cases, catching 15+ critical edge-case failures that would have reached deployment."
      },
      {
        heading: "Concurrency & Emulation",
        body: "Introduced multithreaded test scenarios in C++ to stress-test concurrency behavior in K80 embedded software, uncovering 8 race conditions and deadlocks. Containerized RISC-V emulation with QEMU and Docker, cutting environment setup time by 60%."
      }
    ]
  },
  {
    title: "Lawrence Berkeley Lab",
    titleItalic: "— Research Intern",
    desc: "Research Intern at LBNL's Environmental Genomics & Systems Biology division (Feb 2026 – Present). Building a natural language-to-graph query interface for KG-Microbe, a large-scale knowledge graph integrating microbial genomics, taxonomy, and trait data across DOE KBase and NIH Bridge2AI platforms.",
    tags: ["Python", "DuckDB", "Google Gemini", "NL-to-SQL", "Graph Queries"],
    image: "",
    imageAlt: "",
    link: "",
    sections: [
      {
        heading: "NL-to-Graph Query Interface",
        body: "Translating plain English questions into structured graph queries against KG-Microbe — a knowledge graph spanning microbial phenotypes, taxonomy, and environmental traits. Users can ask questions without writing database queries."
      },
      {
        heading: "Data Pipelines",
        body: "Engineered Python pipelines to ingest, validate, and transform biological datasets into graph-structured formats, applying modular design and version control to a production scientific codebase."
      }
    ]
  },
  {
    title: "SolShield",
    titleItalic: "— HackMerced XI",
    desc: "Led a 3-person team to design and ship a non-custodial Solana USDC web wallet in 48 hours. Handles keypair generation, real-time balance fetching, SPL token transfers, and automatic Associated Token Account creation for recipients.",
    tags: ["Next.js · React", "Solana / web3.js", "SPL Token", "MongoDB", "Tailwind CSS"],
    image: "",
    imageAlt: "",
    link: "https://github.com/IsaacPuah/Merced-Hack-XI-",
    sections: [
      {
        heading: "Smart Transfers",
        body: "Automatically detects whether a recipient has an Associated Token Account for USDC and creates one on the fly if not — preventing the most common failure mode when sending tokens to new wallets."
      },
      {
        heading: "Backend & Auth",
        body: "Designed REST API routes in Next.js App Router with middleware-based route protection, backed by MongoDB via Mongoose for user and contact management."
      }
    ]
  },
  {
    title: "CalSol Solar Racing",
    titleItalic: "— Excalibur Firmware",
    desc: "Electrical team member on UC Berkeley's Cal Sol Solar Racing Team, developing embedded firmware and PCB hardware for Excalibur, the team's solar car. Responsible for the steering wheel electronics and the multi-protocol vehicle communication layer.",
    tags: ["C/C++", "ESP32", "CAN Bus", "I2C", "KiCad", "PlatformIO"],
    image: "",
    imageAlt: "",
    steer: true,
    wheel: "images/f1-wheel-cut.png",
    wheelAlt: "Formula 1 style racing steering wheel",
    images: [
      { src: "images/layout.webp", alt: "PCB layout" },
      { src: "images/schematic.webp", alt: "PCB schematic" }
    ],
    link: "https://github.com/CalSol/Excalibur-FW",
    sections: [
      {
        heading: "Firmware",
        body: "Developed embedded C/C++ firmware for ESP32 implementing real-time motor control and a multi-protocol communication layer — CAN bus interfacing with 6+ vehicle subsystems (BMS, HVPDB, LVPDB, lights, sensors, pedals) and I2C for onboard sensor integration."
      },
      {
        heading: "PCB Design",
        body: "Iterated through multiple PCB revisions in KiCad, collaborating with the mechanical team to meet steering wheel shell constraints. Designed signal integrity measures including decoupling capacitors across the power distribution network."
      }
    ]
  },
  {
    title: "F1 Podium",
    titleItalic: "Predictor",
    desc: "A machine learning model that predicts a driver's probability of finishing on the podium given their grid position, team, and circuit. Trained on historical race data and served through an interactive Streamlit dashboard.",
    tags: ["Python", "scikit-learn", "Streamlit", "pandas"],
    image: "images/f1_podium.webp",
    imageAlt: "F1 Podium Predictor screenshot",
    link: "",
    sections: [
      {
        heading: "Model",
        body: "Takes grid position, constructor, and circuit as inputs and outputs a podium probability score. Trained on multiple seasons of race results, with team performance weighted to reflect recent competitiveness."
      }
    ]
  }
  // — Add new projects below this line —
  // {
  //   title: "Project Title",
  //   titleItalic: "Subtitle",
  //   desc: "One paragraph overview.",
  //   tags: ["Tag 1", "Tag 2"],
  //   image: "images/yourimage.jpg",   // or "" for no image
  //   imageAlt: "Image description",
  //   link: "https://github.com/...", // or "" for no link
  //   sections: [
  //     { heading: "Section Title", body: "Detail paragraph." }
  //   ]
  // }
];
