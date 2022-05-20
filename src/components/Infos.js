import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Me from '../assets/Images/Me3.png'

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 65vw;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;

background-repeat: no-repeat;
background-size: 100% 2px;

border-left 2px solid ${props => props.theme.body};
border-right 2px solid ${props => props.theme.text};

z-index: 1;
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic {
    position:absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 60%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.6) !important`};
    font-weight: 300;
}
`

const Infos = () => {
    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hello,</h1>
                    <h3>I'm Fred</h3>
                    <h6>I design and code modern and beautiful websites.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className='pic' src={Me} alt="Profil picture" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Infos