/**
 * Defines a system of units. For example, metric and imperial.
 */
export default class System {
    /**
     * The constructor
     * @param  {String} name - the name of the system. Has to be unique by Descriptor.
     * @param  {[type]} ratios - collection of ratios to convert between base system values.
     * For example, between Metric(Celsius) and Imperial(Fahrenheit) and viceversa.
     * @return {System} a new instance
     */
    constructor(name, ratios){
        this.name = name;
        this.ratios = ratios;
    }
}
