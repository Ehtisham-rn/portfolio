import React from "react";
import { Work as WorkIcon } from '@mui/icons-material'; // Importing Work icon from Material UI
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Gitwork Ltd</h4>
            <p>
              React Development, TypeScript, JavaScript, Git, HTML5, CSS3, SASS, Postman, Material-UI, Bootstrap, Node.js, Express, Tailwind CSS
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Silver Concepts</h4>
            <p>
              Frontend Development, React Development, TypeScript, JavaScript, Git, HTML5, CSS3, ES6+, Postman, Material-UI, CI/CD, Node.js, Redux, Tailwind CSS
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">React Native Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Gitrex Technologies</h4>
            <p>
              React Native, JavaScript, User Experience, Mobile App Development, Android Development, Redux, React Navigation, Expo, Firebase, Hooks
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Front-end Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Xyron Technologies</h4>
            <p>
              HTML, CSS, Responsive Design, CSS Flexbox, CSS Grid, Basic Animation (CSS)
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
