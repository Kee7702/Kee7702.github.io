export async function onRequestGet(context) {
  return context.env.resbin.fetch(context.request);
}