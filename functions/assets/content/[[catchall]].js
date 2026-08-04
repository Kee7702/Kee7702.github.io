export async function onRequest(context) {
  return await context.env.resbin.fetch(context.request);
}