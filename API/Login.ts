import axios from "axios";
export const login = async (u_id: string, u_password: string, key: string): Promise<any> => {
    console.log('Sending login request...');
    try {
        const response = await axios.post('https://testnanhaihr.openpos.com.tw/api/login.php', {}, { // 注意这里的请求体为空
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