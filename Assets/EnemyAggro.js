#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(other : Collider2D)
{
	if(other.CompareTag("ship"))
		transform.parent.GetComponent(Enemy).aggro(other.transform);
}