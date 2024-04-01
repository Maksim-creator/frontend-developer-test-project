import React, { useCallback } from 'react'
import { FlatList } from 'react-native'
import { Task } from 'app/types/Task'
import { Header } from 'app/ds'
import { TaskItemView } from 'app/widgets/TasksList/TaskItemView'
import styles from '../ProjectsList/ProjectsListView.styles'

export const TasksListView: React.FC<{
  tasks: Task[]
  onTaskPress: (task: Task) => void
  projectName: string
}> = ({ tasks, onTaskPress, projectName }) => {
  const renderItem = useCallback(
    ({ item }: { item: Task }) => <TaskItemView task={item} onPress={onTaskPress} />,
    [onTaskPress]
  )

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      ListHeaderComponent={
        <Header mb={12}>{projectName ? `Tasks for "${projectName}"` : 'All Tasks'}</Header>
      }
      style={styles.list}
    />
  )
}
