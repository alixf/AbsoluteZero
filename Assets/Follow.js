#pragma strict

public var follow : Transform;

function Start ()
{

}

function Update ()
{
	transform.position = new Vector3(follow.position.x, follow.position.y, transform.position.z);
}