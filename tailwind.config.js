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
                'login-blue': '#f0f2f5',
                'login-purple': '#41428b',
                'login-green': '#3c8b50',
                'logout-blue': "#bce7ff",
                // topbar-icon-badge-colorの略
            },
            boxShadow: {
                'sidebar-items': '3px 7px 13px -10px #65789f',
            },
            maxHeight: {
                '125': '500px',
            },
            width:{
                '10vw' : '10vw',
                '15vw' : '15vw',
                '20vw' : '20vw',
                '25vw' : '25vw',
                '30vw' : '30vw',
                '35vw' : '35vw',
                '40vw' : '40vw',
                '45vw' : '45vw',
                '50vw' : '50vw',
                '55vw' : '55vw',
                '60vw' : '60vw',
                '65vw' : '65vw',
                '70vw' : '70vw',
                '75vw' : '75vw',
                '80vw' : '80vw',
                '85vw' : '85vw',
                '90vw' : '90vw',
                '95vw' : '95vw',
            },
            borderWidth: {
                '1':'1px',
            },
        },
    },
    plugins: [],
}