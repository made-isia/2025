
let pos = new Vec2(0, 0)   // posizione attuale
let forza = new Vec2(0, 0) // forza

const coda = [] // Array che conterrà 100 elementi per tracciare la coda

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(220)

	// Vettore "mouse"
	const m = new Vec2(mouseX, mouseY)

	const delta = m.sottrai(pos).moltiplica(0.05)
	forza = forza.somma(delta)
	forza = forza.moltiplica(0.94) // smorziamo la forza
	pos = pos.somma(forza)

	// Aggiungiamo un elemento (una copia della posizione attuale) alla “coda”...
	coda.push(pos.copia())
	// ...e togliamo l'elemento più vecchio (shift)
	if (coda.length > 100) coda.shift()

	// Disegnamo la coda
	strokeCap(ROUND)
	strokeJoin(ROUND)
	strokeWeight(5)
	noFill()
	beginShape()
	// Un altro modo per fare fare una loop è
	// utilizzare forEach invece di for
	coda.forEach( v => vertex(v.x, v.y))
	endShape()

}
