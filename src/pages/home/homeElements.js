import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    background-color:${({bg}) => bg || 'black'};
    color: ${({color}) => color || 'orange'};
    padding: 12px 50px;

    &:hover{
        opacity:0.9;
        transform: scale(0.98)
    }
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({bg}) => bg || 'black'};

    div{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        width: 100%;
        padding: 50px 50px;
    }
    h1{
        padding-left: 10px;
    }
    p{
        padding: 10px 0px;
    }
`

export const Image = styled.image`
  display:flex;
  flex-wrap: wrap;
  width:80%;
  max-width:100%
`
