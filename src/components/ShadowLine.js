import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { shadowLineGradientColors } from '../theme';



const ShadowLine = () => {
    return (
        <LinearGradient
            colors={shadowLineGradientColors}
            style={styles.gradient} />
    );
};

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        top: 0,
        height: 6,
        width: '100%'
    }
});

export default ShadowLine;
