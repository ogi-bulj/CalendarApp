import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    bottom: 0,
    elevation: 8,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: Platform.OS === 'ios' ? 6 : 0,
    position: 'absolute',
    shadowColor: COLORS.darkGreen,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    width: '33.33%',
  },
  button: {
    alignItems: 'center',
    rowGap: 8,
  },
  text: {
    fontFamily: 'Poppins-Regular',
  },
});
