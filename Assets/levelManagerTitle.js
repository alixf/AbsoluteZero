#pragma strict
import UnityEngine.UI;

var out : String;
var overlay : Image;

function Start ()
{
}

function Update ()
{
}

function loadIntro()
{
		Debug.Log("test");
	StartCoroutine("fadeout");
	out = "intro";
}

function loadGame()
{
		Debug.Log("test");
	StartCoroutine("fadeout");
	out = "level1";
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
		yield;
	}
	Application.LoadLevel(out);
}