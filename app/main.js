"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const core_1 = require('@angular/core');
const app_component_1 = require('./app.component');
const environment_1 = require('./environment');
const app_routes_1 = require('./router.component/app.routes');
const http_1 = require("@angular/http");
const shopping_list_service_1 = require("./services/shopping-list.service");
const forms_1 = require('@angular/forms');
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS, shopping_list_service_1.ShoppingListService,
    forms_1.disableDeprecatedForms(), forms_1.provideForms()
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJDQUEwQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQzlELHVCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxnQ0FBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyw4QkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMsNkJBQXFDLCtCQUErQixDQUFDLENBQUE7QUFDckUsdUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHdDQUFvQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3ZFLHdCQUFxRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBRXRFLEVBQUUsQ0FBQyxDQUFDLHlCQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzQixxQkFBYyxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQUVELG9DQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLHFCQUFjLEVBQUUsaUNBQW9CLEVBQUUsMkNBQW1CO0lBQ2pGLDhCQUFzQixFQUFFLEVBQUUsb0JBQVksRUFBRTtDQUN4QyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IEFQUF9ST1VURVJfUFJPVklERVJTIH0gZnJvbSAnLi9yb3V0ZXIuY29tcG9uZW50L2FwcC5yb3V0ZXMnO1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IFNob3BwaW5nTGlzdFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZGlzYWJsZURlcHJlY2F0ZWRGb3JtcywgcHJvdmlkZUZvcm1zIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcclxuICBlbmFibGVQcm9kTW9kZSgpO1xyXG59XHJcblxyXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbSFRUUF9QUk9WSURFUlMsIEFQUF9ST1VURVJfUFJPVklERVJTLCBTaG9wcGluZ0xpc3RTZXJ2aWNlLFxyXG5cdGRpc2FibGVEZXByZWNhdGVkRm9ybXMoKSwgcHJvdmlkZUZvcm1zKClcclxuXSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
