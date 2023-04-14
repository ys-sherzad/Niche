import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import Text from '../components/Text';
import { theme } from '../theme';
import { cardBackgroundColor } from '../helpers';
import ClockIcon from '../../assets/clock.svg';
import { elevation_1, elevation_5 } from '../utils';

const JobStatus = ({ order }) => {
    return (
        <View style={styles.statusContainer}>
            <View style={styles.clock}>
                <ClockIcon fill={theme.icon_main} />
            </View>
            <Text style={styles.statusMessage}>
                {order.message}
                <Text style={styles.countText}>{' '}{order.countMsg}</Text>
            </Text>
        </View>
    );
};

const JobCardFooter = ({ applied, hoursAgo, totalApplied }) => {
    const LIMIT = 3;

    const people = applied.slice(0, LIMIT);
    const isMoreThanLimit = Number(totalApplied) > LIMIT;
    return (
        <View style={styles.cardFooterContainer}>
            <View style={styles.appliedContainer}>
                {people.map((person, i) => (
                    <View key={`${i}`} style={styles.appliedCircle}>
                        <Image
                            source={person.img}
                            style={styles.personImg}
                        />
                    </View>
                ))}
                {isMoreThanLimit && (
                    <View style={[styles.appliedCircle, {
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: theme.text_secondary,
                    }]}>
                        <Text style={styles.appliedRemainingCount}>{Number(totalApplied) - 3}</Text>
                    </View>
                )}
            </View>

            <Text style={styles.hoursAgo}>{hoursAgo}</Text>
        </View>
    );
};

const JobCard = ({
    item,
    onJobCardPress
}) => {
    const {
        title,
        category,
        logo,
        applied,
        totalApplied,
        company,
        hoursAgo,
        order,
        tags,
    } = item;

    const renderTags = tags.map(tag => (
        <View
            key={tag}
            style={styles.tagContainer}>
            <Text style={styles.tag}>{tag}</Text>
        </View>
    ));

    return (
        <TouchableWithoutFeedback onPress={() => onJobCardPress(item)}>
            <View style={[
                styles.container,
                cardBackgroundColor(category)
            ]}>
                <View style={styles.row}>
                    <Text style={styles.company}>{company}</Text>

                    <Image source={logo} style={styles.logo} />
                </View>

                <Text style={styles.title}>{title}</Text>

                <View style={styles.tagsContainer}>
                    {renderTags}
                </View>

                <JobStatus
                    {...{ order }}
                />
                <JobCardFooter
                    {...{ applied }}
                    {...{ hoursAgo }}
                    {...{ totalApplied }}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 230,
        borderRadius: 12,
        paddingVertical: 22,
        paddingHorizontal: 26,
        marginBottom: 8,
        ...elevation_5
    },
    company: {
        fontSize: 14,
        fontWeight: '500',
        color: theme.text_secondary
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 5,
        color: theme.text_main
    },
    tagsContainer: {
        flexDirection: 'row',
        marginTop: 18
    },
    tagContainer: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        borderRadius: 99,
        marginRight: 8
    },
    tag: {
        fontSize: 11,
        fontWeight: '500',
        color: theme.text_secondary
    },
    logo: {
        height: 25,
        width: 25,
        borderRadius: 5,
        resizeMode: 'cover'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    clock: {
        height: 16,
        width: 16,
    },
    statusContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    statusMessage: {
        marginLeft: 5,
        fontWeight: '400',
        color: theme.text_secondary,
        fontSize: 13.5
    },
    countText: {
        fontWeight: '600',
    },
    cardFooterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    appliedContainer: {
        flexDirection: 'row',
    },
    appliedCircle: {
        height: 32,
        width: 32,
        borderRadius: 32 / 2,
        borderWidth: 1.5,
        borderColor: '#fff',
        marginRight: -10,
        ...elevation_1
    },
    personImg: {
        height: '100%',
        width: '100%',
        borderRadius: 32 / 2,
    },
    appliedRemainingCount: {
        fontSize: 11,
        color: '#fff'
    },
    hoursAgo: {
        fontSize: 14,
        fontWeight: '400',
        color: theme.text_secondary,
    }
});

export default JobCard;