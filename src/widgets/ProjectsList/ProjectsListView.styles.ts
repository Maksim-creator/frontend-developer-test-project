import { StyleSheet } from 'react-native'

import colors from '../../theme/colors'

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.background.contrast,
    paddingHorizontal: 10,
    paddingVertical: 20
  }
})

const cardStyle = (isSelected: boolean) => ({
  borderColor: isSelected ? colors.card.borderSelected : colors.card.border,
  backgroundColor: isSelected ? colors.card.backgroundSelected : colors.card.background
})

export default {
  ...styles,
  card: cardStyle
}
