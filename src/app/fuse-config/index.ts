import { FuseConfig } from '@fuse/types';
import { environment } from '../../environments/environment';

/**
 * Default Fuse Configuration
 *
 * You can edit these options to change the default options. All these options also can be
 * changed per component basis. See `app/main/pages/authentication/login/login.component.ts`
 * constructor method to learn more about changing these options per component basis.
 */

export const fuseConfig: FuseConfig = {
    // Color themes can be defined in src/app/app.theme.scss
    colorTheme      : 'theme-default',
    customScrollbars: true,
    layout          : {
        style    : 'vertical-layout-1',
        width    : environment.defaultLayoutConfig.layout.width,
        navbar   : {
            primaryBackground  : 'fuse-navy-700',
            secondaryBackground: 'fuse-navy-900',
            folded             : false,
            hidden             : environment.defaultLayoutConfig.layout.navbar.hidden,
            position           : 'left',
            variant            : 'vertical-style-1'
        },
        toolbar  : {
            customBackgroundColor: false,
            background           : 'fuse-white-500',
            hidden               : environment.defaultLayoutConfig.layout.toolbar.hidden,
            position             : 'below-static'
        },
        footer   : {
            customBackgroundColor: true,
            background           : 'fuse-navy-900',
            hidden               : environment.defaultLayoutConfig.layout.footer.hidden,
            position             : 'below-fixed'
        },
        sidepanel: {
            hidden  : environment.defaultLayoutConfig.layout.sidepanel.hidden,
            position: 'right'
        }
    }
};
