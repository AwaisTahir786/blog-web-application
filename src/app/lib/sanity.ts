import { createClient } from "next-sanity";
import  ImageUrlBuilder  from "@sanity/image-url"

export const client=createClient({
    apiVersion:"2023-05-03",
    dataset:"production",
    projectId:"5f18wl3l",
    useCdn:false,
});

const builder = ImageUrlBuilder(client);

export function urlfor(source:any){
    return builder.image(source)
}
