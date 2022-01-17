import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import { Heading } from '@chakra-ui/react';
import { VStack, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Home() {
  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, red.500, red.300, cyan.300)"
        bgClip="text"
      >
        Todo Application
      </Heading>
    </VStack>
  );
}
