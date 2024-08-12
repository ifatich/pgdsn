import React, { useRef } from "react";
import { Button } from "./ui/button";

export type IndexProps = { };

export const Index: React.FC<IndexProps> = ({ }) => {

  return (
    <Button variant={'default'} size={'default'}>Click me!</Button>
  );
};

export default Index;