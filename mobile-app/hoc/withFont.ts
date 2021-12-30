import styled,{StyledComponent} from '@emotion/native';
import {  TextStyle } from 'react-native';


interface FontProps {
  fontSize?:TextStyle['fontSize']
  fontWeight?:TextStyle['fontWeight'];
  fontStyle?:TextStyle['fontStyle'];
  fontFamily?:TextStyle['fontFamily'];
  textAlign?:TextStyle['textAlign'];
  textDecorationColor?:TextStyle['textDecorationColor'];
  textDecorationLine?:TextStyle['textDecorationLine'];
  textDecorationStyle?:TextStyle['textDecorationStyle'];
  textShadowOffset?:TextStyle['textShadowOffset'];
  textShadowRadius?:TextStyle['textShadowRadius'];
  textShadowColor?:TextStyle['textShadowColor'];
  textTransform?:TextStyle['textTransform'];
  letterSpacing?:TextStyle['letterSpacing'];
  lineHeight?:TextStyle['lineHeight'];
}


const withFont = <T extends object> (Component:StyledComponent<T,any>):
StyledComponent<T&FontProps>=>{
  return  styled(Component)<FontProps>((props)=>{
    const {fontSize,fontWeight,fontStyle,textAlign,textDecorationColor,textDecorationLine,textDecorationStyle,textShadowOffset,textShadowRadius,textShadowColor,textTransform,letterSpacing,lineHeight} = props;
    let fontFamily;
    switch(fontWeight){   
      
      case '100':
        fontFamily = 'montserrat-thin';
        break;
      case '200':
        fontFamily = 'montserrat-extra-light';
        break;
      case '300':
        fontFamily = 'montserrat-light';
        break;
      case '400':
        fontFamily = 'montserrat-regular';
        break;
      case '500':
        fontFamily = 'montserrat-medium';
        break;
      case '600':
        fontFamily = 'montserrat-semi-bold';
        break;
      case 'bold':
      case '700':
        fontFamily = 'montserrat-bold';
        break;
      case '800':
        fontFamily = 'montserrat-extra-bold';
        break;
      case '900':
        fontFamily = 'montserrat-black';
        break;
        default:
        fontFamily = 'montserrat-regular';
    }

      return {
        fontFamily,
        fontSize,fontStyle,textAlign,textDecorationColor,textDecorationLine,textDecorationStyle,textShadowOffset,textShadowRadius,textShadowColor,textTransform,letterSpacing,lineHeight
      }
    })
}

export default withFont