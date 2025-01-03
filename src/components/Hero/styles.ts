import styled from 'styled-components'

export const HeroContainer = styled.div`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    /* Add mobile styles here */
  }
`

export const ContentContainer = styled.div`
  position: relative;
  color: #eee;
`

export const Title = styled.h1`
  font-family: Gloock, serif;
  font-size: 48px;
`
