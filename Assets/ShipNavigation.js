#pragma strict

public var acceleration = 50;
public var particles : ParticleSystem;

function Start () {

}

function FixedUpdate ()
{
}

function Update()
{
	var mousePosition = Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, 0.0));
	transform.eulerAngles = new Vector3(0.0,0.0, 90 + Mathf.Rad2Deg * Mathf.Atan2(transform.position.y-mousePosition.y, transform.position.x-mousePosition.x));

	if(Input.GetMouseButton(1)){
		rigidbody2D.AddRelativeForce(acceleration * new Vector2(0,1));
		particles.emissionRate = 50.0f;
     }
	else {
		 particles.emissionRate = 0.0f;
	}
}