import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import "./Destaques.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Background from "../assets/Background.png";
import Button from './Button';
import { StateContext } from "../Context/Context";
import { useContext } from "react";

const Destaques = () => {
  const {curriculoRef,
    aboutRef,
    tecRef,
    habilityRef,
    destaqueRef,
    projectsRef,} = useContext(StateContext)
  const modalRef = useRef(null);
  const [destaques, setDestaques] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [position, setPosition] = useState(0);

  const handleModal = (e, positionToSet) => {
    setShowModal(true);
    setPosition(positionToSet);
  };

  useEffect(() => {
    if (showModal && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: "center" });
    }
  }, [showModal]);

  const getData = async () => {
    try {
      const response = await axios.get("https://projects-database-dsxn.vercel.app/destaques");
      setDestaques(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true,     // Executa a animação apenas uma vez
    });
  }, []);

  return (
    <section className='destaques-box' style={{ backgroundImage: `url(${Background})` }}>
      <h1 ref={destaqueRef} className='white'>Destaques</h1>
      <div  className="destaques-content container">
        {destaques.map((project, index) => (
          <div 
            key={project.id} 
            data-aos="zoom-in"  
            className="destaque-section" 
            onMouseEnter={() => setBorderAnime && setBorderAnime(true)}
            onMouseLeave={() => setBorderAnime && setBorderAnime(false)} 
            onClick={(e) => handleModal(e, index)}
          >
            <img className='img-1' src={project.mbimg1} alt="" />
            <img className='img-2' src={project.mbimg2} alt="" />
          </div>
        ))}

        {/* Modal */}
        {showModal && (
          <div className="layer-destaque-blur">
            <div className="description-tool">
              <span className="close-btn" onClick={() => setShowModal(false)}>X</span>
              <div ref={modalRef} className="description-tool-content container">
                <h1 className="white">{destaques[position].name}</h1>
                <span>{destaques[position].icon2}</span>
                <p className="ligther white">{destaques[position].description}</p>
                <div className="domain">
                  <h3 className="white">Tecnologias:</h3>
                  <ul className='tecs'>
                    {destaques[position].tecnologies.map((tec, idx) => (
                      <li key={idx} className='white'>{tec}</li>
                    ))}
                  </ul>
                  <div className="buttons">
                    <Button value="Deploy" efeito="zoom-in" href={destaques[position].deploy} />
                    <Button value="Código" efeito="zoom-in" href={destaques[position].code} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Destaques;
