import { HStack, Input, Button } from '@chakra-ui/react';
import React from 'react';

function AddTodo() {
  function handleSubmit(e) {}
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="6">
        <Input variant="filled" placeholder="Add things to do!" />
        <Button colorScheme="red">Add Todo</Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
