
import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response){
    if(request.method != "POST"){
        response.status(404).json({
            message: `Metodo ${request.method}, invalido!`
        });

        return;
    }

    const TOKEN = process.env.FULL_ACESS_TOKEN;
    const client = new SiteClient(TOKEN);
    
    const registroCriado = await client.items.create({
        itemType: "1005140", // ID do model "Comunity"
        ...request.body,
        // title: "comunidade Teste",
        // imageUrl: "https://github.com/DinowSauron.png",
        // linkUrl: "nenhum",
        // creatorSlug: "DinowSauron",

    })

    response.json({
        registroCriado: registroCriado,
    })
}