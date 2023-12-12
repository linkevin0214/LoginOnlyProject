
import { NavigationProp } from "@react-navigation/native";
const LoginVoid = (navigation:NavigationProp<any>) =>{
    const handlePress = () => {
        navigation.navigate('Details',{ismember:'error'});
        }; 
        return {
            handlePress,
        };
};
export default LoginVoid;