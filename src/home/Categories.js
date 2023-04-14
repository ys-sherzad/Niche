import React from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Text from '../components/Text';
import { categories } from '../data';
import DesignIcon from '../../assets/design.svg';
import NetworkIcon from '../../assets/network.svg';
import SecurityIcon from '../../assets/security.svg';
import MedicalIcon from '../../assets/medical.svg';
import EngineeringIcon from '../../assets/engineering.svg';
import { cardBackgroundColor } from '../helpers';
import { elevation_1 } from '../utils';
import { theme } from '../theme';
import Slide from '../components/Slide';

const CategoryIcon = {
    'Design': <DesignIcon />,
    'Network': <NetworkIcon />,
    'Security': <SecurityIcon />,
    'Medical': <MedicalIcon />,
    'Engineering': <EngineeringIcon />,
};

const CategoryCard = () => {

    const renderIcon = (categoryName) => {
        const Icon = CategoryIcon[categoryName];

        return (
            <View style={styles.icon}>
                {Icon}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
            >
                {categories.map((category, index) => (
                    <Slide key={category.name} {...{ index }}>
                        <View
                            style={[styles.card, cardBackgroundColor(category.name)]}
                        >
                            {renderIcon(category.name)}

                            <Text style={styles.name}>{category.name}</Text>

                            <Text style={styles.count}>{category.count} Jobs</Text>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>View Jobs</Text>
                            </TouchableOpacity>

                        </View>
                    </Slide>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: -30,
    },
    scrollView: {
        paddingHorizontal: 30
    },
    card: {
        paddingVertical: 16,
        paddingHorizontal: 18,
        borderRadius: 12,
        marginRight: 12
    },
    icon: {
        height: 30,
        width: 30,
        padding: 4,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    name: {
        fontSize: 12,
        marginTop: 10,
        color: theme.text_secondary
    },
    count: {
        fontSize: 16,
        marginTop: 8,
        fontWeight: '700',
        color: theme.text_main
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 6,
        marginTop: 8,
        ...elevation_1
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 9,
        fontWeight: '500',
        color: theme.text_secondary
    }
});

export default CategoryCard;
