import jwt from "jsonwebtoken";

export default async function recebedorDeRequest(request, response){
    function NotAuthenticated(err) {
        response.json({
            isAuthenticated: false,
            error: err
        });
        
        return;
    }
    if(request.method != "POST"){
        NotAuthenticated("Invalid Method");
        return;
    }
    
    const token = request.headers.authorization;
    if(!token){
        NotAuthenticated("No Token in cookies");
        return;
    }


    const userName = jwt.decode(token).githubUser;
    const life = jwt.decode(token).exp;
    let gitService = "";

    if(life - (Date.now() / 1000) <= 0) {
        NotAuthenticated("Cookie has been expired");
        return;
    }
    if(userName === ""){
        NotAuthenticated("No Username");
        return;
    }

    // sistema para verificar se existe conexão com um serviço.
    await fetch(`https://api.github.com/users/${userName}`)
    .then((resp) => {
        return resp.json();
    })
    .then((resp) => {
        gitService = resp.message;
        return resp;
    });
    console.log(gitService);

    if(gitService) {
        NotAuthenticated("Github service not avalible / Wrong Username");
        return;
    }

    response.json({
        isAuthenticated: true,
    })
    
}