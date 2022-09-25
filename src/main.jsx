import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import OpenWeatherApp from "./OpenWeatherApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <OpenWeatherApp/>
  </ChakraProvider>
);
