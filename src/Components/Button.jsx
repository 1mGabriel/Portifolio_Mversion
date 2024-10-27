import React, { useRef, useEffect } from "react";
import "./Button.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Button = ({ value , action, efeito, href}) => {
  const btnRef = useRef(null); // Criar a ref para o botão
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true,     // Executa a animação apenas uma vez
    });
  }, []);
  const handleMouseMove = (e) => {
    const btn = btnRef.current; // Referência ao botão
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--eixoX", `${x}px`);
    btn.style.setProperty("--eixoY", `${y}px`);
  };

  return (
    <a data-aos={efeito}  href={href} target="_blank" className="button" ref={btnRef} onMouseMove={handleMouseMove} onClick={action} download>
      <span>{value}</span>
    </a>
  );
};

export default Button;
