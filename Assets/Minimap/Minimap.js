#pragma strict

public var level : Level;
public var probe : Transform;
public var mapData : Texture2D;
public var visibleMap : Texture2D;
public var finalMap : Texture2D;
private var factor : float = 1;
public var viewRadius : int = 10;
public var printRadius : int = 10;

function Start()
{
	StartCoroutine("UpdateVisibleMap");

	var colors = visibleMap.GetPixels32();
	for(var i = 0; i < visibleMap.width*visibleMap.height; i++)
		colors[i] = Color.black;
	visibleMap.SetPixels32(colors);
	visibleMap.Apply();

	colors = mapData.GetPixels32();
	for(i = 0; i < mapData.width*mapData.height; i++)
		colors[i] = Color.black;
	for(i = 0; i < level.transform.childCount; i++)
	{
		var child = level.transform.GetChild(i);
		var xpos = child.position.x;
		var ypos = child.position.y;

		Debug.Log(xpos+" ; "+ypos);
		for(var x = xpos-printRadius; x < xpos+printRadius; x++)
		{
			for(var y = ypos-printRadius; y < ypos+printRadius; y++)
			{
				var xx = Mathf.Floor(x) + mapData.width/2;
				var yy = Mathf.Floor(y) + mapData.height/2;
				if(xx >= 0 && yy >= 0 && xx < mapData.width && yy < mapData.height)
				{
					if(Vector2.Distance(new Vector2(x, y), new Vector2(xpos, ypos)) < printRadius)
					{
						var idx = yy*visibleMap.width+xx;
						colors[idx] = Color.white;
					}
				}
			}
		}
	}
	mapData.SetPixels32(colors);
	mapData.Apply();
}

function Update ()
{

}

function UpdateVisibleMap()
{
	while(probe != null)
	{
		var mapPosition = new Vector2(probe.position.x * factor, probe.position.y * factor);

		var colors = visibleMap.GetPixels32();
		for(var x = probe.position.x-viewRadius; x < probe.position.x+viewRadius; x++)
		{
			for(var y = probe.position.y-viewRadius; y < probe.position.y+viewRadius; y++)
			{
				var xx = Mathf.Floor(x) + visibleMap.width/2;
				var yy = Mathf.Floor(y) + visibleMap.height/2;
				if(xx >= 0 && yy >= 0 && xx < visibleMap.width && yy < visibleMap.height)
				{
					if(Vector2.Distance(new Vector2(x, y), new Vector2(probe.position.x, probe.position.y)) < viewRadius)
					{
						var i = yy*visibleMap.width+xx;
						colors[i] = Color.white;
					}
				}
			}
		}
		visibleMap.SetPixels32(colors);
		visibleMap.Apply();

		var data = mapData.GetPixels32();

		var finalPixels = finalMap.GetPixels32();
		for(i = 0; i < finalMap.width*finalMap.height; i++)
		{
			finalPixels[i].r = ((colors[i].r/255.0) * 0.33 + (data[i].r * (colors[i].r/255.0)) * 0.67) * 255;
			finalPixels[i].g = ((colors[i].g/255.0) * 0.33 + (data[i].g * (colors[i].g/255.0)) * 0.67) * 255;
			finalPixels[i].b = ((colors[i].b/255.0) * 0.33 + (data[i].b * (colors[i].b/255.0)) * 0.67) * 255;
		}
		finalMap.SetPixels32(finalPixels);
		finalMap.Apply();

		yield WaitForSeconds(0.1);
	}
}