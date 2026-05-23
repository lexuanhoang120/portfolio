const portfolioData = {
  siteTitle: "Xuan Hoang Le | Applied AI Researcher & Data Scientist",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Impact", href: "#impact" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    eyebrow: "AI Researcher · Data Scientist",
    heading: "I build AI systems that move from paper to production.",
    description:
      "I work at the intersection of vision-language research and applied data science, turning ideas into reliable systems for forecasting, computer vision, and automation.",
    highlights: [
      { value: "13", label: "provinces with electricity forecasts" },
      { value: "600", label: "restaurant forecasts improved" },
      { value: "97%", label: "face-attendance recognition accuracy" }
    ],
    actions: [
      { label: "Email Me", href: "mailto:lexuanhoang120@gmail.com", primary: true },
      { label: "View CV", href: "#cv" },
      { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/xuan-hoang1999/", external: true }
    ]
  },
  profile: [
    { label: "Location", value: "Seoul, South Korea" },
    { label: "Current role", value: "Research Assistant, Vision Language Intelligence Lab" },
    { label: "Focus", value: "GUI grounding, computer-use agents, practical AI deployment" },
    { label: "Availability", value: "From July 2026" },
    { label: "Visa", value: "D2" },
    { label: "Nationality", value: "Vietnamese" }
  ],
  impactStats: [
    {
      value: "< 6%",
      label: "MAPE across 13 electricity-demand forecasting provinces"
    },
    {
      value: "15%",
      label: "relative WAPE reduction for 600 restaurants"
    },
    {
      value: "97%",
      label: "accuracy from deployed face-attendance recognition"
    },
    {
      value: "4.3 / 4.5",
      label: "M.S. GPA in AI and Robotics at Sejong University"
    }
  ],
  about: {
    subtitle:
      "I care about measurable outcomes: not only model quality, but also reliability, deployment fit, and business value.",
    cards: [
      {
        title: "Research Mindset",
        description: "I prototype quickly, validate assumptions, and write clearly so research can be reused by teams."
      },
      {
        title: "Engineering Execution",
        description: "I build full pipelines: data preparation, modeling, evaluation, and handoff-ready implementation."
      },
      {
        title: "Business Relevance",
        description: "I translate model performance into metrics stakeholders care about, such as error reduction and decision support."
      }
    ]
  },
  research: {
    subtitle:
      "Current work at Sejong University focuses on training-free refinement for GUI grounding and computer-use agents.",
    projects: [
      {
        title: "DART for GUI Grounding",
        description:
          "First-author work proposing density-aware adaptive refinement for GUI grounding in computer-use agents.",
        tags: ["GUI Grounding", "Computer-Use Agents", "Vision-Language Models"],
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
          { label: "Demo", href: "docs/dart-gui-grounding.html#demo" },
          { label: "Docs", href: "docs/dart-gui-grounding.html#docs" }
        ]
      },
      {
        title: "Training-Free ROI Selection",
        description:
          "Second-author work using semantic vector fields to select refinement regions without additional training.",
        tags: ["Training-Free Inference", "Semantic Vector Fields", "ECCV 2026 Submission"],
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
          { label: "Demo", href: "docs/training-free-roi-selection.html#demo" },
          { label: "Docs", href: "docs/training-free-roi-selection.html#docs" }
        ]
      }
    ]
  },
  featuredProjects: [
    {
      title: "VLM-Based CCTV Video Filtering",
      time: "2024.09 - Present",
      sortKey: 202409,
      description:
        "Built a CCTV retrieval filtering module with frame sampling and prompt-based inference to separate CCTV from non-CCTV footage.",
      metric: "Integrated into retrieval workflow for faster downstream analysis",
      tags: ["VLM", "Video Understanding", "Prompt Engineering"],
      location: { label: "Sejong University VLI Lab" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/CCTV-Video-Search-Agent-thangdd_downloader", external: true },
        { label: "Demo", href: "docs/cctv-video-filtering.html#demo" },
        { label: "Docs", href: "docs/cctv-video-filtering.html#docs" }
      ]
    },
    {
      title: "Electricity Consumption Forecasting",
      time: "2023.04 - 2024.08",
      sortKey: 202304,
      description:
        "Designed monthly forecasting across 13 provinces using decomposition and statistical time-series modeling.",
      metric: "MAPE below 6% in all provinces, below 4% in six provinces",
      tags: ["Time Series", "ARIMA", "Forecasting"],
      location: { label: "FPT Applied Data Science Center" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/Electricity-Consumption-Forecasting", external: true },
        { label: "Demo", href: "docs/electricity-consumption-forecasting.html#demo" },
        { label: "Docs", href: "docs/electricity-consumption-forecasting.html#docs" }
      ]
    },
    {
      title: "Restaurant Traffic Forecasting",
      time: "2023.04 - 2024.08",
      sortKey: 202303,
      description:
        "Improved demand prediction for 600 restaurants through data cleaning, feature design, and model strategy updates.",
      metric: "15% relative WAPE reduction",
      tags: ["Forecasting", "Feature Engineering", "Business Analytics"],
      location: { label: "FPT Applied Data Science Center" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/Restaurant-Traffic-Forecasting", external: true },
        { label: "Demo", href: "docs/restaurant-traffic-forecasting.html#demo" },
        { label: "Docs", href: "docs/restaurant-traffic-forecasting.html#docs" }
      ]
    },
    {
      title: "Face Recognition Attendance System",
      time: "2022.06 - 2023.03",
      sortKey: 202206,
      description:
        "Delivered a camera-based attendance automation system using facial embeddings and identity matching.",
      metric: "97% recognition accuracy",
      tags: ["Face Recognition", "Computer Vision", "Deployment"],
      location: { label: "VTCODE Company" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/Face_Recognition", external: true },
        { label: "Demo", href: "docs/face-recognition-attendance.html#demo" },
        { label: "Docs", href: "docs/face-recognition-attendance.html#docs" }
      ]
    },
    {
      title: "Automated Chicken Classification System",
      time: "2021.01 - 2022.06",
      sortKey: 202101,
      description:
        "Developed an end-to-end mechatronic classification system from image collection to model integration and control design.",
      tags: ["YOLOv5", "Automation", "Mechatronics"],
      location: { label: "HCMUT Control and Automation Lab" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/Automated-Chicken-Classification", external: true },
        { label: "Demo", href: "docs/automated-chicken-classification.html#demo" },
        { label: "Docs", href: "docs/automated-chicken-classification.html#docs" }
      ]
    }
  ],
  experience: [
    {
      period: "2024.09 - Present",
      title: "Research Assistant · Vision Language Intelligence Laboratory, Sejong University",
      description:
        "Researching training-free GUI grounding refinement methods, building VLM-based vision modules, and preparing manuscripts for peer-reviewed venues."
    },
    {
      period: "2023.04 - 2024.08",
      title: "Data Scientist · Center of Applied Data Science, FPT Corporation",
      description:
        "Led forecasting and analytics projects spanning electricity demand, restaurant traffic, and large-scale customer behavior analysis."
    },
    {
      period: "2022.06 - 2023.03",
      title: "Data Scientist · Data Department, VTCODE Company",
      description:
        "Deployed face-recognition attendance solutions and built revenue forecasting workflows for F&B operations."
    },
    {
      period: "2021.01 - 2022.06",
      title: "Research Intern · Control and Automation Laboratory, HCMUT",
      description:
        "Designed and evaluated an automated chicken classification system combining deep learning with mechatronic implementation."
    }
  ],
  manuscripts: {
    subtitle: "Current publication pipeline.",
    items: [
      {
        status: "In Preparation",
        title: "A Dataset for Computer-Use Agents",
        detail: "First author · Target venue: AAAI 2027"
      },
      {
        status: "Under Review",
        title: "DART: Density-Aware Adaptive Refinement Technique for GUI Grounding in Computer-Use Agents",
        detail: "First author · Submitted to IEEE Access"
      },
      {
        status: "Under Review",
        title: "Training-Free ROI Selection via Semantic Vector Fields for GUI Grounding",
        detail: "Second author · Submitted to ECCV 2026"
      },
      {
        status: "Prior Submission",
        title: "CGAR: Confidence-Guided Adaptive Refinement for GUI Grounding",
        detail: "First author · Previously submitted to CVPR 2026"
      }
    ]
  },
  skills: [
    {
      title: "AI Research",
      description:
        "Vision-language models, GUI grounding, computer-use agents, deep learning, object detection, and face recognition."
    },
    {
      title: "Data Science",
      description:
        "Time-series forecasting, feature engineering, business analytics, data cleaning, and pipeline automation."
    },
    {
      title: "Programming",
      description:
        "Python, C/C++, MATLAB/Simulink, PyTorch, scikit-learn, OpenCV, YOLO, FastAPI, Pandas, NumPy, PySpark, Selenium."
    },
    {
      title: "Tools",
      description:
        "MongoDB, Git, Jupyter Notebook, Google Colab, SolidWorks, AutoCAD, and Proteus."
    }
  ],
  credentials: {
    subtitle: "Additional profile highlights.",
    cards: [
      {
        title: "Education",
        description: "M.S. in AI and Robotics, Sejong University (GPA 4.3/4.5). B.E. in Mechatronics Engineering, HCMUT (GPA 8.13/10)."
      },
      {
        title: "Languages",
        description: "Vietnamese (native), English (working proficiency, TOEIC 650/990, New TEPS 350/600)."
      },
      {
        title: "Certifications",
        description: "Coursera ML/DL Specializations, NVIDIA Jetson Nano AI courses, freeCodeCamp Python programs."
      }
    ]
  },
  education: [
    {
      degree: "Master of Science in Artificial Intelligence and Robotics",
      school: "Sejong University, Seoul",
      period: "2024 - 2026",
      details: "Advisor: Associate Professor Cheol Jeong. Thesis on confidence-guided refinement for GUI grounding."
    },
    {
      degree: "Bachelor of Engineering in Mechatronics Engineering",
      school: "Ho Chi Minh University of Technology",
      period: "2017 - 2023",
      details: "PFIEV Program. Thesis: Automated chicken classification system."
    }
  ],
  cv: {
    subtitle: "The uploaded CV is embedded below so recruiters can review it directly on this page.",
    summary: [
      { label: "Full name", value: "Xuan Hoang Le" },
      { label: "Location", value: "Seoul, South Korea" },
      { label: "Email", value: "lexuanhoang120@gmail.com" },
      { label: "Availability", value: "From July 2026" }
    ],
    actions: [
      { label: "Open CV PDF", href: "docs/HOANG_CV.pdf", external: true, primary: true },
      { label: "Download CV PDF", href: "docs/HOANG_CV.pdf", external: true }
    ]
  },
  contact: {
    subtitle:
      "I am open to research and applied AI roles in computer vision, agent systems, and data science.",
    actions: [
      { label: "Send Email", href: "mailto:lexuanhoang120@gmail.com", primary: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/xuan-hoang1999/", external: true },
      { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true }
    ],
    footerText: "© 2026 Xuan Hoang Le · Portfolio"
  }
};
