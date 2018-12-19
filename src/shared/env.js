export const PORT: number = process.env.PORT != null
  ? parseInt(process.env.PORT, 10)
  : 8080;
