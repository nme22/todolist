import React from 'react';
import { HStack, VStack, Text, IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function TodoList() {
  const todos = [
    {
      id: 1,
      body: 'read code',
    },
    {
      id: 2,
      body: 'practice code',
    },
  ];
  return (
    <VStack>
      {todos.map((todo) => (
        <HStack>
          <Text>{todo.body}</Text>
          <IconButton icon={<FaTrash />} />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
