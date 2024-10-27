import React, { useRef, useEffect } from "react";
import "./Button.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Button = ({ value, efeito, pdfFileName }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;
    btn.style.setProperty("--eixoX", `${x}px`);
    btn.style.setProperty("--eixoY", `${y}px`);
  };

  const handleDownload = () => {
    // Simplificando o caminho do PDF
    const pdfUrl = `/${pdfFileName}`; // Localização esperada na pasta public
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', pdfFileName); // Para forçar o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      data-aos={efeito}
      className="button" 
      ref={btnRef} 
      onMouseMove={handleMouseMove} 
      onClick={handleDownload}
    >
      <span>{value}</span>
    </button>
  );
};

export default Button;
