#pragma strict

public var bulletPrefab : Transform;
public var clock : float;
public var reloadDuration : float;
public var shootPoint : Transform;
public var shootOnClick : boolean = false;
public var bulletSpeed : float;
public var musicManager : MusicManager;

function Start ()
{
}

function Update ()
{
	if(shootOnClick)
	{
		clock += Time.deltaTime;
		if(Input.GetMouseButton(0) && clock >= reloadDuration)
		{
			shoot();
			clock = 0.0;
		}	
	}
}

function shoot()
{
	var bullet = Instantiate(bulletPrefab);
	//bullet.transform.parent = transform;
	bullet.position = shootPoint.position;
	bullet.rotation = transform.rotation;
	bullet.rigidbody2D.AddRelativeForce(new Vector2(0.0, 1.0) * bulletSpeed);
	bullet.GetComponent(Bullet).owner = transform;
	musicManager.shoot();
}