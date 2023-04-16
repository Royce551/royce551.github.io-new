module.exports = {
    content: [
        './_drafts/**/*.html',
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.md',
        './*.html',
    ],
    theme: {
        colors: {
            'primarytext': '#000000',
            'secondarytext': '#525252',
            'foreground': '#E9EAED',
            'secondary': '#F4F4F6',
            'background': '#FFFFFF',
            'control': '#E0E0E0',
            'blue': '#338BC1',
            'darkblue': '#13293D',
            'green': '#69B578',
            'red': '#d5463f',
            'dark-primarytext': '#FFFFFF',
            'dark-secondarytext': '#DADADA',
            'dark-foreground': '#272A30',
            'dark-secondary': '#1E2024',
            'dark-background': '#17191C',
            'dark-control': '#30343B',
        },
        fontFamily: {
            sans: ['Source Sans 3', 'sans-serif'],
        },
        fontSize: {
            sm: '12px',
            base: '15px',
            'xl': '24px',
            '2xl': '32px',
        },
        extend: {
            fontFamily: {
                sourcesans: ['"Source Sans 3"']
            }
        }
    },

    plugins: []
}