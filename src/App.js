import React from "react";
import styled from "styled-components"; // or import styled from '@emotion/styled'
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  // getContent,
  // getFooter,
} from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";

import Routes from './routes/Routes';

const scheme = Layout();

scheme.configureHeader(builder => {
  builder
    .registerConfig('xs', {
      position: 'sticky',
    })
    .registerConfig('md', {
      position: 'relative', // won't stick to top when scroll down
    });
});

scheme.configureEdgeSidebar(builder => {
  builder
    .create('main-sidebar', { anchor: 'left' })
    .registerTemporaryConfig('xs', {
      anchor: 'left',
      width: 'auto', // 'auto' is only valid for temporary variant
    })
    .registerPermanentConfig('md', {
      width: 256, // px, (%, rem, em is compatible)
      collapsible: true,
      collapsedWidth: 64,
    });
});

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);

const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);

const App = () => {
  return (
    <Root scheme={scheme}>
      <CssBaseline />
      <Header>
        <Toolbar>
          <SidebarTrigger sidebarId="main-sidebar"/>
          Header
        </Toolbar>
      </Header>
      <DrawerSidebar sidebarId={'main-sidebar'}>
        <SidebarContent>
          SidebarContent
        </SidebarContent>
        <CollapseBtn />
      </DrawerSidebar>
      <Routes/>
    </Root>
  );
};

export default App;
