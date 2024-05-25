let posizioneX, posizioneY  // let(lascia) = variabile
let velX, velY

function setup() {
	createCanvas(windowWidth, windowHeight)

	posizioneX = width/2 // width = larghezza della tela
	posizioneY = height/2 // height = alezza della tela

	velX = 10
	velY = 4
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	
	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if(posizioneX >= width) { // if = condizione
		velX = -velX
	}

	if(posizioneX < 0) { 
		velX = -velX
	}

	if(posizioneY >= height || posizioneY < 0){
	velY = -velY
}
 

	
	background (200)

	fill(frameCount %2 * 255)
	noStroke ()
	
	circle(posizioneX, posizioneY, (sin(frameCount*0.2) * 0.5 + 0.5) * 200 + 10)



	

}
