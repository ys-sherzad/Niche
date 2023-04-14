import { categoriesColor } from './theme';

const getCategoryColor = (categoryName) => {
    return categoriesColor[categoryName];
};

export const cardBackgroundColor = (categoryName) => {
    return {
        backgroundColor: getCategoryColor(categoryName)
    };
};

export const capitalizeEachWordFirstLetter = (text) => {
    const words = text.split(" ");

    for (const i in words) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
};
