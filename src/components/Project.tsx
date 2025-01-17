import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.applyupp.com/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.applyupp.com/" target="_blank" rel="noreferrer"><h2>ApplyUpp</h2></a>
                <p>ApplyUpp is a modern application platform built with React and Material-UI for a responsive and dynamic frontend, and Laravel for a secure and scalable backend. It streamlines processes with an intuitive interface and efficient functionality.</p>
            </div>
            <div className="project">
                <a href="https://thesimsschool.com/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://thesimsschool.com/" target="_blank" rel="noreferrer"><h2>Sajid Ideal Model High School</h2></a>
                <p>Sajid Ideal Model High School website was developed using WordPress and Elementor, featuring a clean, responsive design with interactive layouts to showcase the school's offerings and updates effectively.</p>
            </div>
            <div className="project">
                <a href="https://travelseen.co.uk/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://travelseen.co.uk/" target="_blank" rel="noreferrer"><h2>Travel Seen</h2></a>
                <p>Travel Seen is a dynamic travel platform built with WordPress, utilizing ACF for custom fields and Bootstrap for responsive, modern layouts, delivering an engaging and customizable user experience.</p>
            </div>
            <div className="project">
                <a href="https://christmasfair.ca/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://christmasfair.ca/" target="_blank" rel="noreferrer"><h2>Chrsitmas Fair</h2></a>
                <p>Christmas Fair is a festive event website built with WordPress and WP Bakery, featuring visually engaging layouts and customizable sections to highlight event details and vendor information.</p>
            </div>
            <div className="project">
                <a href="https://thecircleof.co.uk/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://thecircleof.co.uk/" target="_blank" rel="noreferrer"><h2>Circle of Trust</h2></a>
                <p>Circle of Trust is a secure and interactive platform built with Next.js for a fast, responsive frontend and Laravel for a robust, scalable backend, ensuring seamless user experience and data management.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Halal Cruises</h2></a>
                <p>Halal Cruises is a mobile app developed with React Native for a seamless cross-platform experience, powered by Firebase for real-time data management and secure backend services.</p>
            </div>
            {/* <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;