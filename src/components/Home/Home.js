import React, { Component } from 'react'
import Layout, {
  Root,
} from "@mui-treasury/layout";
import { withStyles } from '@material-ui/core';

import Template from '../Template';

import { styles } from './Home.styles';

const templates = [
  {
    id: 1,
    title: 'Template de muestra',
    content: 'Esta es una plantilla de muestra. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró',
    options: ['copy','lock'],
  },{
    id: 2,
    title: 'Template de muestra',
    content: 'Esta es una plantilla de muestra. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró',
    options: ['copy','lock'],
  },{
    id: 3,
    title: 'Template de muestra',
    content: 'Esta es una plantilla de muestra. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró',
    options: ['copy'],
  },
]



class Home extends Component {
  render() {
    const { classes } = this.props;
    const scheme = Layout();

    return (
      <Root scheme={scheme}>
        {({ state: { sidebar } }) => {
          console.log(sidebar);
          return (
            <div className={classes.mainContainer}>
              {
                Array.isArray(templates) && templates.map(template => {
                  return <Template key={template.id} template={template} />
                })
              }
            </div>
          )
        }}
      </Root>
    )
  }
}

export default withStyles(styles)(Home);