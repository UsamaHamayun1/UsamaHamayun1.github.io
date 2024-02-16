export const bio = [
    "Hi there , My Name Is Usama Hamayun Ghouri.",
    `Currently pursuing Masters In Automatic Control and Robotics, 
    working as Hardware & UAV Engineer in WeCrunch. I graduated as a Bachelors  Engineer in Mechatronics,  
    For this reason, I feel especially qualified and motivated to cover any position in my study area. 
    Since during my working life I have worked in many fields of a technical nature, both in the office and in the field, 
    which has allowed me to acquire a wealth of knowledge and experience, as well as to improve my capacity for teamwork and 
    management of people and projects.

    My experience is mainly focused on robotics and control of Mobile Robots , Robotics Arms and UAVs, as a consequence, 
    I have a solid background in electronics, computer vision, AI, and autonomous navigation, among others, ranging from the design and programming of service robots, 
    industrial machines. My training and experience have allowed me to acquire the ability to "learn to learn", so I have a great willingness to face challenges.`,
    "Thanks for taking the time to learn a little about me!",
];

export const skills = [
    {
        title: "Languages",
        skillName: "C++, C",
        color: "1",
        percentage: "70",
    },
    {
        title: "Frameworks/Libraries",
        skillName: "Python",
        color: "6",
        percentage: "70",
    },
    {
        title: "Design",
        skillName: "ROS1/ROS2,URDF, Docker/Dev Containers",
        color: "4",
        percentage: "80",
    },
    {
        title: "Version Control",
        skillName: "GitHub, JIRA, Bitbucket",
        color: "7",
        percentage: "70",
    },
    {
        title: "Tools",
        skillName: "Controls, MPC , Robust Control,Contol Modelling and Designing",
        color: "3",
        percentage: "70",
    },
    {
        title: "Analytics",
        skillName: "TensorFlow, Pytorch, Deep Learning, Machine Learning",
        color: "5",
        percentage: "50",
    },
    {
        title: "IDE",
        skillName: "Computer Vision,Perception, Localization",
        color: "6",
        percentage: "70",
    },
];

export const projects = {
    webProjects: [
        {
            projectName: "Programming Diaries",
            image: "images/programmingdiaries.png",
            summary:
                "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
            preview: "https://programmingdiaries.herokuapp.com/",
            techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
        },
        {
            projectName: "Find Your Bank",
            image: "images/findyourbank.png",
            summary:
                "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
            preview: "https://clever-fermi-0d5d76.netlify.app",
            techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
        },
        {
            projectName: "Web Portfolio",
            image: "images/portfolio.png",
            summary:
                "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
            preview: "https://github.com/vinaysomawat/Travographer-Portal",
            techStack: ["HTML", "Bootstrap", "JavaScript"],
        },
        {
            projectName: "Resume Builder",
            image: "images/resume-builder.png",
            summary:
                "Browser based editor to build and download Resumes in a customizable templates.",
            preview: "https://vinaysomawat.github.io/Resume-Builder",
            techStack: ["HTML", "Bootstrap", "JavaScript"],
        },
    ],
    softwareProjects: [
        {
            projectName: "Pizza Ordering ChatBot",
            image: "images/pizzaorderchatbot.png",
            summary:
                "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
            preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
            techStack: ["Dailogflow", "Firebase"],
        },
        {
            projectName: "WhatsApp-Bot",
            image: "images/whatsappbot.jpg",
            summary:
                "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
            preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
            techStack: ["Selenium", "Chrome Webdriver", "Python"],
        },
        {
            projectName: "Bill Generator",
            image: "images/billgenerator.png",
            summary:
                "GUI to transfer data to excel sheets and generate bills on the local shops.",
            preview: "https://github.com/vinaysomawat/Bill-Generator",
            techStack: ["Tkinter", "Openxlpy", "Python"],
        },
    ],
    androidProjects: [
        {
            projectName: "NITW-CSE",
            image: "images/nitwcse.jpg",
            summary:
                "The Application display details of Department courses, reference books, research, publication and faculty profile.",
            preview: "https://github.com/vinaysomawat/NITW-CSE",
            techStack: ["JAVA", "XML", "Android"],
        },
        {
            projectName: "CareerHigh-App",
            image: "images/carrerhigh.png",
            summary:
                "The Application display the webpages of website careerhigh.in in android devices.",
            preview: "https://github.com/vinaysomawat/CareerHigh-Android",
            techStack: ["JAVA", "XML", "Android"],
        },
    ],
    freelanceProjects: [
        {
            projectName: "SnylloAir.com",
            image: "images/snylloair.png",
            summary:
                "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
            preview: "https://www.snylloair.com/",
            techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
        },
        {
            projectName: "Delivery+",
            image: "images/AM-Logo-.png",
            summary: "Android Application to display website in android devices.",
            preview:
                "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
            techStack: ["Android", "JAVA", "Play Store"],
        },
    ],
};

