import styled from 'styled-components';

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
export const Container= styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
`
export const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: row;

  & > div {
    flex: 30;
  }

  @media (max-width:375px}) {
    flex-direction: column;
  }
`