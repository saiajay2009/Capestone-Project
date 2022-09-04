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
var wall_1,wall_2,wall_3,wall_4,wall_5,wall_6,wall_7,wall_8,wall_9,wall_10;
var wall_11,wall_12,wall_13,wall_14,wall_15,wall_16,wall_17,wall_18,wall_19,wall_20;
var wall_21,wall_22,wall_23,wall_24,wall_25,wall_26,wall_27,wall_28,wall_29,wall_30;
var wall_31,wall_32,wall_33,wall_34,wall_35,wall_36,wall_37,wall_38,wall_39,wall_40;

function setup() 
{
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  wall_1 = new Ground(650,530,1000,15)
  wall_2 = new Ground(650,50,1000,15)
  wall_3 = new Ground(157,289,15,470)
  wall_4 = new Ground(1143,289,15,470)
  wall_5 = new Ground(230,300,150,8)
  wall_6 = new Ground(246,330,194,8)
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
  wall_29 = new Ground(210,159,8,225)
  wall_30 = new Ground(254,210,8,110)
  wall_31 = new Ground(351,135,180,8)
  wall_32 = new Ground(298,500,180,8)
  wall_33 = new Ground(339,450,180,8)
  wall_34 = new Ground(265,390,8,50)
  wall_35 = new Ground(310,425,8,50)
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
}


