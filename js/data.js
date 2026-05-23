const portfolioData = {
  siteTitle: "Xuan Hoang Le | AI Researcher & Data Scientist",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Manuscripts", href: "#manuscripts" },
    { label: "CV", href: "#cv" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    eyebrow: "AI Researcher - Data Scientist",
    heading: "Building practical AI systems from research to deployment.",
    description:
      "Data scientist and AI researcher with a Mechatronics Engineering background and hands-on work in vision-language models, computer vision, time-series forecasting, and business analytics.",
    highlights: [],
    actions: [
      { label: "Contact Me", href: "mailto:lexuanhoang120@gmail.com", primary: true },
      { label: "Download CV", href: "docs/HOANG_CV.pdf", external: true },
      { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/xuan-hoang1999/", external: true }
    ]
  },
  profile: [
    { label: "Location", value: "Seoul, Korea" },
    { label: "Current role", value: "Research Assistant, Vision Language Intelligence Laboratory" },
    { label: "Birthday", value: "1999.11.12" },
    { label: "Nationality", value: "Vietnamese" },
    { label: "Visa status", value: "D2" },
    { label: "Available from", value: "2026.07" },
    { label: "Email", value: "lexuanhoang120@gmail.com" }
  ],
  about: {
    subtitle:
      "I focus on connecting research with practical applications in automation, computer vision, and intelligent analytics systems.",
    cards: [
      {
        title: "Research",
        description: "Training-free refinement methods for GUI grounding and computer-use agents."
      },
      {
        title: "Deployment",
        description: "Real-world systems in face recognition, CCTV filtering, and roadside communication."
      },
      {
        title: "Forecasting & Analytics",
        description: "Electricity demand, restaurant traffic, and customer-behavior modeling from large datasets."
      }
    ]
  },
  research: {
    subtitle:
      "Current work at Sejong University focuses on GUI grounding and computer-use agents, especially inference-time refinement methods without additional training.",
    projects: [
      {
        title: "DART for GUI Grounding",
        description:
          "First-author work proposing a density-aware adaptive refinement technique for GUI grounding in computer-use agents.",
        tags: ["GUI Grounding", "Computer-Use Agents", "VLMs"]
      },
      {
        title: "Training-Free ROI Selection",
        description:
          "Second-author work on ROI selection via semantic vector fields for training-free GUI grounding.",
        tags: ["ECCV 2026", "Training-Free", "ROI Selection"]
      }
    ]
  },
  featuredProjects: [
    {
      title: "VLM-Based CCTV Video Filtering",
      time: "2024.09 - Present",
      sortKey: 202409,
      description:
        "Implemented a video filtering module in a CCTV retrieval system using frame sampling and prompt-based inference to classify CCTV and non-CCTV footage.",
      tags: ["VLM", "Video Understanding", "Prompting"],
      metric: "Classifies CCTV vs non-CCTV videos in retrieval workflow",
      location: { label: "Vision Language Intelligence Lab" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/CCTV-Video-Search-Agent-thangdd_downloader", external: true },
        { label: "Demo", placeholder: true },
        { label: "Docs", placeholder: true }
      ]
    },
    {
      title: "Electricity-Consumption Forecasting",
      time: "2023.04 - 2024.08",
      sortKey: 202304,
      description:
        "Built monthly electricity forecasting for 13 Vietnamese provinces using trend-seasonal-residual decomposition with linear, statistical, and ARIMA methods.",
      metric: "MAPE below 6% in all provinces and below 4% in six provinces",
      tags: ["Time Series", "ARIMA", "Forecasting"],
      location: { label: "FPT Applied Data Science Center" },
      links: [
        { label: "GitHub", placeholder: true },
        { label: "Demo", placeholder: true },
        { label: "Docs", placeholder: true }
      ]
    },
    {
      title: "Restaurant Traffic Forecasting",
      time: "2023.04 - 2024.08",
      sortKey: 202303,
      description:
        "Improved daily customer traffic forecasting for 600 restaurants with stronger preprocessing, feature engineering, and model strategy.",
      metric: "Result: 15% relative reduction in WAPE",
      tags: ["Forecasting", "Feature Engineering", "Business Analytics"],
      location: { label: "FPT Applied Data Science Center" },
      links: [
        { label: "GitHub", placeholder: true },
        { label: "Demo", placeholder: true },
        { label: "Docs", placeholder: true }
      ]
    },
    {
      title: "Face Recognition Attendance System",
      time: "2022.06 - 2023.03",
      sortKey: 202206,
      description:
        "Deployed office attendance automation by matching face embeddings from camera streams against registered personnel data.",
      metric: "Result: 97% accuracy",
      tags: ["Face Recognition", "Computer Vision", "Deployment"],
      location: { label: "VTCODE Company" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/Face_Recognition", external: true },
        { label: "Demo", placeholder: true },
        { label: "Docs", placeholder: true }
      ]
    },
    {
      title: "Automated Chicken Classification System",
      time: "2021.01 - 2022.06",
      sortKey: 202101,
      description:
        "Designed a full automated system from farm data collection to classification model and mechatronic design of mechanical, electrical, and control components.",
      tags: ["YOLOv5", "Automation", "Mechatronics"],
      location: { label: "HCMUT Control and Automation Lab" },
      links: [
        { label: "GitHub", placeholder: true },
        { label: "Demo", placeholder: true },
        { label: "Docs", placeholder: true }
      ]
    }
  ],
  experience: [
    {
      period: "2024.09 - Present",
      title: "Research Assistant - Vision Language Intelligence Laboratory, Sejong University",
      description:
        "Research on training-free GUI grounding refinement, VLM-based CCTV filtering, roadside communication vision system, annotation, simulation, and manuscript preparation."
    },
    {
      period: "2023.04 - 2024.08",
      title: "Data Scientist - Center of Applied Data Science, FPT Corporation",
      description:
        "Electricity and restaurant forecasting, web-log sequence analysis, customer persona modeling, and web scraping automation from LinkedIn, Google Maps, and Chotot."
    },
    {
      period: "2022.06 - 2023.03",
      title: "Data Scientist - Data Department, VTCODE Company",
      description:
        "Face recognition deployment for attendance, revenue forecasting for F&B branches, and multi-source enterprise data processing."
    },
    {
      period: "2021.01 - 2022.06",
      title: "Research Intern - Control and Automation Laboratory, HCMUT",
      description:
        "Automated chicken classification research combining deep learning classification and mechatronic system design."
    }
  ],
  manuscripts: {
    subtitle: "Publication pipeline from current CV, including under-review and in-preparation work.",
    items: [
      {
        status: "In Prep.",
        title: "A Dataset for Computer-Use Agents",
        detail: "First author. Target venue: AAAI 2027."
      },
      {
        status: "Under Review",
        title: "DART: Density-Aware Adaptive Refinement Technique for GUI Grounding in Computer-Use Agents",
        detail: "First author. Submitted to IEEE Access."
      },
      {
        status: "Under Review",
        title: "Training-Free ROI Selection via Semantic Vector Fields for GUI Grounding",
        detail: "Second author. Submitted to ECCV 2026."
      },
      {
        status: "Prior Submission",
        title: "CGAR: Confidence-Guided Adaptive Refinement for GUI Grounding",
        detail: "First author. Previously submitted to CVPR 2026."
      }
    ]
  },
  skills: [
    {
      title: "AI Research",
      description:
        "Vision-Language Models, GUI Grounding, GUI Agents, Deep Learning, Computer Vision, Object Detection, Face Recognition."
    },
    {
      title: "Data Science",
      description:
        "Time-Series Forecasting, Revenue Prediction, Business Analytics, Feature Engineering, Web Scraping, Data Cleaning, Data Processing."
    },
    {
      title: "Programming",
      description:
        "Python, C/C++, MATLAB/Simulink, PyTorch, scikit-learn, OpenCV, YOLO, FastAPI, Pandas, NumPy, PySpark, Selenium."
    },
    {
      title: "Tools",
      description:
        "MongoDB, Git, Jupyter Notebook, Google Colab, MS Office, SolidWorks, AutoCAD, Proteus."
    }
  ],
  credentials: {
    subtitle: "Certifications, languages, and additional profile details from the uploaded CV.",
    cards: [
      {
        title: "Languages",
        description: "Vietnamese: Native. English: Intermediate (New TEPS 350/600; TOEIC 650/990)."
      },
      {
        title: "Certifications",
        description: "Coursera: Machine Learning Specialization, Deep Learning Specialization. NVIDIA: Building Video AI Applications at the Edge on Jetson Nano. freeCodeCamp: Scientific Computing with Python, Data Analysis with Python."
      },
      {
        title: "Soft Skills",
        description: "Analytical thinking, problem-solving, self-motivation, teamwork, initiative, and adaptability."
      },
      {
        title: "Interests",
        description: "Continuous learning, machinery, automation, programming, statistics, mathematics, sports, singing, music, and travelling."
      }
    ]
  },
  education: [
    {
      degree: "Master of Science in Artificial Intelligence and Robotics",
      school: "Sejong University, Seoul, Korea",
      period: "2024-2026",
      details: "Advisor: Associate Professor Cheol Jeong. Thesis: Confidence-Guided Adaptive Refinement Technique for GUI Grounding. GPA: 4.3/4.5."
    },
    {
      degree: "Bachelor of Engineering in Mechatronics Engineering",
      school: "Vietnam National University - Ho Chi Minh University of Technology",
      period: "2017-2023",
      details: "PFIEV Program. Advisor: Ph.D. Pham Cong Bang. Thesis: Analysis and Design of an Automated Chicken Classification System. GPA: 8.13/10."
    }
  ],
  cv: {
    subtitle:
      "This portfolio is synchronized with the uploaded CV and includes direct access to the exact PDF version.",
    summary: [
      { label: "Full name", value: "Xuan Hoang Le" },
      { label: "Phone", value: "+82 10 7309 4120" },
      { label: "Nationality / Visa", value: "Vietnamese / D2" },
      { label: "Available from", value: "2026.07" }
    ],
    actions: [
      { label: "Open CV Page", href: "cv.html", primary: true },
      { label: "Download CV PDF", href: "docs/HOANG_CV.pdf", external: true }
    ]
  },
  contact: {
    subtitle:
      "Open to opportunities in AI research, data science, computer vision, and automation engineering.",
    actions: [
      { label: "Email", href: "mailto:lexuanhoang120@gmail.com", primary: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/xuan-hoang1999/", external: true },
      { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true }
    ],
    footerText: "© 2026 Xuan Hoang Le. CV-aligned portfolio."
  }
};
