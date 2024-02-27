import axios from "axios";
import config from '../Config/config';
export const nanhailogin = async (u_id: string, u_password: string, key: string): Promise<any> => {
    console.log('Sending login request...');
    try {
        const response = await axios.post(config.NANHAI_MEMBER_API, {}, { // 注意这里的请求体为空
            params: {
                u_id: u_id,
                u_password: u_password,
                key: key
            },
            timeout: 10000
        });
       
        return response.data;
    } catch (error) {
        console.error('Login Error:', error);
        throw error;
    }
};
export const nanhaitestlogin = async (u_id: string, u_password: string, key: string): Promise<any> => {
    console.log('Sending login request...');
    try {
        const response = await axios.post(config.TEST_NANHAIAPI_URL, {}, { // 注意这里的请求体为空
            params: {
                u_id: u_id,
                u_password: u_password,
                key: key
            },
            timeout: 10000
        });
       
        return response.data;
    } catch (error) {
        console.error('Login Error:', error);
        throw error;
    }
};
export const huaraylogin = async (u_id: string, u_password: string, key: string): Promise<any> => {
    console.log('Sending login request...');
    try {
        const response = await axios.post(config.HUARAY_URL, {}, { // 注意这里的请求体为空
            params: {
                u_id: u_id,
                u_password: u_password,
                key: key
            },
            timeout: 10000
        });
       
        return response.data;
    } catch (error) {
        console.error('Login Error:', error);
        throw error;
    }
};