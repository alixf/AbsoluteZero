#pragma strict

public var owner : Transform;

function Start ()
{
}

function Update ()
{
}

function OnTriggerEnter2D(other : Collider2D)
{
	if(other.transform != this.owner && (other.CompareTag("enemy") || other.CompareTag("ship") || other.CompareTag("planet") || other.CompareTag("sun")))
	{
		if(other.CompareTag("enemy"))
			other.GetComponent(Enemy).hit();
		if(other.CompareTag("ship"))
			other.GetComponent(ShipNavigation).hit();

		Destroy(gameObject);
	}
}