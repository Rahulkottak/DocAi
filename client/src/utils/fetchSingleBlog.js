import { server } from "../data/Constants";
export default async function fetchSingleBlog(id) {
  if(!id) return 
  const response = await fetch(`${server}/blog/${id}`);
// const response = await fetch(`http:localhost:5173/blog/${id}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const err = await response.text();
    throw Error(err)
  }
}
