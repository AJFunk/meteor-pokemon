ServiceConfiguration.configurations.upsert(
	{ service: "facebook" },
	{
		$set: {
			appId: "867143840025865",
			secret: "bc33d1fcae94fe97aaae37af99aa767b"
		}
	}
);
ServiceConfiguration.configurations.upsert(
	{ service: "twitter" },
	{
		$set: {
			consumerKey: "wIuUhzABawvVvtY0K3LKv4Xx6",
			secret: "BsNLDJmLLErtMaVK6aiJ0Dfatu5nPZpPXlAuNgBYfiSyNnnUDn"
		}
	}
);
