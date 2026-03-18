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

const certificates = [
  {
    Img: '/Coursera_certificate.pdf'
  },
  {
    Img: '/Coursera_certificate2.pdf'
  },
  {
    Img: '/Coursera_certificate3.pdf'
  },
  {
    Img: '/coursera_computerCommunications.pdf'
  }
];

async function insertCertificates() {
  for (const cert of certificates) {
    const { data, error } = await supabase
      .from('certificates')
      .insert([cert]);

    if (error) {
      console.error('Error inserting certificate:', cert.Img, error);
    } else {
      console.log('Inserted certificate:', cert.Img);
    }
  }
}

insertCertificates();