import {Dimensions, StyleSheet} from 'react-native';
import theme  from "../../constants/theme";

const { height } =  Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    details: {
        height: height / 2,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: "open-sans-bold",
    },
});
