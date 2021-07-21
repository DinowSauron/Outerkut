
import MainGrid from "../components/MainGrid"
import Box from "../components/Box"
import {AlurakutMenu} from "../lib/outerkutCommons"

function ProfileSidebar(props){
  return (
    <Box>
      <img src={`https://github.com/${props.user}.png`} style={{borderRadius: "8px"}}/>
    </Box>
  )
}

export default function Home() {
  const githubUser = "DinowSauron";
  return (
    <>
      <AlurakutMenu/>
      <MainGrid>

        <div className="profileArea" style={{ gridArea: "profileArea"}}>
          <ProfileSidebar user={githubUser}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea"}}>
          <Box >Bem vindo</Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
          <Box >Pessoas da Comunidade</Box>
          <Box >Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
