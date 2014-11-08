#pragma strict
import UnityEngine.UI;
public var coldGauge : Transform;

public var image1 : Image;
public var image2 : Image;
public var image3 : Image;
public var image4 : Image;
public var image5 : Image;
public var image6 : Image;
public var talking = false;
public var chilling = false;
private var counter = 0;

function Start ()
{
	StartCoroutine("talk");
}

function Update ()
{
	if(chilling)
	{
		var value : float = coldGauge.GetComponent(Slider).value;
		
		if(value < 0.33)
			setOpacity(0,0,1,0,0,0);
		else if(value < 0.66)
			setOpacity(0,1,0,0,0,0);
		else
			setOpacity(1,0,0,0,0,0);
	}
	else if(!talking)
		setOpacity(1,0,0,0,0,0);
}

function setOpacity(a1 : float, a2 : float, a3 : float, a4 : float, a5 : float, a6 : float)
{
	image1.color = Color(255,255,255,a1);
	image2.color = Color(255,255,255,a2);
	image3.color = Color(255,255,255,a3);
	image4.color = Color(255,255,255,a4);
	image5.color = Color(255,255,255,a5);
	image6.color = Color(255,255,255,a6);

}

function talk()
{
	while(true)
	{
		counter = (counter + 1) % 3;
		if(talking)
		{
			Debug.Log(counter);
			if(counter == 0)
				setOpacity(1,0,0,0,0,0);
			if(counter == 1)
				setOpacity(0,0,0,1,0,0);
			if(counter == 2)
				setOpacity(0,0,0,0,1,0);
		}
		yield WaitForSeconds(Random.Range(0.05,0.33));
	}
}