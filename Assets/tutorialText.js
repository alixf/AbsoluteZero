#pragma strict


import UnityEngine.UI;

function Start () {
	if(Application.loadedLevel == 2){
		GetComponent(Text).text = "The ship is damaged, but the engines still work. \nLet 's push the right button to explore . \nBut remember, we don't have much energy... \n\nOh ... And if something bad happens, you can try the left button ...";
	}
}

function Update () {

}