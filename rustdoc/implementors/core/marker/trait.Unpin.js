(function() {var implementors = {};
implementors["abstutil"] = [{"text":"impl Unpin for FileWithProgress","synthetic":true,"types":[]},{"text":"impl Unpin for Manifest","synthetic":true,"types":[]},{"text":"impl Unpin for Entry","synthetic":true,"types":[]},{"text":"impl Unpin for CmdArgs","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Unpin for MultiMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Counter&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Unpin for VecMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Tags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Timer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Parallelism","synthetic":true,"types":[]},{"text":"impl Unpin for ROOT_DIR","synthetic":true,"types":[]},{"text":"impl Unpin for ROOT_PLAYER_DIR","synthetic":true,"types":[]},{"text":"impl Unpin for Logger","synthetic":true,"types":[]},{"text":"impl Unpin for Progress","synthetic":true,"types":[]},{"text":"impl Unpin for TimerSpan","synthetic":true,"types":[]},{"text":"impl Unpin for TimedFileReader","synthetic":true,"types":[]},{"text":"impl Unpin for StackEntry","synthetic":true,"types":[]}];
implementors["convert_osm"] = [{"text":"impl Unpin for Options","synthetic":true,"types":[]},{"text":"impl Unpin for OnstreetParking","synthetic":true,"types":[]},{"text":"impl Unpin for PublicOffstreetParking","synthetic":true,"types":[]},{"text":"impl Unpin for PrivateOffstreetParking","synthetic":true,"types":[]},{"text":"impl Unpin for OsmExtract","synthetic":true,"types":[]},{"text":"impl Unpin for Document","synthetic":true,"types":[]},{"text":"impl Unpin for Node","synthetic":true,"types":[]},{"text":"impl Unpin for Way","synthetic":true,"types":[]},{"text":"impl Unpin for Relation","synthetic":true,"types":[]},{"text":"impl Unpin for Elevation","synthetic":true,"types":[]}];
implementors["game"] = [{"text":"impl Unpin for App","synthetic":true,"types":[]},{"text":"impl Unpin for ShowLayers","synthetic":true,"types":[]},{"text":"impl Unpin for ShowEverything","synthetic":true,"types":[]},{"text":"impl Unpin for Flags","synthetic":true,"types":[]},{"text":"impl Unpin for PerMap","synthetic":true,"types":[]},{"text":"impl Unpin for SessionState","synthetic":true,"types":[]},{"text":"impl Unpin for PerObjectActions","synthetic":true,"types":[]},{"text":"impl Unpin for FindDelayedIntersections","synthetic":true,"types":[]},{"text":"impl Unpin for Challenge","synthetic":true,"types":[]},{"text":"impl Unpin for HighScore","synthetic":true,"types":[]},{"text":"impl Unpin for ChallengesPicker","synthetic":true,"types":[]},{"text":"impl Unpin for ColorScheme","synthetic":true,"types":[]},{"text":"impl Unpin for ColorSchemeChoice","synthetic":true,"types":[]},{"text":"impl Unpin for CommonState","synthetic":true,"types":[]},{"text":"impl Unpin for CityPicker","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ColorDiscrete&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for ColorLegend","synthetic":true,"types":[]},{"text":"impl Unpin for DivergingScale","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ColorNetwork&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for ColorScale","synthetic":true,"types":[]},{"text":"impl Unpin for HeatmapOptions","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Grid&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for IsochroneViewer","synthetic":true,"types":[]},{"text":"impl Unpin for Minimap","synthetic":true,"types":[]},{"text":"impl Unpin for Navigator","synthetic":true,"types":[]},{"text":"impl Unpin for CrossStreet","synthetic":true,"types":[]},{"text":"impl Unpin for SearchBuildings","synthetic":true,"types":[]},{"text":"impl Unpin for Warping","synthetic":true,"types":[]},{"text":"impl Unpin for DebugWarp","synthetic":true,"types":[]},{"text":"impl Unpin for CutsceneBuilder","synthetic":true,"types":[]},{"text":"impl Unpin for Scene","synthetic":true,"types":[]},{"text":"impl Unpin for CutscenePlayer","synthetic":true,"types":[]},{"text":"impl Unpin for FYI","synthetic":true,"types":[]},{"text":"impl Unpin for Layout","synthetic":true,"types":[]},{"text":"impl Unpin for DebugMode","synthetic":true,"types":[]},{"text":"impl Unpin for SearchResults","synthetic":true,"types":[]},{"text":"impl Unpin for Actions","synthetic":true,"types":[]},{"text":"impl Unpin for ScreenshotTest","synthetic":true,"types":[]},{"text":"impl Unpin for Floodfiller","synthetic":true,"types":[]},{"text":"impl Unpin for Source","synthetic":true,"types":[]},{"text":"impl Unpin for ObjectDebugger","synthetic":true,"types":[]},{"text":"impl Unpin for PathCounter","synthetic":true,"types":[]},{"text":"impl Unpin for PolygonDebugger","synthetic":true,"types":[]},{"text":"impl Unpin for Item","synthetic":true,"types":[]},{"text":"impl Unpin for DevToolsMode","synthetic":true,"types":[]},{"text":"impl Unpin for PopularDestinations","synthetic":true,"types":[]},{"text":"impl Unpin for ViewKML","synthetic":true,"types":[]},{"text":"impl Unpin for Object","synthetic":true,"types":[]},{"text":"impl Unpin for ParkingMapper","synthetic":true,"types":[]},{"text":"impl Unpin for ChangeWay","synthetic":true,"types":[]},{"text":"impl Unpin for Show","synthetic":true,"types":[]},{"text":"impl Unpin for Value","synthetic":true,"types":[]},{"text":"impl Unpin for PolygonEditor","synthetic":true,"types":[]},{"text":"impl Unpin for ScenarioManager","synthetic":true,"types":[]},{"text":"impl Unpin for StoryMapEditor","synthetic":true,"types":[]},{"text":"impl Unpin for RecordedStoryMap","synthetic":true,"types":[]},{"text":"impl Unpin for StoryMap","synthetic":true,"types":[]},{"text":"impl Unpin for Marker","synthetic":true,"types":[]},{"text":"impl Unpin for Lasso","synthetic":true,"types":[]},{"text":"impl Unpin for Mode","synthetic":true,"types":[]},{"text":"impl Unpin for EditMode","synthetic":true,"types":[]},{"text":"impl Unpin for SaveEdits","synthetic":true,"types":[]},{"text":"impl Unpin for LoadEdits","synthetic":true,"types":[]},{"text":"impl Unpin for ConfirmDiscard","synthetic":true,"types":[]},{"text":"impl Unpin for BulkSelect","synthetic":true,"types":[]},{"text":"impl Unpin for BulkEdit","synthetic":true,"types":[]},{"text":"impl Unpin for ClusterTrafficSignalEditor","synthetic":true,"types":[]},{"text":"impl Unpin for LaneEditor","synthetic":true,"types":[]},{"text":"impl Unpin for RouteEditor","synthetic":true,"types":[]},{"text":"impl Unpin for RoadSelector","synthetic":true,"types":[]},{"text":"impl Unpin for Mode","synthetic":true,"types":[]},{"text":"impl Unpin for StopSignEditor","synthetic":true,"types":[]},{"text":"impl Unpin for TrafficSignalEditor","synthetic":true,"types":[]},{"text":"impl Unpin for BundleEdits","synthetic":true,"types":[]},{"text":"impl Unpin for ChangeDuration","synthetic":true,"types":[]},{"text":"impl Unpin for ShowAbsolute","synthetic":true,"types":[]},{"text":"impl Unpin for ShowRelative","synthetic":true,"types":[]},{"text":"impl Unpin for TuneRelative","synthetic":true,"types":[]},{"text":"impl Unpin for SignalPicker","synthetic":true,"types":[]},{"text":"impl Unpin for PreviewTrafficSignal","synthetic":true,"types":[]},{"text":"impl Unpin for ZoneEditor","synthetic":true,"types":[]},{"text":"impl Unpin for Game","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ChooseSomething&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for PromptInput","synthetic":true,"types":[]},{"text":"impl Unpin for PopupMsg","synthetic":true,"types":[]},{"text":"impl Unpin for DrawBaselayer","synthetic":true,"types":[]},{"text":"impl Unpin for Transition","synthetic":true,"types":[]},{"text":"impl Unpin for ID","synthetic":true,"types":[]},{"text":"impl Unpin for InfoPanel","synthetic":true,"types":[]},{"text":"impl Unpin for Details","synthetic":true,"types":[]},{"text":"impl Unpin for DataOptions","synthetic":true,"types":[]},{"text":"impl Unpin for Tab","synthetic":true,"types":[]},{"text":"impl Unpin for OpenTrip","synthetic":true,"types":[]},{"text":"impl Unpin for PickLayer","synthetic":true,"types":[]},{"text":"impl Unpin for LayerOutcome","synthetic":true,"types":[]},{"text":"impl Unpin for Elevation","synthetic":true,"types":[]},{"text":"impl Unpin for BikeNetwork","synthetic":true,"types":[]},{"text":"impl Unpin for Static","synthetic":true,"types":[]},{"text":"impl Unpin for CongestionCaps","synthetic":true,"types":[]},{"text":"impl Unpin for Pandemic","synthetic":true,"types":[]},{"text":"impl Unpin for Options","synthetic":true,"types":[]},{"text":"impl Unpin for SEIR","synthetic":true,"types":[]},{"text":"impl Unpin for Occupancy","synthetic":true,"types":[]},{"text":"impl Unpin for Efficiency","synthetic":true,"types":[]},{"text":"impl Unpin for Loc","synthetic":true,"types":[]},{"text":"impl Unpin for PopulationMap","synthetic":true,"types":[]},{"text":"impl Unpin for Options","synthetic":true,"types":[]},{"text":"impl Unpin for Backpressure","synthetic":true,"types":[]},{"text":"impl Unpin for Throughput","synthetic":true,"types":[]},{"text":"impl Unpin for CompareThroughput","synthetic":true,"types":[]},{"text":"impl Unpin for TrafficJams","synthetic":true,"types":[]},{"text":"impl Unpin for Jam","synthetic":true,"types":[]},{"text":"impl Unpin for Delay","synthetic":true,"types":[]},{"text":"impl Unpin for TransitNetwork","synthetic":true,"types":[]},{"text":"impl Unpin for Options","synthetic":true,"types":[]},{"text":"impl Unpin for OptionsPanel","synthetic":true,"types":[]},{"text":"impl Unpin for TrafficSignalStyle","synthetic":true,"types":[]},{"text":"impl Unpin for CameraAngle","synthetic":true,"types":[]},{"text":"impl Unpin for TitleScreen","synthetic":true,"types":[]},{"text":"impl Unpin for MainMenu","synthetic":true,"types":[]},{"text":"impl Unpin for About","synthetic":true,"types":[]},{"text":"impl Unpin for Proposals","synthetic":true,"types":[]},{"text":"impl Unpin for Screensaver","synthetic":true,"types":[]},{"text":"impl Unpin for DrawOptions","synthetic":true,"types":[]},{"text":"impl Unpin for DrawArea","synthetic":true,"types":[]},{"text":"impl Unpin for DrawBike","synthetic":true,"types":[]},{"text":"impl Unpin for DrawBuilding","synthetic":true,"types":[]},{"text":"impl Unpin for DrawBusStop","synthetic":true,"types":[]},{"text":"impl Unpin for DrawCar","synthetic":true,"types":[]},{"text":"impl Unpin for DrawIntersection","synthetic":true,"types":[]},{"text":"impl Unpin for DrawLane","synthetic":true,"types":[]},{"text":"impl Unpin for DrawMap","synthetic":true,"types":[]},{"text":"impl Unpin for AgentCache","synthetic":true,"types":[]},{"text":"impl Unpin for UnzoomedAgents","synthetic":true,"types":[]},{"text":"impl Unpin for DrawParkingLot","synthetic":true,"types":[]},{"text":"impl Unpin for DrawPedestrian","synthetic":true,"types":[]},{"text":"impl Unpin for DrawPedCrowd","synthetic":true,"types":[]},{"text":"impl Unpin for DrawRoad","synthetic":true,"types":[]},{"text":"impl Unpin for DrawMovement","synthetic":true,"types":[]},{"text":"impl Unpin for DrawUberTurnGroup","synthetic":true,"types":[]},{"text":"impl Unpin for SandboxMode","synthetic":true,"types":[]},{"text":"impl Unpin for SandboxControls","synthetic":true,"types":[]},{"text":"impl Unpin for BackToMainMenu","synthetic":true,"types":[]},{"text":"impl Unpin for AgentMeter","synthetic":true,"types":[]},{"text":"impl Unpin for Actions","synthetic":true,"types":[]},{"text":"impl Unpin for DashTab","synthetic":true,"types":[]},{"text":"impl Unpin for CommuterPatterns","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for PanelState&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Block","synthetic":true,"types":[]},{"text":"impl Unpin for Filter","synthetic":true,"types":[]},{"text":"impl Unpin for Loop","synthetic":true,"types":[]},{"text":"impl Unpin for BlockSelection","synthetic":true,"types":[]},{"text":"impl Unpin for BorderType","synthetic":true,"types":[]},{"text":"impl&lt;T, F, P&gt; Unpin for GenericTripTable&lt;T, F, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for ActiveTraffic","synthetic":true,"types":[]},{"text":"impl Unpin for TransitRoutes","synthetic":true,"types":[]},{"text":"impl Unpin for ParkingOverhead","synthetic":true,"types":[]},{"text":"impl Unpin for Entry","synthetic":true,"types":[]},{"text":"impl Unpin for Filters","synthetic":true,"types":[]},{"text":"impl Unpin for TripSummaries","synthetic":true,"types":[]},{"text":"impl Unpin for Filter","synthetic":true,"types":[]},{"text":"impl&lt;T, F&gt; Unpin for Table&lt;T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Column&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, F&gt; Unpin for Filter&lt;T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Col&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for TrafficSignalDemand","synthetic":true,"types":[]},{"text":"impl Unpin for Demand","synthetic":true,"types":[]},{"text":"impl Unpin for FinishedTripTable","synthetic":true,"types":[]},{"text":"impl Unpin for CancelledTripTable","synthetic":true,"types":[]},{"text":"impl Unpin for UnfinishedTripTable","synthetic":true,"types":[]},{"text":"impl Unpin for FinishedTrip","synthetic":true,"types":[]},{"text":"impl Unpin for CancelledTrip","synthetic":true,"types":[]},{"text":"impl Unpin for UnfinishedTrip","synthetic":true,"types":[]},{"text":"impl Unpin for Filters","synthetic":true,"types":[]},{"text":"impl Unpin for FinalScore","synthetic":true,"types":[]},{"text":"impl Unpin for GameplayMode","synthetic":true,"types":[]},{"text":"impl Unpin for OptimizeCommute","synthetic":true,"types":[]},{"text":"impl Unpin for FixTrafficSignals","synthetic":true,"types":[]},{"text":"impl Unpin for Freeform","synthetic":true,"types":[]},{"text":"impl Unpin for AgentSpawner","synthetic":true,"types":[]},{"text":"impl Unpin for PlayScenario","synthetic":true,"types":[]},{"text":"impl Unpin for EditScenarioModifiers","synthetic":true,"types":[]},{"text":"impl Unpin for ChangeMode","synthetic":true,"types":[]},{"text":"impl Unpin for Tutorial","synthetic":true,"types":[]},{"text":"impl Unpin for TutorialPointer","synthetic":true,"types":[]},{"text":"impl Unpin for Stage","synthetic":true,"types":[]},{"text":"impl Unpin for TutorialState","synthetic":true,"types":[]},{"text":"impl Unpin for Task","synthetic":true,"types":[]},{"text":"impl Unpin for RoutePreview","synthetic":true,"types":[]},{"text":"impl Unpin for TurnExplorer","synthetic":true,"types":[]},{"text":"impl Unpin for SpeedControls","synthetic":true,"types":[]},{"text":"impl Unpin for TimePanel","synthetic":true,"types":[]},{"text":"impl Unpin for SpeedSetting","synthetic":true,"types":[]},{"text":"impl Unpin for JumpToTime","synthetic":true,"types":[]},{"text":"impl Unpin for JumpToDelay","synthetic":true,"types":[]},{"text":"impl Unpin for TimeWarpScreen","synthetic":true,"types":[]},{"text":"impl Unpin for UberTurnPicker","synthetic":true,"types":[]},{"text":"impl Unpin for UberTurnViewer","synthetic":true,"types":[]}];
implementors["geom"] = [{"text":"impl Unpin for Angle","synthetic":true,"types":[]},{"text":"impl Unpin for Bounds","synthetic":true,"types":[]},{"text":"impl Unpin for GPSBounds","synthetic":true,"types":[]},{"text":"impl Unpin for Circle","synthetic":true,"types":[]},{"text":"impl Unpin for Distance","synthetic":true,"types":[]},{"text":"impl Unpin for Duration","synthetic":true,"types":[]},{"text":"impl&lt;K&gt; Unpin for FindClosest&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for LonLat","synthetic":true,"types":[]},{"text":"impl Unpin for InfiniteLine","synthetic":true,"types":[]},{"text":"impl Unpin for Line","synthetic":true,"types":[]},{"text":"impl Unpin for Percent","synthetic":true,"types":[]},{"text":"impl Unpin for Polygon","synthetic":true,"types":[]},{"text":"impl Unpin for Triangle","synthetic":true,"types":[]},{"text":"impl Unpin for PolyLine","synthetic":true,"types":[]},{"text":"impl Unpin for HashablePt2D","synthetic":true,"types":[]},{"text":"impl Unpin for Pt2D","synthetic":true,"types":[]},{"text":"impl Unpin for Ring","synthetic":true,"types":[]},{"text":"impl Unpin for Speed","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Histogram&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Time","synthetic":true,"types":[]},{"text":"impl Unpin for ArrowCap","synthetic":true,"types":[]},{"text":"impl Unpin for Statistic","synthetic":true,"types":[]}];
implementors["headless"] = [{"text":"impl Unpin for MAP","synthetic":true,"types":[]},{"text":"impl Unpin for SIM","synthetic":true,"types":[]},{"text":"impl Unpin for LOAD","synthetic":true,"types":[]},{"text":"impl Unpin for FinishedTrip","synthetic":true,"types":[]},{"text":"impl Unpin for Delays","synthetic":true,"types":[]},{"text":"impl Unpin for Throughput","synthetic":true,"types":[]},{"text":"impl Unpin for AgentPositions","synthetic":true,"types":[]},{"text":"impl Unpin for AgentPosition","synthetic":true,"types":[]},{"text":"impl Unpin for RoadThroughput","synthetic":true,"types":[]},{"text":"impl Unpin for TrafficSignalState","synthetic":true,"types":[]},{"text":"impl Unpin for LoadSim","synthetic":true,"types":[]}];
implementors["import_traffic"] = [{"text":"impl Unpin for Input","synthetic":true,"types":[]}];
implementors["importer"] = [{"text":"impl Unpin for Job","synthetic":true,"types":[]},{"text":"impl Unpin for Record","synthetic":true,"types":[]},{"text":"impl Unpin for ImporterConfiguration","synthetic":true,"types":[]},{"text":"impl Unpin for TripRecord","synthetic":true,"types":[]},{"text":"impl Unpin for StopTimeRecord","synthetic":true,"types":[]}];
implementors["kml"] = [{"text":"impl Unpin for ExtraShapes","synthetic":true,"types":[]},{"text":"impl Unpin for ExtraShape","synthetic":true,"types":[]}];
implementors["map_editor"] = [{"text":"impl Unpin for UI","synthetic":true,"types":[]},{"text":"impl Unpin for State","synthetic":true,"types":[]},{"text":"impl Unpin for Model","synthetic":true,"types":[]},{"text":"impl Unpin for ID","synthetic":true,"types":[]},{"text":"impl&lt;ID&gt; Unpin for Object&lt;ID&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ID: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for WorldObject","synthetic":true,"types":[]},{"text":"impl&lt;ID&gt; Unpin for World&lt;ID&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ID: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["map_model"] = [{"text":"impl Unpin for City","synthetic":true,"types":[]},{"text":"impl Unpin for EditEffects","synthetic":true,"types":[]},{"text":"impl Unpin for EditRoad","synthetic":true,"types":[]},{"text":"impl Unpin for MapEdits","synthetic":true,"types":[]},{"text":"impl Unpin for PermanentMapEdits","synthetic":true,"types":[]},{"text":"impl Unpin for MapConfig","synthetic":true,"types":[]},{"text":"impl Unpin for Area","synthetic":true,"types":[]},{"text":"impl Unpin for AreaID","synthetic":true,"types":[]},{"text":"impl Unpin for Building","synthetic":true,"types":[]},{"text":"impl Unpin for BuildingID","synthetic":true,"types":[]},{"text":"impl Unpin for NamePerLanguage","synthetic":true,"types":[]},{"text":"impl Unpin for BusRoute","synthetic":true,"types":[]},{"text":"impl Unpin for BusRouteID","synthetic":true,"types":[]},{"text":"impl Unpin for BusStop","synthetic":true,"types":[]},{"text":"impl Unpin for BusStopID","synthetic":true,"types":[]},{"text":"impl Unpin for Intersection","synthetic":true,"types":[]},{"text":"impl Unpin for IntersectionID","synthetic":true,"types":[]},{"text":"impl Unpin for Lane","synthetic":true,"types":[]},{"text":"impl Unpin for LaneID","synthetic":true,"types":[]},{"text":"impl Unpin for ParkingLot","synthetic":true,"types":[]},{"text":"impl Unpin for ParkingLotID","synthetic":true,"types":[]},{"text":"impl Unpin for DirectedRoadID","synthetic":true,"types":[]},{"text":"impl Unpin for Road","synthetic":true,"types":[]},{"text":"impl Unpin for RoadID","synthetic":true,"types":[]},{"text":"impl Unpin for ControlStopSign","synthetic":true,"types":[]},{"text":"impl Unpin for RoadWithStopSign","synthetic":true,"types":[]},{"text":"impl Unpin for ControlTrafficSignal","synthetic":true,"types":[]},{"text":"impl Unpin for Stage","synthetic":true,"types":[]},{"text":"impl Unpin for CompressedMovementID","synthetic":true,"types":[]},{"text":"impl Unpin for Movement","synthetic":true,"types":[]},{"text":"impl Unpin for MovementID","synthetic":true,"types":[]},{"text":"impl Unpin for Turn","synthetic":true,"types":[]},{"text":"impl Unpin for TurnID","synthetic":true,"types":[]},{"text":"impl Unpin for AccessRestrictions","synthetic":true,"types":[]},{"text":"impl Unpin for Zone","synthetic":true,"types":[]},{"text":"impl Unpin for IntersectionCluster","synthetic":true,"types":[]},{"text":"impl Unpin for UberTurn","synthetic":true,"types":[]},{"text":"impl Unpin for UberTurnGroup","synthetic":true,"types":[]},{"text":"impl Unpin for Path","synthetic":true,"types":[]},{"text":"impl Unpin for PathRequest","synthetic":true,"types":[]},{"text":"impl Unpin for Position","synthetic":true,"types":[]},{"text":"impl Unpin for Map","synthetic":true,"types":[]},{"text":"impl Unpin for EditCmd","synthetic":true,"types":[]},{"text":"impl Unpin for EditIntersection","synthetic":true,"types":[]},{"text":"impl Unpin for DrivingSide","synthetic":true,"types":[]},{"text":"impl Unpin for AreaType","synthetic":true,"types":[]},{"text":"impl Unpin for BuildingType","synthetic":true,"types":[]},{"text":"impl Unpin for OffstreetParking","synthetic":true,"types":[]},{"text":"impl Unpin for IntersectionType","synthetic":true,"types":[]},{"text":"impl Unpin for LaneType","synthetic":true,"types":[]},{"text":"impl Unpin for Direction","synthetic":true,"types":[]},{"text":"impl Unpin for PhaseType","synthetic":true,"types":[]},{"text":"impl Unpin for TurnPriority","synthetic":true,"types":[]},{"text":"impl Unpin for TurnType","synthetic":true,"types":[]},{"text":"impl Unpin for PathConstraints","synthetic":true,"types":[]},{"text":"impl Unpin for PathStep","synthetic":true,"types":[]},{"text":"impl Unpin for Traversable","synthetic":true,"types":[]},{"text":"impl Unpin for OriginalLane","synthetic":true,"types":[]},{"text":"impl Unpin for ChangeLaneType","synthetic":true,"types":[]},{"text":"impl Unpin for ReverseLane","synthetic":true,"types":[]},{"text":"impl Unpin for ChangeSpeedLimit","synthetic":true,"types":[]},{"text":"impl Unpin for ChangeAccessRestrictions","synthetic":true,"types":[]},{"text":"impl Unpin for PermanentEditIntersection","synthetic":true,"types":[]},{"text":"impl Unpin for PermanentEditCmd","synthetic":true,"types":[]},{"text":"impl Unpin for InitialMap","synthetic":true,"types":[]},{"text":"impl Unpin for Road","synthetic":true,"types":[]},{"text":"impl Unpin for Intersection","synthetic":true,"types":[]},{"text":"impl Unpin for Piece","synthetic":true,"types":[]},{"text":"impl Unpin for LaneSpec","synthetic":true,"types":[]},{"text":"impl Unpin for Partition","synthetic":true,"types":[]},{"text":"impl Unpin for Matcher","synthetic":true,"types":[]},{"text":"impl Unpin for NodeID","synthetic":true,"types":[]},{"text":"impl Unpin for WayID","synthetic":true,"types":[]},{"text":"impl Unpin for RelationID","synthetic":true,"types":[]},{"text":"impl Unpin for RoadRank","synthetic":true,"types":[]},{"text":"impl Unpin for OsmID","synthetic":true,"types":[]},{"text":"impl Unpin for Pathfinder","synthetic":true,"types":[]},{"text":"impl Unpin for ContractionHierarchyPathfinder","synthetic":true,"types":[]},{"text":"impl Unpin for VehiclePathfinder","synthetic":true,"types":[]},{"text":"impl Unpin for Node","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for NodeMap&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for SidewalkPathfinder","synthetic":true,"types":[]},{"text":"impl Unpin for WalkingNode","synthetic":true,"types":[]},{"text":"impl Unpin for RawMap","synthetic":true,"types":[]},{"text":"impl Unpin for OriginalRoad","synthetic":true,"types":[]},{"text":"impl Unpin for RawRoad","synthetic":true,"types":[]},{"text":"impl Unpin for RawIntersection","synthetic":true,"types":[]},{"text":"impl Unpin for RawBuilding","synthetic":true,"types":[]},{"text":"impl Unpin for RawArea","synthetic":true,"types":[]},{"text":"impl Unpin for RawParkingLot","synthetic":true,"types":[]},{"text":"impl Unpin for TurnRestriction","synthetic":true,"types":[]},{"text":"impl Unpin for RawBusRoute","synthetic":true,"types":[]},{"text":"impl Unpin for RawBusStop","synthetic":true,"types":[]},{"text":"impl Unpin for RestrictionType","synthetic":true,"types":[]}];
implementors["sim"] = [{"text":"impl Unpin for Analytics","synthetic":true,"types":[]},{"text":"impl Unpin for TripPhase","synthetic":true,"types":[]},{"text":"impl Unpin for BorderSpawnOverTime","synthetic":true,"types":[]},{"text":"impl Unpin for ExternalPerson","synthetic":true,"types":[]},{"text":"impl Unpin for ExternalTrip","synthetic":true,"types":[]},{"text":"impl Unpin for IndividTrip","synthetic":true,"types":[]},{"text":"impl Unpin for OffMapLocation","synthetic":true,"types":[]},{"text":"impl Unpin for PersonSpec","synthetic":true,"types":[]},{"text":"impl Unpin for Scenario","synthetic":true,"types":[]},{"text":"impl Unpin for ScenarioGenerator","synthetic":true,"types":[]},{"text":"impl Unpin for SimFlags","synthetic":true,"types":[]},{"text":"impl Unpin for SpawnOverTime","synthetic":true,"types":[]},{"text":"impl Unpin for TripSpawner","synthetic":true,"types":[]},{"text":"impl Unpin for AgentProperties","synthetic":true,"types":[]},{"text":"impl Unpin for Sim","synthetic":true,"types":[]},{"text":"impl Unpin for SimOptions","synthetic":true,"types":[]},{"text":"impl Unpin for Person","synthetic":true,"types":[]},{"text":"impl Unpin for TripInfo","synthetic":true,"types":[]},{"text":"impl Unpin for DontDrawAgents","synthetic":true,"types":[]},{"text":"impl Unpin for DrawCarInput","synthetic":true,"types":[]},{"text":"impl Unpin for DrawPedCrowdInput","synthetic":true,"types":[]},{"text":"impl Unpin for DrawPedestrianInput","synthetic":true,"types":[]},{"text":"impl Unpin for UnzoomedAgent","synthetic":true,"types":[]},{"text":"impl Unpin for CarID","synthetic":true,"types":[]},{"text":"impl Unpin for PedestrianID","synthetic":true,"types":[]},{"text":"impl Unpin for TripID","synthetic":true,"types":[]},{"text":"impl Unpin for PersonID","synthetic":true,"types":[]},{"text":"impl Unpin for OrigPersonID","synthetic":true,"types":[]},{"text":"impl Unpin for Vehicle","synthetic":true,"types":[]},{"text":"impl Unpin for VehicleSpec","synthetic":true,"types":[]},{"text":"impl Unpin for ParkedCar","synthetic":true,"types":[]},{"text":"impl Unpin for SidewalkSpot","synthetic":true,"types":[]},{"text":"impl Unpin for TimeInterval","synthetic":true,"types":[]},{"text":"impl Unpin for DistanceInterval","synthetic":true,"types":[]},{"text":"impl Unpin for CreatePedestrian","synthetic":true,"types":[]},{"text":"impl Unpin for CreateCar","synthetic":true,"types":[]},{"text":"impl Unpin for AlertLocation","synthetic":true,"types":[]},{"text":"impl Unpin for TripPhaseType","synthetic":true,"types":[]},{"text":"impl Unpin for ExternalTripEndpoint","synthetic":true,"types":[]},{"text":"impl Unpin for OriginDestination","synthetic":true,"types":[]},{"text":"impl Unpin for ScenarioModifier","synthetic":true,"types":[]},{"text":"impl Unpin for SpawnTrip","synthetic":true,"types":[]},{"text":"impl Unpin for TripPurpose","synthetic":true,"types":[]},{"text":"impl Unpin for TripSpec","synthetic":true,"types":[]},{"text":"impl Unpin for AlertHandler","synthetic":true,"types":[]},{"text":"impl Unpin for PersonState","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for TripResult&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for TripEndpoint","synthetic":true,"types":[]},{"text":"impl Unpin for TripMode","synthetic":true,"types":[]},{"text":"impl Unpin for CarStatus","synthetic":true,"types":[]},{"text":"impl Unpin for PedCrowdLocation","synthetic":true,"types":[]},{"text":"impl Unpin for AgentID","synthetic":true,"types":[]},{"text":"impl Unpin for AgentType","synthetic":true,"types":[]},{"text":"impl Unpin for VehicleType","synthetic":true,"types":[]},{"text":"impl Unpin for ParkingSpot","synthetic":true,"types":[]},{"text":"impl Unpin for DrivingGoal","synthetic":true,"types":[]},{"text":"impl Unpin for SidewalkPOI","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; Unpin for TimeSeriesCount&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Window","synthetic":true,"types":[]},{"text":"impl Unpin for CapSimState","synthetic":true,"types":[]},{"text":"impl Unpin for Zone","synthetic":true,"types":[]},{"text":"impl Unpin for Event","synthetic":true,"types":[]},{"text":"impl Unpin for Car","synthetic":true,"types":[]},{"text":"impl Unpin for CarState","synthetic":true,"types":[]},{"text":"impl Unpin for DrivingSimState","synthetic":true,"types":[]},{"text":"impl Unpin for IntersectionSimState","synthetic":true,"types":[]},{"text":"impl Unpin for State","synthetic":true,"types":[]},{"text":"impl Unpin for SignalState","synthetic":true,"types":[]},{"text":"impl Unpin for Request","synthetic":true,"types":[]},{"text":"impl Unpin for NormalParkingSimState","synthetic":true,"types":[]},{"text":"impl Unpin for ParkingLane","synthetic":true,"types":[]},{"text":"impl Unpin for InfiniteParkingSimState","synthetic":true,"types":[]},{"text":"impl Unpin for ParkingSimState","synthetic":true,"types":[]},{"text":"impl Unpin for Queue","synthetic":true,"types":[]},{"text":"impl Unpin for WalkingSimState","synthetic":true,"types":[]},{"text":"impl Unpin for Pedestrian","synthetic":true,"types":[]},{"text":"impl Unpin for PedState","synthetic":true,"types":[]},{"text":"impl Unpin for AnyTime","synthetic":true,"types":[]},{"text":"impl Unpin for Event","synthetic":true,"types":[]},{"text":"impl Unpin for StateEvent","synthetic":true,"types":[]},{"text":"impl Unpin for State","synthetic":true,"types":[]},{"text":"impl Unpin for PandemicModel","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for SharedSpace&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Cmd","synthetic":true,"types":[]},{"text":"impl Unpin for Router","synthetic":true,"types":[]},{"text":"impl Unpin for ActionAtEnd","synthetic":true,"types":[]},{"text":"impl Unpin for Goal","synthetic":true,"types":[]},{"text":"impl Unpin for Item","synthetic":true,"types":[]},{"text":"impl Unpin for Scheduler","synthetic":true,"types":[]},{"text":"impl Unpin for Command","synthetic":true,"types":[]},{"text":"impl Unpin for CommandType","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Ctx&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Stop","synthetic":true,"types":[]},{"text":"impl Unpin for Route","synthetic":true,"types":[]},{"text":"impl Unpin for Bus","synthetic":true,"types":[]},{"text":"impl Unpin for TransitSimState","synthetic":true,"types":[]},{"text":"impl Unpin for BusState","synthetic":true,"types":[]},{"text":"impl Unpin for TripManager","synthetic":true,"types":[]},{"text":"impl Unpin for Trip","synthetic":true,"types":[]},{"text":"impl Unpin for TripLeg","synthetic":true,"types":[]}];
implementors["updater"] = [{"text":"impl Unpin for Cities","synthetic":true,"types":[]}];
implementors["widgetry"] = [{"text":"impl Unpin for Drawable","synthetic":true,"types":[]},{"text":"impl Unpin for Canvas","synthetic":true,"types":[]},{"text":"impl Unpin for Color","synthetic":true,"types":[]},{"text":"impl Unpin for LinearGradient","synthetic":true,"types":[]},{"text":"impl Unpin for Texture","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for GfxCtx&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Prerender","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for EventCtx&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for GeomBatch","synthetic":true,"types":[]},{"text":"impl Unpin for UserInput","synthetic":true,"types":[]},{"text":"impl Unpin for Settings","synthetic":true,"types":[]},{"text":"impl Unpin for ScreenDims","synthetic":true,"types":[]},{"text":"impl Unpin for ScreenPt","synthetic":true,"types":[]},{"text":"impl Unpin for ScreenRectangle","synthetic":true,"types":[]},{"text":"impl Unpin for Style","synthetic":true,"types":[]},{"text":"impl Unpin for Text","synthetic":true,"types":[]},{"text":"impl Unpin for TextSpan","synthetic":true,"types":[]},{"text":"impl Unpin for Warper","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Autocomplete&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Btn","synthetic":true,"types":[]},{"text":"impl Unpin for MultiButton","synthetic":true,"types":[]},{"text":"impl Unpin for Checkbox","synthetic":true,"types":[]},{"text":"impl Unpin for CompareTimes","synthetic":true,"types":[]},{"text":"impl Unpin for FanChart","synthetic":true,"types":[]},{"text":"impl Unpin for Filler","synthetic":true,"types":[]},{"text":"impl Unpin for DrawWithTooltips","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for LinePlot&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for PlotOptions&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Series&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Menu&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for PersistentSplit&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for ScatterPlot","synthetic":true,"types":[]},{"text":"impl Unpin for AreaSlider","synthetic":true,"types":[]},{"text":"impl Unpin for Slider","synthetic":true,"types":[]},{"text":"impl Unpin for Spinner","synthetic":true,"types":[]},{"text":"impl Unpin for EdgeInsets","synthetic":true,"types":[]},{"text":"impl Unpin for Panel","synthetic":true,"types":[]},{"text":"impl Unpin for Widget","synthetic":true,"types":[]},{"text":"impl Unpin for WidgetOutput","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Choice&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for HorizontalAlignment","synthetic":true,"types":[]},{"text":"impl Unpin for VerticalAlignment","synthetic":true,"types":[]},{"text":"impl Unpin for Fill","synthetic":true,"types":[]},{"text":"impl Unpin for Event","synthetic":true,"types":[]},{"text":"impl Unpin for Key","synthetic":true,"types":[]},{"text":"impl Unpin for MultiKey","synthetic":true,"types":[]},{"text":"impl Unpin for UpdateType","synthetic":true,"types":[]},{"text":"impl Unpin for RewriteColor","synthetic":true,"types":[]},{"text":"impl Unpin for Outcome","synthetic":true,"types":[]},{"text":"impl Unpin for Assets","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for GfxCtxInnards&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for VertexArray","synthetic":true,"types":[]},{"text":"impl Unpin for Buffer","synthetic":true,"types":[]},{"text":"impl Unpin for PrerenderInnards","synthetic":true,"types":[]},{"text":"impl Unpin for WindowAdapter","synthetic":true,"types":[]},{"text":"impl Unpin for CameraState","synthetic":true,"types":[]},{"text":"impl Unpin for Uniforms","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for LoadingScreen&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;G&gt; Unpin for State&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for PathConvIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Font","synthetic":true,"types":[]},{"text":"impl Unpin for LayoutStyle","synthetic":true,"types":[]},{"text":"impl Unpin for Button","synthetic":true,"types":[]},{"text":"impl Unpin for BtnBuilder","synthetic":true,"types":[]},{"text":"impl Unpin for Nothing","synthetic":true,"types":[]},{"text":"impl Unpin for Container","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Dropdown&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for JustDraw","synthetic":true,"types":[]},{"text":"impl Unpin for DeferDraw","synthetic":true,"types":[]},{"text":"impl Unpin for PanelBuilder","synthetic":true,"types":[]},{"text":"impl Unpin for Dims","synthetic":true,"types":[]},{"text":"impl Unpin for TextBox","synthetic":true,"types":[]}];
implementors["widgetry_demo"] = [{"text":"impl Unpin for App","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()