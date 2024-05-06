import { Box, VStack, Heading, Input, Button, List, ListItem, ListIcon } from '@chakra-ui/react';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading mb={4}>Todo List</Heading>
        <Input
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
        />
        <Button onClick={handleAddTodo} colorScheme="blue">Add Task</Button>
        <List spacing={3}>
          {todos.map((todo, index) => (
            <ListItem key={index}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {todo}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default TodoPage;