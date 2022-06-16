import styled from "styled-components";

export const Container = styled.div`
    background: white;
    height:50vh;
    justify-content: center;
`;

export const Intro = styled.div`
    display:flex;
    justify-content: center;
    
    background: green;
    padding: 2% 2% ;
`;

export const Div = styled.div`
    background:blue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    p{
        color: yellow;
        padding: 1% 2%
    }
    
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({bg}) => bg || 'black'};

    h1{
        color: black;
    }
`;

export const StyledButton = styled.nav`
    display:flex;
    margin: 2vw;
    padding: 2% 5%;
    justify-content:center;
    border: solid;
    border-width: 2px;
    border-color: white;
    background-color: orange;
    color:white;
`;

export const HeroImage = styled.img`
    color: brown;
    height:100%;
    width: 375px;
    max-width: 100%;
    background: white;
    margin: 1%;
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({bg}) => bg || 'black'};
    padding: 20px 20px;

    div{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        width: 100%;
        padding: 10px 50px;
    }
    h1{
        padding-left: 10px;
    }
    p{
        padding: 10px 0px;
    }
`

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    background-color:${({bg}) => bg || 'black'};;
    color: ${({color}) => color || 'orange'};
    padding: 12px 50px;

    &:hover{
        opacity:0.9;
        transform: scale(0.98)
    }
`