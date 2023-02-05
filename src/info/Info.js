import self from "../img/self.png"
// import mock1 from "../img/mock1.png"
// import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"


export let colors = ["rgb(209, 255, 231)", "rgb(177, 211, 255)"];

export const info = {
    firstName: "Ana",
    lastName: "Lindiner",
//    initials: "AL", 
    position: "a Data Engineer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Brazil'
        },
        {
            emoji: "💼",
            text: "Consultant IT at BIP Group"
        }
    ],
    socials: [
        {
            link: "https://www.youtube.com/channel/UCTfG8-FVT4YpwfCXeC0bWLg",
            icon: 'fa fa-youtube',
            label: 'youtube'
        },
        {
            link: "https://www.instagram.com/lind.flow/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/lindiner",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/analindiner/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }


    ],
    bio: "I am Ana. I am an IT consultant for the BIP Group. I studied information system at UNIFESSPA, I like to learn new things and I believe that digital education is fundamental for a person's transformation.",
    skills:
        {
            proficientWith: ['Git', 'Linux', 'Cloud', 'AWS','Power BI'  ],
            exposedTo: ['Python', 'MySQL', 'DevOps', 'k8s']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'running',
            emoji: '🏃‍♀️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        }

    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        // {
        //     title: "Project 1",
        //     live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        //     source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
        //     image: mock1
        // },
        // {
        //     title: "Project 2",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock2
        // },
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }

       
    ]
}