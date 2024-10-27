import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Destaques.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Button from './Button';
import "./AllProjects.css"
import { StateContext } from "../Context/Context";
import { useContext } from "react";
import { useRef } from 'react';


const AllProjects = () => {
    const [destaques, setDestaques] = useState([])
    const [showModal, setShowModal] =useState (false)
    const [position, setPosition] = useState(0)
    const handleModal = (e, positionToSet)=>{
      setShowModal(true)
      setPosition (positionToSet)
      
    } 
    
const getData = async()=>{

    const response = await axios.get("https://projects-database-dsxn.vercel.app/all-projects")
    const data = response.data
    setDestaques(data)
}
useEffect(()=>{
try {
    getData()
} catch (error) {
    console.log(error)
}
}, [])

    useEffect(() => {
        AOS.init({
          duration: 1000, // Duração da animação em milissegundos
          once: true,     // Executa a animação apenas uma vez
        });
      }, []);

      const {curriculoRef,
        aboutRef,
        tecRef,
        habilityRef,
        destaqueRef,
        projectsRef,} = useContext(StateContext)

  return (
    <section className='projetos-box' >
    <h1 ref={projectsRef} className='black'>Todos os projetos</h1>
    <div className="projetos-content container">
        {destaques.map((projeto)=>(
            <div key={projeto.id} data-aos="fade-left" className='projeto-section'>
                <div className="img-projetos">
                    <img src={projeto.mbimg1}  className="image-1" alt="" />
                    <img src={projeto.mbimg2}  className="image-2" alt="" />
                </div>
                <div className="actions">
                  <button><a className='white' href={projeto.code}>Código</a></button>
                  <button><a className='white' href={projeto.deploy}>Deploy</a></button>
                </div>
            </div>
        ))}
    </div>
</section>
  )
}

export default AllProjects
