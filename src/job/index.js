import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import Text from '../components/Text';
import Popup from '../components/Popup';
import { theme } from '../theme';
import { elevation_3, elevation_6, POPUP_HEIGHT } from '../utils';
import Arrow from '../../assets/arrow-left.svg';
import Toggle from '../components/Toggle';
import ShadowLine from '../components/ShadowLine';
import FadeIn from '../components/FadeIn';

const sectionTitle = {
    'description': 'Job Description',
    'responsibilities': 'Responsibilities',
    'jobType': 'Job Type',
    'salary': 'Salary',
    'NumOfHires': 'Number of Hires',
};

const calculateAnimationDelay = (index) => {
    return (index + 1) * 50;
};

const getSectionTitle = (text) => {
    if (sectionTitle[text]) {
        return sectionTitle[text];
    }
    return '--';
};

const JobInfo = ({ job }) => {
    const ApplyButton = (
        <TouchableOpacity style={styles.applyButton}>
            <View style={styles.applyButtonOverlay} />
            <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.jobInfoContainer}>
            <View style={styles.logoContainer}>
                <Image source={job.logo} style={styles.logo} />
            </View>

            <Text style={styles.jobTitle}>{job.title}</Text>

            <Text style={styles.company}>{job.company}</Text>

            <Text style={styles.location}>{job.location}</Text>

            {ApplyButton}
        </View>
    );
};

const Section = ({
    title,
    description
}) => {
    return (
        <View>
            <Text style={styles.sectionTitle}>{title}</Text>
            <Text style={styles.sectionDescr}>{description}</Text>
        </View>
    );
};

const JobDetails = ({ details }) => {
    return (
        <View style={styles.jobDetailsContainer}>
            {Object.entries(details).map(([title, description], index) => {
                const hasSpacer = details.length - 1 !== index;

                return (
                    <FadeIn
                        key={`${index}`}
                        delay={calculateAnimationDelay(index)}
                    >
                        <View>
                            <Section
                                title={getSectionTitle(title)}
                                description={description}
                            />
                            {hasSpacer && <View style={{ height: 24 }} />}
                        </View>
                    </FadeIn>
                );
            })}
        </View>
    );
};

const Job = ({
    route
}) => {
    const { job } = route.params;

    const [showAlert, setShowAlert] = useState(false);
    const [showSkillBadge, setShowSkillBadge] = useState(false);
    const [jobAlert, setJobAlert] = useState(false);
    const [showShadow, setShowShadow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(true);
            setShowSkillBadge(true);
        }, 1200);

        return () => {
            clearTimeout(timer);
        };

    }, []);

    const onJobAlert = () => {
        setJobAlert(value => !value);
    };

    const BadgeButton = (
        <TouchableOpacity style={styles.badgeButton}>
            <Arrow height={18} width={18} fill="#000" />
        </TouchableOpacity>
    );

    const ToggleButton = (
        <Toggle
            onPress={onJobAlert}
            active={jobAlert}
        />
    );

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
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                onScroll={onScroll}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
            >
                <FadeIn>
                    <JobInfo {...{ job }} />
                </FadeIn>

                <JobDetails details={job.details} />

            </ScrollView>

            <Popup
                visible={showAlert}
                title='Similar Job Alert'
                description='Product designer, Typography'
                action={ToggleButton}
                zIndex={2}
            />

            <Popup
                visible={showSkillBadge}
                title='Earn Skill Badge'
                description='Skills assessments helps you stand out to recruiters'
                action={BadgeButton}
                extraOffset={-80}
                surface={theme.bg1}
                zIndex={1}
                textColor='#000'
            />

            {showShadow && (<ShadowLine />)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flexGrow: 1,
        paddingHorizontal: 30,
        paddingBottom: (POPUP_HEIGHT * 2) - 30
    },
    jobInfoContainer: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        ...elevation_6,
    },
    logo: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    jobTitle: {
        marginTop: 14,
        fontSize: 22,
        fontWeight: '700',
        color: theme.text_main
    },
    company: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: '500',
        color: theme.text_secondary
    },
    location: {
        marginTop: 12,
        fontSize: 13,
        color: theme.text_tertiary
    },
    jobDetailsContainer: {
        flex: 1,
        paddingTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: theme.text_secondary
    },
    sectionDescr: {
        marginTop: 10,
        fontSize: 14,
        color: theme.text_tertiary,
        lineHeight: 19
    },
    badgeButton: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        ...elevation_3,
        transform: [{
            rotate: '180deg',
        }],
    },
    applyButton: {
        marginTop: 18,
        justifyContent: 'center',
        alignItems: 'center',
        height: 34,
        width: 110,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.text_secondary,
        borderRadius: 12,
        overflow: 'hidden'
    },
    applyButtonOverlay: {
        position: 'absolute',
        top: 2,
        left: 2,
        height: 34,
        width: 106.5,
        backgroundColor: theme.button_overlay,
        borderRadius: 12,
    },
    applyText: {
        fontSize: 14,
        fontWeight: '500'
    }

});

export default Job;
