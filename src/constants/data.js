import { Activity, Code, Cpu, GraduationCap, Lightbulb, Users, Award, Mic, BookOpen } from 'lucide-react';

export const identity = {
    name: "Shova Gelal",
    title: "AI & Data Science Student",
    subtitle: "Aspiring AI Engineer",
    location: "Kathmandu, Nepal",
    email: "shovagelal392@gmail.com",
    linkedin: "linkedin.com/in/shova-gelal",
    linkedinUrl: "https://linkedin.com/in/shova-gelal",
    roles: ["AI & Data Science Student", "Aspiring AI Engineer", "Community Leader"],
    about: "I am a Bachelor of Technology (B.Tech) student in Artificial Intelligence at Kathmandu University, passionate about building intelligent systems that solve real-world problems. My primary interests include machine learning, deep learning, data science, and AI-driven applications in healthcare, audio processing, and social impact. I actively engage in hackathons, fellowships, internships, and community programs to strengthen my practical skills. I am currently seeking AI / Machine Learning / Data Science internship opportunities."
};

export const education = [
    {
        id: 1,
        degree: "Bachelor of Technology (B.Tech) in Artificial Intelligence",
        institution: "Kathmandu University",
        location: "Dhulikhel, Nepal",
        period: "Oct 2023 – Present",
        description: "Focusing on core AI algorithms, machine learning models, deep learning, and data structures.",
        icon: GraduationCap,
        link: "https://ku.edu.np",
        image: "/assets/ku-logo.png"
    }
];

export const experience = [
    {
        id: 1,
        role: "Machine Learning Intern",
        company: "Prodigy Infotech",
        period: "2023",
        description: "Completed a structured internship focused on machine learning fundamentals. Worked on data preprocessing and model building, strengthening applied ML workflows.",
        icon: Activity,
        link: "https://prodigyinfotech.dev",
        image: "/assets/prodigy-logo.png"
    },
    {
        id: 2,
        role: "Fellow",
        company: "DataCamp",
        period: "2023",
        description: "Selected for a competitive fellowship. Gained hands-on experience in Python, Data Science, and Machine Learning applied to real-world datasets.",
        icon: BookOpen,
        link: "https://datacamp.com",
        image: "/assets/datacamp-logo.png"
    }
];

export const projects = [
    {
        id: 1,
        title: "Speech Emotion Recognition System",
        description: "Developed a language-independent speech emotion recognition model using CNNs. Focused on emotional cues such as pitch, tone, and rhythm. Targeted applications in mental health, customer support, and healthcare.",
        tags: ["Python", "Deep Learning", "CNNs", "Audio Processing"],
        icon: Cpu,
        link: "https://github.com/shovagelal",
        badge: "AI/ML",
        image: "/assets/project-speech.jpg"
    },
    {
        id: 2,
        title: "Bird Sound Classification System",
        description: "Built an audio classification system with 62 sound classes. Implemented preprocessing, segmentation, and feature extraction pipelines. Evaluated using ROC curves and confusion matrices.",
        tags: ["Python", "CNNs", "Audio Processing"],
        icon: Activity,
        link: "https://github.com/shovagelal",
        badge: "DL",
        image: "/assets/project-bird.jpg"
    },
    {
        id: 3,
        title: "Pregnancy Health Assessment Chatbot",
        description: "Designed a Retrieval-Augmented Generation (RAG) system that generates personalized pregnancy health insights. Integrated backend logic with a Streamlit frontend for healthcare accessibility.",
        tags: ["Python", "LLMs", "RAG", "Streamlit"],
        icon: Lightbulb,
        link: "https://github.com/shovagelal",
        badge: "NLP",
        image: "/assets/project-rag.jpg"
    },
    {
        id: 4,
        title: "Nepalese Music Preservation Project",
        description: "Collected and analyzed music from diverse Nepali communities. Applied AI techniques to preserve cultural and traditional music through classification and analysis pipelines.",
        tags: ["Python", "ML", "Audio Analysis"],
        icon: Code,
        link: "https://github.com/shovagelal",
        badge: "Cultural AI",
        image: "/assets/project-music.jpg"
    }
];

