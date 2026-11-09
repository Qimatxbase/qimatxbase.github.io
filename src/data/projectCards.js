// Card presentation data. Case-study details live in caseStudies.js.
export const projectCards = [
  {
    "id": "nsw",
    "repository": "nsw_road_safety_dashboard",
    "categories": [
      "analytics"
    ],
    "featured": true,
    "order": 1,
    "title": "Making NSW road risk easier to explore.",
    "description": "Interactive crash analysis across 130 local government areas, with connected filters, maps and decision views.",
    "kicker": "ANALYTICS & VISUALISATION",
    "cardTools": [
      "Python",
      "Streamlit",
      "Plotly",
      "pandas"
    ],
    "facts": [
      "18,939 crash records"
    ],
    "code": "https://github.com/Qimatxbase/nsw_road_safety_dashboard",
    "award": {
      "title": "Winner — Persuasion Pitch Competition",
      "detail": "Selected from 27 entries · UTS, Autumn 2026",
      "certificate": "./assets/certificates/Certificate_UTS_Persuasion_Pitch_Competition_2026.pdf"
    }
  },
  {
    "id": "airbnb",
    "repository": "airbnb_census_pipeline",
    "categories": [
      "analytics",
      "engineering"
    ],
    "featured": true,
    "order": 2,
    "title": "From monthly files to reporting-ready data.",
    "description": "Manually triggered Airflow ingestion and a separate dbt build, connecting Airbnb snapshots with Census context.",
    "kicker": "DATA ENGINEERING",
    "cardTools": [
      "SQL",
      "Airflow",
      "dbt",
      "PostgreSQL"
    ],
    "facts": [
      "18 dbt models",
      "3 reporting marts"
    ],
    "code": "https://github.com/Qimatxbase/airbnb_census_pipeline"
  },
  {
    "id": "video",
    "repository": "video_event_search",
    "categories": [
      "ml"
    ],
    "featured": true,
    "order": 3,
    "title": "Evaluating what a video search system gets right.",
    "description": "A multimodal video-search workflow with ChromaDB retrieval, Gemini reasoning and annotation-grounded evaluation.",
    "kicker": "RESEARCH & EVALUATION",
    "cardTools": [
      "Python",
      "Evaluation",
      "Video RAG"
    ],
    "facts": [
      "UTS iLab · Group 15"
    ],
    "code": "https://github.com/Qimatxbase/video_event_search"
  },
  {
    "id": "tesla",
    "repository": "ev_customer_insights",
    "categories": [
      "analytics",
      "ml"
    ],
    "featured": true,
    "order": 4,
    "title": "Tesla Market Research & Customer Insights",
    "description": "AI-assisted analysis of existing customer reviews, cross-checked with VADER sentiment, thematic coding and rating validation to support market research and survey design.",
    "kicker": "MARKET RESEARCH & CUSTOMER INSIGHTS",
    "cardTools": [
      "Python",
      "pandas",
      "VADER",
      "Market research"
    ],
    "facts": [
      "UTS · Data-Driven Insights"
    ],
    "code": "https://github.com/Qimatxbase/ev_customer_insights"
  },
  {
    "id": "drone",
    "repository": "autonomous_drone",
    "categories": [
      "ml"
    ],
    "featured": false,
    "order": 5,
    "title": "PPO drone navigation experiments",
    "description": "Depth-based navigation in PyBullet, with staged PPO training, curriculum evaluation gates and explicit arrival criteria.",
    "kicker": "REINFORCEMENT LEARNING",
    "cardTools": [
      "Python",
      "PPO",
      "Stable-Baselines3",
      "PyBullet"
    ],
    "facts": [],
    "code": "https://github.com/Qimatxbase/autonomous_drone"
  },
  {
    "id": "reid",
    "repository": "multi_camera_person_reidentification",
    "categories": [
      "ml"
    ],
    "featured": false,
    "order": 6,
    "title": "Person re-identification with OSNet",
    "description": "My contribution: OSNet data preparation, training and benchmark evaluation for cross-camera person retrieval.",
    "kicker": "COMPUTER VISION",
    "cardTools": [
      "PyTorch / MEVID"
    ],
    "facts": [],
    "code": "https://github.com/Qimatxbase/multi_camera_person_reidentification"
  },
  {
    "id": "livestock",
    "repository": "livestock_video_counter",
    "categories": [
      "ml"
    ],
    "featured": false,
    "order": 7,
    "title": "Livestock Video Counter",
    "description": "An uploaded-video workflow that detects and tracks pigs, counts line crossings and produces annotated video.",
    "kicker": "COMPUTER-VISION PROTOTYPE",
    "cardTools": [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Streamlit"
    ],
    "facts": [],
    "code": "https://github.com/Qimatxbase/livestock_video_counter"
  },
  {
    "id": "news",
    "repository": "news_aggregator_dashboard",
    "categories": [
      "analytics",
      "engineering"
    ],
    "featured": false,
    "order": 8,
    "title": "News Aggregator Dashboard",
    "description": "A news collection and reporting application combining a Flask API with a React dashboard.",
    "kicker": "FULL-STACK DATA PROTOTYPE",
    "cardTools": [
      "Python",
      "Flask",
      "pandas",
      "MongoDB"
    ],
    "facts": [],
    "code": "https://github.com/Qimatxbase/news_aggregator_dashboard"
  },
  {
    "id": "control",
    "repository": "reinforcement_learning_control",
    "categories": [
      "ml"
    ],
    "featured": false,
    "order": 9,
    "title": "Reinforcement Learning Control Benchmarks",
    "description": "Control experiments comparing DQN, PPO and tabular Q-learning across CartPole, Breakout and Pendulum.",
    "kicker": "REINFORCEMENT LEARNING",
    "cardTools": [
      "Python",
      "Gymnasium",
      "Stable-Baselines3",
      "PyTorch"
    ],
    "facts": [],
    "code": "https://github.com/Qimatxbase/reinforcement_learning_control"
  },
  {
    "id": "solar",
    "repository": "call_your_shot",
    "categories": [
      "engineering",
      "hackathons"
    ],
    "featured": false,
    "order": 10,
    "title": "Call Your Shot — CYS Solar",
    "description": "A solar-sharing prototype connecting household assessment, tenant/landlord workflows and financial estimates.",
    "kicker": "TEAM HACKATHON PROTOTYPE",
    "cardTools": [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI"
    ],
    "facts": [],
    "code": "https://github.com/Qimatxbase/call_your_shot"
  },
  {
    "id": "creatortrust",
    "repository": "creatortrust_shield",
    "categories": [
      "analytics",
      "hackathons"
    ],
    "featured": false,
    "order": 11,
    "title": "CreatorTrust Shield — IAG Hackathon",
    "description": "An evidence-framing dashboard and pitch exploring creator identity risk and a cyber-insurance opportunity.",
    "kicker": "TEAM HACKATHON DASHBOARD AND PITCH",
    "cardTools": [
      "Python",
      "pandas",
      "Streamlit",
      "Plotly"
    ],
    "facts": [],
    "code": "https://github.com/Qimatxbase/creatortrust_shield"
  },
  {
    "id": "sustainable",
    "repository": "sustainable_infrastructure_design",
    "categories": [
      "hackathons"
    ],
    "featured": false,
    "order": 12,
    "title": "Sustainable Infrastructure Design",
    "description": "AI-assisted infrastructure design studies presented through technical reports, visuals and trade-off comparisons.",
    "kicker": "TEAM HACKATHON DESIGN/REPORT SUBMISSION",
    "cardTools": [
      "Design research",
      "AI-assisted visual concepts",
      "Python",
      "HTML / PDF"
    ],
    "facts": [],
    "award": {
      "title": "State Asphalts Intelligent Transport Solutions Award",
      "detail": "UTS Tech Festival 2026 · GenAI Hackathon",
      "certificate": "./assets/certificates/Certificate_UTS_GenAI_Hackathon_State_Asphalts_2026.pdf"
    },
    "code": "https://github.com/Qimatxbase/sustainable_infrastructure_design"
  },
  {
    "id": "vineyard",
    "repository": "vineyard_ai_monitor",
    "categories": [
      "ml",
      "hackathons"
    ],
    "featured": false,
    "order": 13,
    "title": "Vineyard AI Monitor",
    "description": "An RGB-image analysis workflow that organises vineyard canopy coverage, unusual regions and possible gaps into an inspection map.",
    "kicker": "TEAM AGRICULTURAL HACKATHON PROTOTYPE",
    "cardTools": [
      "Python",
      "NumPy",
      "pandas",
      "Streamlit"
    ],
    "facts": [],
    "code": "https://github.com/Qimatxbase/vineyard_ai_monitor"
  }
];
