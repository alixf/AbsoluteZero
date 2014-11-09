#pragma strict

public var winPreFab : Transform;
public var canvas : Transform;

function Start () {
}

function Update () {
}

function OnTriggerEnter2D(other : Collider2D)
{
	if(other.CompareTag("ship"))
	{
		var win = Instantiate(winPreFab);
		win.parent = canvas;

/*		var winPrefab = Instantiate(winPrefab);
		//winPrefab.transform.parent = canvas.transform;
		winPrefab.parent = transform.parent;
		winPrefab.localPosition.x = 0;
		winPrefab.localPosition.y = 150;*/
	}
}

function nextLevel()
{
	Debug.Break();
	Application.LoadLevel(Application.loadedLevel+1);
}