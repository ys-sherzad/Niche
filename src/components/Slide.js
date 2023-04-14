import React, { useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    withDelay
} from 'react-native-reanimated';
import { SCR_WIDTH } from '../utils';

const DELAY = 600;

const timingConfig = {
    duration: 1000,
    easing: Easing.inOut(Easing.cubic)
};

const Slide = ({ children, index }) => {

    const offset = useSharedValue(SCR_WIDTH);

    useEffect(() => {
        offset.value = 0;
    }, []);

    const animateX = useAnimatedStyle(() => {
        const duration = (index * 80) + DELAY;
        return {
            transform: [{
                translateX: withDelay(duration,
                    withTiming(offset.value, timingConfig))
            }]
        };
    });

    return (
        <Animated.View style={animateX}>
            {children}
        </Animated.View>
    );
};

export default Slide;