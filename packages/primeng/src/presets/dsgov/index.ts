import lara from '@primeng/themes/lara';
import { definePreset } from '@primeuix/styled';

type Theme = typeof lara;

export const DsGovTheme = definePreset(lara, <Theme>{
    primitive: {
        borderRadius: {
            md: 'var(--surface-rounder-sm)'
        },
        green: {
            '50': 'var(--green-cool-vivid-5)',
            '100': 'var(--green-cool-vivid-10)',
            '200': 'var(--green-cool-vivid-20)',
            '300': 'var(--green-cool-vivid-30)',
            '400': 'var(--green-cool-vivid-40)',
            '500': 'var(--green-cool-vivid-50)',
            '600': 'var(--green-cool-vivid-60)',
            '700': 'var(--green-cool-vivid-70)',
            '800': 'var(--green-cool-vivid-80)',
            '900': 'var(--green-cool-vivid-80)',
            '950': 'var(--green-cool-vivid-80)'
        },
        red: {
            '50': 'var(--red-vivid-5)',
            '100': 'var(--red-vivid-10)',
            '200': 'var(--red-vivid-20)',
            '300': 'var(--red-vivid-30)',
            '400': 'var(--red-vivid-40)',
            '500': 'var(--red-vivid-50)',
            '600': 'var(--red-vivid-60)',
            '700': 'var(--red-vivid-70)',
            '800': 'var(--red-vivid-80)',
            '900': 'var(--red-vivid-80)',
            '950': 'var(--red-vivid-80)'
        },
        orange: {
            '50': 'var(--orange-vivid-5)',
            '100': 'var(--orange-vivid-10)',
            '200': 'var(--orange-vivid-20)',
            '300': 'var(--orange-vivid-30)',
            '400': 'var(--orange-vivid-40)',
            '500': 'var(--orange-vivid-50)',
            '600': 'var(--orange-vivid-60)',
            '700': 'var(--orange-vivid-70)',
            '800': 'var(--orange-vivid-80)',
            '900': 'var(--orange-vivid-80)',
            '950': 'var(--orange-vivid-80)'
        },
        amber: {
            '50': 'var(--orange-warm-5)',
            '100': 'var(--orange-warm-10)',
            '200': 'var(--orange-warm-20)',
            '300': 'var(--orange-warm-30)',
            '400': 'var(--orange-warm-40)',
            '500': 'var(--orange-warm-50)',
            '600': 'var(--orange-warm-60)',
            '700': 'var(--orange-warm-70)',
            '800': 'var(--orange-warm-80)',
            '900': 'var(--orange-warm-90)',
            '950': 'var(--orange-warm-90)'
        },
        yellow: {
            '50': 'var(--yellow-vivid-5)',
            '100': 'var(--yellow-vivid-10)',
            '200': 'var(--yellow-vivid-20)',
            '300': 'var(--yellow-vivid-30)',
            '400': 'var(--yellow-vivid-40)',
            '500': 'var(--yellow-vivid-50)',
            '600': 'var(--yellow-vivid-60)',
            '700': 'var(--yellow-vivid-70)',
            '800': 'var(--yellow-vivid-80)',
            '900': 'var(--yellow-vivid-80)',
            '950': 'var(--yellow-vivid-80)'
        },
        sky: {
            '50': 'var(--blue-warm-vivid-10)',
            '100': 'var(--blue-warm-vivid-10)',
            '200': 'var(--blue-warm-vivid-20)',
            '300': 'var(--blue-warm-vivid-30)',
            '400': 'var(--blue-warm-vivid-40)',
            '500': 'var(--blue-warm-vivid-50)',
            '600': 'var(--blue-warm-vivid-60)',
            '700': 'var(--blue-warm-vivid-70)',
            '800': 'var(--blue-warm-vivid-80)',
            '900': 'var(--blue-warm-vivid-90)',
            '950': 'var(--blue-warm-vivid-90)'
        },
        blue: {
            '50': 'var(--blue-warm-vivid-10)',
            '100': 'var(--blue-warm-vivid-10)',
            '200': 'var(--blue-warm-vivid-20)',
            '300': 'var(--blue-warm-vivid-30)',
            '400': 'var(--blue-warm-vivid-40)',
            '500': 'var(--blue-warm-vivid-50)',
            '600': 'var(--blue-warm-vivid-60)',
            '700': 'var(--blue-warm-vivid-70)',
            '800': 'var(--blue-warm-vivid-80)',
            '900': 'var(--blue-warm-vivid-90)',
            '950': 'var(--blue-warm-vivid-90)'
        },
        purple: {
            '50': 'var(--indigo-warm-vivid-10)',
            '100': 'var(--indigo-warm-vivid-10)',
            '200': 'var(--indigo-warm-vivid-20)',
            '300': 'var(--indigo-warm-vivid-30)',
            '400': 'var(--indigo-warm-vivid-40)',
            '500': 'var(--indigo-warm-vivid-50)',
            '600': 'var(--indigo-warm-vivid-60)',
            '700': 'var(--indigo-warm-vivid-70)',
            '800': 'var(--indigo-warm-vivid-80)',
            '900': 'var(--indigo-warm-vivid-90)',
            '950': 'var(--indigo-warm-vivid-90)'
        },
        slate: {
            '50': 'var(--gray-5)',
            '100': 'var(--gray-10)',
            '200': 'var(--gray-20)',
            '300': 'var(--gray-30)',
            '400': 'var(--gray-40)',
            '500': 'var(--gray-50)',
            '600': 'var(--gray-60)',
            '700': 'var(--color-light)',
            '800': 'var(--gray-80)',
            '900': 'var(--gray-90)',
            '950': 'var(--gray-90)'
        }
    },
    semantic: {
        primary: {
            '50': 'var(--blue-warm-vivid-10)',
            '100': 'var(--blue-warm-vivid-10)',
            '200': 'var(--blue-warm-vivid-20)',
            '300': 'var(--blue-warm-vivid-30)',
            '400': 'var(--blue-warm-vivid-40)',
            '500': 'var(--interactive-light)',
            '600': 'var(--blue-warm-vivid-60)',
            '700': 'var(--blue-warm-vivid-70)',
            '800': 'var(--blue-warm-vivid-80)',
            '900': 'var(--blue-warm-vivid-90)',
            '950': 'var(--blue-warm-vivid-90)'
        },
        formField: {
            paddingX: 'var(--spacing-scale-2x)',
            paddingY: '8px',
            sm: {
                fontSize: 'var(--font-size-scale-up-01)',
                paddingX: 'var(--spacing-scale-2x)',
                paddingY: '8px'
            }
        },
        colorScheme: {
            light: {
                surface: {
                    '0': 'var(--background-light)',
                    '50': 'var(--gray-5)',
                    '100': 'linear-gradient(rgba(var(--color-rgb), var(--hover)), rgba(var(--color-rgb), var(--hover)))',
                    '200': 'var(--gray-20)',
                    '300': 'var(--border-color-alternative)',
                    '500': 'var(--color-light)'
                },
                primary: {
                    color: 'var(--interactive-light)'
                },
                highlight: {
                    background: 'var(--selected)',
                    focusBackground: 'var(--selected) linear-gradient(rgba(var(--color-dark-rgb), var(--hover-dark)), rgba(var(--color-dark-rgb), var(--hover-dark)))',
                    color: 'var(--color-dark)',
                    focusColor: 'var(--color-dark)'
                },
                focusRing: {
                    shadow: '0 0 0 var(--surface-width-md) var(--focus)'
                },
                formField: {
                    hoverBorderColor: '{surface.300}',
                    focusBorderColor: 'var(--focus-color-light)',
                    invalidPlaceholderColor: '{surface.500}',
                    iconColor: 'var(--interactive-light)'
                }
            }
        }
    },
    components: {
        accordion: {
            panel: {
                borderWidth: '0',
                borderColor: 'transparent'
            },
            header: {
                color: 'var(--interactive)',
                hoverColor: 'var(--interactive)',
                activeColor: 'var(--interactive)',
                activeHoverColor: 'var(--interactive)',
                padding: 'var(--spacing-scale-2x) 0',
                fontWeight: 'var(--font-weight-medium)',
                borderRadius: '0',
                borderWidth: '0 0 1px 0',
                borderColor: 'var(--color-secondary-04)',
                background: 'transparent',
                hoverBackground: 'linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)))',
                activeBackground: 'transparent',
                activeHoverBackground: 'linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)))',
                focusRing: {
                    width: 'var(--focus-width)',
                    style: 'var(--focus-style)',
                    color: 'var(--focus)',
                    offset: 'var(--focus-offset)',
                    shadow: 'none'
                },
                toggleIcon: {
                    color: 'var(--interactive)',
                    hoverColor: 'var(--interactive)',
                    activeColor: 'var(--interactive)',
                    activeHoverColor: 'var(--interactive)'
                },
                first: {
                    topBorderRadius: '0',
                    borderWidth: '0 0 1px 0'
                },
                last: {
                    bottomBorderRadius: '0',
                    activeBottomBorderRadius: '0'
                }
            },
            content: {
                borderWidth: '0',
                borderColor: 'transparent',
                background: 'transparent',
                color: 'var(--text-color)',
                padding: 'var(--spacing-scale-base) var(--spacing-scale-8x) var(--spacing-scale-2x)'
            },
            colorScheme: {
                light: {
                    header: {
                        background: 'transparent',
                        hoverBackground: 'linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)))',
                        activeBackground: 'transparent',
                        activeHoverBackground: 'linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)))'
                    }
                }
            },
            css: /*css*/ `
.p-accordion {
    border-top: 1px solid var(--color-secondary-04);
}

.p-accordionpanel {
    border-bottom: 0;
}

.p-accordionheader {
    width: 100%;
    font-size: var(--font-size-scale-up-01);
    text-align: left;
    justify-content: flex-start;
}

.p-accordionpanel.p-accordionpanel-active > .p-accordionheader {
    border-bottom-width: 0;
    font-weight: var(--font-weight-semi-bold);
}

.p-accordionheader .p-accordionheader-toggle-icon {
    order: -1;
    margin-inline: var(--spacing-scale-baseh) var(--spacing-scale-2x);
}

.p-accordionpanel.p-accordionpanel-active > .p-accordioncontent > .p-accordioncontent-content {
    border-bottom: 1px solid var(--color-secondary-04);
}

.p-accordioncontent-content {
    font-size: var(--font-size-scale-base);
    margin: 0 var(--spacing-scale-base);
}

.p-accordioncontent-content *:last-child {
    margin-bottom: 0;
}

@media screen and (max-width: 576px) {
    .p-accordion .p-accordioncontent-content {
        padding-inline: 10px;
    }
}
`
        },
        button: {
            root: {
                borderRadius: '100em',
                paddingX: 'var(--spacing-scale-3x)',
                paddingY: '0',
                gap: 'var(--spacing-scale-half)',
                iconOnlyWidth: '40px',
                sm: {
                    fontSize: 'var(--font-size-scale-up-01)',
                    paddingX: 'var(--spacing-scale-3x)',
                    paddingY: '0',
                    iconOnlyWidth: '32px'
                },
                lg: {
                    fontSize: 'var(--font-size-scale-up-01)',
                    paddingX: 'var(--spacing-scale-3x)',
                    paddingY: '0',
                    iconOnlyWidth: '48px'
                },
                label: {
                    fontWeight: 'var(--font-weight-semi-bold)'
                },
                focusRing: {
                    width: 'var(--focus-width)',
                    style: 'var(--focus-style)',
                    offset: 'var(--focus-offset)'
                }
            },
            colorScheme: {
                light: {
                    root: {
                        primary: {
                            background: 'var(--interactive-light)',
                            hoverBackground: 'var(--interactive-light)',
                            activeBackground: 'var(--interactive-light)',
                            borderColor: 'transparent',
                            hoverBorderColor: 'transparent',
                            activeBorderColor: 'transparent',
                            color: 'var(--color-dark)',
                            hoverColor: 'var(--color-dark)',
                            activeColor: 'var(--color-dark)',
                            focusRing: {
                                color: 'var(--focus)',
                                shadow: 'none'
                            }
                        },
                        secondary: {
                            background: 'var(--background-light)',
                            hoverBackground: 'var(--background-light)',
                            activeBackground: 'var(--background-light)',
                            borderColor: 'var(--interactive)',
                            hoverBorderColor: 'var(--interactive)',
                            activeBorderColor: 'var(--interactive)',
                            color: 'var(--interactive)',
                            hoverColor: 'var(--interactive)',
                            activeColor: 'var(--interactive)',
                            focusRing: {
                                color: 'var(--focus)',
                                shadow: 'none'
                            }
                        },
                        success: {
                            background: 'var(--success)',
                            hoverBackground: 'var(--success)',
                            activeBackground: 'var(--success)',
                            borderColor: 'transparent',
                            hoverBorderColor: 'transparent',
                            activeBorderColor: 'transparent',
                            color: 'var(--color-dark)',
                            hoverColor: 'var(--color-dark)',
                            activeColor: 'var(--color-dark)',
                            focusRing: {
                                color: 'var(--focus)',
                                shadow: 'none'
                            }
                        },
                        danger: {
                            background: 'var(--danger)',
                            hoverBackground: 'var(--danger)',
                            activeBackground: 'var(--danger)',
                            borderColor: 'transparent',
                            hoverBorderColor: 'transparent',
                            activeBorderColor: 'transparent',
                            color: 'var(--color-dark)',
                            hoverColor: 'var(--color-dark)',
                            activeColor: 'var(--color-dark)',
                            focusRing: {
                                color: 'var(--focus)',
                                shadow: 'none'
                            }
                        },
                        warn: {
                            background: 'var(--warning)',
                            hoverBackground: 'var(--warning)',
                            activeBackground: 'var(--warning)',
                            borderColor: 'transparent',
                            hoverBorderColor: 'transparent',
                            activeBorderColor: 'transparent',
                            color: 'var(--color-light)',
                            hoverColor: 'var(--color-light)',
                            activeColor: 'var(--color-light)',
                            focusRing: {
                                color: 'var(--focus)',
                                shadow: 'none'
                            }
                        },
                        info: {
                            background: 'var(--info)',
                            hoverBackground: 'var(--info)',
                            activeBackground: 'var(--info)',
                            borderColor: 'transparent',
                            hoverBorderColor: 'transparent',
                            activeBorderColor: 'transparent',
                            color: 'var(--color-dark)',
                            hoverColor: 'var(--color-dark)',
                            activeColor: 'var(--color-dark)',
                            focusRing: {
                                color: 'var(--focus)',
                                shadow: 'none'
                            }
                        },
                        contrast: {
                            background: 'var(--interactive-dark)',
                            hoverBackground: 'var(--interactive-dark)',
                            activeBackground: 'var(--interactive-dark)',
                            borderColor: 'transparent',
                            hoverBorderColor: 'transparent',
                            activeBorderColor: 'transparent',
                            color: 'var(--background-dark)',
                            hoverColor: 'var(--background-dark)',
                            activeColor: 'var(--background-dark)',
                            focusRing: {
                                color: 'var(--focus)',
                                shadow: 'none'
                            }
                        }
                    }
                }
            },
            css: /*css*/ `
.p-button {
    height: 40px;
    border-width: 0;
    font-weight: var(--font-weight-semi-bold);
    --interactive-rgb: var(--color-dark-rgb);
}

.p-button:not(:disabled):hover {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
}

.p-button:not(:disabled):active {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
}

.p-button:not(.p-button-secondary):not(.p-button-outlined):not(:disabled):hover,
.p-button:not(.p-button-secondary):not(.p-button-outlined):not(:disabled):active {
    border-width: 0;
}

.p-button.p-button-secondary{
    --interactive-rgb: var(--interactive-light-rgb);
}

.p-button.p-button-warn,
.p-button.p-button-warning {
    --interactive-rgb: var(--color-light-rgb);
}

.p-button.p-button-sm {
    height: 32px;
}

.p-button.p-button-lg {
    height: 48px;
}

.p-button.p-button-icon-only {
    padding-inline: 0;
    width: 40px;
    border-radius: 50%;
}

.p-button.p-button-sm.p-button-icon-only {
    width: 32px;
    height: 32px;
}

.p-button.p-button-lg.p-button-icon-only {
    width: 48px;
    height: 48px;
}

.p-button.p-button-secondary,
.p-button.p-button-secondary:not(:disabled):hover,
.p-button.p-button-secondary:not(:disabled):active {
    border-width: 1px;
}

.p-button:disabled {
    cursor: not-allowed;
}

.p-button:not(:disabled):focus {
    outline: none;
}
`
        },
        card: {
            root: {
                shadow: 'var(--surface-shadow-sm);'
            },
            body: {
                padding: 'var(--spacing-scale-2x);'
            }
        },
        datatable: {
            header: {
                padding: 'var(--spacing-scale-2x) var(--spacing-scale-3x)'
            },
            headerCell: {
                padding: 'var(--spacing-scale-2x) var(--spacing-scale-3x)'
            },
            columnTitle: {
                fontWeight: 'var(--font-weight-medium)'
            },
            bodyCell: {
                padding: 'var(--spacing-scale-2x) var(--spacing-scale-3x)'
            },
            footerCell: {
                padding: 'var(--spacing-scale-2x) var(--spacing-scale-3x)'
            },
            columnFooter: {
                fontWeight: 'var(--font-weight-medium)'
            },
            footer: {
                padding: 'var(--spacing-scale-2x) var(--spacing-scale-3x)'
            }
        },
        fieldset: {
            root: {
                padding: 'inherit'
            },
            legend: {
                borderWidth: '0',
                fontWeight: 'var(--font-weight-semi-bold)'
            }
        },
        multiselect: {
            dropdown: {
                width: '32px'
            }
        },
        progressspinner: {
            colorScheme: {
                light: {
                    root: {
                        colorOne: '{primary.50}',
                        colorTwo: '{primary.200}',
                        colorThree: '{primary.500}',
                        colorFour: '{primary.900}'
                    }
                },
                dark: {
                    root: {
                        colorOne: '{primary.50}',
                        colorTwo: '{primary.200}',
                        colorThree: '{primary.500}',
                        colorFour: '{primary.900}'
                    }
                }
            }
        },
        select: {
            dropdown: {
                width: '32px'
            }
        },
        tabs: {
            tablist: {
                borderWidth: '0 0 1px 0',
                background: 'var(--background-light)'
            },
            tab: {
                borderWidth: '0 0 4px 0',
                activeBorderColor: 'var(--active)',
                activeColor: 'var(--active)',
                fontWeight: 'var(--font-weight-medium);'
            },
            tabpanel: {
                background: 'var(--background-light)',
                padding: '0'
            },
            navButton: {
                background: 'var(--background-light)'
            },
            colorScheme: {
                light: {
                    tab: {
                        background: 'var(--background-light)'
                    }
                }
            }
        }
    },
    extend: {
        primitive: {
            borderRadius: {
                button: '100em'
            }
        }
    }
});
