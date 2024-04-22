// Import the necessary modules using ESM syntax
import path from 'path';
import { fileURLToPath } from 'url';

// Create the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration options
  // For loggin stuff ... get rid of for production
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  // Sass stuff
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default nextConfig;
