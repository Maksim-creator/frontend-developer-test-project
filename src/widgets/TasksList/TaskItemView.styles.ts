import { StyleSheet, ViewStyle } from 'react-native'
import colors from 'app/theme/colors'

const styles = StyleSheet.create({
  content: {
    width: '90%'
  }
})

const buttonStyle = (isCompleted?: boolean): ViewStyle => ({
  width: 20,
  height: 20,
  borderRadius: 100,
  backgroundColor: isCompleted ? colors.primary.main : colors.background.main,
  borderWidth: 1,
  borderColor: colors.card.border
})

export default {
  ...styles,
  button: buttonStyle
}
