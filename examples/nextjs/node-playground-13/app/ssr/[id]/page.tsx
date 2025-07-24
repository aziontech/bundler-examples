export default async function Page({ params }: { params: { id: string } }) {
  /*const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: 'no-store' },
  );
  const data = (await res.json()) as { title: string; body: string };
  */
 const data = {
    title: 'bazinga',
    body: 'bazinga body'
  };
  return (
    <h1>{data.title}</h1>
  );
}
