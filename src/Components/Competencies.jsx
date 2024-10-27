import React, {useEffect} from "react";
import Tilt from "react-vanilla-tilt";
import "./Competencies.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { StateContext } from "../Context/Context";
import { useContext } from "react";
import { useRef } from 'react';
const Competencies = () => {
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
    <section className="competencies box">
        <div className="competencies-content container">
            
        <Tilt   style={{background: "linear-gradient(to bottom, #222222, #010101)", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", borderRadius: "11px", height: "300px"}} options={{ scale: 2, max: 25,  "max-glare": 1}}>
            <h1 className="gradient">WEB</h1>
            <p className="white">Domínio das principais ferramentas e frame-works para desenvolvimento web</p>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M51.1875 26C51.1875 32.6801 48.5338 39.0867 43.8103 43.8103C39.0867 48.5338 32.6801 51.1875 26 51.1875C19.3199 51.1875 12.9133 48.5338 8.18975 43.8103C3.46618 39.0867 0.8125 32.6801 0.8125 26C0.8125 19.3199 3.46618 12.9133 8.18975 8.18975C12.9133 3.46618 19.3199 0.8125 26 0.8125C32.6801 0.8125 39.0867 3.46618 43.8103 8.18975C48.5338 12.9133 51.1875 19.3199 51.1875 26Z" stroke="#8E8E8E" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.6875 35.6875H47.3125M4.6875 16.3125H47.3125M26 0.8125C32.4712 8.5625 35.6875 16.9713 35.6875 26C35.6875 35.0287 32.4712 43.4375 26 51.1875C19.5288 43.4375 16.3125 35.0287 16.3125 26C16.4056 16.712 19.8452 7.76907 26 0.8125Z" stroke="#8E8E8E" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


      </Tilt>
      <Tilt    style={{background: "linear-gradient(to bottom, #FFFFFF, #5B5A5A)", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", borderRadius: "11px", height: "300px"}} options={{ scale: 2, max: 25,  "max-glare": 1}}>
      <svg width="177" height="170" viewBox="0 0 177 170" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_81_2)">
<path d="M17.2403 141.667C26.7569 141.667 34.4805 132.243 34.4805 120.631V99.5961H17.2403C7.72364 99.5961 0 109.02 0 120.631C0 132.243 7.72364 141.667 17.2403 141.667Z" fill="#0ACF83"/>
<path d="M0 78.5606C0 66.9491 7.72364 57.5253 17.2403 57.5253H34.4805V99.596H17.2403C7.72364 99.596 0 90.1721 0 78.5606Z" fill="#A259FF"/>
<path d="M0 36.4899C0 24.8784 7.72364 15.4546 17.2403 15.4546H34.4805V57.5253H17.2403C7.72364 57.5253 0 48.1015 0 36.4899Z" fill="#F24E1E"/>
<path d="M34.4805 15.4546H51.7208C61.2374 15.4546 68.961 24.8784 68.961 36.4899C68.961 48.1015 61.2374 57.5253 51.7208 57.5253H34.4805V15.4546Z" fill="#FF7262"/>
<path d="M68.961 78.5606C68.961 90.1721 61.2374 99.596 51.7208 99.596C42.2042 99.596 34.4805 90.1721 34.4805 78.5606C34.4805 66.9491 42.2042 57.5253 51.7208 57.5253C61.2374 57.5253 68.961 66.9491 68.961 78.5606Z" fill="#1ABCFE"/>
</g>
<g clip-path="url(#clip1_81_2)">
<path d="M98.1978 0.708374H129.374C134.101 0.708374 137.922 5.19434 137.922 10.7432V45.9235C137.922 51.4724 134.101 55.9584 129.374 55.9584H98.1978C93.4708 55.9584 89.6494 51.4724 89.6494 45.9235V10.7432C89.6494 5.19434 93.4708 0.708374 98.1978 0.708374Z" fill="#001E36"/>
<path d="M106.947 14.7568C106.344 14.7568 105.74 14.7568 105.117 14.7807C104.493 14.8042 103.91 14.8042 103.367 14.8281C102.824 14.8516 102.321 14.8516 101.838 14.875C101.375 14.8985 101.054 14.8985 100.712 14.8985C100.571 14.8985 100.511 14.9928 100.511 15.1584V39.4542C100.511 39.6667 100.591 39.7614 100.752 39.7614H104.654C104.795 39.7375 104.896 39.5959 104.875 39.4307V31.8516C105.257 31.8516 105.539 31.8516 105.74 31.875C105.941 31.8985 106.263 31.8985 106.746 31.8985C108.395 31.8985 109.904 31.686 111.271 31.0959C112.579 30.5292 113.705 29.5375 114.51 28.2152C115.314 26.8929 115.717 25.2166 115.717 23.186C115.717 22.1235 115.556 21.1084 115.254 20.1167C114.935 19.1064 114.434 18.1885 113.786 17.425C113.021 16.5527 112.1 15.8913 111.09 15.4886C109.964 14.9928 108.596 14.7568 106.947 14.7568ZM107.396 19.4075C108.113 19.4234 108.81 19.5704 109.461 19.8803C110.045 20.1402 110.527 20.6125 110.869 21.2261C111.19 21.8612 111.351 22.5901 111.332 23.3281C111.332 24.3667 111.131 25.1698 110.708 25.7599C110.266 26.35 109.703 26.7989 109.059 27.0114C108.315 27.2948 107.53 27.436 106.746 27.436H105.68C105.438 27.436 105.177 27.4125 104.896 27.3891V19.4557C105.036 19.4318 105.318 19.4084 105.72 19.4323C106.102 19.4084 106.565 19.4084 107.088 19.4084C107.191 19.4054 107.294 19.4051 107.396 19.4075ZM124.265 20.613C122.837 20.613 121.65 20.8724 120.705 21.4391C119.84 21.9114 119.096 22.6667 118.593 23.611C118.151 24.4849 117.909 25.4527 117.909 26.4682C117.892 27.3035 118.051 28.1308 118.372 28.8766C118.748 29.6706 119.27 30.3562 119.901 30.8834C120.785 31.5938 121.745 32.1653 122.757 32.5834C123.742 33.0318 124.406 33.386 124.728 33.6928C125.049 34 125.211 34.3068 125.211 34.6375C125.211 35.0625 124.989 35.4641 124.667 35.6292C124.305 35.8417 123.762 35.9599 122.998 35.9599C122.193 35.9599 121.389 35.8417 120.624 35.6057C119.746 35.3756 118.905 34.9853 118.13 34.4489C118.07 34.4016 118.01 34.3781 117.949 34.4255C117.889 34.4724 117.869 34.5667 117.869 34.6375V38.7459C117.849 38.9349 117.949 39.1 118.09 39.1943C118.743 39.552 119.432 39.8062 120.142 39.95C121.047 40.1625 121.952 40.2568 122.877 40.2568C124.325 40.2568 125.532 39.9974 126.518 39.5016C127.423 39.0766 128.207 38.3448 128.77 37.4C129.298 36.4713 129.571 35.3759 129.555 34.2599C129.575 33.4169 129.416 32.5812 129.092 31.8281C128.71 31.025 128.167 30.3641 127.503 29.8682C126.532 29.1524 125.492 28.5738 124.406 28.1443C123.92 27.9086 123.444 27.6486 122.978 27.3652C122.716 27.2 122.475 26.9875 122.294 26.7277C122.173 26.5386 122.093 26.3266 122.093 26.1141C122.093 25.9016 122.153 25.6656 122.253 25.4766C122.394 25.2406 122.615 25.075 122.877 25.0042C123.259 24.8864 123.682 24.8152 124.084 24.8386C124.848 24.8386 125.592 24.9568 126.337 25.1459C127.021 25.311 127.664 25.5709 128.268 25.9489C128.348 25.9959 128.449 25.9959 128.63 25.9489C128.661 25.9216 128.687 25.8859 128.704 25.8449C128.721 25.8038 128.73 25.7585 128.73 25.7125V21.8641C128.73 21.7693 128.71 21.675 128.69 21.5807C128.65 21.4864 128.569 21.3917 128.489 21.3682C127.934 21.1021 127.353 20.9196 126.759 20.825C125.933 20.6839 125.1 20.6133 124.265 20.613Z" fill="#31A8FF"/>
</g>
<g clip-path="url(#clip2_81_2)">
<path d="M135.107 77.3829C134.812 77.4198 133.889 77.5495 133.075 77.6632C129.794 78.1073 126.073 79.2765 122.807 80.9087C110.989 86.7672 102.095 99.6208 99.641 114.364C99.0634 117.87 98.9229 119.593 98.9229 123.636C98.9229 128.849 99.3595 132.445 100.517 136.991C104.299 151.863 114.147 163.528 126.715 168.033C130.497 169.389 133.545 169.907 137.922 169.907C142.315 169.907 145.347 169.389 149.178 168.016C161.713 163.528 171.545 151.844 175.342 136.933C176.485 132.445 176.921 128.829 176.921 123.636C176.921 121.429 176.828 118.908 176.719 117.979C175.452 107.261 171.731 98.2472 165.528 90.8841C159.336 83.5775 151.77 79.1461 142.923 77.6437C141.704 77.4394 136.061 77.2525 135.107 77.3829ZM122.368 106.592C123.199 106.889 123.587 107.167 124.15 107.834C125.245 109.153 125.495 109.875 125.495 111.859C125.495 113.344 125.448 113.622 125.073 114.4C124.353 115.846 122.681 117.182 121.525 117.218C120.711 117.238 120.744 116.811 121.635 115.699C122.822 114.233 122.994 113.678 122.994 111.488C122.979 109.375 122.76 108.652 121.932 108.058C121.243 107.558 120.494 107.595 119.399 108.205C116.554 109.821 113.475 115.198 112.272 120.708C110.677 128.051 113.506 133.928 118.164 132.927C119.523 132.629 122.087 131.073 123.199 129.848C124.12 128.849 124.12 128.829 124.212 127.587C124.418 124.989 125.963 122.394 128.029 121.189C128.98 120.631 129.216 120.577 130.497 120.577C131.716 120.577 131.997 120.651 132.592 121.039C134.483 122.321 134.092 125.305 132.045 125.305C130.858 125.305 130.247 124.581 131.108 124.194C131.952 123.823 131.637 122.431 130.655 122.117C129.498 121.763 128.184 122.691 127.356 124.471C126.354 126.623 126.309 129.183 127.261 130.349C128.184 131.517 129.34 130.592 130.232 127.937C130.7 126.585 131.372 125.86 132.155 125.86C132.842 125.86 132.968 126.362 132.67 127.884C132.231 130.238 132.529 130.85 133.765 130.128C134.17 129.904 134.843 129.387 135.248 129.016L136.014 128.292L136.532 125.082C137.095 121.486 137.311 121.002 138.469 120.744C139.58 120.501 139.83 121.152 139.422 123.209L139.202 124.361L140.016 123.376C141.939 121.039 144.3 119.89 145.113 120.855C145.55 121.373 145.502 122.023 144.877 124.321C144.581 125.416 144.173 127.143 143.988 128.124C143.706 129.607 143.689 129.961 143.847 130.202C144.348 130.906 145.879 130.182 147.239 128.605L148.035 127.68L148.131 125.62C148.223 123.246 148.41 122.394 148.941 121.633C149.442 120.928 150.349 120.41 150.833 120.558C151.317 120.708 151.317 121.262 150.881 122.895C150.27 125.139 150.334 130.312 150.959 130.312C151.21 130.312 152.49 128.718 153.304 127.383L153.912 126.398L153.428 125.807C152.584 124.749 152.381 124.064 152.381 122.337C152.381 121.078 152.46 120.614 152.724 120C153.163 119.038 153.85 118.334 154.663 118.053C155.522 117.739 156.585 118.257 157.022 119.185C157.461 120.13 157.352 122.244 156.788 123.693L156.383 124.748H156.929C157.68 124.748 157.976 124.527 159.322 123.025C160.025 122.227 160.838 121.54 161.446 121.206C163.839 119.873 166.654 120.558 167.121 122.598C167.511 124.23 166.654 125.379 165.151 125.249C164.073 125.156 163.87 124.822 164.495 124.194C165.62 123.079 164.495 121.653 162.885 122.171C162.009 122.45 161.024 123.617 160.51 124.972C159.477 127.68 160.025 130.869 161.509 130.869C162.103 130.869 163.152 129.477 163.557 128.124C164.041 126.565 165.057 125.584 165.823 125.936C166.246 126.121 166.277 126.622 166.012 128.198C165.714 129.924 165.668 131.538 165.902 132.279C165.995 132.556 166.277 133.076 166.544 133.428C167.042 134.095 167.059 134.336 166.636 134.653C166.434 134.819 166.166 134.746 165.511 134.32C164.604 133.762 163.822 132.76 163.541 131.815L163.369 131.26L162.744 131.815C162.384 132.112 161.821 132.445 161.494 132.556C160.196 132.963 158.601 131.908 157.852 130.128C157.554 129.44 157.461 127.42 157.68 126.641C157.805 126.214 157.805 126.214 157.304 126.511C157.039 126.678 156.476 126.862 156.04 126.919C155.319 127.013 155.209 127.106 154.492 128.181C153.476 129.68 151.677 131.704 150.942 132.132C149.38 133.057 148.865 132.797 148.457 130.886L148.176 129.607L147.503 130.312C146.644 131.203 144.925 132.279 143.939 132.539C143.002 132.779 142.001 132.426 141.595 131.684C140.987 130.572 141.19 128.218 142.158 125.045C142.876 122.691 142.361 122.655 140.548 124.898C139.203 126.585 138.625 127.79 138.251 129.664C137.86 131.611 137.39 132.315 136.329 132.612C135.687 132.779 135.389 132.315 135.516 131.297L135.609 130.479L135.014 130.963C134.17 131.648 133.106 132.279 132.372 132.519C131.637 132.76 130.669 132.502 130.435 132.018C130.013 131.167 130.013 131.167 129.357 131.778C127.933 133.15 125.901 132.76 124.871 130.943L124.541 130.369L123.511 131.5C120.539 134.727 116.821 136.173 114.069 135.171C110.567 133.912 108.63 130.349 108.661 125.213C108.676 120.057 110.598 114.624 113.835 110.6C115.664 108.336 117.384 107 119.135 106.499C120.399 106.128 121.167 106.147 122.368 106.592Z" fill="#00C4CC"/>
<path d="M154.053 119.779C153.709 120.187 153.835 121.819 154.273 122.858C154.492 123.396 154.726 123.823 154.804 123.823C154.866 123.823 155.006 123.396 155.116 122.875C155.507 120.948 154.804 118.888 154.053 119.779Z" fill="#00C4CC"/>
</g>
<defs>
<clipPath id="clip0_81_2">
<rect width="68.961" height="126.212" fill="white" transform="translate(0 15.4546)"/>
</clipPath>
<clipPath id="clip1_81_2">
<rect width="48.2727" height="56.6667" fill="white" transform="translate(89.6494)"/>
</clipPath>
<clipPath id="clip2_81_2">
<rect width="78.1558" height="92.7273" fill="white" transform="translate(98.8442 77.2727)"/>
</clipPath>
</defs>
</svg>
<p ref={habilityRef}>Domínio de ferramentas para design e manipulação de imagens para prototipagens</p>
      </Tilt>
      <Tilt   style={{background: "linear-gradient(to bottom, #222222, #010101)", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", borderRadius: "11px", height: "300px"}} options={{ scale: 2, max: 25,  "max-glare": 1}}>
            <h1 className="gradient" style={{textAlign:"center"}}>API E <br /> DADOS</h1>
            <p className="white">Requisições e criações de Api´s RestFul e integrações com banco de dados</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_17_38)">
<path d="M12 0C6.475 0 2 2.38667 2 5.33333V18.6667C2 21.6133 6.4875 24 12 24C17.5125 24 22 21.6133 22 18.6667V5.33333C22 2.38667 17.525 0 12 0ZM19.5 18.6667C19.5 19.3333 16.8375 21.3333 12 21.3333C7.1625 21.3333 4.5 19.3333 4.5 18.6667V15.6933C6.5125 16.7333 9.15 17.3333 12 17.3333C14.85 17.3333 17.4875 16.7333 19.5 15.6933V18.6667ZM19.5 12.6C17.875 13.8667 15.025 14.6667 12 14.6667C8.975 14.6667 6.125 13.8667 4.5 12.6V8.85333C6.3375 9.96 9.0125 10.6667 12 10.6667C14.9875 10.6667 17.6625 9.96 19.5 8.85333V12.6ZM12 8C7.1625 8 4.5 6 4.5 5.33333C4.5 4.66667 7.1625 2.66667 12 2.66667C16.8375 2.66667 19.5 4.66667 19.5 5.33333C19.5 6 16.8375 8 12 8Z" fill="#8E8E8E"/>
</g>
<defs>
<clipPath id="clip0_17_38">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>


      </Tilt>
        </div>
    </section>
  );
};

export default Competencies;
