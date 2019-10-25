import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IboLibraryService = /** @class */ (function () {
    function IboLibraryService() {
    }
    IboLibraryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    IboLibraryService.ctorParameters = function () { return []; };
    /** @nocollapse */ IboLibraryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function IboLibraryService_Factory() { return new IboLibraryService(); }, token: IboLibraryService, providedIn: "root" });
    return IboLibraryService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IboLibraryComponent = /** @class */ (function () {
    function IboLibraryComponent() {
    }
    /**
     * @return {?}
     */
    IboLibraryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    IboLibraryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ibo-library',
                    template: "<p>Frome Paragrap tag</p>",
                    styles: ["p{border:1px solid red}"]
                }] }
    ];
    /** @nocollapse */
    IboLibraryComponent.ctorParameters = function () { return []; };
    return IboLibraryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibHeaderComponent = /** @class */ (function () {
    function LibHeaderComponent() {
    }
    /**
     * @return {?}
     */
    LibHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LibHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-lib-header',
                    template: "<p>lib-header works! input will be updated</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LibHeaderComponent.ctorParameters = function () { return []; };
    return LibHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IboLibraryModule = /** @class */ (function () {
    function IboLibraryModule() {
    }
    IboLibraryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IboLibraryComponent, LibHeaderComponent],
                    imports: [],
                    exports: [IboLibraryComponent, LibHeaderComponent]
                },] }
    ];
    return IboLibraryModule;
}());

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
