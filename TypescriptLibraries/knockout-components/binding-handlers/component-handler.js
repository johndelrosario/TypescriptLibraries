define(["require", "exports", 'knockout'], function (require, exports, ko) {
    var ComponentHandler;
    (function (ComponentHandler) {
        var componentLoadingOperationUniqueId = 0;
        ko.bindingHandlers['component'] = {
            'init': function (element, valueAccessor, ignored1, ignored2, bindingContext) {
                var currentViewModel, currentLoadingOperationId, disposeAssociatedComponentViewModel = function () {
                    var currentViewModelDispose = currentViewModel && currentViewModel['dispose'];
                    if (typeof currentViewModelDispose === 'function') {
                        currentViewModelDispose.call(currentViewModel);
                    }
                    // Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
                    currentLoadingOperationId = null;
                }, originalChildNodes = ko.utils.makeArray(ko.virtualElements.childNodes(element));
                ko.utils.domNodeDisposal.addDisposeCallback(element, disposeAssociatedComponentViewModel);
                ko.computed(function () {
                    var value = ko.utils.unwrapObservable(valueAccessor()), componentName, componentParams;
                    if (typeof value === 'string') {
                        componentName = value;
                    }
                    else {
                        componentName = ko.utils.unwrapObservable(value['name']) || ko.components['getComponentNameForNode'](element);
                        componentParams = ko.utils.unwrapObservable(value['params']);
                    }
                    if (!componentName) {
                        throw new Error('No component name specified or custom element doesn\'t match component');
                    }
                    var loadingOperationId = currentLoadingOperationId = ++componentLoadingOperationUniqueId;
                    ko.components.get(componentName, function (componentDefinition) {
                        // If this is not the current load operation for this element, ignore it.
                        if (currentLoadingOperationId !== loadingOperationId) {
                            return;
                        }
                        // Clean up previous state
                        disposeAssociatedComponentViewModel();
                        // Instantiate and bind new component. Implicitly this cleans any old DOM nodes.
                        if (!componentDefinition) {
                            throw new Error('Unknown component \'' + componentName + '\'');
                        }
                        cloneTemplateIntoElement(componentName, componentDefinition, element);
                        var componentViewModel = createViewModel(componentDefinition, element, originalChildNodes, componentParams), childBindingContext = bindingContext['createChildContext'](componentViewModel, undefined, function (ctx) {
                            ctx['$component'] = componentViewModel;
                            ctx['$componentTemplateNodes'] = originalChildNodes;
                        });
                        currentViewModel = componentViewModel;
                        // extend existing ViewModel bindings
                        if (ko.bindingProvider.instance['registerBindings']) {
                            ko.bindingProvider.instance.registerBindings(currentViewModel);
                        }
                        else {
                            throw new Error('Class binding provider must first be loaded to use custom component handler.');
                        }
                        ko.applyBindingsToDescendants(childBindingContext, element);
                    });
                }, null, { disposeWhenNodeIsRemoved: element });
                return { 'controlsDescendantBindings': true };
            }
        };
        ko.virtualElements.allowedBindings['component'] = true;
        function cloneTemplateIntoElement(componentName, componentDefinition, element) {
            var template = componentDefinition['template'];
            if (!template) {
                throw new Error('Component \'' + componentName + '\' has no template');
            }
            var clonedNodesArray = ko.utils.cloneNodes(template, false);
            ko.virtualElements.setDomNodeChildren(element, clonedNodesArray);
        }
        function createViewModel(componentDefinition, element, originalChildNodes, componentParams) {
            var componentViewModelFactory = componentDefinition['createViewModel'];
            return componentViewModelFactory ? componentViewModelFactory.call(componentDefinition, componentParams, { 'element': element, 'templateNodes': originalChildNodes }) : componentParams; // Template-only component
        }
    })(ComponentHandler || (ComponentHandler = {}));
});
//# sourceMappingURL=component-handler.js.map