import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Arishwin Kishaan | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my developer website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Arishwin Kishaan',
  subtitle: "I'm a Software Engineer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a collaborative team player who enjoys working with others to deliver high-quality projects on time. I am constantly striving to improve my skills and stay up to date with the latest developments in the world of software development.',
  paragraphTwo:
    'In my free time, I enjoy exploring new technologies, experimenting with personal projects, and keeping up with industry trends. I am excited to share my knowledge and experience with others and to tackle new challenges in my personal and professional life.',
  paragraphThree:
    'I also enjoy learning new skills and technologies. I have recently obtained a masters degree in Applied Computing.',
  resume: 'https://www.dropbox.com/s/j1c6oc453ebqg11/arishwin_resume_april.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'chatbot.png',
    title: 'Hilti Chatbot',
    info: 'Hilti Chatbot is a chatbot designed for Hilti Asia IT Services. The chatbot is designed to automate complex tasks by using RPA and natural language processing, which helps to reduce the number of customer service enquiries and increase customer satisfaction.',
    info2:
      'The chatbot managed to automate 50% of the tasks that were previously done by the customer service team. This includes tasks such as asking for a quotation, retrieving manuals, checking specific product information, and more.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cryptotrading.png',
    title: 'Crypto Trading Bot',
    info: 'Crypto Trading Bot was a trading bot designed to trade cryptocurrencies on the Binance and Luno exchanges. The bot was designed to look for arbritrage opportunities between the two exchanges and execute trades accordingly.',
    info2:
      'The bot was designed using Python and the Binance and Luno APIs. The bot not only reduced the time and stress of manually trading cryptocurrencies, but also managed be profitable in the long run.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'augsburger102.png',
    title: 'Augsburger102',
    info: 'Augsburger102 is a location-based Augmented Reality game for young travellers that aims to provide fun experience walking around the city of Augsburg. It takes user to spots that are not-so-popular and lets them perform interactions related to local traditions with phone movements.',
    info2:
      'The application was built using Unity and the image recognition of locations was done using the Vuforia Engine.',
    url: 'https://www.youtube.com/watch?v=xx4Fgnshu1Y',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'arishwinkishaan3@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/arishwin-kishaan-699619149/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/arishwin',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
