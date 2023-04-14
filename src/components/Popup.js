import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import Text from '../components/Text';
import Animated from 'react-native-reanimated';
import usePopupAnimation from '../hooks/usePopupAnimation';
import { elevation_5, POPUP_HEIGHT } from '../utils';

const SCR_WIDTH = Dimensions.get('window').width;

const Popup = ({
    visible,
    title,
    action,
    description,
    extraOffset = 16,
    surface = '#000',
    zIndex = 0,
    textColor = '#fff',
}) => {

    const { show, animate } = usePopupAnimation({ to: extraOffset });

    useEffect(() => {
        if (visible) show();
    }, [visible]);

    const bgColorStyle = {
        backgroundColor: surface,
        zIndex
    };

    const textStyle = {
        color: textColor
    };

    return (
        <Animated.View style={[
            styles.container,
            bgColorStyle,
            animate]}>
            <View style={styles.innerContainer}>
                <View style={styles.flexOne}>
                    <Text style={[styles.title, textStyle]}>{title}</Text>
                    <Text style={[styles.description, textStyle]}>{description}</Text>
                </View>

                {action}
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    flexOne: {
        flex: 1,
    },
    container: {
        position: 'absolute',
        bottom: 0,
        height: POPUP_HEIGHT,
        width: SCR_WIDTH,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        paddingHorizontal: 28,
        paddingTop: 18,
        ...elevation_5
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: '500'
    },
    description: {
        fontSize: 12,
        marginTop: 6,
        maxWidth: SCR_WIDTH / 1.5
    }
});

export default Popup;
