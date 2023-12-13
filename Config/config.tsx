import { Dimensions } from "react-native";

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const config = {
    SCREEN_WIDTH:window.width,
    SCREEN_HEIGHT:window.height,
    FULL_SCREEN_WIDTH:screen.width,
    FULL_SCREEN_HEIGHT:screen.height,
    HUARAY_URL:"",
    NANHAI_URL:"https://testnanhaihr.openpos.com.tw/api/login.php"
}
export default config;