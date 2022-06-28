import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: theme.fontSize.medium,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "90%",
        marginTop: 20,
        paddingVertical: 15,
        paddingHorizontal: 25,
    },
    button: {
        marginBottom: 10,
    }
});
