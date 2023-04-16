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
            'primarytext': '#FFFFFF',
            'secondarytext': '#DADADA',
            'foreground': '#272A30',
            'secondary': '#1E2024',
            'background': '#17191C',
            'control': '#30343B',
            'blue': '#338BC1',
            'darkblue': '#13293D',
            'green': '#69B578',
            'red': '#d5463f'
        },
        fontFamily: {
            serif: ['Source Sans Pro 3', 'sans-serif'],
        },
        fontSize: {
            sm: '12px',
            base: '15px',
            'xl': '17px',
            '2xl': '19px',
        },
        extend: {

        },
    },

    plugins: []
}