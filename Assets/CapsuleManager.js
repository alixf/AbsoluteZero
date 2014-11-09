#pragma strict

public var nbInit : int;
public var capsulePrefab : Transform;
public var gameOverScreen: Transform;
public var shipNavigation : ShipNavigation;
private var isGameOver = false;
public var avatar : Transform;
public var slider : Transform;
public var minimap : Transform;
public var voice2Left : AudioSource;
public var voice1Left : AudioSource;
public var voice0Left : AudioSource;
public var subtitles : GameObject;
public var toRemove : Transform;

public var musicManager : MusicManager;

private var nbLeft : int;

function Start () {
	var i:int;
	nbLeft = nbInit;
	for(i=0;i<nbInit;++i){
		var capsule = Instantiate(capsulePrefab);
		capsule.parent = transform;
		capsule.localPosition.x = i*15;
		capsule.localPosition.y = 0;
	}
}

function Update () {
	if(nbLeft <0 && isGameOver==false){
		avatar.position = new Vector3(5000,5000,5000);
		slider.position = new Vector3(5000,5000,5000);
		minimap.position = new Vector3(5000,5000,5000);
		toRemove.position = new Vector3(5000,5000,5000);
		var gameOver = Instantiate(gameOverScreen);
		gameOver.parent = transform.parent;
		gameOver.localPosition.x = 0;
		gameOver.localPosition.y = 150;
		musicManager.toGameOver();
		isGameOver = true;
		shipNavigation.transform.GetComponent(SpriteRenderer).color = new Color(77,240,255,255);
		shipNavigation.particles.emissionRate = 0.0;
		shipNavigation.enabled = false;
	
	}
}

function removeOne(){
	nbLeft --;
	if(!isGameOver){
		Destroy(transform.GetChild(transform.childCount-1).gameObject);
		
	}
	return nbLeft;
}

function removeActions (nbLeftA:int) {


	if(nbLeftA == 2){
		voice2Left.Play();
		subtitles.GetComponent(Text).text = "I have some left, but let 's not waste ...";

		yield WaitForSeconds (3);

		subtitles.GetComponent(Text).text = "";
	}
	else if(nbLeftA == 1){
		voice1Left.Play();
		subtitles.GetComponent(Text).text = "Only one to go now . Careful .";

		yield WaitForSeconds (2.5);

		subtitles.GetComponent(Text).text = "";
	}
	else if(nbLeftA == 0){
		voice0Left.Play();
		subtitles.GetComponent(Text).text = "No heating capsules anymore . Will I really end like this ?";

		yield WaitForSeconds (3.5);
		
		subtitles.GetComponent(Text).text = "";
	}
	

}