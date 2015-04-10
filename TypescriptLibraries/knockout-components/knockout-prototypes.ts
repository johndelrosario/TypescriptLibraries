import subsribeChanged = require('./prototypes/subscribe-changed');

module KnockoutPrototypes {
    export function applySubsribeChanged() {
        subsribeChanged();
    };

    export function applyAll() {
        subsribeChanged();
    }
}

export = KnockoutPrototypes;