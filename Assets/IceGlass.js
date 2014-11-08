#pragma strict
import UnityEngine.UI;
import System.Collections;

public var coldGauge : Transform;

public var images : Image[];
function Start () {
}

function Update () {
	var value:float;
	
	value = coldGauge.GetComponent(Slider).value;
	
	transform.GetChild(0).GetComponent(Image).color = new Color(255, 255, 255, Mathf.Min(0.3,3*(1-value)));
	
	transform.GetChild(1).GetComponent(Image).color = new Color(255, 255, 255, Mathf.Min(0.3,-1+ 3*(1-value)));

	transform.GetChild(2).GetComponent(Image).color = new Color(255, 255, 255, Mathf.Min(0.3,-2+ 3*(1-value)));
	
}