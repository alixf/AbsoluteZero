#pragma strict

function Start () {

}

function Update () {

}

function loadIntro(){
	Application.LoadLevel("Intro");
}

function loadGame(){
	Application.LoadLevel(Application.loadedLevel);
}