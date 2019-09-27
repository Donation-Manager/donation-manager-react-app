import React from 'react';
import './Header.css';

import { Toolbar, ToolbarRow, ToolbarSection, ToolbarMenuIcon, ToolbarTitle, ToolbarIcon } from '@rmwc/toolbar';
import '@material/toolbar/dist/mdc.toolbar.css';

const Header = () => {
  function onClickToolbarMenu() {
    window.history.back();
  }

  return (
    <Toolbar>
      <ToolbarRow>
        <ToolbarSection alignStart>
          <ToolbarMenuIcon icon="menu" onClick={onClickToolbarMenu}/>
          <ToolbarTitle>{document.title}</ToolbarTitle>
        </ToolbarSection>
        <ToolbarSection alignEnd>
          <ToolbarIcon icon="save" />
          <ToolbarIcon icon="print" />
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>
  );
}

export default Header;
