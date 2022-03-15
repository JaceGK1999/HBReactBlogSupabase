import { client, checkError } from './client';

export async function fetchBlogs() {
  const resp = await client.from('blogs').select('*');
  console.log(resp, 'fetch response');
  return checkError(resp);
}
