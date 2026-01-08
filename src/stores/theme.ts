import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
    // State
    const theme = ref<string>('light')
    const scale = ref<number>(100)

    // Actions
    const initTheme = () => {
        // 1. Initialize Theme
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            theme.value = savedTheme
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme.value = 'dark'
        }
        applyTheme()

        // 2. Initialize Scale
        const savedScale = localStorage.getItem('scale')
        if (savedScale) {
            scale.value = parseInt(savedScale)
        }
        applyScale()
    }

    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
        applyTheme()
        localStorage.setItem('theme', theme.value)
    }

    const setScale = (newScale: number) => {
        scale.value = newScale
        applyScale()
        localStorage.setItem('scale', newScale.toString())
    }

    const applyTheme = () => {
        if (theme.value === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            document.documentElement.removeAttribute('data-theme')
        }
    }

    const applyScale = () => {
        // Apply font-size percentage to root element
        document.documentElement.style.fontSize = `${scale.value}%`
    }

    return {
        theme,
        scale,
        initTheme,
        toggleTheme,
        setScale
    }
})
