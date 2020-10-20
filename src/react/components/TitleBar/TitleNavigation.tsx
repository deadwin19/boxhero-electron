import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TitleBarNavStat } from '../../../@types/titlebar';
import { ipcRenderer, viewNavigationMethods } from '../../fromElectron';
import LeftArrow from '../svg-components/LeftArrow';
import Refresh from '../svg-components/Refresh';
import RightArrow from '../svg-components/RightArrow';
import NavButton from './Buttons/NavButton';
import ButtonGroup from './Containers/ButtonGroup';

const TitleNavigationButtonGroup = styled(ButtonGroup)`
  width: 88px;
  left: calc(55px + 9%);
`;

const initNavState: TitleBarNavStat = {
  canGoBack: false,
  canGoForward: false,
};

const TitleNavigation: React.FC = () => {
  const [{ canGoBack, canGoForward }, setNavState] = useState(initNavState);

  useEffect(() => {
    const listener = (_: any, newNavStat: TitleBarNavStat) => {
      setNavState(newNavStat);
    };

    ipcRenderer.on('sync-nav-stat', listener);

    return () => {
      ipcRenderer.off('sync-nav-stat', listener);
    };
  }, [setNavState]);

  const { goBack, goForward, refresh } = viewNavigationMethods;

  return (
    <TitleNavigationButtonGroup>
      <NavButton Icon={LeftArrow} onClick={goBack} isActive={canGoBack} />
      <NavButton
        Icon={RightArrow}
        onClick={goForward}
        isActive={canGoForward}
      />
      <NavButton Icon={Refresh} onClick={refresh} />
    </TitleNavigationButtonGroup>
  );
};

export default TitleNavigation;
