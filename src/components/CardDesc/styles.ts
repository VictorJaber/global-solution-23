import styled from "styled-components";

export const Main = styled.div`
    color: rgba(0,0,0,0.87)
    border: 2px;
    padding: 50px;
    position: relative;
    margin: 50px 120px 0px 70px;
    background-color: #1976d2;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s;
    cursor: pointer;
    color: white;
  
    &:hover {
      transform: scale(1.1);
  
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // background-color: rgba(0, 0, 0, 0.2);
        z-index: 1;
    
`