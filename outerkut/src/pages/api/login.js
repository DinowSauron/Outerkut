import jwt from "jsonwebtoken";

export default async function recebedorDeRequest(request, response){
    if(request.method != "POST"){
        response.status(404).json({
            message: `Metodo ${request.method}, invalido!`
        });

        return;
    }
    

    const secretKey = process.env.COOKIE_TOKEN;
    const userName = request.body.githubUser
    const cookieData = {
        githubUser: userName,
        roles: ["user"],
        iat: parseInt(Date.now() / 1000),
        exp: parseInt((Date.now() / 1000) + 8670),
    }
    const TOKEN = jwt.sign(cookieData, secretKey);

    response.json({
        token: TOKEN,
    })
}