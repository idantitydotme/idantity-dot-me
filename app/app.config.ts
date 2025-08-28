export default defineAppConfig({
    ui: {
        colors: {
            primary: 'primary',
            secondary: 'secondary',
            tertiary: 'tertiary',
            info: 'info',
            success: 'success',
            warning: 'warning',
            error: 'error',
            neutral: 'neutrals'
        },
        button: {
          slots: {
            base: 'rounded-none'
          }
        },
        card: {
          slots: {
            root: 'rounded-none'
          }
        }
    }
})