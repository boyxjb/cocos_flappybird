import { _decorator, Component, Node, input, Input, Label} from 'cc';

const { ccclass, property } = _decorator;

@ccclass('pan')
export class pan extends Component {
    start() {
        input.on(Input.EventType.MOUSE_UP, this.run, this);
        this.node.getChildByName("score").getComponent(Label).string = "我的钱："+this.score;

        // this.r = this.node.getChildByName("pan").angle;
    }

    isrun = false;
    ismove = false;
    score = 100;
    run() {
        this.isrun = !this.isrun;
        
        if(this.speed<=0){
            this.ismove = true;
            if(this.isrun){
                if(this.score>10){
                    this.score = this.score - 10;
                    this.node.getChildByName("score").getComponent(Label).string = "我的钱："+this.score;
                }
                
            }
            
        }
    }
    
    r=0;
    speed = 0;

    update(deltaTime: number) {
        //加速
        if(this.isrun&&this.speed<50){
            this.speed = this.speed + 0.5;
           
        }
        //减速
        if(!this.isrun&&this.speed>0){
            this.speed = this.speed - 0.1;

        }
        //运转
        if(this.speed>=0){
            this.r = this.r + this.speed;
            this.node.getChildByName("min").angle = -this.r%360; 
        }
        if(this.ismove&&this.speed<0){
            this.ismove = false;
            console.log(this.r%360);
            let minr = this.r%360;
            if(minr<30||minr>330){
                this.score += 3
                this.node.getChildByName("score").getComponent(Label).string = "我的钱："+this.score;

            }
            if(minr>30&&minr<90){
                this.score += 10
                this.node.getChildByName("score").getComponent(Label).string = "我的钱："+this.score;
            }
            if(minr>90&&minr<150){
                this.score += 2
                this.node.getChildByName("score").getComponent(Label).string = "我的钱："+this.score;
            }
            if(minr>150&&minr<210){
                this.score += 20
                this.node.getChildByName("score").getComponent(Label).string = "我的钱："+this.score;
            }
            if(minr>210&&minr<270){
                this.score += 1
                this.node.getChildByName("score").getComponent(Label).string = "我的钱："+this.score;
            }
            if(minr>270&&minr<330){
                this.score += 30
                this.node.getChildByName("score").getComponent(Label).string = "我的钱："+this.score;
            }
        }
    }
}


