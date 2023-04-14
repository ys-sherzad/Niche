import React, { useEffect } from 'react';
import {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from 'react-native-reanimated';
import { TOGGLE_OFFSET } from '../utils';

const useToggleAnimation = ({
    active,
}) => {
    const offset = useSharedValue(0);

    const animateStyle = useAnimatedStyle(() => {
        return {
            opacity: active ? 1 : 0.4,
            transform: [{
                translateX: withTiming(offset.value, {
                    duration: 150,
                    easing: Easing.quad
                })
            }]
        };
    });

    useEffect(() => {
        if (active) {
            offset.value = TOGGLE_OFFSET;
        } else {
            offset.value = 0;
        }
    }, [active]);

    return {
        animateStyle
    };
};

export default useToggleAnimation;
