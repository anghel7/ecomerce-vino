export const environment = {
    production: true,
    hmr       : false,
    defaultLayoutConfig: {
        colorTheme      : 'theme-default',
        customScrollbars: true,
        layout          : {
            style    : 'vertical-layout-1',
            width    : 'fullwidth',
            navbar   : {
                primaryBackground  : 'fuse-navy-700',
                secondaryBackground: 'fuse-navy-900',
                folded             : false,
                hidden             : true,
                position           : 'left',
                variant            : 'vertical-style-1'
            },
            toolbar  : {
                customBackgroundColor: false,
                background           : 'fuse-white-500',
                hidden               : true,
                position             : 'below-static'
            },
            footer   : {
                customBackgroundColor: true,
                background           : 'fuse-navy-900',
                hidden               : true,
                position             : 'below-fixed'
            },
            sidepanel: {
                hidden  : true,
                position: 'right'
            }
        }
    }
};
