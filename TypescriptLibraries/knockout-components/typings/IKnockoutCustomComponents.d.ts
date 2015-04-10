declare module IKnockoutCustomComponents {
    interface NumberControl {
        component: {
            name: string;
            params: NumberControlParameters;
        }
    }

    interface NumberControlParameters {
        Value: number|KnockoutObservable<number>;
        Css?: any;
        Class?: any;
    }


    interface KnockoutComponent {
        name: string;
        config: KnockoutComponentTypes.Config;
    }
}