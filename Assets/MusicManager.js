#pragma strict

public var exploreMusic : AudioSource;
public var gameOverMusic : AudioSource;
public var battleMusic : AudioSource;
public var battleStartSound : AudioSource;
public var ennemySound : AudioSource;
public var motorSound : AudioSource;
public var shootingSound : AudioSource;
public var exploreMusicG : AudioSource;
public var battleMusicG : AudioSource;
public var winMusic : AudioSource;

function Start () {

}

function Update () {

}

public function toGameOver(){
	exploreMusic.Stop();
	exploreMusicG.Stop();
	battleMusic.Stop();
	battleMusicG.Stop();
	gameOverMusic.Play();
}

public function toFight(){
	exploreMusic.Stop();
	exploreMusicG.Stop();
	battleStartSound.Play();
	battleMusic.Play();
	battleMusicG.Play();
}

public function toExplore(){
	battleMusic.Stop();
	battleMusicG.Stop();
	exploreMusic.Play();
	exploreMusicG.Play();
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

public function changeVolume(volume:float) {
	if(battleMusic.isPlaying){
		battleMusic.volume = volume;
		battleMusicG.volume = 1-volume;
	}
	else if(exploreMusic.isPlaying){
		exploreMusic.volume = volume;
		exploreMusicG.volume = 1-volume;
	}
}

public function toTheWin(){
	battleMusic.Stop();
	exploreMusic.Stop();
	battleMusicG.Stop();
	exploreMusicG.Stop();
	winMusic.Play();
}