export const experience = [
    {
        title: "WeCrunch Private Ltd",
        duration: "September 2022 - Present",
        subtitle: "Hardware & UAV Engineer",
        details: [
            `Work as a Lead Hardware Engineer.
            Responsible for Developing,Designing & Acquisition of Hardware for AGVs, and UAVs for warehouse management`,
            `Developed Autonomous Navigation and loclization Algorithms of Drones for Indoor Warehouse Navigation`,
            `Implemeted Vision + SLAM based Navigation for Indoor warehouse`,
            `Developed a Simulator for Testing Developement of Navigation Algorithms.`,
        ],
        tags: ["AGVs", "Drones, UAVS", "C++", "python", "ROS1, ROS2","Kalman Filter , AMCL"],
        icon: "truck ",
    },
    {
        title: "Institute of Industrial And Control Engineering (IOC)- UPC",
        duration: "Oct 2023 - Jan 2024",
        subtitle: "Reseach Internee",
        details: [
        `Shifting and all old repositories from ROS1 to ROS2.`,
        `Implemented Behavior Trees on ROS2 for Robot task planning and Monitoring`,
        ],
        tags: ["ROS2", "Task Planning", "BehaviorTrees", "C++", "Python", "Navigation Stack2"],
        icon: "heartbeat",
        },
        {
            title: "Accomacs Technologies - USA",
            duration: "Mar 2022 - Nov 2023",
            subtitle: "Drone/UAV Engineer",
            details: [
            `Design Autonomous UAVs for Agriculture Purposes (Seeding , Spraying)`,
            `Developed Ready to USE Production Ready UAVs with the Payload capacity of 10 gallons,30 gallons and 100kg.`,
            `Desigend Hybrid Hydrogen + battery based UAV with custom Power management system`,
            `Built custom ground control software for Flight management and Mission planning`,
            ],
            tags: ["Drones", "UAVs", "PX4", "QGroundControl", "C++","Python","SLAM"],
            icon: "plane",
            },
            {
                title: "Salman And Associates - Pakistan",
                duration: "Jul 2019 - Aug 2022",
                subtitle: "Technical Support Engineer",
                details: [`Deployment of Robotic ARMs along with installation and commissioning.Reviewing and approving designs`,
                         `Calculations, or cost estimation.`,
                        `Installed, operated , calibration and maintenance resposibilities. Supervising of technologists, technicians or
                        other engineers`,
                        `Worked on Various 3 Axis CNC Machines`,
                        `Selection & finalizing of tools and Machine technologies as per users demands.`,
                        `Using IR and night vision, used techniques like CV, ROS and tensorflow`,],
                tags : ["Gcode" , "MCode", "Computer Vision", "Commissioning", "ROS1", "UGVs"],
                icon: "car"
            }
            
];

export const education = [
    {
        title: "Masters in Automatic Control And Robotics",
        duration: "2022 - 2024",
        subtitle: "UPC - Universitat Politècnica de Catalunya-BarcelonaTech",
        details: [],
        tags: [
            "Linear and Non-Linear System Controls",
            "Robot Operating System (ROS1, ROS2)",
            "Optimization",
            "Computer Vision,Image Recongnition, Pattern Recognition",
            "Drones,Mobile Robots, Robotics Arms",
            "AI, DL , ML , Deep Reinforcement Learning",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Bachelors of Mechatronics Engineering",
        duration: "2015-2019",
        subtitle: "Air University Islamabad, Pakistan",
        details: [],
        tags: ["Mechatronics", "Instrumentation", "Industrial Automation","Machine Design","Advanced Robotics"],
        icon: "book",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "GitHub",
                link: "https://github.com/UsamaHamayun1",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Enable Dark/Light Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Print this page",
                func: "window.print()",
            },
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/usamahamayun/",
            },
            {
                text: "X (Twitter)",
                link: "https://twitter.com/UsamaHamayun2",
            },
            {
                text: "Instagram",
                link: "https://www.instagram.com/usamahamayun1",
            },
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Usama Hamayun Ghouri.",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];