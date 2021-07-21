
import MainGrid from "../components/MainGrid"
import Box from "../components/Box"
import { ProfileRelationsBoxWrapper } from "../components/ProfileRelations"
import { OrkutNostalgicIconSet, OuterkutMenu } from "../lib/outerkutCommons"

function ProfileSidebar(props){
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: "8px"}}/>
    </Box>
  )
}
// 1:36:00
export default function Home() {
  const githubUser = "DinowSauron";

  const pessoasFavoritas = ["LuckyCards", "SebLague", "FilipeDeschamps", "JVictorDias", "omariosouto",  "peas"]


  return (
    <>
      <OuterkutMenu/>
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
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
          
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((pessoa) => {
                return (
                  <li>
                      <a href={`https://github.com/${pessoa}`} key={pessoa} target="_blank">
                        <img src={`https://github.com/${pessoa}.png`}/>
                        <span>{pessoa}</span>
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
