#pragma strict

public var nbInit : int;
public var capsulePrefab : Transform;
public var gameOverScreen: Transform;
public var shipNavigation : ShipNavigation;
private var isGameOver = false;


function Start () {
	var i:int;
	for(i=0;i<nbInit;++i){
		var capsule = Instantiate(capsulePrefab);
		capsule.parent = transform;
		capsule.localPosition.x += i*15;
		capsule.localPosition.y = 0;
	}
}

function Update () {
	if(transform.childCount == 0 && isGameOver==false){
		var gameOver = Instantiate(gameOverScreen);
		gameOver.parent = transform.parent;
		gameOver.localPosition.x = 0;
		gameOver.localPosition.y = 150;
		isGameOver = true;
		shipNavigation.enabled = false;
	
	}
}

function removeOne () {
	if(!isGameOver){
		Destroy(transform.GetChild(transform.childCount-1).gameObject);
	}
}