import React, { useCallback, useState, useEffect } from "react";
import { StateContext } from "../Context/Context";
import { useContext } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useRef } from 'react';
// Css
import "./Hero.css"
import Button from "./Button";

const Hero = () => {

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

  const email = "gabriell.devs@gmail.com"
  const [showCopied, setShowCopied] = useState(false)

  const copyToClipboard = ()=>{
    navigator.clipboard.writeText(email)
    .then(()=>{
      setShowCopied(true)
      setTimeout(()=>{
        setShowCopied(false)
      }, 3000)

    }).catch((err)=>{
      console.log(err)
    })
  }


  return (
    <section className="hero box">
      <div className="hero container">
<div ref={curriculoRef} className="hero-logo">
          <svg 
            width="70"
            height="78"
            viewBox="0 0 65 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M52.4333 18.0612C52.4333 16.1798 51.6389 15.2015 50.05 15.1263H17.9667C16.8056 15.2015 15.7972 15.8411 14.9416 17.0452C14.0861 18.1742 13.4444 19.5288 13.0167 21.109C12.65 22.6141 12.4667 24.1569 12.4667 25.7372C12.4667 27.2423 12.65 28.785 13.0167 30.3655C13.4444 31.8706 14.0861 33.2252 14.9416 34.4293C15.7972 35.558 16.8056 36.1224 17.9667 36.1224H41.4333C43.1444 36.1224 44.5806 36.875 45.7416 38.3801C46.9638 39.8099 47.575 41.5784 47.575 43.6855C47.575 45.7927 46.9638 47.5612 45.7416 48.9911C44.5806 50.4962 43.1444 51.2487 41.4333 51.2487H18.3333C14.0556 51.1735 10.5111 49.7059 7.7 46.8462C4.95 43.9114 2.96389 40.6378 1.74167 37.0255C0.580556 33.338 0 29.5376 0 25.6243C0 21.8615 0.611111 18.1742 1.83333 14.5619C3.05556 10.8743 5.04162 7.60077 7.79172 4.74107C10.5416 1.80612 14.6056 0.225765 19.9833 0H58.4833C60.1944 0 61.6611 0.714984 62.8833 2.14471C64.1056 3.4993 64.7473 5.23029 64.8083 7.33743V43.0084C64.8083 49.0288 64.1362 54.7105 62.7917 60.0536C61.5695 64.7946 59.5527 68.7832 56.7416 72.0191C53.9917 75.3304 50.4778 77.1365 46.2 77.4375H14.4833C12.8333 77.3622 11.4278 76.6097 10.2667 75.1798C9.16667 73.8253 8.58606 72.132 8.52505 70.1002C8.52505 67.9931 9.07495 66.1869 10.175 64.6818C11.3362 63.1767 12.7722 62.3865 14.4833 62.3112H43.0833C45.4056 62.1607 47.3305 61.0696 48.8584 59.0376C50.3861 57.0058 51.3638 54.6352 51.7917 51.926C52.2194 49.2168 52.4333 45.7175 52.4333 41.4279V18.0612Z"
              fill="url(#paint0_linear_16_47)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_16_47"
                x1="32.4041"
                y1="0"
                x2="32.4041"
                y2="77.4375"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#999999" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="hero-texts">
          <p   data-aos="zoom-in" className="bold gradient card">Olá, meu nome é Gabriel</p>
          <h2 className="gradient">
            DESENVOLVEDOR <br />
          </h2>
          <span   className="gradient bold" ></span>
          <p  data-aos="zoom-in" className="white  ligther">Especialista em desenvolvimento web</p>
        </div>
        <div data-aos="fade-right" className="hero-email">
            <input type="text" disabled value="Gabriell.devs@gmail.com" />
            <input className="copiado" type="button" value={!showCopied ? "Copiar" : "Copiado"} onClick={copyToClipboard} />
        </div>
        <p  className={!showCopied ? "unpacity" : "copiado"} >email copiado para área de trasnferência</p>
       <Button  efeito="fade-left" value="Download Cv" href="../public/curriculo2.0.pdf"/>
      </div>
    </section>
  );
};

export default Hero;
