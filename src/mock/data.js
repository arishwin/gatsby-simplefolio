import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Arishwin Kishaan | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my webiste', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.dropbox.com/s/aqd68620czxrymx/resume.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bitpredict.jpg',
    title: 'CryptoPredict',
    info: 'CryptoPredict is a prediction model for Bitcoin. This model is created using neural networks and it is done as a challenge to see whether a neural network is able to predict something as volatile as bitcoin.',
    info2:
      "The model performed well and it was able to predict the price of Bitcoin with a low error-rate. However, after some unlikely data points were added to the dataset, the model's performance significantly dropped and was rendered useless. This is a common problem in forecasting and it's also known as ",
    info3: 'https://www.convexresearch.com.br/en/insights/the-turkey-problem-2',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'foodvision.jpg',
    title: 'Food Vision',
    info: 'Food Vision is a computer vision model that is able to classify different kinds of food. This model was build using neural networks in TensorFlow and was done as a challenge to beat DeepFood, a 2016 paper which used a Convuloutional Neural Network that was trained for 2-3 days to achieve 77.4% top-1 accuracy.',
    info2:
      "This model produced better results than the DeepFood paper and took far less time. (this model took around 20 minutes to train while DeepFood's model took around 2-3 days).",
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'medpub.jpeg',
    title: 'MedAbstract',
    info: 'MedAbstract is a neural network model that is designed to read through medical research papers and provide an abstract of the research paper. This model uses natural language processing which helps identify important keywords in the medical papers. The goal of this project was to create something that can help researches to go through medical papers faster and more efficiently.',
    info2:
      'The model created in this project performed well in tests and managed to get an accuracy score of 82.40%.',
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
