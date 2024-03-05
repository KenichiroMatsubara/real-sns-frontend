/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'topbar-blue': "#2c517c",
                'tibc': "#db6ab9",
                // topbar-icon-badge-colorの略
            },
            boxShadow: {
                'sidebar-items': '3px 7px 13px -10px #65789f',
            },
            maxHeight: {
                '125': '500px',
            },
        },
    },
    plugins: [],
}