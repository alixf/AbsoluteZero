#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(other : Collider2D)
{
	transform.parent.GetComponent(Enemy).aggro(other.transform);
}