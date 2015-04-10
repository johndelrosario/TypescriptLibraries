﻿/// TODO LIST
/// 1. Include custom control prefix in binding handler overrides

// knockout-classBindingProvider 0.5.0 | (c) 2013 Ryan Niemeyer |  http://www.opensource.org/licenses/mit-license
; (function (factory) {
    //AMD
    if (typeof define === "function" && define.amd) {
        define(["knockout", "exports"], factory);
        //normal script tag
    } else {
        factory(ko);
    }
}(function (ko, exports, undefined) {
    var objectMap = function (source, mapping) {
        var target, prop;

        if (!source) {
            return source;
        }

        target = {};
        for (prop in source) {
            if (source.hasOwnProperty(prop)) {
                target[prop] = mapping(source[prop], prop, source);
            }
        }
        return target;
    };

    var makeValueAccessor = function (value) {
        return function () {
            return value;
        };
    };

    // Make Knockout think that we're using observable view models by adding a "_subscribable" function to all binding contexts.
    // This makes Knockout watch any observables accessed in the getBindingAccessors function.
    // Hopefully this hack will be unnecessary in later versions.
    if (ko.version >= "3.0.0") {
        (function () {
            // Create and retrieve a binding context object
            var dummyDiv = document.createElement('div');
            ko.applyBindings(null, dummyDiv);
            var context = ko.contextFor(dummyDiv);

            // Add a dummy _subscribable, with a dummy _addNode, to the binding context prototype
            var isMinified = !ko.storedBindingContextForNode,
                subscribableName = isMinified ? 'A' : '_subscribable',
                addNodeName = isMinified ? 'wb' : '_addNode',
                dummySubscribable = function () { };
            dummySubscribable[addNodeName] = dummySubscribable;
            context.constructor.prototype[subscribableName] = dummySubscribable;

            ko.cleanNode(dummyDiv);
        })();
    }

    //a bindingProvider that uses something different than data-bind attributes
    //  bindings - an object that contains the binding classes
    //  options - is an object that can include "attribute", "virtualAttribute", bindingRouter, and "fallback" options
    var classBindingsProvider = function (bindings, options) {
        var existingProvider = new ko.bindingProvider();

        options = options || {};

        //override the attribute
        this.attribute = options.attribute || "data-class";

        //override the virtual attribute
        this.virtualAttribute = "ko " + (options.virtualAttribute || "class") + ":";

        //fallback to the existing binding provider, if bindings are not found
        this.fallback = options.fallback;

        //this object holds the binding classes
        this.bindings = bindings || {};

        //returns a binding class, given the class name and the bindings object
        this.bindingRouter = options.bindingRouter || function (className, bindings, componentName) {
            var i, j, classPath, bindingObject;

            if (componentName && !className) {
                return { component: componentName };
            }

            //if the class name matches a property directly, then return it
            if (bindings[className]) {
                bindingObject = bindings[className];

                if (componentName) {
                    return unwrapComponent(componentName, bindingObject);
                } else {
                    return bindingObject;
                }
            }

            //search for sub-properites that might contain the bindings
            classPath = className.split("."); bindings
            bindingObject = bindings;

            for (i = 0, j = classPath.length; i < j; i++) {
                bindingObject = bindingObject[classPath[i]];
            }

            if (componentName) {
                return unwrapComponent(componentName, bindingObject);
            } else {
                return bindingObject;
            }
        };

        //private utility function to form component binding
        //this extracts the params object from the declared bindings
        function unwrapComponent(componentName, bindings) {
            var component = {};

            if (typeof bindings === 'function') {
                ko.utils.extend(component, bindings());
            } else {
                ko.utils.extend(component, bindings);
            }
            return component;
        }

        //allow bindings to be registered after instantiation
        this.registerBindings = function (newBindings) {
            ko.utils.extend(this.bindings, newBindings);
        };

        //determine if an element has any bindings
        this.nodeHasBindings = function (node) {
            var result, value;

            if (node.nodeType === 1) {
                result = node.getAttribute(this.attribute) || ko.components['getComponentNameForNode'](node);
            }
            else if (node.nodeType === 8) {
                value = "" + node.nodeValue || node.text;
                result = value.indexOf(this.virtualAttribute) > -1;
            }

            if (!result && this.fallback) {
                result = existingProvider.nodeHasBindings(node);
            }

            return result;
        };

        //return the bindings given a node and the bindingContext
        this.getBindingsFunction = function (getAccessors) {
            return function (node, bindingContext) {
                var i, j, bindingAccessor, binding,
                    result = {},
                    value, index,
                    classes = "",
                    isNodeComponent;

                if (node.nodeType === 1) {
                    classes = node.getAttribute(this.attribute);
                    isNodeComponent = ko.components['getComponentNameForNode'](node);
                } else if (node.nodeType === 8) {
                    value = "" + node.nodeValue || node.text;
                    index = value.indexOf(this.virtualAttribute);

                    if (index > -1) {
                        classes = value.substring(index + this.virtualAttribute.length);
                    }
                }

                if (classes || isNodeComponent) {
                    if (classes) {
                        classes = classes.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "").replace(/(\s|\u00A0){2,}/g, " ").split(' ');
                        //evaluate each class, build a single object to return
                        for (i = 0, j = classes.length; i < j; i++) {
                            bindingAccessor = this.bindingRouter(classes[i], this.bindings, isNodeComponent);
                            if (bindingAccessor) {
                                binding = typeof bindingAccessor == "function" ? bindingAccessor.call(bindingContext.$data, bindingContext, classes) : bindingAccessor;
                                if (getAccessors)
                                    binding = objectMap(binding, makeValueAccessor);
                                ko.utils.extend(result, binding);
                            }
                        }
                    }
                        // If node is component without parameters / template component
                    else {
                        bindingAccessor = this.bindingRouter(null, this.bindings, isNodeComponent);
                        if (bindingAccessor) {
                            binding = typeof bindingAccessor == "function" ? bindingAccessor.call(bindingContext.$data, bindingContext, classes) : bindingAccessor;
                            if (getAccessors)
                                binding = objectMap(binding, makeValueAccessor);
                            ko.utils.extend(result, binding);
                        }
                    }
                }
                else if (this.fallback) {
                    result = existingProvider[getAccessors ? 'getBindingAccessors' : 'getBindings'](node, bindingContext);
                }

                return result;
            };
        };

        this.getBindings = this.getBindingsFunction(false);
        this.getBindingAccessors = this.getBindingsFunction(true);
    };

    if (!exports) {
        ko.classBindingProvider = classBindingsProvider;
    }

    return classBindingsProvider;
}));