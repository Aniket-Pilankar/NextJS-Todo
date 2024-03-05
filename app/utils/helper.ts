export const getTodos = async (): Promise<ITodos> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`);
  return await response.json();
};
