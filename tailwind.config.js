/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                card1: 'hsl(var(--card-1))',
                card2: 'hsl(var(--card-2))',
                card3: 'hsl(var(--card-3))',
                negative: 'hsl(var(--negative))',
                positive: 'hsl(var(--positive))',
                cardLight25: 'hsl(var(--card-light-25))',
                cardLight12: 'hsl(var(--card-light-12))',
                background40: 'hsl(var(--background-40))',
                primary20: 'hsl(var(--primary-20))',
                accent25: 'hsl(var(--accent-25))',
                primary: 'hsl(var(--primary))',
                primaryHover: 'hsl(var(--primary-hover))',
                secondaryHover: 'hsl(var(--secondary-hover))',
                typography: 'hsl(var(--typography))',
                typographySecondary: 'hsl(var(--typography-secondary))',
                accentHover: 'hsl(var(--accent-hover))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            backgroundImage: {
                'blobs': "url('/src/assets/blobs-no-bg.png')",
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                "caret-blink": {
                    "0%,70%,100%": { opacity: "1" },
                    "20%,50%": { opacity: "0" },
                },
            },
            fontFamily: {
                artifakt: ['"Artifakt Element"', 'sans-serif'],
                manrope: ['"Manrope-VariableFont_wght"', 'sans-serif'],
            },
            fontSize: {
                'heading-1': ['32px', '1.25'],
                'heading-2': ['24px', '1.10'],
                'heading-3': ['20px', '1.20'],
                'subheading-1': ['20px', '1.20'],
                'subheading-2': ['16px', '1.25'],
                'block-1': ['20px', '1.20'],
                'block-2': ['16px', '1.50'],
                'big-sign': ['32px', '1.25'],
                'sign-1': ['20px', '1.20'],
                'sign-2': ['16px', '1.25'],
                'sign-3': ['14px', '1.15'],
                'sign-4': ['12px', '1.20'],
                'sign-5': ['10px', '1.20'],
                'button-1': ['20px', '1.20'],
                'button-2': ['16px', '1.25'],
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                "caret-blink": "caret-blink 1.25s ease-out infinite",
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
