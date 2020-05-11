import React from "react";
import styled from "styled-components"; // or import styled from '@emotion/styled'
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  // getFooter,
} from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";

import Routes from './routes';
import ThemeProvider from './providers/ThemeProvider';

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
    .create('main_sidebar', { anchor: 'left' })
    .registerTemporaryConfig('xs', {
      anchor: 'left',
      width: 'auto',
    })
    .registerPermanentConfig('md', {
      width: 256,
      collapsible: true,
      collapsedWidth: 64,
      persistentBehavior: {
        main_sidebar: 'fit',
        _others: 'none',
      },
    });
});

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);

const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);

const App = () => {
  return (
    <ThemeProvider>
      <Root scheme={scheme}>
        <CssBaseline />
        <Header>
          <Toolbar>
            <SidebarTrigger sidebarId="main_sidebar"/>
            Header
          </Toolbar>
        </Header>
        <DrawerSidebar sidebarId="main_sidebar">
          <SidebarContent>
            SidebarContent
          </SidebarContent>
          <CollapseBtn />
        </DrawerSidebar>
        <Content>
          <Routes/>
        </Content>
      </Root>
    </ThemeProvider>
  );
};

export default App;
