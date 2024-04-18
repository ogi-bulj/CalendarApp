import {Text, TextStyle} from 'react-native';
import {COLORS} from '../../utils/constants';

export enum HeadingVariant {
  Large = 'Large',
  Regular = 'Regular',
  Small = 'Small',
}
interface HeadingProps {
  children: React.ReactNode;
  color?: string;
  style?: TextStyle;
  variant: HeadingVariant;
}
const Heading: React.FC<HeadingProps> = ({children, style, variant, color}) => {
  let fontSize = 0;
  let lineHeight = 0;
  switch (variant) {
    case HeadingVariant.Large:
      fontSize = 24;
      lineHeight = 31.2;
      break;
    case HeadingVariant.Regular:
      fontSize = 20;
      lineHeight = 26;
      break;
    case HeadingVariant.Small:
      fontSize = 16;
      lineHeight = 20;
      break;
  }
  const styles: TextStyle = {
    fontFamily: 'BaiJamjuree-Bold',
    fontSize,
    lineHeight,
    letterSpacing: 0.2,
    color: color ? color : COLORS.darkGreen,
  };
  return <Text style={[styles, style]}>{children}</Text>;
};
export default Heading;
