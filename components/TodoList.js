import React from 'react';
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from '@chakra-ui/react';
import AddTodo from '../components/AddTodo';
import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';

function TodoList({}) {
  const initialTodos = [
    {
      id: 1,
      body: 'read code',
    },
    {
      id: 2,
      body: 'practice code',
    },
  ];
  const [todos, setTodos] = useState(initialTodos);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }
  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  if (!todos.length) {
    return (
      <VStack>
        <Badge colorScheme="red" p="4" m="4" borderRadius="lg">
          Nothing To Do!
        </Badge>
        <AddTodo addTodo={addTodo} />
      </VStack>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="3px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default TodoList;
