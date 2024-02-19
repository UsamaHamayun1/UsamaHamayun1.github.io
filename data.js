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
export const projects2 = {
    // publication can  be added from here
    webProjects2: [
        {
            projectName: "Attitude Control of Quad-copter using Deterministic Policy Gradient Algorithms (DPGA)",
            image: "https://ieeexplore.ieee.org/assets/img/ieee_logo_white.svg",
            summary:
                "Attitude Control of Quad-copter using Deterministic Policy Gradient Algorithms (DPGA)  ",
            preview: "https://ieeexplore.ieee.org/document/8681003",
            techStack: ["Pytorch", "OpenAi-GYM", "ROS", "Python", "Deep Reinforcement Learning"],
        }
    ],
    
};
export const projects = {
    webProjects: [
        {
            projectName: "PECORE (Perception , Cognition and Recognition",
            image: "https://asantamarianavarro.gitlab.io/teaching/muar/pecore/_images/lio_sam_demo.gif",
            summary:
                "This repository contains the code, assignments, and projects related to the Master's course on Perception and Cognition in Robotic Exploration (PECORE) offered at UPC-ETSEIB. The course explores the fundamental concepts, algorithms, and methodologies in robot perception, cognition, and exploration",
            preview: "https://github.com/UsamaHamayun1/ROS2_Perception_congnition.git/",
            techStack: ["ROS2", "SLAM", "Servoing", "Python", "Perception"],
        },
        {
            projectName: "Human Robot Chess Match",
            image: "https://camo.githubusercontent.com/5d08cfbe164d73964493632f746f56f5c1bf500842f857e652c236b397b80dab/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f30474872305042304c75632f302e6a7067",
            summary:
                "The solution proposed by the team to reproduce a chess match where the robot moves the pieces according to the user commands. ",
            preview: "",
            techStack: ["ROS1", "ComputerVision", "Robotics", "Motion & Task Planning"],
        },
        {
            projectName: "Tiago Robot as Classroom Assistant",
            image: "https://camo.githubusercontent.com/028c76f75c0ed589c20377a0fbbcd3d774fda9f5b7dcd87ff8885ece53a334cf/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f576e4c68674851395745512f302e6a7067",
            summary:
                "Using TIAGO-By PAL as classroom assistant, Planning a task and actions Open Motion Planning Library ",
            preview: "https://github.com/UsamaHamayun1/Tiago_classroom_assisstant/blob/main/Tiago_classroom_TAMP_demo.mp4",
            techStack: ["ROS2", "Kautham", "Python", "Motion & Task Planning","OMPL"],
        },
    ],
    
    softwareProjects: [
        {
            projectName: "Facial Expression Detection and Recognition",
            image: "images/example1.png",
            summary:
                "Develop an DL based model to identify Facial Expression",
            preview: "https://github.com/UsamaHamayun1/Pattern-Recognition",
            techStack: ["TensorFlow", "Python","AI"],
        },
        {
            projectName: "Object Recognition and Tracking using Optical flow",
            image: "https://camo.githubusercontent.com/4361374fb20a0f604ae026b2c3b7f466716962b01409dd5bec84aec332921b87/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f62426d376b4e627750776b2f302e6a7067",
            summary:
                "Creating a algorithm to Detect and track Object in a video using optical flow technique",
            preview: "https://github.com/UsamaHamayun1/object-tracking-using-optical-flow",
            techStack: ["Object-Tracking", "Optical Flow", "Computer Vision"],
        },
        {
            projectName: "Identification of Various Shirts of Football Teams using Color-Histogram",
            image: "https://github.com/UsamaHamayun1/Short-Identification-With-Color-Histogram/raw/main/cv_5.png",
            summary:
                "Identification of Various Shirts of Football Teams using Color-Histogram",
            preview: "https://github.com/UsamaHamayun1/Short-Identification-With-Color-Histogram",
            techStack: ["Object Identification", "Computer Vision",],
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