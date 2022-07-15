// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr       : false,
    defaultLayoutConfig: {
        colorTheme      : 'theme-default',
        customScrollbars: true,
        layout          : {
            style    : 'vertical-layout-1',
            width    : 'boxed',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
