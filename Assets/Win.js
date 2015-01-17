#pragma strict

public var winPreFab : Transform;
public var canvas : Transform;
public var musicManager : MusicManager;
private var done : boolean = false;
function Start () {
	
}

function Update () {
}

function OnTriggerEnter2D(other : Collider2D)
{
	if(other.CompareTag("ship") && !done)
	{
		var win = Instantiate(winPreFab);
		win.parent = canvas;
		musicManager.toTheWin();
		done = true;
/*		var winPrefab = Instantiate(winPrefab);
		//winPrefab.transform.parent = canvas.transform;
		winPrefab.parent = transform.parent;
		winPrefab.localPosition.x = 0;
		winPrefab.localPosition.y = 150;*/
	}
}

function nextLevel()
{
	var nextLevel = Application.loadedLevel+1;
	Debug.Log("TEST : "+nextLevel+" < "+Application.levelCount);
	if(nextLevel < Application.levelCount)
		Application.LoadLevel(nextLevel);
	else
		Application.LoadLevel(0);
	
}