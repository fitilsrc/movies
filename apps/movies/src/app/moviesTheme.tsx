import { extendTheme } from '@chakra-ui/react'
import "@fontsource/source-sans-pro"

const moviesTheme = extendTheme({
    semanticTokens: {
        colors: {
            main: 'rgba(3, 37, 65, 1)'
        },
        fonts: {
            heading: 'Source Sans Pro'
        },
    },
})

export default moviesTheme