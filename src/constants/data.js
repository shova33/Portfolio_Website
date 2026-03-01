import { Activity, Code, Cpu, GraduationCap, Lightbulb, Users, Award, Mic, BookOpen, Heart, Globe, Briefcase, Zap } from 'lucide-react';

export const identity = {
    name: "Shova Gelal",
    title: "AI Student | ML Engineer | Tech Communicator",
    subtitle: "B.Tech in Artificial Intelligence (3rd Year)",
    location: "Kathmandu, Nepal",
    email: "shovagelal392@gmail.com",
    linkedin: "linkedin.com/in/shova-gelal",
    linkedinUrl: "https://www.linkedin.com/in/shova-gelal",
    githubUrl: "https://github.com/shova33",
    roles: ["AI Student", "ML Engineer", "Tech Communicator"],
    about: "I am a 3rd-year Bachelor of Technology student in Artificial Intelligence at Kathmandu University. My focus lies in Deep Learning, NLP, and Audio Classification. I am passionate about leveraging AI for social impact and 'AI for Good.' Beyond technical engineering, I am a strong communicator, active as a talk show moderator, workshop leader, and in various leadership roles within the tech community."
};

export const education = [
    {
        id: 1,
        degree: "Bachelor of Technology (B.Tech) in Artificial Intelligence",
        institution: "Kathmandu University",
        location: "Dhulikhel, Nepal",
        period: "2023 – Present (3rd Year)",
        description: "Focusing on Deep Learning, NLP, Audio Classification, and Predictive Modeling.",
        icon: GraduationCap,
        link: "https://ku.edu.np"
    }
];

export const experience = [
    {
        id: 1,
        role: "Machine Learning Intern",
        company: "Prodigy Infotech",
        period: "2024",
        description: "Focusing on machine learning engineering, data pipelines, and implementing models for real-world applications.",
        icon: Briefcase,
        link: "https://www.linkedin.com/posts/shova-gelal_1stinternship-ml-learningjourney-activity-7307564683509587968-yDn5"
    },
    {
        id: 2,
        role: "Fellow",
        company: "DataCamp Donates",
        period: "2024",
        description: "Selected as a DataCamp Fellow, specializing in advanced data science and machine learning through the Sunway College Kathmandu partnership.",
        icon: Award,
        link: "https://www.linkedin.com/posts/shova-gelal_sunwaycollegekathmandu-dcdonates-dc-activity-7217500209419829248-FV8a"
    }
];

export const projects = [
    {
        id: 1,
        title: "Birds Audio Classification",
        description: "Developed a robust audio classification system for bird species identification using HRNet (High-Resolution Net) architecture. Implemented sophisticated audio preprocessing and feature extraction.",
        tags: ["PyTorch", "HRNet", "Librosa", "Audio Classification"],
        icon: Cpu,
        github: "https://github.com/shova33/semester2-bird-audio-classification-hrnet.git",
        badge: "Deep Learning"
    },
    {
        id: 2,
        title: "Pregnancy Health Chatbot",
        description: "An AI-powered chatbot designed to provide pregnancy health guidance. Built using NLP techniques to offer accessible and reliable health information.",
        tags: ["Python", "NLP", "Hugging Face", "Healthcare AI"],
        icon: Mic,
        github: "https://github.com/shova33/Pregnancy_chatbot.git",
        badge: "NLP"
    },
    {
        id: 3,
        title: "LokBus – Smart Bus Tracking",
        description: "A smart bus tracking system designed to modernize public transportation. Focuses on real-time tracking and logistics management.",
        tags: ["IoT", "Real-time", "Smart City"],
        icon: Activity,
        github: "https://github.com/LokBus01",
        badge: "Smart Systems"
    },
    {
        id: 4,
        title: "Rojgar_Net",
        description: "An employment networking platform connecting job seekers with opportunities, designed to streamline the recruitment process in the local market.",
        tags: ["Networking", "Recruitment", "Web App"],
        icon: Globe,
        github: "https://github.com/shova33/Rojgar_Net.git",
        badge: "Software Engineering"
    }
];

export const leadership = [
    {
        id: 1,
        role: "ANAIS Student Ambassador",
        organization: "NAAMII",
        link: "https://www.linkedin.com/posts/naamiinepal_anais2025-naamii-aiforgood-ugcPost-7392445871465947136-FxKK",
        icon: Users
    },
    {
        id: 2,
        role: "Executive Member",
        organization: "KUAIC (Kathmandu University AI Club)",
        link: "https://www.facebook.com/share/1HQZ45zy4X/",
        icon: Zap
    },
    {
        id: 3,
        role: "Talk Show Moderator",
        organization: "AI Meet 2024",
        link: "https://www.linkedin.com/posts/shova-gelal_ai-aimeet2024-grateful-activity-7279109423061479424-gsa7",
        icon: Mic
    },
    {
        id: 4,
        role: "College Representative",
        organization: "Code for Change",
        link: "https://www.facebook.com/share/1HMYhxyVEQ/",
        icon: Globe
    },
    {
        id: 5,
        role: "School AI Workshop Leader",
        organization: "Community Outreach",
        link: "https://www.facebook.com/share/p/1GW1NcbLH8/",
        icon: BookOpen
    },
    {
        id: 6,
        role: "WIIT Member (IWD 2025)",
        organization: "Women in Information Technology",
        link: "https://www.linkedin.com/posts/shova-gelal_womenintech-ictnepal-ai-activity-7298302230317686784-NlqT",
        icon: Heart
    },
    {
        id: 7,
        role: "SHE LITS Program",
        organization: "KUAIC AI Leadership",
        link: "https://www.linkedin.com/posts/shova-gelal_ai-leadership-womenintech-activity-7272153530713432065-No2D",
        icon: Award
    }
];

export const achievements = [
    {
        id: 1,
        title: "Best Presentation Award",
        organization: "CodeCamp 2024",
        link: "https://www.linkedin.com/posts/shova-gelal_teamwork-codecamp2024-itmeet2024-activity-7280172064647368704-bgLa",
        icon: Award
    },
    {
        id: 2,
        title: "Top 16 Semi-Finalist",
        organization: "AIDAHackathon 2025",
        link: "https://www.linkedin.com/posts/shova-gelal_aidahackathon2025-aidahackathon2025-autism-activity-7392549852146180096-FBt4",
        icon: Zap
    },
    {
        id: 3,
        title: "KU HackFest Participant",
        organization: "48-Hour Hackathon",
        link: "https://www.linkedin.com/posts/shova-gelal_kuhackfest-neatify-neat-activity-7419763477877108736-8uzm",
        icon: Activity
    },
    {
        id: 4,
        title: "111 Days Challenge Completed",
        organization: "Code for Change",
        link: "https://www.linkedin.com/posts/shova-gelal_codeforchange-111daysoflearningforchange-activity-7357793610035081216-QjzO",
        icon: Code
    }
];

export const assets = {
    profilePhoto: "/assets/shova-profile.png",
    resumeUrl: "/Shova_Gelal_Resume.pdf"
};

export const skills = [
    {
        category: "AI / ML Core",
        items: ["Machine Learning", "Deep Learning", "NLP", "Audio Classification", "Predictive Modeling"]
    },
    {
        category: "Frameworks & Libraries",
        items: ["PyTorch (HRNet)", "TensorFlow / Keras", "Hugging Face", "Scikit-learn", "Librosa"]
    },
    {
        category: "Languages",
        items: ["Python", "SQL", "C++"]
    },
    {
        category: "Tools",
        items: ["Git & GitHub", "VS Code", "Google Colab"]
    }
];
