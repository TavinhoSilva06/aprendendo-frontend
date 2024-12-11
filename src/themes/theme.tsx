import { ThemeProvider } from "styled-components";
import React from 'react';
import style from "./Button.module.scss"

const fontSizes: any = [14, 20, 96]
fontSizes.body  = fontSizes[0]
fontSizes.bodyExtraLarge  = fontSizes[1]
fontSizes.displayExtraLarge  = fontSizes[2]

const primary = '#256784';
const secondary = '#98531';

const theme = {
  fontSizes,
  colors: {
    primary
  }
}

class Button extends React.Component <{
    children?: React.ReactNode
}> {
    render() {
        return (
            <button className={style.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;