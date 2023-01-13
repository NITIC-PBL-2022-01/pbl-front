export const getToken = (): string | null => 
  typeof window !== undefined ? localStorage.getItem("TOKEN") : null;

