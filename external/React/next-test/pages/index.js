import { useState, useEffect } from 'react';

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data =  await res.json()

  return {
    props: { users: data }
  }
}

const Home = ({ users }) => {
  const [repos, setRepos] = useState(null)

  useEffect(() => {
    fetch("https://api.github.com/users/tomasfn87/repos")
    .then(response => response.json())
    .then(data => setRepos(data))
  }, [])

  return (
    <div>
      Creating an Unordered List using getServerSideProps data
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>{user.name}</li>
          )
        })}
      </ul>
      Creating an Unordered List using useEffect data
      <ul>
        {Array.isArray(repos) && repos.map((repo) => {
          if (repos.length > 0) {
            return (
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <li key={repo.id}>
                  {repo.name}
                </li>
              </a>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default Home
