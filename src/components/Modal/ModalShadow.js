import React from 'react'
import styled from 'styled-components'
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

const ModalShadow = ({estado1, cambiarEstado1})=>{
    return(
        <>
        {estado1 &&
        <Shadow>
           
        </Shadow>
        }
        </>
    )
}

export default ModalShadow

const Shadow = styled.div`
 position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 7.5rem;
    background: linear-gradient(180deg, transparent, rgba(14, 14, 14, 0.1), #000000);
    z-index: 97;
`;