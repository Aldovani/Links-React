import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 
 
 *{
   margin:0 ;
   padding: 0;
   box-sizing: border-box;
 }
 body{
  min-height: 100vh;
   display: flex;
  align-items: center;
  justify-content: center;
   
   background: ${props => props.theme.colors.background};
 }

 ::-webkit-scrollbar{
width: 8px;
height: 8px;
}
::-webkit-scrollbar-thumb{
background: #9D8EFA;
border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover{
background: #5E16F0;
}
::-webkit-scrollbar-track{
background: transparent;

}
 
 #root{
   height: 100%;
   flex-direction: column;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 3rem;
   padding: 3rem;
 }
 `
 