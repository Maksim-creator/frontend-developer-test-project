import React, { useCallback } from 'react'

import { Project } from 'app/types/Project'

import { Text, Card, Pressable } from 'app/ds'

import styles from './ProjectsListView.styles'

export const ProjectItemView: React.FC<{
  project: Project
  onPress: (project: Project) => void
  isSelected: boolean
}> = ({ project, onPress, isSelected }) => (
  <Pressable onPress={useCallback(() => onPress(project), [onPress, project])}>
    <Card style={styles.card(isSelected)} my={4}>
      <Text typeface='default/14' color='default' mb={2}>
        {project.name}
      </Text>
      <Text typeface='default/12' color='dimmed'>
        {project.description}
      </Text>
    </Card>
  </Pressable>
)
