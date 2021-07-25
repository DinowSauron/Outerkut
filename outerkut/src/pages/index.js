
import {useState, useEffect} from "react"
import MainGrid from "../components/MainGrid"
import Box from "../components/Box"
import { ProfileRelationsBoxWrapper } from "../components/ProfileRelations"
import { OrkutNostalgicIconSet, OuterkutMenu, OuterkutProfileSidebarMenuDefault } from "../lib/outerkutCommons"

function ProfileSidebar(props){
  return (
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: "8px"}}/>
      <hr/>
      <p>
        <a href={`https://github.com/${props.githubUser}`} className="boxLink">
          @{props.githubUser}
        </a>
      </p>

      <hr />

      <OuterkutProfileSidebarMenuDefault/>
    </Box>
  )
}

function ProfileRelationsBox(props) {
  return (
    <ProfileRelationsBoxWrapper >
      <h2 className="smallTitle">
        {props.title} ({props.items.length})
      </h2>
      <ul>
        {props.items.map((item, index) => {
          if(index > 5){
            return;
          }
          return (
            <li key={item.id}>
                <a href={item.html_url} target="_blank">
                  <img src={item.avatar_url}/>
                  <span>{item.login}</span>
                </a>
            </li>
          );
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}


export default function Home() {


  const githubUser = "DinowSauron";

  const pessoasFavoritas = [...(githubUser!="DinowSauron" ? ["DinowSauron", "LuckyCards"] : ["LuckyCards"]), "SebLague", "FilipeDeschamps", "JVictorDias", "omariosouto",  "peas", "alura-cursos", "rocketseat"];

  const [seguidores, setSeguidores] = useState([]); 
  const [comunidades, setComunidades]  = useState([]);


  // 1:27:00

  useEffect(() => {
    // GET
    fetch(`https://api.github.com/users/${githubUser}/followers`)
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      setSeguidores(resp);
      // console.log(resp);
      return resp;
    });
    // POST (precisa de um objeto de configurações!)
    fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "authorization": process.env.NEXT_PUBLIC_AUTH,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          id
          title
          imageUrl
          linkUrl
          creatorSlug
          _status
          _firstPublishedAt
        }
      }`}),
    })
    .then((resp) => resp.json())
    .then((resp) => {
      setComunidades(resp.data.allCommunities);
      // console.log(resp.data.allCommunities);
    });
  }, []);


  function handleCreateComunity(event) {
    event.preventDefault();

    const dadosDoForm = new FormData(event.target);

    const newComunidade = {
      id: new Date().toISOString(),
      title: dadosDoForm.get("title"),
      image: dadosDoForm.get("image"),
    }

    const ComunidadesAtualizadas = [...comunidades, newComunidade];

    setComunidades(ComunidadesAtualizadas);
  }


  return (
    <>
      <OuterkutMenu githubUser={githubUser}/>
      <MainGrid>

        <div className="profileArea" style={{ gridArea: "profileArea"}}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea"}}>
          <Box >
            <h1 className="title">
              Bem vindo
            </h1>

            <OrkutNostalgicIconSet/>
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form action="" onSubmit={handleCreateComunity}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque um link da sua comunidade"
                  name="link"
                  aria-label="Coloque um link da sua comunidade"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usar de capa"
                  name="image"
                  aria-label="Coloque uma URL para usar de capa"
                  type="text"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
          
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Meus Amigos ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((pessoa, index) => {
                if(index > 5){
                  return;
                }
                return (
                  <li key={pessoa}>
                      <a href={`https://github.com/${pessoa}`} target="_blank">
                        <img src={`https://github.com/${pessoa}.png`}/>
                        <span>{pessoa}</span>
                      </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBox items={seguidores} title="Seguidores"/>

          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Minhas Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((comunidade, index) => {
                if(index > 5){
                  return;
                }
                return (
                  <li key={comunidade.id}>
                      <a href={comunidade.linkUrl} key={comunidade.title} target="_blank">
                        <img src={comunidade.imageUrl}/>
                        <span>{comunidade.title}</span>
                      </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
