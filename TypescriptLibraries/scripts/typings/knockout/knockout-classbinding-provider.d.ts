interface KnockoutClassBindingProvider {
    new (Bindings: any, Options?: KnockoutClassBindingProviderSettingsOptions) : KnockoutClassBindingProviderInstance;
    
}

interface KnockoutClassBindingProviderInstance extends KnockoutBindingProvider {
    attribute: string;
    bindingRouter(className: string, bindings: any): void;
    bindings: any;
    getBindingsFunction(getAccessors: boolean): (node: HTMLElement, bindingContext: KnockoutBindingContext) => any;
    registerBindings(newBindings: any): void;
    virtualAttribute: string;
}

interface KnockoutClassBindingProviderSettingsOptions {
    VirtualAttribute?: string;
    FallBack?: any;
    BindingRouter?: (ClassName: string, Bindings: any) => any;
}

interface KnockoutFunctionBindingComponent {
    Name: string|((...Params: any[]) => string);
    Params?: any;
}

declare var koClassBindingProvider: KnockoutClassBindingProvider;

declare module "knockout-classbinding-provider" {
    export = koClassBindingProvider;
}
