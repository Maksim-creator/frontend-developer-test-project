import React, { useCallback } from 'react'
import { Card, Pressable, Text, View } from 'app/ds'
import { Task } from 'app/types/Task'
import styles from './TaskItemView.styles'

export const TaskItemView: React.FC<{ task: Task; onPress: (task: Task) => void }> = ({
  task,
  onPress
}) => (
  <Pressable onPress={useCallback(() => onPress(task), [task, onPress])}>
    <Card my={4} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
      <View style={styles.content}>
        <Text typeface='default/14' color='default' mb={2}>
          {task.name}
        </Text>
        <Text typeface='default/12' color='dimmed'>
          {task.description}
        </Text>
      </View>
      <View style={styles.button(task.completed)} />
    </Card>
  </Pressable>
)
