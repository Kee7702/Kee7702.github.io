export function onRequest(context) {
  return await env.resbin.fetch(context.request);
}