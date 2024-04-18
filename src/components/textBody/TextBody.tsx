import {Text, TextStyle} from 'react-native';
import {COLORS} from '../../utils/constants';

export enum TextBodyVariant {
  Regular = 'Regular',
  Small = 'Small',
}
interface TextBodyProps {
  children: React.ReactNode;
  color?: string;
  style?: TextStyle;
  variant: TextBodyVariant;
}
const TextBody: React.FC<TextBodyProps> = ({
  children,
  style,
  variant,
  color,
}) => {
  let fontSize = 0;
  let lineHeight = 0;
  switch (variant) {
    case TextBodyVariant.Regular:
      fontSize = 16;
      lineHeight = 24;
      break;
    case TextBodyVariant.Small:
      fontSize = 12;
      lineHeight = 18;
      break;
  }
  const styles: TextStyle = {
    fontFamily: 'Poppins-Regular',
    fontSize,
    lineHeight,
    letterSpacing: 0.2,
    color: color ? color : COLORS.darkGreen,
  };
  return <Text style={[styles, style]}>{children}</Text>;
};
export default TextBody;
