import { useEffect, useState } from "react";
import { Spinner } from "@blueprintjs/core";
import axios from "axios";

const App2 = () => {
  const [authors, setAuthors] = useState([]);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAuthors = async () => {
      setLoading(true);
      try {
        // fetch authors
        const responseAuthors = await axios.get("/api/authors");
        const { data: dataAuthors } = responseAuthors;
        setAuthors(dataAuthors);

        //fetch songs
        const responseSongs = await axios.get("/api/songs");
        const { data: dataSongs } = responseSongs;
        setSongs(dataSongs);

        //update the name of the Admin User
        const adminId = dataAuthors[0]._id;
        await axios.put(`/api/authors/${adminId}`, {
          name: "Admin User Updated",
        });

        // refetch authors
        const response2 = await axios.get("/api/authors");
        const { data: dataAuthorsUpdated } = response2;
        setAuthors(dataAuthorsUpdated);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthors();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          gap: "10px",
        }}
      >
        <span>Songs And Lyrics</span>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div style={{ color: "white" }}>
            <h1>Author names: </h1>
            <ul>
              {authors &&
                Array.isArray(authors) &&
                authors.map(
                  (auth) => auth && <li key={auth?._id}>{auth?.name}</li>
                )}
            </ul>
          </div>
          <br />
          <div style={{ color: "white" }}>
            <h1>Song names: </h1>
            <ol>
              {songs &&
                Array.isArray(songs) &&
                songs.map(
                  (song) => song && <li key={song?._id}>{song?.name}</li>
                )}
            </ol>
          </div>
        </>
      )}
    </>
  );
};

export default App2;
