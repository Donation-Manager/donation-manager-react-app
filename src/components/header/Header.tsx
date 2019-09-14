import React from 'react';

import { Toolbar, ToolbarRow, ToolbarSection, ToolbarMenuIcon, ToolbarTitle, ToolbarIcon } from '@rmwc/toolbar';
import '@material/toolbar/dist/mdc.toolbar.css';

const Header = () => {
  return (
    <Toolbar>
      <ToolbarRow>
        <ToolbarSection alignStart>
          <ToolbarMenuIcon icon="menu" />
          <ToolbarTitle>Toolbar</ToolbarTitle>
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