export const leadership = [
    {
        id: 1,
        role: "Student Ambassador",
        organization: "ANAIS Program",
        description: "Represented the program, promoted AI awareness, and encouraged peer participation in AI-focused initiatives.",
        icon: Users,
        link: "#",
        image: "/assets/anais-logo.png"
    },
    {
        id: 2,
        role: "College Representative",
        organization: "Code for Change",
        description: "Served as official college representative, coordinated coding initiatives and student participation in tech-for-social-impact programs.",
        icon: Users,
        link: "https://codeforchange.org.np",
        image: "/assets/cfc-logo.png"
    },
    {
        id: 3,
        role: "Executive Member",
        organization: "KU Artificial Intelligence Club",
        description: "Volunteered as executive member, assisted in organizing AI events, workshops, and meetups, promoting AI learning culture at university.",
        icon: Award,
        link: "https://kuaic.github.io",
        image: "/assets/kuaic-logo.png"
    },
    {
        id: 4,
        role: "Talk Show Moderator",
        organization: "AI Meet 2024",
        description: "Moderated live talk sessions and panel discussions. Engaged speakers and audience in AI-focused conversations and ensured smooth event execution.",
        icon: Mic,
        link: "#",
        image: "/assets/aimeet-logo.png"
    },
    {
        id: 5,
        role: "Workshop Organizer",
        organization: "School Outreach Program",
        description: "Organized and conducted an introductory coding and AI workshop at schools. Introduced students to programming and encouraged early interest in technology.",
        icon: BookOpen,
        link: "#",
        image: "/assets/outreach-logo.png"
    }
];

export const impact = [
    {
        id: 1,
        title: "111 Days Coding Challenge",
        organization: "Code for Change",
        description: "Completed a 111-day continuous coding challenge. Built consistency, discipline, and problem-solving skills through daily practice.",
        icon: Code,
        link: "https://codeforchange.org.np",
        image: "/assets/coding-challenge.jpg"
    },
    {
        id: 2,
        title: "School Workshop Organizer",
        description: "Organized and conducted introductory coding and AI workshops at schools, inspiring students toward technology.",
        icon: Users,
        link: "#",
        image: "/assets/school-workshop.jpg"
    }
];

export const assets = {
    profilePhoto: "/assets/shova-profile.png",
    resumeUrl: "/assets/shova-resume.pdf"
};

export const certifications = [
    { id: 1, title: "Machine Learning Fundamentals in Python", issuer: "DataCamp", date: "2023", link: "https://datacamp.com/certificate", image: "/assets/cert-ml.jpg" },
    { id: 2, title: "Python Data Fundamentals", issuer: "DataCamp", date: "2023", link: "https://datacamp.com/certificate", image: "/assets/cert-python.jpg" },
    { id: 3, title: "Machine Learning", issuer: "DataCamp", date: "2023", link: "https://datacamp.com/certificate", image: "/assets/cert-ml-advanced.jpg" }
];

export const skills = [
    {
        category: "Programming & Tools",
        items: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow / Keras", "PyTorch (basic)", "Git & GitHub"]
    },
    {
        category: "Machine Learning & Deep Learning",
        items: ["Supervised & Unsupervised Learning", "Feature Engineering", "Model Training & Evaluation", "CNNs", "AUC / ROC / Confusion Matrix"]
    },
    {
        category: "Data Science",
        items: ["Data Cleaning & Preprocessing", "Exploratory Data Analysis (EDA)", "Statistical Analysis"]
    },
    {
        category: "Audio & Signal Processing",
        items: ["Audio Segmentation & Noise Cleaning", "Feature Extraction (Mel Spectrograms, Log-Mel)", "Speech & Sound Classification"]
    },
    {
        category: "Soft Skills",
        items: ["Leadership & Team Collaboration", "Public Speaking & Event Moderation", "Communication", "Time Management", "Adaptability"]
    }
];
