export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  const res = await fetch(
    `http://www.omdbapi.com/?t=${title}&apikey=${process.env.OMDB_API_KEY}`
  );
  const data = await res.json();

  return Response.json(data);
}
