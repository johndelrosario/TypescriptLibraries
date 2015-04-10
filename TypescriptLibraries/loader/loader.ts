import ko = require('knockout');
import $ = require('jquery');

module Loader {

    interface ViewModel {
        isAppLoading: KnockoutObservable<boolean>;
    }

    class Loader {
        private static _instance: Loader = null;
        public static get Instance(): Loader {
            if (Loader._instance === null) {
                Loader._instance = new Loader();
            }
            return Loader._instance;
        }
        private viewModel: ViewModel;
        private loaderElement: HTMLElement;

        constructor() {
            if (Loader._instance) {
                throw new Error("Loader already instantiated");
            }
            this.viewModel = {
                isAppLoading: ko.observable(false)
            };
            Loader._instance = this;
        }

        private validateElement() {
            if (Loader._instance.loaderElement === null) {
                throw new Error("Loading bar spinner markup must exist in the document");
            }
        }

        private whenLoading() {
            Loader._instance.viewModel.isAppLoading(true);
        }

        private whenLoadingStopped() {
            Loader._instance.viewModel.isAppLoading(false);
        }

        public Initialize() {
            Loader._instance.validateElement();
            debugger;
            $(document).ajaxStart(Loader._instance.whenLoading);
            $(document).ajaxStop(Loader._instance.whenLoadingStopped);
            ko.applyBindings(Loader._instance.viewModel, Loader._instance.loaderElement);
        }
    }
    $(document).ready(Loader.Instance.Initialize);
}



export function sender(params: JQueryAjaxSettings = {}) {
    params.url = "http://api.github.com";
    params.type = "GET";
    $.ajax(params);
}