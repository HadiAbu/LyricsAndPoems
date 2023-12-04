import { useEffect, useState } from "react";
import { Spinner } from "@blueprintjs/core";
import axios from "axios";

const App2 = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAuthors = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/authors/all-authors");
        const { data } = response;
        setAuthors(data);
        console.log(data);
      } catch (e) {
        console.log(e.message);
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
        <div style={{ color: "white" }}>
          <h1>Author names: </h1>
          <ul>
            {authors &&
              Array.isArray(authors) &&
              authors.map(
                (auth) => auth && <li key={auth._id}>{auth?.name}</li>
              )}
          </ul>
        </div>
      )}
    </>
  );
};

export default App2;
