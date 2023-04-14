import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Text from '../components/Text';

import { theme } from '../theme';

import SearchIcon from '../../assets/search.svg';
import FilterIcon from '../../assets/filter.svg';

import Latest from './Latest';
import Section from './Section';
import Categories from './Categories';

import { elevation_1 } from '../utils';
import ShadowLine from '../components/ShadowLine';
import FadeIn from '../components/FadeIn';

const FilterButton = () => {
    return (
        <TouchableOpacity style={styles.filter}>
            <FilterIcon height={20} width={20} fill={theme.icon_main} />
        </TouchableOpacity>
    );
};

const Input = () => {
    return (
        <View style={styles.inputContainer}>
            <SearchIcon stroke={theme.icon_main} height={20} width={20} />
            <TextInput
                placeholder='Search for jobs'
                placeholderTextColor={theme.text_placeholder}
                style={styles.input}
            />
            <FilterButton />
        </View>
    );
};

const Home = () => {

    const [showShadow, setShowShadow] = useState(false);

    const onScroll = ({ nativeEvent }) => {
        const { contentOffset } = nativeEvent;
        if (contentOffset.y > 0) {
            if (showShadow) return;
            setShowShadow(true);
        } else {
            if (!showShadow) return;
            setShowShadow(false);
        }
    };

    return (
        <>
            <ScrollView
                style={styles.outerContainer}
                contentContainerStyle={styles.container}
                onScroll={onScroll}
                scrollEventThrottle={16}
            >
                <FadeIn>
                    <Text style={styles.title}>
                        Find the world's most{'\n'}
                        <Text style={{ fontWeight: '700' }}>Amazing Jobs</Text>
                    </Text>
                </FadeIn>

                <FadeIn delay={150}>
                    <Input />
                </FadeIn>

                <FadeIn delay={300}>
                    <Section title='Latest'>
                        <Latest />
                    </Section>
                </FadeIn>

                <FadeIn delay={450}>
                    <Section title='Categories'>
                        <Categories />
                    </Section>
                </FadeIn>


            </ScrollView>
            {showShadow && (<ShadowLine />)}
        </>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    container: {
        flexGrow: 1,
        paddingTop: 20,
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: '400',
        color: theme.text_main
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.input,
        paddingLeft: 16,
        paddingRight: 12,
        borderRadius: 10,
        marginTop: 28,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.border
    },
    input: {
        flex: 1,
        height: 48,
        backgroundColor: theme.input,
        paddingHorizontal: 10,
        color: theme.text_main,
        fontFamily: 'Poppins-Regular'
    },
    filter: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 10,
        ...elevation_1
    }
});

export default Home;