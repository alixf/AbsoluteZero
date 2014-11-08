#pragma strict

public var nbInit : int;
public var capsulePrefab : Transform;

function Start () {
	var i:int;
	for(i=0;i<nbInit;++i){
		var capsule = Instantiate(capsulePrefab);
		capsule.parent = transform;
		capsule.position.x += i*15;
	}
}

function Update () {
	if(transform.childCount == 0){
		Debug.Log("PERDU");
		Debug.Break();
	}
}

function removeOne () {
	Destroy(transform.GetChild(transform.childCount-1).gameObject);
}