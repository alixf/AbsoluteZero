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
	GetComponent(Slider).value += degrees;
}


