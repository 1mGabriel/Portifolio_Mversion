import React, { useState ,useEffect} from "react";
import meImagem from "../assets/me-pc.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "./About.css";
import { StateContext } from "../Context/Context";
import { useContext } from "react";
const About = () => {
  const [anime, setAnime] = useState(false);

  const {curriculoRef,
    aboutRef,
    tecRef,
    habilityRef,
    destaqueRef,
    projectsRef,} = useContext(StateContext)
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true,     // Executa a animação apenas uma vez
    });
  }, []);

  return (
    <section className="about box">
      <div className="about-content container">
        <div ref={aboutRef}
        data-aos="fade-down"
          className="flip"
          onMouseEnter={(e) => setAnime(true)}
          onMouseLeave={(e) => setAnime(false)}
        >
          <div className="image-content frente">
            <img src={meImagem} alt="" />
          </div>
          <div className="skills tras">
            <h1 className="gradient">Minhas habilidades</h1>
            <ul>
              <li>
                <h3>JavaScript</h3>
                <span class="barras">
                  <span class={!anime ? "any" : "javascript"}></span>
                </span>
              </li>

              <li>
                <h3>Css</h3>
                <span class="barras">
                  <span class={!anime ? "any" : "css"}></span>
                </span>
              </li>

              <li>
                <h3>Html</h3>
                <span class="barras">
                  <span class={!anime ? "any" : "html"}></span>
                </span>
              </li>
              <li>
                <h3>React</h3>
                <span class="barras">
                  <span class={!anime ? "any" : "react"}></span>
                </span>
              </li>
              <li>
                <h3>Node</h3>
                <span class="barras">
                  <span class={!anime ? "any" : "node"}></span>
                </span>
              </li>
              <li>
                <h3>Database</h3>
                <span class="barras">
                  <span class={!anime ? "any" : "database"}></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div data-aos="zoom-in" className="about-text-content">
          <p>
            Prazer, meu nome é Gabriel Pereira, moro em uma cidade do interior
            de São Paulo, sempre fui apaixonado por tecnologia e arte, então a
            partir dos meus 20 anos venho estudando e me aprofundando na área de
            desenvolvimento gráfico e web. Formando em Analise e desenvolvimento
            de sistemas, venho ao longo dos meus estudos criando projetos
            Front e Back-end com uso das melhores ferramentas do mercado atual de
            tecnologia. Fazendo bom uso das minhas competências pessoais e
            profissionais
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
