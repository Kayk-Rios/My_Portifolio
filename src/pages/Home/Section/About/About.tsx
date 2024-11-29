import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import 'animate.css';
import '../../../../App.css';

import { motion } from "framer-motion";

const About = () => {

  return (
    <div className="about">
      <h2 id='about'>About me</h2>
      <div className="flex">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <section className="section-card">
            <WorkspacePremiumIcon />
            <h4>Experience</h4>
            <p>2+ year</p>
            <p>Frontend Developer</p>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <section className="section-card">
            <SchoolIcon />
            <h4>Education</h4>
            <p>Technologist</p>
            <p>Systems Analysis</p>
          </section>
        </motion.div>
      </div>
      <p className='p'>
        Sou um desenvolvedor web apaixonado por criar experiências memoráveis e funcionais.
        Com habilidades sólidas em desenvolvimento front-end, estou me especializando em construir
        sites e aplicações web intuitivos. Minha experiência inclui o uso de tecnologias como React.js,
        JavaScript, TypeScript, Git, HTML5, CSS3.
      </p>
      <hr />
    </div>
  );
}

export default About;
