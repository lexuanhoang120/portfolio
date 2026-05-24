const portfolioData = {
  siteTitle: "Xuan Hoang Le | Applied AI Researcher & Data Scientist",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "References", href: "#references" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    eyebrow: "AI Researcher · Data Scientist",
    heading: "Integrate automation into the real world.",
    description:
      "Data scientist and AI researcher with a background in Mechatronics Engineering and experience in vision–language models, computer vision, time-series forecasting, and business analytics.",
    highlights: [],
      // highlights: [
    //   { value: "13", label: "provinces with electricity forecasts" },
    //   { value: "600", label: "restaurant forecasts improved" },
    //   { value: "97%", label: "face-attendance recognition accuracy" }
    // ],
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
    { label: "Research Interests", value: "GUI grounding, computer-use agents, practical AI deployment" },
    { label: "Availability", value: "From July 2026" },
    { label: "Visa", value: "D2" },
    { label: "Nationality", value: "Vietnamese" }
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
  featuredProjects: [
    {
      id: "project-cctv-video-filtering",
      title: "VLM-Based CCTV Video Filtering",
      time: "2025.12 - 2026.02",
      sortKey: 202512,
      description:
        "Built a CCTV retrieval filtering module with frame sampling and prompt-based inference to separate CCTV from non-CCTV footage.",
      metric: "Integrated into retrieval workflow for faster downstream analysis",
      tags: ["Academic", "VLM", "Video Understanding", "Prompt Engineering"],
      location: { label: "Sejong University VLI Lab", href: "#exp-vli-lab" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/CCTV-Video-Filtering", external: true },
        { label: "Docs", href: "docs/cctv-video-filtering.html#docs" }
      ]
    },
    {
      id: "project-electricity-consumption-forecasting",
      title: "Electricity Consumption Forecasting",
      time: "2023.05 - 2023.10",
      sortKey: 202305,
      description:
        "Designed monthly forecasting across 13 provinces using decomposition and statistical time-series modeling.",
      metric: "MAPE below 6% in all provinces, below 4% in six provinces",
      tags: ["Industry", "Time Series", "ARIMA", "Forecasting"],
      location: { label: "FPT Applied Data Science Center", href: "#exp-fpt-cads" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/Electricity-Consumption-Forecasting", external: true },
        { label: "Docs", href: "docs/electricity-consumption-forecasting.html#docs" }
      ]
    },
    {
      id: "project-restaurant-traffic-forecasting",
      title: "Restaurant Traffic Forecasting",
      time: "2024.01 - 2024.05",
      sortKey: 202401,
      description:
        "Improved demand prediction for 600 restaurants through data cleaning, feature design, and model strategy updates.",
      metric: "15% relative WAPE reduction",
      tags: ["Industry", "Forecasting", "Feature Engineering", "Business Analytics"],
      location: { label: "FPT Applied Data Science Center", href: "#exp-fpt-cads" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/Restaurant-Traffic-Forecasting", external: true },
        { label: "Docs", href: "docs/restaurant-traffic-forecasting.html#docs" }
      ]
    },
    {
      id: "project-face-recognition-attendance-system",
      title: "Face Recognition Attendance System",
      time: "2022.06 - 2023.03",
      sortKey: 202206,
      description:
        "Delivered a camera-based attendance automation system using facial embeddings and identity matching.",
      metric: "97% recognition accuracy",
      tags: ["Industry", "Face Recognition", "Computer Vision", "Deployment"],
      location: { label: "VTCODE Company", href: "#exp-vtcode" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/Face_Recognition", external: true },
        { label: "Docs", href: "docs/face-recognition-attendance.html#docs" }
      ]
    },
    {
      id: "project-automated-chicken-classification-system",
      title: "Automated Chicken Classification System",
      time: "2021.01 - 2022.06",
      sortKey: 202101,
      description:
        "Developed an end-to-end mechatronic classification system from image collection to model integration and control design.",
      tags: ["Academic", "YOLOv5", "Automation", "Mechatronics"],
      location: { label: "HCMUT Control and Automation Lab", href: "#exp-hcmut-calab" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/Thesis-Design-a-system-classifying-chicken-gender", external: true },
        { label: "Docs", href: "docs/automated-chicken-classification.html#docs" }
      ]
    },
    {
      id: "project-vision-based-communication",
      title: "Vision-based Communication",
      time: "2025",
      sortKey: 202511,
      description:
        "Vision-based communication project for reliable visual information transfer in constrained environments.",
      tags: ["Academic", "Computer Vision", "Communication Systems"],
      location: { label: "Sejong University VLI Lab", href: "#exp-vli-lab" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/Vision-based-Communication", external: true },
        { label: "Docs", href: "docs/vision-based-communication.html#docs" }
      ]
    },
    {
      id: "project-log-web-fshop",
      title: "Log Web FShop Analysis",
      time: "2024",
      sortKey: 202404,
      description:
        "Web-log analytics project for user behavior and sequence pattern analysis.",
      tags: ["Industry", "Web Analytics", "Behavior Modeling"],
      location: { label: "FPT Applied Data Science Center", href: "#exp-fpt-cads" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/log-web-fshop", external: true },
        { label: "Docs", href: "docs/log-web-fshop-analysis.html#docs" }
      ]
    },
    {
      id: "project-map-linkedin-email",
      title: "Map LinkedIn Email",
      time: "2024",
      sortKey: 202403,
      description:
        "Data collection and enrichment utility to map profile/company information with contact datasets.",
      tags: ["Industry", "Data Pipeline", "Web Scraping"],
      location: { label: "FPT Applied Data Science Center", href: "#exp-fpt-cads" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/map-linkedin-email", external: true },
        { label: "Docs", href: "docs/map-linkedin-email.html#docs" }
      ]
    },
    {
      id: "project-revenue-prediction",
      title: "Revenue Prediction",
      time: "2023",
      sortKey: 202309,
      description:
        "Revenue forecasting workflow for business planning and operational decision support.",
      tags: ["Industry", "Forecasting", "Business Analytics"],
      location: { label: "VTCODE Company", href: "#exp-vtcode" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/Revenue_Prediction", external: true },
        { label: "Docs", href: "docs/revenue-prediction.html#docs" }
      ]
    },
    {
      id: "project-crawl-lyrics-category",
      title: "Crawl Lyrics Category",
      time: "2022",
      sortKey: 202208,
      description:
        "Crawler project for collecting and categorizing structured lyric metadata.",
      tags: ["Industry", "Web Scraping", "Data Processing"],
      location: { label: "Personal Project", href: "#" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/Crawl_Lyrics_Category", external: true },
        { label: "Docs", href: "docs/crawl-lyrics-category.html#docs" }
      ]
    },
    {
      id: "project-web-face-recognition",
      title: "Web Face Recognition",
      time: "2022",
      sortKey: 202207,
      description:
        "Web-based face recognition application prototype integrating browser-facing workflows with model inference.",
      tags: ["Industry", "Face Recognition", "Web App"],
      location: { label: "Personal Project", href: "#" },
      links: [
        { label: "GitHub", href: "https://github.com/lexuanhoang120/Web_Face_Recognition", external: true },
        { label: "Docs", href: "docs/web-face-recognition.html#docs" }
      ]
    }
  ],
  experience: [
    {
      id: "exp-vli-lab",
      period: "2024.09 - Present",
      position: "Research Assistant",
      organization: "Vision Language Intelligence Laboratory, Sejong University",
      organizationLink: "#",
      location: "Seoul, South Korea",
      summary:
        "Researching training-free GUI grounding refinement methods, building VLM-based vision modules, and preparing manuscripts for peer-reviewed venues.",
      highlights: [
        "Proposed refinement methods for GUI grounding in computer-use agents.",
        "Implemented VLM-based CCTV filtering module for retrieval workflows.",
        "Prepared experiments, analyses, and manuscript drafts for submissions."
      ],
      relatedLinks: [
        { label: "Project: CCTV Video Filtering", href: "#project-cctv-video-filtering" },
        { label: "Manuscript: DART", href: "#manuscript-dart" },
        { label: "Manuscript: ROI Selection", href: "#manuscript-roi-selection" }
      ]
    },
    {
      id: "exp-fpt-cads",
      period: "2023.05 - 2024.08",
      position: "Data Scientist",
      organization: "Center of Applied Data Science, FPT Corporation",
      organizationLink: "#",
      location: "Vietnam",
      summary:
        "Led forecasting and analytics projects spanning electricity demand, restaurant traffic, and large-scale customer behavior analysis.",
      highlights: [
        "Built monthly electricity forecasting for 13 provinces (MAPE below 6% in all provinces).",
        "Improved restaurant traffic forecasting for 600 branches with 15% relative WAPE reduction.",
        "Developed customer behavior analyses from large web logs and sequence modeling."
      ],
      relatedLinks: [
        { label: "Project: Electricity Forecasting", href: "#project-electricity-consumption-forecasting" },
        { label: "Project: Restaurant Traffic Forecasting", href: "#project-restaurant-traffic-forecasting" },
        { label: "Manuscript: DART", href: "#manuscript-dart" }
      ]
    },
    {
      id: "exp-vtcode",
      period: "2022.06 - 2023.03",
      position: "Data Scientist",
      organization: "Data Department, VTCODE Company",
      organizationLink: "#",
      location: "Vietnam",
      summary:
        "Deployed face-recognition attendance solutions and built revenue forecasting workflows for F&B operations.",
      highlights: [
        "Deployed camera-based face-recognition attendance with around 97% accuracy.",
        "Built branch-level forecasting workflows for F&B revenue planning.",
        "Processed and integrated multi-source enterprise datasets."
      ],
      relatedLinks: [
        { label: "Project: Face Attendance System", href: "#project-face-recognition-attendance-system" },
        { label: "Manuscript: ROI Selection", href: "#manuscript-roi-selection" }
      ]
    },
    {
      id: "exp-hcmut-calab",
      period: "2021.01 - 2022.06",
      position: "Research Intern",
      organization: "Control and Automation Laboratory, HCMUT",
      organizationLink: "#",
      location: "Ho Chi Minh City, Vietnam",
      summary:
        "Designed and evaluated an automated chicken classification system combining deep learning with mechatronic implementation.",
      highlights: [
        "Built image collection and model training workflow for chicken classification.",
        "Integrated computer vision with mechanical, electrical, and control components.",
        "Validated end-to-end prototype performance in lab conditions."
      ],
      relatedLinks: [
        { label: "Project: Automated Chicken Classification", href: "#project-automated-chicken-classification-system" },
        { label: "Manuscript: DART", href: "#manuscript-dart" }
      ]
    }
  ],
  manuscripts: {
    subtitle: "Current publication pipeline.",
    items: [
      {
        id: "manuscript-cua-dataset",
        period: "2026 - Present",
        status: "In Prep",
        title: "A Dataset for Computer-Use Agents",
        description: "Building and curating a dataset tailored for computer-use agent grounding and interaction tasks.",
        detail: "First author · Target venue: AAAI 2027",
        location: { label: "Sejong University VLI Lab", href: "#exp-vli-lab" },
        tags: ["Academic", "In Prep", "First Author", "AAAI 2027"],
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
          { label: "Docs", href: "docs/cua-dataset-for-computer-use-agents.html#docs" }
        ]
      },
      {
        id: "manuscript-dart",
        period: "2026",
        status: "Under Review",
        title: "DART: Density-Aware Adaptive Refinement Technique for GUI Grounding in Computer-Use Agents",
        description: "Density-aware adaptive refinement method to improve GUI grounding precision for computer-use agents.",
        detail: "First author · Submitted to IEEE Access",
        location: { label: "Sejong University VLI Lab", href: "#exp-vli-lab" },
        tags: ["Academic", "Under Review", "First Author", "IEEE Access"],
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/Density-Aware-Adaptive-Refinement-Technique", external: true },
          { label: "Docs", href: "docs/dart-gui-grounding.html#docs" }
        ]
      },
      {
        id: "manuscript-roi-selection",
        period: "2026",
        status: "Under Review",
        title: "Training-Free ROI Selection via Semantic Vector Fields for GUI Grounding",
        description: "Training-free ROI selection strategy using semantic vector fields to improve refinement efficiency.",
        detail: "Second author · Submitted to ECCV 2026",
        location: { label: "Sejong University VLI Lab", href: "#exp-vli-lab" },
        tags: ["Academic", "Under Review", "Second Author", "ECCV 2026"],
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120", external: true },
          { label: "Docs", href: "docs/training-free-roi-selection.html#docs" }
        ]
      },
      {
        id: "manuscript-cgar",
        period: "2026",
        status: "Rejected",
        title: "CGAR: Confidence-Guided Adaptive Refinement for GUI Grounding",
        description: "Confidence-guided adaptive refinement approach for GUI grounding as an earlier method iteration.",
        detail: "First author · Previously submitted to CVPR 2026",
        location: { label: "Sejong University VLI Lab", href: "#exp-vli-lab" },
        tags: ["Academic", "Rejected", "First Author", "CVPR 2026"],
        links: [
          { label: "GitHub", href: "https://github.com/lexuanhoang120/Confidence-Guided-Adaptive-Refinement", external: true },
          { label: "Docs", href: "docs/cgar-gui-grounding.html#docs" }
        ]
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
      school: "Sejong University, Seoul, Vietnam",
      period: "2024 - 2026",
      advisor: "Associate Professor Cheol Jeong",
      // details: "Department of Artificial Intelligence and Robotics",
      thesis: "Confidence-Guided Adaptive Refinement Technique for GUI Grounding",
      gpa: "4.3 / 4.5"
    },
    {
      degree: "Bachelor of Engineering in Mechatronics Engineering",
      school: "Vietnam National University – Ho Chi Minh University of Technology, Ho Chi Minh City, Vietnam",
      period: "2017 - 2023",
      details: "The Excellent Engineer Training Program (PFIEV)",
      advisor: "Ph.D Pham Cong Bang",
      thesis: "Analysis and Design of an Automated Chicken Classification System",
      gpa: "8.13 / 10"
    }
  ],
  references: {
    subtitle: "Professional references available for academic and industry roles.",
    items: [
      {
        name: "Dr. Cheol Jeong",
        title: "Associate Professor",
        department: "Department of Artificial Intelligence and Robotics",
        organization: "Sejong University",
        location: "Seoul, Korea",
        phone: "+82 10 6248 7972",
        email: "cjeong72@gmail.com"
      },
      {
        name: "Dr. Pham Cong Bang",
        title: "Ph.D., Vice Dean of Mechanical Engineering",
        department: "Department of Mechanical Engineering",
        organization: "Ho Chi Minh University of Technology",
        location: "VNUHCM, Vietnam",
        phone: "+84 903 686 334",
        email: "pcbang@hcmut.edu.vn"
      },
      {
        name: "Nam Phuoc Truong",
        title: "CEO - Director",
        department: "VTCODE Technology and Science Applications Limited Company",
        organization: "VTCODE",
        location: "Binh Thanh District, Ho Chi Minh City, Vietnam",
        phone: "+84 986 198 731"
      }
    ]
  },
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
    footerText: "Xuan Hoang Le · Portfolio · Updated May 2026"
  }
};
