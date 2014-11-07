#pragma strict

import UnityEngine.UI;

public var ship : Transform;
private var shipPosition : Vector3;

function Start () {
	shipPosition = ship.position;
}

function Update () {
	var offset = ship.position - shipPosition;
	//GetComponent(Slider).value = ;
	shipPosition = ship.position;
}