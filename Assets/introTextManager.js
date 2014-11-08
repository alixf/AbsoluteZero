#pragma strict
public var elapsedTime:float;

function Start () {
	elapsedTime = 0;
}

function Update () {
	elapsedTime += Time.deltaTime;
	
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

}