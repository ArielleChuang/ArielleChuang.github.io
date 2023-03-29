import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Tzu-Hsuan",
    lastName: "Chuang",
    initials: "Chuang", // the example uses first and last, but feel free to use three or more if you like.
    position: "a MS in industrial engineering @ University of Michigan",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: '👷🏻‍♀️',
            text: "solving problems for humans in engineering contexts"
        },
        {
            emoji: "💼",
            text: "Research Assistant at UMich Transportation Research Institute"
        },
        {
            emoji: "📩",
            text: "archuang@umich.edu"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://drive.google.com/file/d/1cpVfhNqNGlT48WiUx-239OiWoIuyuTBl/view?usp=share_link",
            icon: 'fa fa-file-text',
            label: 'resume'
        },
        {
            link: "https://github.com/ArielleChuang",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/archuang",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Tzu-Hsuan (Arielle) Chuang 莊子萱. I'm a first-year MS student studying Industrial and Operations Engineering at University of Michigan, Ann Arbor. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['Python', 'R', 'VBA', 'Javascript', 'React.js', 'C++', 'Git', 'html5/css3', 'Kotlin'],
            exposedTo: ['ProModel', 'Microsoft Office - Excel, Access, Project', 'EndNote', 'Figma', 'Webflow'],
            language: ['English (fluent)', 'Mandarin (native)']
            // proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            // exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Prosthetic Terminal Device for Upper-limb Loss Bikers",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Southeast Machinery Co., Ltd. – Applied Research in Project Management of Make-to-Order Production",
            live: "../portfolio/project/SoutheastMachinery.js",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Operations Analysis and Improvement with Lean Manufacturing – A Case Study of Dongfong Restaurant",
            live: "../portfolio/project/OperationsAnalysis",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
        // {
        //     title: "Operations Analysis and Improvement with Lean Manufacturing – A Case Study of Dongfong Restaurant",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}