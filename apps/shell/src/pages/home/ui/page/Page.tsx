import React from "react";
import { Button } from "@mantine/core";

const route = "/";
const Page = () => {
  return (
    <div>
      <Button variant="filled">Button</Button>
    </div>
  );
};

export const Home = {
  route,
  Page,
};
