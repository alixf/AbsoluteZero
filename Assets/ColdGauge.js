#pragma strict

import UnityEngine.UI;

public var ship : Transform;
public var capsuleManager : CapsuleManager;
public var factor : float;
private var shipLastPosition : Vector3;
public var musicManager : MusicManager;

function Start () {
	shipLastPosition = ship.position;
}

function Update () {
	var xa = ship.position.x;
	var ya = ship.position.y;
	var xb = shipLastPosition.x;
	var yb = shipLastPosition.y;
	
	var distance = Mathf.Sqrt(((xb-xa)*(xb-xa))+((yb-ya)*(yb-ya)));
	GetComponent(Slider).value -= distance*factor;
	shipLastPosition = ship.position;
	
	if(GetComponent(Slider).value == 0){
		var nbLeft = capsuleManager.removeOne();
		if(nbLeft >= 0){
			capsuleManager.removeActions(nbLeft);
			warmUp(1);
		}
	}

	adaptMusic(GetComponent(Slider).value);
	
}

function warmUp(degrees:float) {
	var i:int;
	
	StartCoroutine(warm(degrees));
	
}

function warm(degrees:float){
	var clock = 0.0;
	var init = GetComponent(Slider).value;
	while(clock<0.5){
		clock+=Time.deltaTime;
		
		GetComponent(Slider).value = init + clock*(2*degrees);
		yield;
	}
	
}


function adaptMusic(heat:float){
	var factor = heat*2.5 - 0.1*2.5;
	factor = Mathf.Clamp(factor,0,1);


	musicManager.changeVolume(factor);
}


