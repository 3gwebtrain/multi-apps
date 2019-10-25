import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IboLibraryService {
    constructor() { }
}
IboLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
IboLibraryService.ctorParameters = () => [];
/** @nocollapse */ IboLibraryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function IboLibraryService_Factory() { return new IboLibraryService(); }, token: IboLibraryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IboLibraryComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
IboLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ibo-library',
                template: "<p>Frome Paragrap tag</p>",
                styles: ["p{border:1px solid red}"]
            }] }
];
/** @nocollapse */
IboLibraryComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibHeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LibHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-lib-header',
                template: "<p>lib-header works! input will be updated</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LibHeaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IboLibraryModule {
}
IboLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IboLibraryComponent, LibHeaderComponent],
                imports: [],
                exports: [IboLibraryComponent, LibHeaderComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IboLibraryComponent, IboLibraryModule, IboLibraryService, LibHeaderComponent as ɵa };
//# sourceMappingURL=ibo-library.js.map
