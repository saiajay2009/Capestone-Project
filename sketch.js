const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var wall_1,wall_2,wall_3,wall_4,wall_5,wall_6,wall_7,wall_8,wall_9,wall_10,ball;
var wall_11,wall_12,wall_13,wall_14,wall_15,wall_16,wall_17,wall_18,wall_19,wall_20;
var wall_21,wall_22,wall_23,wall_24,wall_25,wall_26,wall_27,wall_28,wall_29,wall_30;
var wall_31,wall_32,wall_33,wall_34,wall_35,wall_36,wall_37,wall_38,wall_39,wall_40;
var wall_41,wall_42,wall_43,wall_44,wall_45,wall_46,wall_47,wall_48,wall_49,wall_50;
var wall_51,wall_52,wall_53,wall_54,wall_55,wall_56,wall_57,wall_58,wall_59,wall_60;
var wall_61,wall_62,wall_63,wall_64,wall_65,wall_66,wall_67,wall_68,wall_69,wall_70;
var wall_71,wall_72,wall_73,wall_74,wall_75,wall_76,wall_77,wall_78,wall_79,wall_80;
var enemy1,enemy2;
function preload() {
ball_icon = loadImage("ball-icon-png-4628.png");
}

function setup()                                          
{
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();                                      
  world = engine.world;
         
  wall_1 = new Danger(650,530,1000,15)
  wall_2 = new Danger(650,50,1000,15)
  wall_3 = new Danger(157,289,15,470)
  wall_4 = new Danger(1143,289,15,470)
  wall_5 = new Ground(235,300,140,8)
  wall_6 = new Ground(255,330,180,8)
  wall_7 = new Ground(301,231,8,140)
  wall_8 = new Ground(339,261,8,130)
  wall_9 = new Ground(400,165,200,8)
  wall_10 = new Ground(365,200,50,8)
  wall_11 = new Ground(450,200,50,8)
  wall_12 = new Ground(429,250,8,100)
  wall_13 = new Ground(510,293,80,8)
  wall_14 = new Ground(453,365,50,8)
  wall_15 = new Ground(365,330,50,8)
  wall_16 = new Ground(300,365,180,8)
  wall_17 = new Ground(386,245,8,95)
  wall_18 = new Ground(207,413,8,104)
  wall_19 = new Ground(429,315,8,40)
  wall_20 = new Ground(523,331,180,8)
  wall_21 = new Ground(496,130,8,75)
  wall_22 = new Ground(600,200,180,8)
  wall_23 = new Ground(627,165,180,8)
  wall_24 = new Ground(540,130,8,75)
  wall_25 = new Ground(471,230,8,59)
  wall_26 = new Ground(513,227,8,59)
  wall_27 = new Ground(409,96,180,8)
  wall_28 = new Ground(265,89,8,85)
  wall_29 = new Danger(210,159,8,225)
  wall_30 = new Ground(254,210,8,110)
  wall_31 = new Ground(351,135,180,8)
  wall_32 = new Ground(298,500,180,8)
  wall_33 = new Ground(339,450,180,8)
  wall_34 = new Ground(265,390,8,50)
  wall_35 = new Ground(310,425,8,50)
  wall_36 = new Ground(355,390,8,50)
  wall_37 = new Ground(530,390,8,50)
  wall_38 = new Danger(490,450,180,8)
  wall_39 = new Ground(450,390,8,50)
  wall_40 = new Ground(405,425,8,50)
  wall_41 = new Ground(713,186,8,35)
  wall_42 = new Ground(700,200,20,8)
  wall_43 = new Ground(720,450,180,8)
  wall_44 = new Ground(520,500,180,8)
  wall_45 = new Ground(610,300,8,200)
  wall_46 = new Ground(800,400,180,8)
  wall_47 = new Ground(660,330,8,160)
  wall_48 = new Ground(886,362,8,69)
  wall_49 = new Ground(1045,285,180,8)
  wall_50 = new Ground(1045,330,180,8)
  wall_51 = new Danger(714,168,8,225)
  wall_52 = new Danger(714,487,8,70)
  wall_53 = new Danger(810,429,8,50)
  wall_54 = new Danger(627,120,90,8)
  wall_55 = new Ground(800,285,180,8)
  wall_56 = new Danger(800,330,180,8)
  wall_57 = new Ground(850,90,180,8)
  wall_58 = new Ground(763,127,8,80)
  wall_59 = new Ground(899,130,180,8)
  wall_60 = new Ground(985,90,8,80)
  wall_61 = new Ground(849,170,180,8)
  wall_62 = new Ground(763,245,8,80)
  wall_63 = new Ground(849,207,180,8)
  wall_64 = new Ground(1080,207,129,8)
  wall_65 = new Ground(1040,170,205,8)
  wall_66 = new Ground(1075,129,70,8)
  wall_67 = new Ground(977,245,250,8)
  wall_68 = new Ground(1078,400,8,80)
  wall_69 = new Ground(1075,90,70,8)
  wall_70 = new Ground(890,490,250,8)
  wall_71 = new Ground(967,440,230,8)
  wall_72 = new Ground(967,400,230,8)


 ball = createSprite(200,315,100,10);
  ball.addImage("ball",ball_icon);
  ball.scale = 0.08;

  enemy1 = createSprite(400,315,100,10);
  enemy1.scale = 0.08
  
  enemy2 = createSprite(800,315,100,10);
  enemy2.scale = 0.1
  
  }

  function draw() {
  background(0);
  Engine.update(engine);
  wall_1.show();
  wall_2.show();
  wall_3.show();
  wall_4.show();
  wall_5.show();
  wall_6.show();
  wall_7.show();
  wall_8.show();
  wall_9.show();
  wall_10.show();
  wall_11.show();
  wall_12.show();
  wall_13.show();
  wall_14.show();
  wall_15.show();
  wall_16.show();
  wall_17.show();
  wall_18.show();
  wall_19.show();
  wall_20.show();
  wall_21.show();
  wall_22.show();
  wall_23.show();
  wall_24.show();
  wall_25.show();
  wall_26.show();
  wall_27.show();
  wall_28.show();
  wall_29.show();
  wall_30.show();
  wall_31.show();
  wall_32.show();
  wall_33.show();
  wall_34.show();
  wall_35.show();
  wall_36.show();
  wall_37.show();
  wall_38.show();
  wall_39.show();
  wall_40.show();
  wall_41.show();
  wall_42.show();
  wall_43.show();
  wall_44.show();
  wall_45.show();
  wall_46.show();
  wall_47.show();
  wall_48.show();
  wall_49.show();
  wall_50.show();
  wall_51.show();
  wall_52.show();
  wall_53.show();
  wall_54.show();
  wall_55.show();
  wall_56.show();
  wall_57.show();
  wall_58.show();
  wall_59.show();
  wall_60.show();
  wall_61.show();
  wall_62.show();
  wall_63.show();
  wall_64.show();
  wall_65.show();
  wall_66.show();
  wall_67.show();
  wall_68.show();
  wall_69.show();
  wall_70.show();
  wall_71.show();
  wall_72.show();
  /*wall_73.show();
  wall_74.show();
  wall_75.show();
  wall_76.show();
  wall_77.show();
  wall_78.show();
  wall_79.show();
  wall_80.show();*/
  if (keyIsDown(UP_ARROW)) {
    ball.y -= 5;
  } 

  if (keyIsDown(LEFT_ARROW)) {
    
    console.log ("hello")
    ball.x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    ball.x += 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    ball.y += 5;
  }
 /* for(var i=1;i<=67;i++){

    ball.collide(wall_+i)
  }*/

  

  
  drawSprites();
}
