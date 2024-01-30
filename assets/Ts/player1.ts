import { _decorator, Component, Node, CircleCollider2D,Contact2DType } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('player1')
export class player1 extends Component {
    start() {
        // let collider = this.node.getComponent(CircleCollider2D);
        // collider.on(Contact2DType.BEGIN_CONTACT, this.cc, this);
    }

    update(deltaTime: number) {

    }

    cc(other) {
        // console.log(other)
        // other.
        // this.node
    }
}


