var game= new Phaser.Game(800,600,Phaser.AUTO,'phaser-example',{preload:preload,create:create});

function preload(){
	game.load.image('pic','assets/pic.jpg');
}

function create(){
	var image=game.add.image(100,100,'pic');
}
