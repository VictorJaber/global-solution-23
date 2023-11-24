import styled from "styled-components";

export const Main = styled.div`
        
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    font-family: 'Roboto', sans-serif;
        
    
    & .card{
        width: 24rem;
        height: 36rem;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        position: relative;
        color: rgb(240, 240, 240);
        box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
    }

    & img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.9;
        transition: opacity .2s ease-out;
      }
    
    & h2 {
        position: absolute;
        inset: auto auto 30px 30px;
        margin: 0;
        transition: inset .3s .3s ease-out;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: normal;
        text-transform: uppercase;
      }

    & h2 {
      position: absolute;
      inset: auto auto 30px 30px;
      margin: 0;
      transition: inset .3s .3s ease-out;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: normal;
      text-transform: uppercase;
    }

    & h4 {
      position: absolute;
      inset: auto auto 30px 30px;
      margin: 0;
      transition: inset .3s .3s ease-out;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: normal;
      text-transform: uppercase;
    }
      
    & p, h4, h3, h6{
        position: absolute;
        opacity: 0;
        max-width: 80%;
        transition: opacity .3s ease-out;
      }
      
    & p {
        inset: 400px auto 130px 30px;
      }
      
    & h4 {
        inset: auto auto 180px 30px;
        text-decoration: none;
      }

    & h3 {
      inset: auto auto 90px 30px;
      text-decoration: none;
    }
    
    & h6 {
      inset: 490px auto 70px 30px;
    }

      
      &:hover h2 {
        inset: auto auto 220px 30px;
        transition: inset .3s ease-out;
      }
      
      &:hover p, &:hover h4 , &:hover h3, &:hover h6{
        opacity: 1;
        transition: opacity .5s .1s ease-in;
      }
      
      &:hover img {
        transition: opacity .3s ease-in;
        opacity: 1;
      }
    
    }
    
    .material-symbols-outlined {
      vertical-align: middle;
    }
    
`

export const Line = styled.div`
    
`