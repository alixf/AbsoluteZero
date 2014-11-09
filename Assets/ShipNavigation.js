#pragma strict

public var acceleration = 50;
public var particles : ParticleSystem;
public var musicManager : MusicManager;
public var ennemyFirePower : float;
public var coldGauge:GameObject;

function Start () {
	coldGauge = GameObject.Find("Slider");
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
		particles.emissionRate = 50.0;
		musicManager.motorStart();
     }
	else {
		 particles.emissionRate = 0.0;
		 musicManager.motorStop();
	}
}

function hit()
{
	Debug.Log("DECU");
	coldGauge.GetComponent(Slider).value -= ennemyFirePower;
}