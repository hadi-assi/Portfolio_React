import self from "../img/self.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export const info = {
    firstName: "Hadi",
    lastName: "Assi",
    initials: "HA", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: "🖥️",
            text: "Software Enginering Student"
        },
        {
            emoji: '👩🏻‍💻',
            text: 'Competitve Programmer'
        },
    ],
    bio: "Hello! I'm Hadi. I'm a Full Stack Developer. I am studying CompSci at Aleppo Uni, I enjoy taking long walks around town to clear my mind and gain inspiration for my work. I am always on the lookout for new opportunities to grow and expand my skills.",

    cp: "I am a passionate competitive programmer who enjoys tackling challenging problems, successfully solving over 2000 problems on various online platforms, and have participated in numerous contests such as Facebook Hacker Cup and ICPC. I am committed to continuously learning new skills and improving my coding abilities.",
    skills:
        {
            proficientWith: ['Java','SQL','Javascript', '', 'Git & Github', 'html5', 'css3','bootstrap'],
            exposedTo: ['react' , 'docker' , 'k8s']            
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Sports',
            emoji: '⚽🎾'
        }
    ]
}