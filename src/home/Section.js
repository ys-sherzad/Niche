import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../components/Text';
import { theme } from '../theme';

const CardTitle = ({ title }) => {
    return (
        <Text style={styles.title}>{title}</Text>
    );
};

const Section = ({
    children,
    title
}) => {
    return (
        <View style={styles.container}>
            <CardTitle title={title} />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: theme.text_secondary
    }
});

export default Section;
