import { Platform, Dimensions } from 'react-native';

export const SCR_WIDTH = Dimensions.get('window').width;

export const POPUP_HEIGHT = 125;
export const TOGGLE_HEIGHT = 18;
export const TOGGLE_WIDTH = 34;
export const CIRCLE_HEIGHT = TOGGLE_HEIGHT - 4;
export const CIRCLE_WIDTH = TOGGLE_HEIGHT - 4;
export const TOGGLE_OFFSET = TOGGLE_WIDTH - CIRCLE_WIDTH - 4;

export const elevation_1 = {
    ...Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,
        },
        android: {
            elevation: 1,
        }
    })
};

export const elevation_2 = {
    ...Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
        },
        android: {
            elevation: 2,
        }
    })
};

export const elevation_3 = {
    ...Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
        },
        android: {
            elevation: 3,
        }
    })
};

export const elevation_4 = {
    ...Platform.select({
        ios: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
        },
        android: {
            elevation: 4,
        }
    })
};

export const elevation_5 = {
    ...Platform.select({
        ios: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },
        android: {
            elevation: 5,
        }
    })
};

export const elevation_6 = {
    ...Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
        },
        android: {
            elevation: 6,
        }
    })
};

export const elevation_7 = {
    ...Platform.select({
        ios: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
        },
        android: {
            elevation: 7,
        }
    })
};

export const elevation_8 = {
    ...Platform.select({
        ios: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
        },
        android: {
            elevation: 8,
        }
    })
};




