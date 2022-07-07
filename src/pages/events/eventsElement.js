import styled from "styled-components";

// colour stuff
// @white: #ffffff;
// @lightBG: #dce1df;
// @salmon: #ff6666;

// @teal: #0096a0;
// @tealMid: #0ebac7;
// @tealContrast: #33ffff;
// @tealShade:	#007c85;

// @darkGrey: #4f585e;

export const DCard_Button = styled.button`
  background: #0096a0;
  border-radius: 4px;
  box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.25);
  color: #ffffff;
  display: inline-block;
  padding: 6px 30px 8px;
  position: relative;
  text-decoration: none;
  transition: all 0.1s 0s ease-out;

  &hover {
    background: lighten(#0096a0, 2.5);
    box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
    transform: translateY(-2px);
    transition: all 0.25s 0s ease-out;
  }

  &active {
    background: darken(#0096a0, 2.5);
    box-shadow: 0 1px 0px 0 rgba(255, 255, 255, 0.25);
    transform: translate3d(0, 1px, 0);
    transition: all 0.025s 0s ease-out;
  }
`;

export const DCard = styled.div`
  background: #ffffff;
  display: inline-block;
  margin: 8px;
  max-width: 300px;
  perspective: 1000;
  position: relative;
  text-align: left;
  transition: all 0.3s 0s ease-in;
  width: 300px;
  z-index: 1;
`;
export const DCard_Img=styled.img`
    max-width: 300px;
    height: 0;
    padding-bottom: 75%;
`

export const DCard_Title=styled.div`
    background: #ffffff;
    padding: 6px 15px 10px;
    position: relative;
    z-index: 0;

    &h1{
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.05em;
        margin: 0;
        padding: 0;

        &small{
            display: block;
            font-size: 18px;
            font-weight: 600; 
            letter-spacing:-0.025ch;
        }
    }
`

export const DCard_Description=styled.div`
    padding: 0 15px 10px;
    position: relative;
    font-size: 14px;
`

export const DCard_Flap=styled.div`
    background: darken(#ffffff,15);
    position: absolute;
    width: 100%;
    transform-origin: top;
    transform: rotateX(-90deg);
`

export const DCard_Flap1=styled(DCard_Flap)`
    transition: all 0.3s 0.3s ease-out;
    z-index: -1;
`
export const DCard_Flap2=styled(DCard_Flap)`
    transition: all 0.3s 0.3s ease-out;
    z-index: -2;
`