#pragma strict

enum FollowType
{
	FollowSingle, FollowBoth
}

public var followType : FollowType;
public var follow1 : Transform;
public var follow2 : Transform;

function Start ()
{

}

function Update ()
{
	switch(followType)
	{
		case followType.FollowSingle :
			transform.position = new Vector3(follow1.position.x, follow1.position.y, transform.position.z);
			break;

		case followType.FollowBoth :
			transform.position = new Vector3((follow1.position.x+follow1.position.x)/2, (follow1.position.y+follow2.position.y)/2, transform.position.z);
			break;
	}
	
}