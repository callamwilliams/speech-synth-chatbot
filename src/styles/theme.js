export const theme = {
    primary: {
        fontSizes: {
            baseFontSize: 18,
            title: 26,
        },
        fonts: {
            primary: 'Open Sans',
            icon: '',
        },
        colors: {
            primary: '#1b262c',
            secondary: '#0f4c81',
            tertiary: '#ed6663',
            quarternary: '#ffa372',
            background: '#e8e8e8',
            error: '#DD0000',
            warning: '#EC921F',
            success: '#16cb00',
        },
    },
};

const currentTheme = 'primary';

export const activeTheme = theme[currentTheme];
