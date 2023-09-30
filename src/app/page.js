"use client";

import { useState } from "react";

export default function Home() {
  // const res = await fetch(
  //   `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.OMDB_API_KEY}`
  // );
  // const data = await res.json();

  const [data, setData] = useState({});

  const searchMovie = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    console.log(title);
    const res = await fetch(`/api/getMovie?title=${title}`);
    // const res = await fetch(
    //   `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.OMDB_API_KEY}`
    // );
    const data = await res.json();

    console.log(data);

    setData(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">{data.Title}</h1>
      <img src={data.Poster} alt={data.Title} width={400} height={600} />
      <p className="text-xl">{data.Plot}</p>
      <form onSubmit={searchMovie}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          className="text-slate-700"
        />
        <button type="submit">Search</button>
      </form>
    </main>
  );
}
