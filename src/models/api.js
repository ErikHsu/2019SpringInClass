const API_ROOT = process.env.API_ROOT || "http://localhost:3000/";

export const Globals = {
    user: null,
    errors: [],
    deleteError(i){ 
        this.errors.split(i, 1);
    }
}

export function login(){
    Globals.user = { name: "Bernie"}
}

export async function api(url, data) {
    let response = null;
    let headers = { "Auhorization": `Bearer ${Globals.token}`}
    if(!data) {
        response = await fetch(API_ROUTE + url, { headers });
    } else {
        rresponse = fetch(API_ROOT + url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                //... means take all headers from this variable and copy it into this object.
                ...headers,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), //body data type must match Content-Type header
        })
};
if(!respomnse.ok) {
    throw await response.json();
};
return await response.json();
}