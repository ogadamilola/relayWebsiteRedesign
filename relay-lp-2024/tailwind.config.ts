import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			relaydigital: {
  				blue: '#3b82f6',
  				black: '#0a0a0a',
  				silver: '#e7e7e7',
  				grey: '#7a7a7a'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			button: [
  				'clamp(1.5rem, 5vw, 2.425rem)',
  				{
  					lineHeight: 'clamp(1.5rem, 5vw, 2.8125rem)',
  					letterSpacing: 'clamp(-10%, 5vw, -3.6px)'
  				}
  			],
  			sub: [
  				'0.875rem',
  				{
  					lineHeight: '1.05rem'
  				}
  			],
  			rating: [
  				'clamp(0.875rem, 5vw, 1.375rem)',
  				{
  					lineHeight: 'clamp(1.05rem, 5vw, 1.375rem)'
  				}
  			],
  			p3: [
  				'1rem',
  				{
  					lineHeight: '1.5rem'
  				}
  			],
  			p2: [
  				'1.5rem',
  				{
  					lineHeight: '2.5rem'
  				}
  			],
  			p1: [
  				'clamp(1.375rem, 5vw, 1.625rem)',
  				{
  					lineHeight: 'clamp(1.85rem, 5vw, 2.1rem)'
  				}
  			],
  			h5: [
  				'clamp(1.25rem, 5vw, 1.75rem)',
  				{
  					lineHeight: 'clamp(1.375rem, 5vw, 2.1rem)',
  					letterSpacing: 'clamp(2.5px, 5vw, 5.6px)'
  				}
  			],
  			h4: [
  				'3.125rem',
  				{
  					lineHeight: '4.6875rem',
  					letterSpacing: '-3px'
  				}
  			],
  			h3: [
  				'clamp(2.5rem, 5vw, 4.5rem)',
  				{
  					lineHeight: 'clamp(2.625rem, 5vw, 5rem)'
  				}
  			],
  			h2: [
  				'clamp(2.3125rem, 5vw, 5.5rem)',
  				{
  					lineHeight: 'clamp(2.5rem, 5vw, 6rem)'
  				}
  			],
  			h1: [
  				'clamp(2.5rem, 5vw, 6rem)',
  				{
  					lineHeight: 'clamp(2.625rem, 5vw, 6.125rem)'
  				}
  			]
  		},
  		fontFamily: {
  			'geometos-soft': [
  				'Geometos Soft',
  				'sans-serif'
  			],
  			'neue-montreal': [
  				'Neue Montreal',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
