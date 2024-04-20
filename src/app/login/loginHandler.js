
export const loginHandler = async(email,password) => {

    if (!email || !password) {
        return
    }

    const user = await fetch('/api/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    return user.json()

}