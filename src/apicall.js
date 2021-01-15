export async function createUser(data) {
    const response = await fetch('/createUser' ,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    return await response;
    }
    export async function loginUser(data) {
        const response = await fetch('/loginUser' ,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        return await response;
        }
    