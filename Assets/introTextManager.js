#pragma strict
public var elapsedTime:float;
public var john:John;
public var step:int;
public var breach: GameObject;
public var overlay : Image;
public var music : AudioSource;
public var duration = 0.5;
public var clock = 0.0;

function Start () {
	elapsedTime = 0;
	step=0;
}

function Update () {
	elapsedTime += Time.deltaTime;
	
	if(clock <= duration)
	{
		clock += Time.deltaTime;
		var factor = clock / duration;
		overlay.color.a = 1-factor;
		music.volume = factor;
	}

	if(elapsedTime > 75)
	{
		StartCoroutine("fadeout");
	}
	if(elapsedTime > 70.4) {
		GetComponent(Text).text = "I 'm so cold .";
	}
	else if(elapsedTime > 61.25) {
		GetComponent(Text).text = "The force field won 't last long .";
	}
	else if(elapsedTime > 52.3) {
		GetComponent(Text).text = "A breach opened .";
	}
	else if(elapsedTime > 38.60) {
		GetComponent(Text).text = "My little ship wasn 't built to survive such a storm .";
	}
	else if(elapsedTime > 21.65) {
		GetComponent(Text).text = "The Asteroid Tsunami came out of nowhere .";
	}
	else if(elapsedTime > 19.5) {
		GetComponent(Text).text = "";
	}
	else if(elapsedTime > 14.2) {
		GetComponent(Text).text = "But still, my road was completely clear ...";
	}
	else if(elapsedTime > 8.72) {
		GetComponent(Text).text = "I remember space sailors bragging about this phenomenon ...";
	}
	
	if(elapsedTime > 50) {
		breach.GetComponent(SpriteRenderer).color.a = 1;
	}
	manageTalking(elapsedTime);

}

function manageTalking(elapsedTime:float){

	var change = [1.4,4.4,10,14,15,18,23,26.6,39,43.5,53,55.6,62.2,64.4,71.5,73,74,74.5];
	
	if (step !=change.Length && elapsedTime > change[step]) {
		john.talking = !john.talking;
		step++;
	}
}

function fadeout()
{
	overlay.enabled = true;
	var duration = 0.5;
	var clock = 0.0;

	while(clock <= duration)
	{
		clock += Time.deltaTime;
		var factor = clock / duration;
		Debug.Log(factor);
		overlay.color.a = factor;
		music.volume = 1-factor;
		yield;
	}
	Application.LoadLevel("level1");
}