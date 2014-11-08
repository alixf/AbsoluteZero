#pragma strict

public var planetCount : int;
public var planets : Transform[];
public var radius : int = 50;

function Start ()
{
	var positions = new Vector2[planetCount];
	var offsets = new Vector2[planetCount];

	// Initial distribution
	for(var i = 0; i < planetCount; ++i)
	{
		var angle = (i + Random.value) / planetCount * Mathf.PI*2;
		Debug.Log((i + Random.value) / planetCount);
		var distance = 0.33 * radius + 0.67 * radius * Random.value;
		positions[i] = new Vector2(Mathf.Cos(angle) * distance, Mathf.Sin(angle) * distance);
	}
	
	// Expansion
	for(i = 0; i < planetCount; ++i)
	{	
		offsets[i] = new Vector2(0,0);
		for(var j = 0; j < planetCount; ++j)
		{
			distance = Vector2.Distance(positions[i], positions[j]);
			offsets[i] += (positions[j] - positions[i]) * (distance*distance) / (radius*radius*10);
		}
	}

	// Generation
	for(i = 0; i < planetCount; ++i)
	{
		positions[i] += offsets[i];
		var id = Mathf.Floor(Random.Range(0,planets.length));
		Debug.Log(id);
		var newPlanet = Instantiate(planets[Mathf.Floor(Random.Range(0,planets.length))]);
		newPlanet.parent = transform;
		newPlanet.position = new Vector3(positions[i].x, positions[i].y, 0.0);
	}
}

function Update ()
{
}