#pragma strict
import UnityEngine.UI;
public var coldGauge : Transform;

function Start ()
{
}

function Update ()
{
	var value:float;
	
	value = coldGauge.GetComponent(Slider).value;
	
	if(value<0.66 && value>0.33){
		GetComponent(Image).color = Color(0.2,0.5,0.8,1);

	} else if(value>0.66){
		GetComponent(Image).color = Color(1,0,0,1);

	} else if(value<0.33){
		GetComponent(Image).color = Color(0,0.7,1,1	);

	}
}