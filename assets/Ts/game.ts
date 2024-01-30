import { _decorator, Component, Node, sp, CircleCollider2D,Label, BoxCollider2D,ProgressBar, Contact2DType, Animation, AnimationState, RigidBody2D, EventTouch, Vec2, Collider2D, IPhysics2DContact, Vec3, input, Input, EventKeyboard, KeyCode } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('game')
export class game extends Component {

    birdBody = null;
    myspine;
    xuecount = 9999;//总共的血
    xuecurr = this.xuecount;//当前的血
    start() {
        this.myspine = this.node.getChildByName("mm").getComponent(sp.Skeleton);
        this.myspine.setAnimation(0, "stand", true);
        this.node.getChildByName("xue").getComponent(Label).string = this.xuecount.toString();
        // // this.myspine.setMix("stand","",0.2);


        // this.birdBody = this.node.getChildByName("bird").getComponent(RigidBody2D);

        // animation.getState("animation").repeatCount = 100;//循环100次
        // animation.getState("animation").speed = 0.5;//速度，值越大速度越快
        // animation.play("animation");//如果不写组名就播放默认的动画
        // input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        // input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);

        // let collider = this.node.getChildByName("bird").getComponent(BoxCollider2D);
        // collider.on(Contact2DType.BEGIN_CONTACT, this.cc, this);


        // this.node.getChildByName("land1").getPosition(this.land1);
        // this.node.getChildByName("land2").getPosition(this.land2);

        // this.node.getChildByName("pipe_down").getPosition(this.pipe_down);
        // this.node.getChildByName("pipe_up").getPosition(this.pipe_up);



    }

    cc(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // this.gameover = true;
        console.log("gameover")
    }

    // onKeyDown(event: EventKeyboard) {
    //     console.log('Press a key');
    //     switch (event.keyCode) {
    //         case KeyCode.KEY_W:
    //             // this.birdBody.linearVelocity = new Vec2(5,0);//让小鸟右飞
    //             var v = this.birdBody.linearVelocity;
    //             v.y = 10;
    //             this.birdBody.linearVelocity = v;
    //             break;
    //         case KeyCode.KEY_A:
    //             // this.birdBody.linearVelocity = new Vec2(5,0);//让小鸟右飞
    //             var v = this.birdBody.linearVelocity;
    //             v.x = -5;
    //             this.birdBody.linearVelocity = v;
    //             break;

    //         case KeyCode.KEY_D:
    //             // this.birdBody.linearVelocity = new Vec2(5,0);//让小鸟右飞
    //             var v = this.birdBody.linearVelocity;
    //             v.x = 5;
    //             this.birdBody.linearVelocity = v;
    //             break;
    //         case KeyCode.KEY_S:
    //             // this.birdBody.linearVelocity = new Vec2(5,0);//让小鸟右飞
    //             var v = this.birdBody.linearVelocity;
    //             v.x = -10;
    //             this.birdBody.linearVelocity = v;
    //             break;
    //     }
    // }

    land1: Vec3 = new Vec3();
    land2: Vec3 = new Vec3();

    pipe_down: Vec3 = new Vec3();
    pipe_up: Vec3 = new Vec3();
    aa = false;

    onTouchStart(e: EventTouch) {
        // this.aa = true;
        console.log("点击")

        
        this.myspine.setAnimation(0, "attack", false);
        let xx = this.node.getChildByName("ProgressBar").getComponent(ProgressBar).progress;
        xx = xx - 100/this.xuecount;
        console.log(xx);
        this.node.getChildByName("ProgressBar").getComponent(ProgressBar).progress =xx;


        // this.scheduleOnce(function () {//延迟一次//以秒为单位
        //     this.myspine.setAnimation(0, "stand", true);
        // },3/10);


    }

    // onTouchEnd(e: EventTouch) {
    //     console.log("点击2")
    //     this.aa = false;
    // }
    // gameover = true;

    update(deltaTime: number) {

        // if (!this.gameover) {

        //     // if(this.aa){
        //     //     this.birdBody.linearVelocity = new Vec2(0,5);//让小鸟上升5的高度
        //     // } 


        //     this.land1.x = this.land1.x - 2;
        //     // console.log(this.land1.x)
        //     this.node.getChildByName("land1").setPosition(this.land1);

        //     if (this.land1.x < -640) {
        //         this.land1.x = 640;
        //     }

        //     this.land2.x = this.land2.x - 2;
        //     // console.log(this.land2.x)
        //     this.node.getChildByName("land2").setPosition(this.land2);
        //     if (this.land2.x < -640) {
        //         this.land2.x = 640;
        //     }



        //     this.pipe_down.x = this.pipe_down.x - 2;
        //     // console.log(this.pipe_down.x)
        //     this.node.getChildByName("pipe_down").setPosition(this.pipe_down);

        //     if (this.pipe_down.x < -354) {
        //         this.pipe_down.x = 354;
        //     }

        //     this.pipe_up.x = this.pipe_up.x - 2;
        //     // console.log(this.land2.x)
        //     this.node.getChildByName("pipe_up").setPosition(this.pipe_up);
        //     if (this.pipe_up.x < -354) {
        //         this.pipe_up.x = 354;
        //     }
        // }

    }


}


