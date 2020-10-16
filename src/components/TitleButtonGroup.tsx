import React from 'react';
import styled from 'styled-components';
import LeftArrow from './svg-components/LeftArrow';
import Refresh from './svg-components/Refresh';
import RightArrow from './svg-components/RightArrow';
import TitleButton from './TitleButton';

const ButtonGroupContainer = styled.nav`
  width: 88px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 50%;
  left: calc(55px + 9%);

  transform: translate(0, -50%);
`;

const TitleButtonGroup: React.FC = () => {
  return (
    <ButtonGroupContainer>
      <TitleButton>
        <LeftArrow />
      </TitleButton>
      <TitleButton>
        <RightArrow />
      </TitleButton>
      <TitleButton>
        <Refresh />
      </TitleButton>
    </ButtonGroupContainer>
  );
};

export default TitleButtonGroup;
