import { server } from "../data/Constants";
export default async function addBlog({ id, author, title }) {
  const response = await fetch(server + "/blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, author, title }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    const parsedData = data["_id"];
    return parsedData;
  } else {
    const err = await response.text();
    alert(err);
  }
}
