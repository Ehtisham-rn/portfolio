import React from "react";
import { Code as CodeIcon, Language as LanguageIcon } from '@mui/icons-material'; // Importing Material UI icons
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "Git",
  "HTML5",
  "CSS3",
  "SASS",
  "Postman",
  "Material-UI",
  "Bootstrap",
  "Node.js",
  "Express",
  "Tailwind CSS"
];

const labelsSecond = [
  "WordPress",
  "Advanced Custom Fields (ACF)",
  "Elementor",
  "WPBakery",
  "Avada",
  "Yoast SEO",
  "WooCommerce",
  "Slider Revolution",
  "Contact Form 7",
  "Theme Customization",
  "Custom Post Types",
  "WordPress REST API",
  "Rank Math SEO",
  "W3 Total Cache",
  "All-in-One WP Migration"
];

const labelsThird = [
  "WordPress",
  "Advanced Custom Fields (ACF)",
  "Elementor",
  "WPBakery",
  "Avada",
  "Yoast SEO",
  "WooCommerce",
  "Slider Revolution",
  "Contact Form 7",
  "Theme Customization",
  "Custom Post Types",
  "WordPress REST API",
  "Rank Math SEO",
  "W3 Total Cache",
  "All-in-One WP Migration"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <CodeIcon style={{ fontSize: 50 }} /> {/* Material UI Code icon */}
            <h3>Full Stack Web Development</h3>
            <p>
              I have built a diverse array of web applications from scratch using modern technologies such as React and Next.js. I possess a strong proficiency in the Software Development Life Cycle (SDLC) process and excel in both frontend and backend development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <LanguageIcon style={{ fontSize: 50 }} /> {/* Material UI WordPress icon */}
            <h3>WordPress Developer</h3>
            <p>
              Experienced in building dynamic WordPress websites using Advanced Custom Fields (ACF), Elementor, WPBakery, and Avada, with expertise in frontend and backend development and a solid grasp of the SDLC process.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* Uncomment this block if you want to display it later
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x"/>
            <h3>GenAI & LLM</h3>
            <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
