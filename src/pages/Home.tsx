import { useState } from 'react';
import { Input, Text, Button, Row, Column, List, Logo } from 'components';

// Define o componente Home
export const Home = () => {
  const [taskName, setTaskName] = useState(''); // Estado para o nome da tarefa
  const [tasks, setTasks] = useState<{ label: string }[]>([]); // Estado para a lista de tarefas

  const handleOKButton = () => {
    if (!taskName) return;

    setTasks((previous) => {
      const copy = [...previous];
      copy.push({ label: taskName }); // Adiciona a nova tarefa à lista
      return copy;
    });
    setTaskName(''); // Limpa o campo de entrada
  };

  return (
    <Column width="600px" margin="0 auto">
      <Text fontWeight="bold" fontSize="bodyLarge" my="10px" pl="10px">Tasks</Text>
      <Row width="100%">
        <Input flex={1} placeholder="Enter a task name here..." value={taskName} onChange={e => setTaskName(e.target.value)} />
        <Button onClick={handleOKButton}>OK</Button>
      </Row>
      {taskName}

      <List items={tasks} /> 
    </Column>
  );
};
