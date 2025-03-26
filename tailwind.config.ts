
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					blue: "#00f3ff",
					purple: "#9b00ff",
					pink: "#ff00f7",
					red: "#ff0033",
					cyan: "#0afffd",
					green: "#00ff66"
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-out": {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(10px)" },
				},
				"scale-in": {
					"0%": { opacity: "0", transform: "scale(0.95)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
				"glow": {
					"0%": { boxShadow: "0 0 5px rgba(0, 243, 255, 0.7), 0 0 10px rgba(0, 243, 255, 0.5)" },
					"50%": { boxShadow: "0 0 20px rgba(0, 243, 255, 0.9), 0 0 30px rgba(0, 243, 255, 0.7)" },
					"100%": { boxShadow: "0 0 5px rgba(0, 243, 255, 0.7), 0 0 10px rgba(0, 243, 255, 0.5)" }
				},
				"glow-text": {
					"0%": { textShadow: "0 0 5px rgba(0, 243, 255, 0.7), 0 0 10px rgba(0, 243, 255, 0.5)" },
					"50%": { textShadow: "0 0 10px rgba(0, 243, 255, 0.9), 0 0 20px rgba(0, 243, 255, 0.7)" },
					"100%": { textShadow: "0 0 5px rgba(0, 243, 255, 0.7), 0 0 10px rgba(0, 243, 255, 0.5)" }
				},
				"border-flow": {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" }
				},
				"marquee": {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" }
				},
				"float": {
					"0%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
					"100%": { transform: "translateY(0px)" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-out": "fade-out 0.5s ease-in forwards",
				"scale-in": "scale-in 0.3s ease-out forwards",
				"glow": "glow 2s infinite ease-in-out",
				"glow-text": "glow-text 2s infinite ease-in-out",
				"border-flow": "border-flow 3s ease infinite",
				"marquee": "marquee 25s linear infinite",
				"float": "float 4s ease-in-out infinite"
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"neon-glow": "linear-gradient(180deg, rgba(0, 243, 255, 0) 0%, rgba(0, 243, 255, 0.3) 100%)",
				"neon-border": "linear-gradient(90deg, #00f3ff, #9b00ff, #ff00f7, #ff0033, #00f3ff)",
				"card-gradient": "linear-gradient(145deg, rgba(2,0,36,0.4) 0%, rgba(9,9,121,0.3) 35%, rgba(0,212,255,0.2) 100%)",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
