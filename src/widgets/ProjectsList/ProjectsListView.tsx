import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { Project } from 'app/types/Project'

import { Header } from 'app/ds'

import { ProjectItemView } from './ProjectItemView'
import styles from './ProjectsListView.styles'

export const ProjectsListView: React.FC<{
  projects: Project[]
  onProjectPress: (project: Project) => void
  projectName: string
}> = ({ projects, onProjectPress, projectName }) => {
  const renderItem = useCallback(
    ({ item }: { item: Project }) => (
      <ProjectItemView
        project={item}
        onPress={onProjectPress}
        isSelected={item.name === projectName}
      />
    ),
    [onProjectPress, projectName]
  )

  return (
    <FlatList
      data={projects}
      ListHeaderComponent={<Header mb={12}>Projects</Header>}
      renderItem={renderItem}
      style={styles.list}
    />
  )
}
