import loginImage from './components/Img/login-1.jpg'; // Impor gambar

const header = {
  homepage: 'https://example.com',
  title: 'Portfolio',
};

const about = {
  name: 'Muhamad Aliyudin',
  role: 'Front End Developer.',
  description: 'I craft responsive and visually engaging web applications that blend functionality with exceptional user experiences. Combining creativity and technical expertise, I transform ideas into intuitive interfaces that inspire, connect, and deliver value in today’s digital world.',
  social: {
    linkedin: 'https://linkedin.com/in/yourprofile', // Ganti dengan profil LinkedIn Anda
    github: 'https://github.com/Alydn62', // Ganti dengan profil GitHub Anda
  },
};

const projects = [
  {
    name: 'Form Login',
    description: 'The image shows a minimalist login interface with two input fields for username and password, along with a Login button. The design is modern with a gradient purple background.',
    stack: ['CSS 71.3%', 'HTML 28.7%'],
    sourceCode: 'https://github.com/Alydn62/Login_Pemrograman' ,
    livePreview: 'https://login-pemrograman.vercel.app/',
    image: loginImage,
  },
  {
    name: 'Project 2',
    description: 'Another amazing project description goes here.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
    image: loginImage,
  },
];

const skills = [
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind',
  'JavaScript',
  'React',
  'Node.js',
  'Git',
  'Responsive Design',
];

const contact = {
  email: 'muhamadaliyudin@example.com',
};

const certificates = [
  {
    name: 'JavaScript Developer Certification',
    organization: 'FreeCodeCamp',
    date: 'January 2023',
    description:
      'Certified JavaScript developer with hands-on experience in building dynamic web applications.',
    link: 'https://example.com/certificate1',
  },
  {
    name: 'React Developer Certification',
    organization: 'Coursera',
    date: 'March 2023',
    description:
      'Demonstrated expertise in building scalable React applications.',
    link: 'https://example.com/certificate2',
  },
];

// Pastikan semua variabel diekspor
export { header, about, projects, skills, contact, certificates };
