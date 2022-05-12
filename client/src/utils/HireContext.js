import React, { createContext, useContext } from 'react';

const HireContext = createContext();

export const useHireContext = () => useContext(HireContext);