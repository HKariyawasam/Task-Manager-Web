import axios from 'axios'


const baseURL = "http://localhost:8080/users/"

//register a new user
export const registerUser = async (userPayload) => {
    console.log(userPayload)
    try {
        const response = await axios.post(baseURL+"create", userPayload);
      
        if (response.status === 201) {
            return {
                ok: true,
                data: response.data
            }
        }else{
            return {
                ok: false,
                err: `Unexpected status code: ${response.status}`
            };
        }
    } catch (error) {
        return { ok: false, err: error.message }
    }

}


//login with an existing user
export const loginUser = async (user) => {

    try {
        const response = await axios.post(baseURL+"login", user)
        if (response.status === 200) {
            return {
                ok: true,
                data: response.data
            }
        }else{
            return {
                ok: false,
                err: `Unexpected status code: ${response.status}`
            };
        }

    } catch (error) {
        return { ok: false, err: error.message }
    }
}
