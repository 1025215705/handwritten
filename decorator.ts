class Plane {
    fire(){
        console.log('发射普通子弹');
    }
} 
// 接下来增加两个装饰类，分别是导弹和原子弹：
class MissileDecorator {
    plane: any;
    constructor(plane: any) {
        this.plane = plane;
    }
    fire() {
        this.plane.fire();
        console.log('发射导弹');
    }
}
class AtomDecorator {
    plane: any;
    constructor(plane: any) {
        this.plane = plane;
    }
    fire() {
        this.plane.fire();
        console.log('发射原子弹');
    }
}
var plane = new Plane();
plane = new MissileDecorator(plane);
plane = new AtomDecorator(plane);
plane.fire();
