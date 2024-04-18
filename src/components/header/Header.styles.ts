import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.slate,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: 16,
  },
});
