#pragma strict

import UnityEngine.UI;

public var ship : Transform;
public var capsuleManager : CapsuleManager;
public var factor : float;
private var shipLastPosition : Vector3;

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
	
	if(Input.GetKeyDown('w')){
		warmUp(0.5);
	}
	if(GetComponent(Slider).value == 0){
		capsuleManager.removeOne();
		Debug.Log("Frisson");
		warmUp(1);
	}
	
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


