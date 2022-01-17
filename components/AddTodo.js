import { HStack, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';

function AddTodo({ addTodo }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(content);
  }
  const [content, setContent] = useState('');
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="6">
        <Input
          variant="filled"
          placeholder="Add things to do!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="red" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
