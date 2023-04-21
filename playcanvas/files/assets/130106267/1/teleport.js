var Teleport = pc.createScript('teleport');

Teleport.attributes.add('target', {
    type: 'entity',
    title: 'Target Entity',
    description: 'The target entity where we are going to teleport'
});

// initialize code called once per entity
Teleport.prototype.initialize = function() {
    this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
};

Teleport.prototype.onTriggerEnter = function (otherEntity) { 
    this.app.fire('app:teleportRequest', otherEntity);
};
