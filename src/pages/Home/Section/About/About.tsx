import { useEffect } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import 'animate.css';
import '../../../../App.css';
import scrollreveal from 'scrollreveal';

const About = () => {
  useEffect(() => {
    scrollreveal().reveal('.Section1', {
      rotate: { x: 0, y: 60, z: 0 },
      duration: 2000
    });
    scrollreveal().reveal('.Section2', {
      rotate: { x: 0, y: 60, z: 0 },
      duration: 2000
    });
  }, []);

  return (
    <div className="about">
      <h2 id='about'>About me</h2>
      <div className="section">
        <section className="Section1">
          <WorkspacePremiumIcon />
          <h4>Experience</h4>
          <p>1+ year</p>
          <p>Frontend Develops</p>
        </section>
        <section className="Section2">
          <SchoolIcon />
          <h4>Education</h4>
          <p>Tecnologo</p>
          <p>Analise de Sistemas</p>
        </section>
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
