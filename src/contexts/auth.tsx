import React, { createContext, useContext } from "react";
export type User = { id: string; name: string; phone: string };
export const AuthCtx = createContext<{ user: User | null; setUser: (u: User | null) => void }>(
  { user: null, setUser: () => {} }
);
export const useAuth = () => useContext(AuthCtx);
