import React from 'react'
import styled from 'styled-components'
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./modal.scss";
const Modal = ({children, estado, cambiarEstado}) => {
    return(
        <>
            {estado &&
            <Overlay>
                <ContenedorModal>
                <Contenido>
                <video src="https://appfiles.metazooie.com/Desert%20Temple/Desktop%202022.02.24%20-%2019.04.05.12_Segment_0_x264.mp4" autoPlay={true} loop /><button className="play">
     <PlayArrow />
     
     <a target="_blank" href="https://sanpatricio.kazooie.io">Enter</a>
   </button>
            <h2>
              Desert Temple
            </h2>
            <p>
            You are on an archeological team that’s racing to find the 
            Temple Treasure before another team of ruthless mercenaries. 
              
            
            </p>
            
            </Contenido>
            <hr></hr>
            <TituloBottom>
            <h2>Info about Desert Temple metaverse</h2>
            </TituloBottom>
                <ContenidoBottom>
                    
                    <p >
            Genre:
              
            
            </p>
            <a >
            Action
            
            </a>
            
                </ContenidoBottom>
                <ContenidoBottom>
                <p>
                Origin:  
            </p>
            <a>
                Metazooie Originals
            </a>
                </ContenidoBottom>
                
               
                    <BotonCerrar onClick={()=> cambiarEstado(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>x
                    </BotonCerrar>
                    {children}
                </ContenedorModal>
                
            </Overlay>
}
        </>
    );
}

export default Modal

const Overlay = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background: rgba(0,0,0,.5);
padding: 40px;
display:flex;
align-items:center;
justify-content: center;
z-index: 98;

`;

const ContenedorModal = styled.div `
width: 720px;
margin-top: 200px;
min-height: 100px;
background: #2b2b2b;
position: relative;
border-radius: 5px;
box-shadow: rgba(100,100,111, 0.2) 0px 7px 27px 0px;
padding: 15px 0px;
z-index: 99999999;


hr{
    width: 580px;
    transform: translate(10%, -100%);
}
@media(max-width:600px) {
    width: 330px;
    margin-top: 400px;
    border-radius:5px;
    hr{
        width: 250px;
    }
    
}
`
const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    margin-bottom: 20px;

    


`
const BotonCerrar = styled.button `
position: absolute;
top:-260px;
right: 20px;
width: 30px;
height: 30px;
border:  solid  .5px #fff   ;

background: rgba(0,0,0,.5);
cursor: pointer;
transition: .3s ease all;
border-radius: 15px;
color: #2b2b2b;
&:hover{
    background: #f2f2f2;
}
svg {
    width: 100%;
    height: 100%;
    
}
@media (max-width: 800px) {
    top:-290px;
}
`;

const Contenido = styled.div `
display:flex;
flex-direction: column;
align-items: flex-start;

width: 720px;

h2{
    margin-left: 24px;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
}

p {
    margin-left: 15px;
    font-size: 16px;
    margin-bottom: 20px;
    word-wrap: normal;
    padding: 12px;
    font-family: 'Inter', sans-serif;
}
video{
    transform: translate(-50%, -149%);
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    
    
margin-bottom: 20px;

}

button{
    position:absolute;
    left: 40px;
    top: -70px;
}

@media(max-width:800px) {
    width: 290px;
    video{
        border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
}
`

const TituloBottom = styled.div `


h2 {
    margin-top: 15px;
    margin-left: 24px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom:20px;
}
`
const ContenidoBottom = styled.div `
display:flex;
flex-direction: row;
align-items: flex-start;
width: 430px;
margin-top: 10px;


p {
    margin-left: 24px;
    font-size: 16px;
    margin-bottom: 10px;
    word-wrap: normal;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
}
a{
    margin-left: 24px;
    font-size: 16px;
    margin-bottom: 2px;
    font-weight: 200;
    font-family: 'Inter', sans-serif;
}

`
