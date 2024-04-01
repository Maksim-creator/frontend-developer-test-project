import React, { useCallback, useState } from 'react'
import { View } from 'react-native'

import { Project } from 'app/types/Project'
import { Task } from 'app/types/Task'
import { ProjectsListView } from 'app/widgets/ProjectsList'
import { TasksListView } from 'app/widgets/TasksList'
import { PROJECTS } from 'app/mock/data'

import styles from './App.styles'

function App() {
  const [projects, setProjects] = useState(PROJECTS)
  const [selectedProjectName, setProject] = useState('')

  const onProjectPress = useCallback(
    (selectedProject: Project) => {
      if (selectedProject.name === selectedProjectName) {
        setProject('')
      } else {
        setProject(selectedProject.name)
      }
    },
    [selectedProjectName]
  )

  const onTaskPress = useCallback((selectedTask: Task) => {
    setProjects(prevProjects =>
      prevProjects.map(project => ({
        ...project,
        tasks: project.tasks.map(task =>
          task.name === selectedTask.name ? { ...task, completed: !task.completed } : task
        )
      }))
    )
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ProjectsListView
          projects={projects}
          onProjectPress={onProjectPress}
          projectName={selectedProjectName}
        />
      </View>
      <View style={styles.column}>
        <TasksListView
          tasks={
            !selectedProjectName
              ? projects.flatMap(project => project.tasks)
              : projects.find(project => project.name === selectedProjectName)!.tasks
          }
          onTaskPress={onTaskPress}
          projectName={selectedProjectName}
        />
      </View>
    </View>
  )
}

export default App
