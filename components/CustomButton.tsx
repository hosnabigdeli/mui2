'use client';
import { Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../app/ui/button.css';

type ButtonType = 'contained' | 'outlined' | 'text';

interface ButtonProps {
    variant: ButtonType,
    disabled?: boolean
}

// Augment the palette to include a salmon color
declare module '@mui/material/styles' {
    interface Palette {
        salmon: Palette['primary'];
    }

    interface PaletteOptions {
        salmon?: PaletteOptions['primary'];
    }
}

// Update the Button's color options to include a salmon option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        salmon: true;
    }
}

let theme = createTheme({});

theme = createTheme(theme, {
    palette: {
        salmon: theme.palette.augmentColor({
            color: {
                main: '#F1A45B',
                light: '#F15B5B',
                dark: '#F17F5B',
                contrastText: 'white'
            },
            name: 'salmon',
        }),
    },
});

const Button1: React.FC<ButtonProps> = ({ variant, disabled }) => {
    return (
        <ThemeProvider theme={theme}>
            <Button
                className='button'
                color="salmon"
                variant={variant}
                startIcon={<RestartAltIcon />}
                endIcon={<PersonAddAltIcon />}
                disabled={disabled}
                sx={{
                    ...(variant === 'contained' && {
                        backgroundColor: theme.palette.salmon.main,
                        color: theme.palette.salmon.contrastText,
                        '&:hover': {
                            backgroundColor: theme.palette.salmon.light,
                        },
                        '&:active': {
                            backgroundColor: theme.palette.salmon.dark,
                        },
                    }),
                    ...(variant === 'outlined' && {
                        borderColor: theme.palette.salmon.main,
                        color: theme.palette.salmon.main,
                        '&:hover': {
                            borderColor: theme.palette.salmon.light,
                            color: theme.palette.salmon.light,
                        },
                        '&:active': {
                            borderColor: theme.palette.salmon.dark,
                            color: theme.palette.salmon.dark,
                        },
                    }),
                    ...(variant === 'text' && {
                        color: theme.palette.salmon.main,
                        '&:hover': {
                            color: theme.palette.salmon.light,
                        },
                        '&:active': {
                            color: theme.palette.salmon.dark,
                        },
                    }),
                }}
            >
                عنوان دکمه
            </Button>
        </ThemeProvider>
    );
};

export default Button1;
