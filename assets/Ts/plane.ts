import { _decorator, Component, Node, input, Input, Collider2D,Vec3,IPhysics2DContact,UITransform, EventKeyboard, KeyCode, RigidBody2D, Label, Vec2, CircleCollider2D, Contact2DType } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('plane')
export class plane extends Component {

    start() {
        //玩家1
        input.on(Input.EventType.KEY_DOWN, this.keyDown, this);
        input.on(Input.EventType.KEY_UP, this.keyUp, this);
        this.v1 = this.node.getChildByName("player").getPosition();
        this.v2 = this.node.getChildByName("player2").getPosition();


        //球
        this.vBall = this.node.getChildByName("ball").getPosition();
        this.node.getChildByName("ball").getComponent(CircleCollider2D).on(Contact2DType.BEGIN_CONTACT, this.cc, this);

        this.ww = this.node.getComponent(UITransform).contentSize.width;
        this.wh = this.node.getComponent(UITransform).contentSize.height;

    }
    ww;
    wh;


    cc(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // console.log(other)
        // other.
        this.newball();

        console.log(otherCollider.tag)
        if(otherCollider.tag == 1){
            this.score1++;
            this.node.getChildByName("score1").getComponent(Label).string = "红色：" + this.score1;
        }
        if(otherCollider.tag == 2){
            this.score2++;
            this.node.getChildByName("score2").getComponent(Label).string = "蓝色：" + this.score2;
        }

    }

    vBall: Vec3;
    score1 = 0;
    score2 = 0;

    v1;
    speed = 8;
    left1 = false;
    right1 = false;
    up1 = false;
    down1 = false;

    v2;
    left2 = false;
    right2 = false;
    up2 = false;
    down2 = false;
    keyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.ARROW_LEFT:
                this.left1 = true;
                break;
            case KeyCode.ARROW_RIGHT:
                this.right1 = true;
                break;
            case KeyCode.ARROW_UP:
                this.up1 = true;
                break;
            case KeyCode.ARROW_DOWN:
                this.down1 = true;
                break;
            case KeyCode.KEY_A:
                this.left2 = true;
                break;
            case KeyCode.KEY_D:
                this.right2 = true;
                break;
            case KeyCode.KEY_W:
                this.up2 = true;
                break;
            case KeyCode.KEY_S:
                this.down2 = true;
                break;
        }



    }

    keyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.ARROW_LEFT:
                this.left1 = false;
                break;
            case KeyCode.ARROW_RIGHT:
                this.right1 = false;
                break;
            case KeyCode.ARROW_UP:
                this.up1 = false;
                break;
            case KeyCode.ARROW_DOWN:
                this.down1 = false;
                break;
            case KeyCode.KEY_A:
                this.left2 = false;
                break;
            case KeyCode.KEY_D:
                this.right2 = false;
                break;
            case KeyCode.KEY_W:
                this.up2 = false;
                break;
            case KeyCode.KEY_S:
                this.down2 = false;
                break;
        }
    }

    
    rand(min:any,max:any){
        var num = Math.random()*(max+1-min) + min;
        num = parseInt(num, 10);
        return num
    }

    rand2(start:number,end:number ){
        return Math.floor(start+(end-start)*Math.random())
    }

    newball(){
        this.vBall.y = this.wh/2;
        // let aa = 200;//this.rand2(200,300);
        // console.log(aa+200)
        this.vBall.x = this.rand2( -this.ww/2,this.ww/2);
;
    }
      

    update(deltaTime: number) {

        if (this.vBall.y < -this.wh/2) {

            this.newball();
            
        }
        this.vBall.y = this.vBall.y - 5;
        this.node.getChildByName("ball").setPosition(this.vBall)

        if (this.left1) {
            this.v1.x = this.v1.x - this.speed;

        }
        if (this.right1) {
            this.v1.x = this.v1.x + this.speed;

        }
        if (this.up1) {
            this.v1.y = this.v1.y + this.speed;
        }
        if (this.down1) {
            this.v1.y = this.v1.y - this.speed;
        }



        this.node.getChildByName("player").setPosition(this.v1);


        
        if (this.left2) {
            this.v2.x = this.v2.x - this.speed;

        }
        if (this.right2) {
            this.v2.x = this.v2.x + this.speed;

        }
        if (this.up2) {
            this.v2.y = this.v2.y + this.speed;
        }
        if (this.down2) {
            this.v2.y = this.v2.y - this.speed;
        }

        this.node.getChildByName("player2").setPosition(this.v2);

    }
}


