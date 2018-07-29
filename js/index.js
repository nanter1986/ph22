var game= new Phaser.Game(800,600,Phaser.AUTO);

//var Gamestate = {
	preload:function preload(){
		game.load.image('pic','/assets/robot.png');
	}//,
	create:function create(){
		var image=game.add.image(0,0,'pic');
	}//,
	update:function update(){

	}
//}

//game.state.add('Gamestate',Gamestate);
//game.state.start('Gamestate');
