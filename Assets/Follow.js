#pragma strict

enum FollowType
{
	FollowSingle, FollowBoth
}

public var followType : FollowType;
public var follow1 : Transform;
public var follow2 : Transform;
private var target : Vector3;

function Start ()
{

}

function Update ()
{
	switch(followType)
	{
		case FollowType.FollowSingle :
			target = new Vector3(follow1.position.x, follow1.position.y, transform.position.z);
			break;

		case FollowType.FollowBoth :
			if(follow2 == null)
				followType = FollowType.FollowSingle;
			else
			{
				target = new Vector3((follow1.position.x+follow2.position.x)/2, (follow1.position.y+follow2.position.y)/2, transform.position.z);
				GetComponent(Camera).orthographicSize = Mathf.Max(Vector3.Distance(follow1.position, follow2.position), 10);
			}
			break;
	}
	transform.position = target;
}