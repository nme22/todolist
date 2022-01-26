import TodoList from '../components/TodoList';

import { Heading } from '@chakra-ui/react';
import { VStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';

export default function Home(todos, deleteTodo) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="6"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, red.500, red.300, cyan.300)"
        bgClip="text"
        fontFamily="monospace"
      >
        Todo App
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </VStack>
  );
}
