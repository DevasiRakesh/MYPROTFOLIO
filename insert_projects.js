import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

// Access environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL:", supabaseUrl);
  console.error("Supabase Anon Key:", supabaseKey);
  throw new Error("Supabase URL and Anon Key are required. Check your .env file.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

const projects = [
  {
    Title: 'Carbon Dioxide Footprint Tracker',
    Description: 'Created a CO₂ footprint tracking web app using MERN stack, enabling users to log daily activities and calculate real-time carbon emissions. Engineered detailed data-visualization dashboards with dynamic, auto-updating charts to display weekly and monthly CO₂ emission patterns and helping users clearly track progress. Optimized authentication, API endpoints, MongoDB schemas, boosting overall performance and reducing response 30%.',
    TechStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    Features: ['User authentication', 'Daily activity logging', 'Real-time carbon emissions calculation', 'Data-visualization dashboards', 'Weekly and monthly emission patterns'],
    Img: '', // placeholder
    Link: '', // placeholder
    Github: 'https://github.com/kiranmukkamula' // placeholder, adjust if specific repo
  },
  {
    Title: 'RenewBazaar (Second-hand Goods Marketplace)',
    Description: 'Built a responsive marketplace interface with HTML, Tailwind CSS, and JavaScript, enabling smooth browsing of 1,000+ second-hand product listings. Developed product listing, cart & checkout, house booking, and user dashboard modules using PHP, MySQL, XAMPP, improving overall platform performance by 35%. Implemented secure authentication, optimized CRUD operations, and CDN-backed payment handling through a PHP–MySQL backend, ensuring faster and reliable user transactions.',
    TechStack: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
    Features: ['Responsive marketplace interface', 'Product listing', 'Cart & checkout', 'House booking', 'User dashboard', 'Secure authentication', 'CRUD operations', 'Payment handling'],
    Img: '', // placeholder
    Link: '', // placeholder
    Github: 'https://github.com/kiranmukkamula' // placeholder
  },
  {
    Title: 'Instant Product Review Aggregator',
    Description: 'Crafted a web-based review aggregation platform using HTML, Tailwind CSS, JavaScript that consolidates product reviews, improving user decision-making efficiency by 45%. Integrated the Gemini 2.0 Flash API to generate AI-powered sentiment analysis and summaries, delivering instant insights for faster product comparison. Designed a responsive frontend and implemented LocalStorage-based mocked APIs for real-time data rendering without backend dependency.',
    TechStack: ['HTML', 'Tailwind CSS', 'JavaScript', 'Gemini 2.0 Flash API'],
    Features: ['Review aggregation', 'AI-powered sentiment analysis', 'Summaries', 'Responsive frontend', 'LocalStorage-based mocked APIs'],
    Img: '', // placeholder
    Link: '', // placeholder
    Github: 'https://github.com/kiranmukkamula' // placeholder
  }
];

async function insertProjects() {
  for (const project of projects) {
    const { data, error } = await supabase
      .from('projects')
      .insert([project]);

    if (error) {
      console.error('Error inserting project:', project.Title, error);
    } else {
      console.log('Inserted project:', project.Title);
    }
  }
}

insertProjects();