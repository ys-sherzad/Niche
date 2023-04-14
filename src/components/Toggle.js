import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Animated from 'react-native-reanimated';
import useToggleAnimation from '../hooks/useToggleAnimation';
import {
    TOGGLE_HEIGHT,
    TOGGLE_WIDTH,
    CIRCLE_HEIGHT,
    CIRCLE_WIDTH
} from '../utils';

const Toggle = ({
    onPress,
    active = false
}) => {

    const { animateStyle } = useToggleAnimation({ active });

    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <View style={styles.container}>
                <Animated.View style={[
                    styles.circle,
                    animateStyle,
                ]} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: TOGGLE_HEIGHT,
        width: TOGGLE_WIDTH,
        borderRadius: 20,
        justifyContent: 'center',
        paddingHorizontal: 2
    },
    circle: {
        height: CIRCLE_HEIGHT,
        width: CIRCLE_WIDTH,
        borderRadius: 99,
        backgroundColor: '#000'
    }
});

export default Toggle;
