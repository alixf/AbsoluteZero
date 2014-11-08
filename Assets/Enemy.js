#pragma strict

public var target : Transform;
public var minMoveDelay = 0.5;
public var maxMoveDelay = 3.5;
public var acceleration = 50;

function Start ()
{
	StartCoroutine("Move");
}

function Update ()
{
}

function Move()
{
	while(true)
	{
		if(target == null)
		{
			var force = Random.insideUnitCircle;
			force.Normalize();
			rigidbody2D.AddForce(force * acceleration);
			transform.eulerAngles.z = -90 + Mathf.Rad2Deg * Mathf.Atan2(force.y, force.x);
			yield WaitForSeconds(Random.Range(minMoveDelay*3, maxMoveDelay*3));
		}
		else
		{
			
			yield WaitForSeconds(Random.Range(minMoveDelay, maxMoveDelay));
		}
	}
}

function aggro(ship : Transform)
{

}