import React, { useState, useEffect } from "react"
import MainGrid from "../src/components/MainGrid"
import Box from "../src/components/Box"
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations"
import {
  AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet
} from "../src/lib/AlkutCommons"
import {
  showProfileRelationsAsyncA, showProfileRelationsAsyncB, showProfileRelationsSync
} from "../src/lib/ShowProfileRelations"

const ProfileSidebar = (user) => {
  return (
    <Box as="aside">
      <img src={`https://www.github.com/${user.githubUser}.png`} style={{ borderRadius: "8px" }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${user.githubUser}`}>
          @{user.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

const ProfileRelationsBox = (props) => {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">{props.title} ({props.data.length})</h2>
      <ul>
        {props.items.map((item) => {
          return (                                   
            <li key={item.id}>
              <a href={eval(props.aHref)}>
                <img src={eval(props.imgSrc)} />
                <span>{eval(props.span)}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {

  const username = "tomasfn87"

  const [ dadosSeguidores, setDadosSeguidores ] = useState([])

  const [ seguidores, setSeguidores ] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/peas/followers")
    .then(async (response) => {
      const finalResponse = await response.json()
        if (response.ok) {
          setDadosSeguidores(finalResponse)
        }
        throw new Error("Erro! " + response.status)
    })
    .catch((erro) => {
        console.error(erro)
    })
  }, [])

  showProfileRelationsAsyncA(dadosSeguidores, seguidores)

  useEffect(() => {
    setSeguidores(showProfileRelationsAsyncA(dadosSeguidores, seguidores))
  }, [dadosSeguidores])

  const [ dadosComunidades, setDadosComunidades ] = useState([])

  const triggerComunidades = () => null

  const fetchComunidades = (() => {
    fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Authorization": "b812faea2240591e9f635b99793490",
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          id
          title
          avatarUrl
          creatorSlug
        }
      }`})
    })
    .then(async (response) => {
      const finalResponse = await response.json()
      if (response.ok) {
        setDadosComunidades(finalResponse.data.allCommunities)
      }
      throw new Error("Erro! " + response.status)
    })
    .catch((erro) => {
      console.error(erro)
    })
  })

  useEffect(() => {
    setTimeout(fetchComunidades(), 5*10**3)
  }, [])

  const [ comunidades, setComunidades ] = useState([])

  let comunidade

  showProfileRelationsAsyncB(dadosComunidades, comunidades)

  useEffect(() => {
    setComunidades(showProfileRelationsAsyncB(dadosComunidades, comunidades))
  }, [dadosComunidades])

  let dadosPessoasFavoritas = [
    { user: "produtocamila",    id: 1  },
    { user: "juunegreiros",     id: 2  },
    { user: "peas",             id: 3  },
    { user: "GuillaumeFalourd", id: 4  },
    { user: "rafaballerini",    id: 5  },
    { user: "omariosouto",      id: 6  },
    { user: "anajuliabit",      id: 7  },
    { user: "marcobrunodev",    id: 8  },
    { user: "stefani-scarpari", id: 9  },
    { user: "felipefialho",     id: 10 },
    { user: "tomasfn87",        id: 11 },
  ]

  let pessoasFavoritas = []
  showProfileRelationsSync(dadosPessoasFavoritas, pessoasFavoritas)
      
  return (
    <div>
      <AlurakutMenu githubUser={username}/>

      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={username} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault()
             
              const dadosDoForm = new FormData(e.target)

              comunidade = {
                title: dadosDoForm.get("title"),
                avatarUrl: dadosDoForm.get("avatar"),
                creatorSlug: username
              }

              fetch("/api/comunidades", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(comunidade)
              })
              .then(async (response) => {
                const postData = await response.json()
                const comunidade = postData.createdRegistry
                dadosComunidades = setDadosComunidades([...dadosComunidades, comunidade])
                triggerComunidades()
              })
            }}>

              <div>
                <input
                  placeholder="Qual será o nome da nova comunidade?"
                  name="title"
                  aria-label="Qual será o nome da nova comunidade?"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque a URL de uma imagem de capa"
                  name="avatar"
                  aria-label="Coloque a URL de uma imagem de capa"
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>

          <ProfileRelationsBox
            title="Seguidores GitHub" items={seguidores}
            data={dadosSeguidores} aHref="item.html_url"
            imgSrc="item.avatar_url" span="item.login"
          />

          <ProfileRelationsBox
            title="Minhas comunidades" items={comunidades}
            data={dadosComunidades} aHref="`/groups/${item.title}`"
            imgSrc="`${item.avatarUrl}`" span="item.title" 
          />

          <ProfileRelationsBox
            title="Meus amigos" items={pessoasFavoritas}
            data={dadosPessoasFavoritas} aHref="`https://github.com/${item.user}`"
            imgSrc="`https://github.com/${item.user}.png`" span="item.user"
          />

        </div>
      </MainGrid>
    </div>
  )
}