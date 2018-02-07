import Triangle from './geometry/Triangle';

const shapes = [{
    name: 'triangle',
    clazz: Triangle
}];

const Geometry = function(shapeName) {
    const shape = shapes.find((s) => s.name === shapeName);
    if(!shape) {
        throw new Error(`Invalid shape ${shapeName}`);
    }
    this.shape = shape;
};

Geometry.prototype.of = function(values) {
    if(!this.shape){
        throw new Error('No shape set. Can\'t continue.');
    }

    // returns a shape.
    return this.shape.clazz.of(values);
};

Geometry.prototype.area = function(values) {
    if(!this.shape){
        throw new Error('No shape set. Can\'t continue.');
    }

    return this.shape.clazz.of(values).area;
};

Geometry.prototype.perimeter = function(values) {
    if(!this.shape){
        throw new Error('No shape set. Can\'t continue.');
    }

    return this.shape.clazz.of(values).perimeter;
};

export default Geometry;
