import "./App.css";
import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./tsx/General/NavBar/NavBar";
import { CollectionPage } from "./tsx/CollectionPage/CollectionPage";
import { AboutPage } from "./tsx/AboutPage/AboutPage";

export const App = () => {
  return (
    <ChakraProvider>
      <Box>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
};

export default App;
