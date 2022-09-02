import "./App.css";
import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./General/NavBar/NavBar";
import { CollectionPage } from "./CollectionPage/CollectionPage";

export const App = () => {
  return (
    <ChakraProvider>
      <Box>
        <NavBar />
        <Routes>
          <Route path="collection" element={<CollectionPage />} />
          <Route path="about" />
        </Routes>
      </Box>
    </ChakraProvider>
  );
};

export default App;
