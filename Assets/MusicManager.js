#pragma strict

public var exploreMusic : AudioSource;
public var gameOverMusic : AudioSource;
public var battleMusic : AudioSource;
public var battleStartSound : AudioSource;
public var ennemySound : AudioSource;
public var motorSound : AudioSource;
public var shootingSound : AudioSource;

function Start () {

}

function Update () {

}

public function toGameOver(){
	exploreMusic.Stop();
	gameOverMusic.Play();
}

public function toFight(){
	exploreMusic.Stop();
	battleStartSound.Play();
	battleMusic.Play();
}

public function toExplore(){
	battleMusic.Stop();
	exploreMusic.Play();
}

public function ennemy() {
	if(!ennemySound.isPlaying){
		ennemySound.Play();
		}
}

public function ennemyStop() {
	ennemySound.Stop();
}

public function motorStart() {
	motorSound.Play();
}

public function motorStop() {
	motorSound.Stop();
}

public function shoot() {
	shootingSound.Play();
}