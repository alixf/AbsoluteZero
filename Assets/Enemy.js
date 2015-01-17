#pragma strict

public var target : Transform;
public var minMoveDelay = 0.5;
public var maxMoveDelay = 1.5;
public var acceleration = 50;
public var health = 5;
public var musicManager : MusicManager;


function Start ()
{
	StartCoroutine("Move");
}

function Update ()
{
	if(target != null)
		transform.eulerAngles.z = -90 + Mathf.Rad2Deg * Mathf.Atan2(target.position.y - transform.position.y, target.position.x - transform.position.x);	
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
			if(Random.value > 0.5)
			{
				force = Random.insideUnitCircle;
				force.Normalize();
				rigidbody2D.AddForce(force * acceleration);
			}
			else
			{
				GetComponent(Weapon).shoot();
			}

			yield WaitForSeconds(Random.Range(minMoveDelay, maxMoveDelay));
		}
	}
}

function aggro(ship : Transform)
{

	if(target != ship){
		Camera.main.GetComponent(Follow).followType = FollowType.FollowBoth;
		Camera.main.GetComponent(Follow).follow2 = transform;
		target = ship;
		musicManager.toFight();
		
	}
}

function hit()
{
	health--;
	musicManager.ennemy();
	if(health <= 0){
		D
		Destroy(gameObject);
		musicManager.ennemyStop();
		musicManager.toExplore();
		
	}
}