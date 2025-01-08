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
      <Column width="100%" py="25px" alignItems="center"> 
        <Logo />
      </Column>

      <Column width="100%" minHeight="300px" p="20px" bg="rgba(255, 255, 255, 0.2)" borderRadius="4px" alignItems="center">
        <Text fontFamily="secondary" fontSize="bodyExtraLarge">Ready</Text>
        
        <Text fontFamily="secondary" fontWeight="bold" fontSize="displayExtraLarge" py="30px">
          25:00
        </Text>

        <Button variant="primary">
          <Text fontFamily="secondary" fontSize="bodyExtraLarge" fontWeight="bold" color="primary">
            START
          </Text>
        </Button>
      </Column>

      <Text fontWeight="bold" fontSize="bodyLarge" my="10px" pl="10px">Tasks</Text>
      <Row width="100%">
        <Input flex={1} placeholder="Enter a task name here..." value={taskName} onChange={e => setTaskName(e.target.value)} />
        <Button variant="primary" onClick={handleOKButton}>OK</Button>
      </Row>
      {taskName}

      <List items={tasks} /> 
    </Column>
  );
};
