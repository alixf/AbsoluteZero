#pragma strict
import UnityEngine.UI;
public var coldGauge : GameObject;

public var heatingInc : float;

function Start () {
	coldGauge = GameObject.Find("Slider");
}

function Update () {

}

function OnTriggerStay2D(other : Collider2D) {
	if(other.CompareTag("ship")){
		coldGauge.GetComponent(Slider).value += heatingInc;
	}
}