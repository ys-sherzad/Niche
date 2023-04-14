import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { jobsData } from '../data';
import JobCard from './JobCard';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth * .85;

const Latest = () => {
    const navigation = useNavigation();

    const onJobCardPress = (job) => {
        navigation.navigate('job', { job });
    };

    const renderCard = ({ item }) => {
        return (
            <JobCard
                {...{ item }}
                {...{ onJobCardPress }}
            />
        );
    };

    return (
        <View style={styles.carousel}>
            <Carousel
                layout={'stack'}
                data={jobsData}
                renderItem={renderCard}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    carousel: {
        marginHorizontal: -30,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: '500'
    }
});

export default Latest;