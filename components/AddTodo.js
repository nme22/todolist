import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import React from 'react';

function AddTodo({ addTodo }) {
  const toast = useToast();
  const [content, setContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: 'There is nothing to add',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      body: content,
    };

    console.log(todo);
    addTodo(todo);
    setContent('');
  }

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
