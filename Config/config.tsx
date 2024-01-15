import { Dimensions } from "react-native";

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const config = {
    SCREEN_WIDTH:window.width,
    SCREEN_HEIGHT:window.height,
    FULL_SCREEN_WIDTH:screen.width,
    FULL_SCREEN_HEIGHT:screen.height,
    HUARAY_URL:"https://checkin_test.huaray.com.tw/login.php",
    HUARAY_CONTROL:"https://work.huaray.com.tw/admin/index/index.php",
    NANHAI_URL:"https://hr.nanhaisado.com.tw/",
    NANHAI_MEMBER:"https://api.nanhaisado.com.tw/",
    NANHAI_ORDER:"https://pos.nanhaisado.com.tw/nanhaiorder/",
    NANHAI_SHOP:"https://shop.nanhaisado.com.tw/",
    NANHAI_MAINURL:"https://www.nanhaisado.com.tw/",
    TEST_NANHAI_URL:"https://testnanhaihr.openpos.com.tw/api/login.php",
    TEST_NANHAI_MEMBER:"https://apitest.nanhaisado.com.tw/",
    TEST_NANHAI_ORDER:"https://pos.nanhaisado.com.tw/huarayorder/",
    TEST_NANHAI_SHOP:"https://shoptest.nanhaisado.com.tw/",
    TEST_NANHAI_MAINURL:"https://www.nanhaisado.com.tw/",
}
export default config;