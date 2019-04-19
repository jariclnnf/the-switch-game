import Phaser from 'phaser';

export class Load extends Phaser.Scene{
    constructor(){
        super({
            key: 'Load'
        });
    }
    init(){
    }

    preload(){
        this.load.image('boardbg', `${process.env.PUBLIC_URL}/assets/boardbg.png`);
		this.load.image('blank',`${process.env.PUBLIC_URL}/assets/blabk.jpg`)
		this.load.image('chess_red', `${process.env.PUBLIC_URL}/assets/chess_1.png`);
		// this.load.image('chess_purple', './img/chess_2.png');
		// this.load.image('chess_blue', './img/chess_3.png');
		// this.load.image('chess_orange', './img/chess_4.png');
		this.load.spritesheet('cards', `${process.env.PUBLIC_URL}/assets/cards.png`,
		{frameWidth:334,
		frameHeight:440,
		});

    }

    create(){
        this.scene.start('GameBoard')
    }
    update(){

    }
}