export default defineEventHandler((event) => {
  return proxyRequest(event, "http://localhost:3005/upload");
});
