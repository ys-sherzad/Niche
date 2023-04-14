import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Image
} from 'react-native';
import BackIcon from '../../assets/arrow-left.svg';
import MoreIcon from '../../assets/more.svg';
import { theme } from '../theme';
import { elevation_3, elevation_4 } from '../utils';

//FIXME: Refactor this

const HeaderIcon = {
    'home': <Image source={require('../../assets/Niche.png')} style={{ width: 66, resizeMode: 'contain' }} />,
    'job': <BackIcon height={25} width={25} fill={theme.icon_main} />
};

const Header = (props) => {
    const { route, navigation, back, progress } = props;

    const isHomePage = route.name === 'home';

    const pressed = () => {
        if (back) navigation.pop();
    };

    const Icon = HeaderIcon[route.name];

    const opacity = Animated.add(progress.current, progress.next || 0).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
    });

    return (
        <Animated.View style={[styles.container, { opacity }]}>
            <TouchableOpacity onPress={pressed}>
                {Icon}
            </TouchableOpacity>

            {isHomePage && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.profileImgContainer}>
                        <Image
                            source={require('../../assets/yasir.png')}
                            style={styles.profileImg}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MoreIcon style={{ transform: [{ rotate: '90deg' }], marginRight: -9, marginLeft: 5 }} fill={theme.icon_main} height={28} width={28} />
                    </TouchableOpacity>
                </View>
            )}

            {!isHomePage && (
                <TouchableOpacity>
                    <MoreIcon fill={theme.icon_main} height={28} width={28} />
                </TouchableOpacity>
            )}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingHorizontal: 19,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    flexOne: {
        flex: 1
    },
    profileImg: {
        height: 36,
        width: 36,
        resizeMode: 'cover',
        borderRadius: 99,
        // marginRight: 5
    },
    profileImgContainer: {
        borderWidth: 1,
        borderColor: theme.border,
        borderRadius: 99,
        padding: 2,
        ...elevation_3,
    },
    logo: {
        ...elevation_4
    }
});

export default Header;
