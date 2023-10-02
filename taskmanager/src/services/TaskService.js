import axios from 'axios'

const baseURL = "http://localhost:8080/tasks/"

export const createTask = async (taskPayload) => {
    console.log(taskPayload)
    try {
        const response = await axios.post(baseURL, taskPayload);
      
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

export const getAllTasks = async () => {
    try {
        const response = await axios.get(baseURL);;
        if (response.status === 200){
            return { ok: true, data: response.data }
        }else{
            return {
                ok: false,
                err: `Unexpected status code: ${response.status}`
            };
        }
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const getTaskById = async (id) => {
    try {
        const response = await axios.get(baseURL+id);
        if (response.status === 200){
            return { ok: true, data: response.data };
        }else{
            return {
                ok: false,
                err: `Unexpected status code: ${response.status}`
            };
        }
            
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const getTaskByTitle = async (title) => {
    try {
        const response = await axios.get(baseURL+"title/"+title);
        if (response.status === 200){
            return { ok: true, data: response.data };
        }else{
            return {
                ok: false,
                err: `Unexpected status code: ${response.status}`
            };
        }
            
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const getTasksForUserName = async (username) => {
    try {
        const response = await axios.get(baseURL+"user/name/"+username);
        if (response.status === 200){
            return { ok: true, data: response.data };
        }else{
            return {
                ok: false,
                err: `Unexpected status code: ${response.status}`
            };
        }
            
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const getTasksForUserNameAndPriority = async (priority,username) => {
    try {
        const response = await axios.get(baseURL+"user/"+priority+"/"+username);
        if (response.status === 200){
            return { ok: true, data: response.data };
        }else{
            return {
                ok: false,
                err: `Unexpected status code: ${response.status}`
            };
        }
            
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const updateTask = async (payload) => {
    try {
        const response = await axios.put(baseURL+"update", payload);
        if (response.status === 200){
            return { ok: true };
        }else{
            return {
                ok: false,
                err: `Unexpected status code: ${response.status}`
            };
        }
            
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const deleteTask = async (id) => {
    try {
        const response = await axios.delete(baseURL+id);
        if (response.status === 200){
            return { ok: true };
        }else{
            return {
                ok: false,
                err: `Unexpected status code: ${response.status}`
            };
        }
           
    } catch (error) {
        return { ok: false, err: error };
    }
}
