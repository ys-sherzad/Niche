import React from 'react';
import {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from 'react-native-reanimated';
import { POPUP_HEIGHT } from '../utils';

const usePopupAnimation = ({ to }) => {

    const offset = useSharedValue(POPUP_HEIGHT + 5);

    const show = () => {
        offset.value = to;
    };

    const animate = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: withTiming(offset.value, {
                    duration: 350,
                    easing: Easing.inOut(Easing.quad)
                })
            }]
        };
    });

    return {
        show,
        animate,
    };
};

export default usePopupAnimation;
