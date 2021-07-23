
import {useState} from "react"
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

function ProfileRelationsBox(){
  return (
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
              <a href={comunidade.link} key={comunidade.title} target="_blank">
                <img src={comunidade.image}/>
                <span>{comunidade.title}</span>
              </a>
          </li>
        );
      })}
    );
  </ul>
</ProfileRelationsBoxWrapper>
}
export default function Home() {


  const githubUser = "DinowSauron";
  const ComunidadseIniciais = [{
      id: "1000001",
      title: "The Redstone Br",
      image: "https://yt3.ggpht.com/ytc/AKedOLT9G5r7qbF8wntgwbvzc5OhzsSHUbvLWWcHiFOAJQ=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/theredstonebr"
    },
    {
      id: "1000002",
      title: "Narrando Conhecimento",
      image: "https://yt3.ggpht.com/ytc/AKedOLQbIrizss0cJ6uzx2gZG01lfSm7GcfraVN3oyui=s88-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/channel/UCVhZsHJcSDLVUeYN6T419lw"
    }
  ];

  const [comunidades, setComunidades] = useState(ComunidadseIniciais);
  const pessoasFavoritas = [...(githubUser!="DinowSauron" ? ["DinowSauron", "LuckyCards"] : ["LuckyCards"]), "SebLague", "FilipeDeschamps", "JVictorDias", "omariosouto",  "peas", "alura-cursos", "rocketseat"];

  const seguidores = fetch(`https://api.github.com/users/${githubUser}/followers`)
  .then((resp) => {
    return resp.json();
  })
  .then((resp) => {
    console.log(resp);
    return resp;
  })


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

// 45:00

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
          <ProfileRelationsBox items={seguidores}/>
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

          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Seguidores ({seguidores.length})
            </h2>
            <ul>
              {console.log("seguidores = " + seguidores)}
              {seguidores.map((seguidor, index) => {
                  if(index > 5){
                    return;
                  }
                  return (
                    <li key={seguidor.id}>
                        <a href={seguidor.html_url} key={seguidor.html_url} target="_blank">
                          <img src={seguidor.avatar_url}/>
                          <span>{seguidor.login}</span>
                        </a>
                    </li>
                  );
              })}
            
            </ul>
          </ProfileRelationsBoxWrapper>

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
                      <a href={comunidade.link} key={comunidade.title} target="_blank">
                        <img src={comunidade.image}/>
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
