import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center; 
  
`;

const Form = styled.div`
  padding: 20px;
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  height: 100px;
  margin-bottom: 10px;
`;

export function Home() {
  return (
    <Container>
      <Form>
        {/* Seu formulário aqui */}
        <form>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" /><br/><br/>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" /><br/><br/>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" /><br/><br/>
          <input type="submit" value="Enviar" />
        </form>
      </Form>
      <Boxes>
        <Box>Conteúdo da primeira caixa</Box>
        <Box>Conteúdo da segunda caixa</Box>
        <Box>Conteúdo da terceira caixa</Box>
        <Box>Conteúdo da quarta caixa</Box>
      </Boxes>
    </Container>
  );
}
