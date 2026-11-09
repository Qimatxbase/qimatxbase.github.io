export const caseStudies = {
  "nsw": {
    "kicker": "ANALYTICS & VISUALISATION",
    "title": "NSW Road Safety Dashboard — Data Narrative",
    "award": {
      "title": "Winner — The Persuasion Pitch Competition",
      "detail": "Selected from 27 entries for outstanding achievement in Data Visualisation and Narratives (36104), UTS Transdisciplinary School, Autumn 2026.",
      "certificate": "./assets/certificates/Certificate_UTS_Persuasion_Pitch_Competition_2026.pdf"
    },
    "summary": "A dashboard for exploring crash hotspots, time patterns and local risk factors through connected views and filters.",
    "context": [
      "UTS 36104 · Assessment 3 · Group 22"
    ],
    "scope": "The team assessment uses 18,939 crash records across 130 NSW local government areas. Five dashboard views cover overview, hotspots, temporal risk, external conditions and decisions.",
    "contribution": "The technical documentation credits me as Lead Developer. I worked on the core Streamlit application, workflow integration, interactive controls, hotspot and time-pattern analysis, and maps. The analysis and deliverable retain the team’s source credits.",
    "methods": [
      "Used Python and pandas to organise crash data for consistent filtering and summaries.",
      "Connected location, crash outcome, school-zone and speed-limit controls to visual and geographic views.",
      "Used Plotly charts and coordinate maps to help users compare patterns and explore explicitly hypothetical intervention scenarios."
    ],
    "limits": "The dashboard supports exploratory analysis. Its fixed 20% hypothetical scenario is an illustration, not a forecast or a causal estimate that an intervention will reduce crashes.",
    "code": "https://github.com/Qimatxbase/nsw_road_safety_dashboard",
    "credits": "UTS Group 22; original team source: lLuckil/36104_DVN_AT3_G22. Crash data attributed to Data.NSW.",
    "repository": "nsw_road_safety_dashboard",
    "tools": [
      "Python",
      "pandas",
      "Streamlit",
      "Plotly",
      "KPI",
      "Hotspot",
      "Government data"
    ]
  },
  "airbnb": {
    "kicker": "DATA ENGINEERING",
    "title": "Airbnb & Census reporting pipeline",
    "summary": "A structured ingestion and transformation workflow that turns monthly Airbnb files and Census reference data into reporting marts.",
    "context": [
      "Big Data Engineering · Assignment 3"
    ],
    "scope": "The assessment connects 12 monthly Airbnb observations from May 2020 to April 2021 with the 2016 Census and NSW local-government mapping files. It contains 18 dbt models and three reporting marts covering listing neighbourhoods, host neighbourhoods and property types.",
    "contribution": "This is my individual Big Data Engineering Assignment 3, originally submitted in October 2025. The cleaned portfolio version retains the original reporting questions while correcting how source observation dates and monthly history are handled.",
    "methods": [
      "A manually triggered Airflow DAG loads Google Cloud Storage files into PostgreSQL raw tables; dbt is built separately rather than invoked by that DAG.",
      "Kept source_month distinct from loaded_at, so historical observations are grouped by their source dates rather than ingestion time.",
      "Used SQL to rebuild half-open monthly host/property history intervals. These are monthly observation histories, not dbt snapshot executions.",
      "Organised 18 dbt models into bronze, silver and gold layers, including three reporting marts and queries for neighbourhood analysis."
    ],
    "limits": "Estimated revenue uses advertised price multiplied by a stay proxy of 30 minus availability_30; unavailability is not a verified booking, so this is not actual revenue or profit. Census measures are from 2016 while Airbnb observations are from 2020–2021. The cleaned pipeline has not been run against the original full datasets or cloud services, and its original analytical findings have not been reproduced.",
    "credits": "Individual UTS Big Data Engineering Assignment 3. The project uses the supplied assessment datasets and third-party Airflow/dbt tooling.",
    "repository": "airbnb_census_pipeline",
    "tools": [
      "SQL",
      "Airflow",
      "dbt",
      "PostgreSQL",
      "GCS",
      "Census",
      "ELT"
    ],
    "code": "https://github.com/Qimatxbase/airbnb_census_pipeline"
  },
  "video": {
    "kicker": "RESEARCH & EVALUATION",
    "title": "Automated video event evaluation",
    "summary": "A repeatable way to examine whether a video-querying system retrieves a relevant event and places its answer in the correct time range.",
    "context": [
      "UTS 36105 iLab · Group 15",
      "Semester 1, 2026"
    ],
    "scope": "The wider capstone is a team video-search application using multimodal retrieval-augmented generation. My contribution is the annotation-grounded evaluation component, shown alongside the wider team retrieval and conversational system.",
    "contribution": "I designed and implemented the automated evaluation pipeline using an annotation file as the reference. The workflow reads the video name, event description and annotated start/end times, then runs evaluation cases and records quality and timing information.",
    "methods": [
      "Structured evaluation cases from annotated video events rather than relying on a few selected demonstrations.",
      "Compared system responses with reference events for relevance and temporal alignment.",
      "Recorded fields supporting analysis of retrieval, response correctness, hallucination and runtime."
    ],
    "limits": "Evaluation is bounded by the available annotations, case selection and judging method. It does not establish general reliability across all footage or prove that the complete team application is production-ready.",
    "credits": "UTS 36105 Group 15, Semester 1 2026. The broader application retains the original footage-query-app team and upstream credits.",
    "repository": "video_event_search",
    "tools": [
      "Python",
      "RAG",
      "LLM",
      "Video",
      "Evaluation",
      "Annotations",
      "Runtime"
    ],
    "code": "https://github.com/Qimatxbase/video_event_search"
  },
  "drone": {
    "kicker": "REINFORCEMENT LEARNING",
    "title": "PPO drone navigation experiments",
    "summary": "Simulation experiments exploring depth-based navigation, staged learning and explicit arrival evaluation.",
    "context": [
      "PPO · PyBullet simulation",
      "Adapted team & upstream work"
    ],
    "scope": "The project adapts credited drone research code to explore PPO navigation using depth/state observations, navigation rewards and an easy-to-medium-to-hard curriculum. A separate precision-arrival experiment examines a five-centimetre goal condition.",
    "contribution": "This portfolio presents my work within a collaborative, adapted research prototype. The environment and wider drone code build on the team’s AutoPilotDrone project and the gym-pybullet-drones library; they are not presented as solely authored components.",
    "methods": [
      "Used Python, Gymnasium and Stable-Baselines3 to structure PPO training and policy evaluation.",
      "Separated curriculum stages and evaluation gates so progression can be inspected.",
      "Kept observation handling, rewards and arrival criteria explicit in the simulation experiments."
    ],
    "limits": "This case study describes the implemented experiment structure. It does not claim an unverified success rate, completed hardware deployment or transfer from simulation to reliable real-world flight.",
    "credits": "Adapted from Quang0309/AutoPilotDrone and learnsyslab/gym-pybullet-drones, with original authorship and licence credits retained.",
    "repository": "autonomous_drone",
    "tools": [
      "Python",
      "PPO",
      "Gymnasium",
      "Stable-Baselines3",
      "PyBullet",
      "Reinforcement learning"
    ],
    "code": "https://github.com/Qimatxbase/autonomous_drone"
  },
  "reid": {
    "kicker": "COMPUTER VISION",
    "title": "OSNet person re-identification",
    "summary": "A contribution to a team comparison of person retrieval across cameras and clothing changes on the MEVID benchmark.",
    "context": [
      "UTS 42177 · Team 8",
      "My contribution: OSNet"
    ],
    "scope": "The team compared BoT-ResNet50, AGW-ResNet50-IBN and OSNet-based methods with shared data and evaluation protocols. The project examines general, same-outfit and cross-outfit retrieval.",
    "contribution": "I prepared the OSNet training configuration and dataset, trained and evaluated the OSNet model, and analysed Rank-1 and mean Average Precision results. The retained OSNet work is implemented in research notebooks and training/evaluation scripts; the reusable application integration remains partial.",
    "methods": [
      "Used PyTorch-based training and reproducible model configuration.",
      "Evaluated retrieval with Rank-1 and mAP under distinct camera/clothing conditions.",
      "Analysed the limits of appearance-based features for cross-camera identity association."
    ],
    "limits": "The shared framework, other model architectures and full team application have separate contributors. Retrieval metrics measure the selected benchmark protocols; they do not establish general identification reliability in real deployments.",
    "code": "https://github.com/Qimatxbase/multi_camera_person_reidentification",
    "credits": "UTS 42177 Team 8. Shared framework and AGW work: Trinh Nhat Quang Nguyen; BoT-ResNet50 work: Dinh Hung Nguyen; additional report contribution: Quang Huy Vu. Original source: Quang0309/MultiCameraTracking.",
    "repository": "multi_camera_person_reidentification",
    "tools": [
      "PyTorch",
      "OSNet",
      "MEVID",
      "ReID",
      "Person re-identification",
      "Computer vision"
    ]
  },
  "tesla": {
    "kicker": "MARKET RESEARCH & CUSTOMER INSIGHTS",
    "title": "Tesla Market Research & Customer Insights",
    "summary": "An AI-assisted study of existing customer reviews, using VADER sentiment, thematic coding and rating checks to validate findings alongside market research and survey design.",
    "context": [
      "UTS · Data-Driven Insights",
      "Individual project",
      "Market research · NLP · Research design"
    ],
    "scope": "The project combines secondary market research with AI-assisted analysis of existing customer reviews. VADER sentiment analysis, thematic coding, star-rating comparisons and data-quality checks provide cross-checks and validation before findings inform a proposed owner survey.",
    "contribution": "I used AI to support review analysis, then cross-checked and validated findings with VADER sentiment, thematic coding and data-quality checks. I connected these findings with secondary market research and a Canva poster to frame questions about Tesla’s ownership experience.",
    "methods": [
      "Used secondary sources to examine the Australian EV market, Tesla’s positioning and its value proposition.",
      "Applied AI-assisted analysis to existing customer reviews to identify candidate findings and themes.",
      "Cross-checked AI-assisted findings with VADER sentiment analysis and thematic coding.",
      "Compared sentiment with star ratings and inspected missing values and duplicate text to validate data quality.",
      "Structured themes around driving, technology, charging and service to guide customer-insight questions.",
      "Designed a proposed 5–7-point Likert survey comparing attribute importance and satisfaction."
    ],
    "noteTitle": "Data & research design",
    "limits": "AI supported analysis of existing review data. VADER sentiment, thematic coding and rating checks were used to cross-check and validate findings. The owner survey remains a proposed research design.",
    "poster": "./assets/tesla-insights-poster.pdf",
    "credits": "UTS 24761 Data-Driven Insights. Canva poster by Khanh Hoang Nguyen. The poster retains its original source and image credits. Related code: public ev_customer_insights portfolio repository.",
    "repository": "ev_customer_insights",
    "tools": [
      "Python",
      "pandas",
      "NLTK",
      "VADER",
      "Market research",
      "AI-assisted analysis",
      "NLP",
      "Thematic coding",
      "Survey design",
      "Customer insights"
    ],
    "code": "https://github.com/Qimatxbase/ev_customer_insights"
  },
  "livestock": {
    "kicker": "COMPUTER-VISION PROTOTYPE",
    "title": "Livestock Video Counter",
    "summary": "An uploaded-video workflow that detects and tracks pigs, counts line crossings and produces annotated video.",
    "context": [
      "Computer-vision prototype"
    ],
    "scope": "The Streamlit app combines a PigDetect-trained YOLOv8 detector, persistent track IDs and configurable line-crossing logic. Users can inspect counts and download an annotated version of their uploaded video.",
    "contribution": "Portfolio detection, tracking and video-counting workflow; course provenance and a complete individual contribution split are not established.",
    "methods": [
      "Configurable confidence thresholds, bounding-box filters, counting line and crossing direction.",
      "Track identities and crossing history prevent repeatedly counting an already counted track.",
      "Includes Kaggle training notebooks, saved PigDetect weights and detector-validation summary.",
      "The saved image-split detector summary reports 96.6% precision and 94.7% recall; these are not video-counting scores."
    ],
    "limits": "Saved validation scores describe the detector; end-to-end counting accuracy and commercial farm performance are not established.",
    "credits": "Portfolio source: Qimatxbase/livestock_video_counter. Original team, dataset and library credits are retained.",
    "tools": [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Streamlit",
      "ByteTrack / BoT-SORT"
    ],
    "repository": "livestock_video_counter",
    "contributionTitle": "Project work & attribution",
    "code": "https://github.com/Qimatxbase/livestock_video_counter"
  },
  "news": {
    "kicker": "FULL-STACK DATA PROTOTYPE",
    "title": "News Aggregator Dashboard",
    "summary": "A news collection and reporting application combining a Flask API with a React dashboard.",
    "context": [
      "Full-stack data prototype"
    ],
    "scope": "One application combines the original Flask backend and React frontend. It collects articles, prepares a common data structure, stores records in MongoDB and exposes API endpoints for reporting views.",
    "contribution": "Combined backend/frontend code sample with both original development histories retained; course attribution and complete individual ownership are not established.",
    "methods": [
      "Collects articles through NewsAPI/Guardian integrations and supplementary HTML extraction.",
      "Normalises dates and URLs, removes duplicate URLs, stores articles in MongoDB and serves JSON endpoints.",
      "Charts article volume by category/date/source, author availability and source comparisons."
    ],
    "limits": "Requires configured API credentials and MongoDB; this is not an offline data demo or a verified production news service.",
    "credits": "Portfolio source: Qimatxbase/news_aggregator_dashboard. Original team, dataset and library credits are retained.",
    "tools": [
      "Python",
      "Flask",
      "pandas",
      "MongoDB",
      "React",
      "Chart.js"
    ],
    "repository": "news_aggregator_dashboard",
    "contributionTitle": "Project work & attribution",
    "code": "https://github.com/Qimatxbase/news_aggregator_dashboard"
  },
  "control": {
    "kicker": "REINFORCEMENT LEARNING",
    "title": "Reinforcement Learning Control Benchmarks",
    "summary": "Control experiments comparing DQN, PPO and tabular Q-learning across CartPole, Breakout and Pendulum.",
    "context": [
      "UTS 43008 · Assignment 2"
    ],
    "scope": "UTS 43008 Assignment 2 compares DQN and PPO on CartPole and Breakout, alongside discretised Q-learning on Pendulum. Canonical assessment notebooks and distinct experiment variants are retained separately.",
    "contribution": "Khanh Hoang Nguyen’s individual UTS 43008 Reinforcement Learning Assignment 2; library/environment authors retain their credits.",
    "methods": [
      "DQN and PPO training/evaluation workflows for CartPole and Breakout.",
      "Discretised tabular Q-learning for Pendulum.",
      "Seeded policy evaluation, training curves, checkpoint comparisons and saved demonstration videos."
    ],
    "limits": "Portfolio preparation preserved source and distinct experiments; it did not reproduce all historical training runs or establish new benchmark scores.",
    "credits": "Portfolio source: Qimatxbase/reinforcement_learning_control. Original team, dataset and library credits are retained.",
    "tools": [
      "Python",
      "Gymnasium",
      "Stable-Baselines3",
      "PyTorch",
      "Jupyter"
    ],
    "repository": "reinforcement_learning_control",
    "code": "https://github.com/Qimatxbase/reinforcement_learning_control"
  },
  "solar": {
    "kicker": "TEAM HACKATHON PROTOTYPE",
    "title": "Call Your Shot — CYS Solar",
    "summary": "A solar-sharing prototype connecting household assessment, tenant/landlord workflows and financial estimates.",
    "context": [
      "Team hackathon prototype"
    ],
    "scope": "The hackathon team connected household solar assessment with tenant and landlord journeys, proposals and financial feasibility estimates. The Next.js frontend and FastAPI backend form one combined CYS Solar project.",
    "contribution": "Team hackathon work; the frontend and backend are one project, with original Call-your-shot team credits retained. No exact personal module division is verified.",
    "methods": [
      "Bill/manual-input intake, annual load estimation, solar sizing and assumption-based Monte Carlo ROI.",
      "Tenant/landlord dashboards, proposals and downloadable proposal PDFs.",
      "Pricing, lease-request and green-credit workflows with a Next.js server layer calling FastAPI."
    ],
    "limits": "Demo identity and process-local data are used in parts of the workflow. ROI outputs are assumption-based feasibility estimates, not achieved savings or guaranteed payback.",
    "credits": "Call Your Shot hackathon team. Original sources: Call-your-shot/backend-call-your-shot and Call-your-shot/ui-call-your-shot. This is one combined project.",
    "tools": [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Supabase"
    ],
    "repository": "call_your_shot",
    "contributionTitle": "Project work & attribution",
    "code": "https://github.com/Qimatxbase/call_your_shot"
  },
  "creatortrust": {
    "kicker": "TEAM HACKATHON DASHBOARD AND PITCH",
    "title": "CreatorTrust Shield — IAG Hackathon",
    "summary": "An evidence-framing dashboard and pitch exploring creator identity risk and a cyber-insurance opportunity.",
    "context": [
      "Team hackathon dashboard and pitch"
    ],
    "scope": "An IAG hackathon concept for Australian creator cyber insurance, presented through a three-view Streamlit dashboard and supporting pitch materials. The implemented views examine market opportunity, cyber risk and creator impact.",
    "contribution": "IAG hackathon prototype and pitch materials; no exact individual module ownership is established.",
    "methods": [
      "Year and creator-group filters, KPI cards and charts.",
      "Three active views: Market Opportunity, Cyber Risk Landscape and Creator Impact.",
      "CSV schema/data-quality checks, presentation slides and reproducible PowerPoint generators."
    ],
    "limits": "Dashboard values are demonstration assumptions. Deepfake detection, identity scanning and operational insurance services are proposal scope, not implemented capabilities.",
    "credits": "Portfolio source: Qimatxbase/creatortrust_shield. Original team, dataset and library credits are retained.",
    "tools": [
      "Python",
      "pandas",
      "Streamlit",
      "Plotly",
      "PowerPoint"
    ],
    "repository": "creatortrust_shield",
    "contributionTitle": "Project work & attribution",
    "code": "https://github.com/Qimatxbase/creatortrust_shield"
  },
  "sustainable": {
    "kicker": "TEAM HACKATHON DESIGN/REPORT SUBMISSION",
    "title": "Sustainable Infrastructure Design",
    "award": {
      "title": "State Asphalts Intelligent Transport Solutions Award",
      "detail": "UTS Tech Festival 2026 — GenAI Hackathon. Award certificate issued by the UTS Faculty of Engineering and Information Technology on 2 July 2026.",
      "certificate": "./assets/certificates/Certificate_UTS_GenAI_Hackathon_State_Asphalts_2026.pdf"
    },
    "summary": "AI-assisted infrastructure design studies presented through technical reports, visuals and trade-off comparisons.",
    "context": [
      "Team hackathon design/report submission"
    ],
    "scope": "The UTS Tech Festival 2026 submission examines three concepts: a sustainable house, a future worksite and a smart intersection. Its deliverables are design studies, presentation visuals and a compiled technical report.",
    "contribution": "Participated in the UTS Tech Festival 2026 team concept-development submission, recognised with the State Asphalts Intelligent Transport Solutions Award. The repository retains shared team attribution.",
    "methods": [
      "A sustainable house concept and architectural presentation board.",
      "A future-worksite study comparing technologies, equipment and workforce considerations.",
      "A smart-intersection/pavement concept with feasibility discussion; Python/HTML tools compile the report."
    ],
    "limits": "These are proposed design studies, not deployed engineering/software systems, validated standards compliance or measured environmental/business benefits.",
    "credits": "UTS Tech Festival 2026 team submission; original source: tuannm3812/uts-techfest-2026-genai-hackathon. Named individual module ownership is not specified.",
    "tools": [
      "Design research",
      "AI-assisted visual concepts",
      "Python",
      "HTML / PDF"
    ],
    "repository": "sustainable_infrastructure_design",
    "contributionTitle": "Project work & attribution",
    "code": "https://github.com/Qimatxbase/sustainable_infrastructure_design"
  },
  "vineyard": {
    "kicker": "TEAM AGRICULTURAL HACKATHON PROTOTYPE",
    "title": "Vineyard AI Monitor",
    "summary": "An RGB-image analysis workflow that organises vineyard canopy coverage, unusual regions and possible gaps into an inspection map.",
    "context": [
      "Team agricultural hackathon prototype"
    ],
    "scope": "A CPU-only RGB-image pipeline estimates visible canopy, screens row-supported gaps and summarises unusual regions. An interactive image-relative inspection map connects the resulting indicators with selected crops and exports.",
    "contribution": "Hackathon team prototype. Generic four-person role descriptions exist, but the repository does not identify Hoang with a specific module-owner role.",
    "methods": [
      "Rule-based canopy segmentation, row-supported gap screening and regional coverage/anomaly indicators.",
      "Interactive image-relative map, selected-region views and an inspection queue.",
      "CSV/JSON/image exports with provenance, coordinate mapping and annotation-based evaluation tooling."
    ],
    "limits": "Bundled demo imagery is generated. The RGB colour and gap indicators are inspection cues requiring independent field validation; they do not diagnose disease, establish missing vines or provide GPS/thermal analysis.",
    "credits": "Portfolio source: Qimatxbase/vineyard_ai_monitor. Original team, dataset and library credits are retained.",
    "tools": [
      "Python",
      "NumPy",
      "pandas",
      "Streamlit",
      "Plotly",
      "RGB image processing"
    ],
    "repository": "vineyard_ai_monitor",
    "contributionTitle": "Project work & attribution",
    "noteTitle": "RGB inspection method",
    "code": "https://github.com/Qimatxbase/vineyard_ai_monitor"
  }
};
