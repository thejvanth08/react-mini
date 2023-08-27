import { useState, useEffect } from "react";

function App() {
  // setting up state for profiles
  // profiles = array of objects
  const [profiles, setProfiles] = useState([]); // initially empty

  // to fetch again according to user wish
  const [refresh, setRefresh] = useState(0);

  // for fetching github profiles using api
  // dependency array empty -> only runs at initial render
  useEffect(() => {
    // can use async inside
    const fetchProfiles = async () => {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      // updating the state with new data of profiles
      // set func will overwrite the data
      setProfiles(data);
    };

    fetchProfiles();
    console.log(refresh);
  }, [refresh]);

  return (
    <>
      <h1>Github profiles</h1>
      <button className="btn" onClick={() => setRefresh(refresh + 1)}>
        Refresh
      </button>
      <section>
        {profiles.map((user) => {
          {
            /* setting key for each user profile */
          }
          return (
            <article className="user" key={user.id}>
              <img src={user.avatar_url} alt="" className="user-img" />
              <h3 className="user-name">{user.login}</h3>
              <a href={user.html_url}>
                <span className="emoji">⭐</span>
              </a>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default App;
