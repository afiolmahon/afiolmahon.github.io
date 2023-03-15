(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n    display: block;\n}\n\n#info {\n\tposition: absolute;\n\t/* top: 0%; */\n\tmargin-top: -3%;\n\twidth: 100%;\n\t/* text-align: center; */\n\t/* z-index: 99; */\n\tdisplay:block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixlQUFlO0NBQ2YsV0FBVztDQUNYLHdCQUF3QjtDQUN4QixpQkFBaUI7Q0FDakIsYUFBYTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jaW5mbyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0LyogdG9wOiAwJTsgKi9cblx0bWFyZ2luLXRvcDogLTMlO1xuXHR3aWR0aDogMTAwJTtcblx0LyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuXHQvKiB6LWluZGV4OiA5OTsgKi9cblx0ZGlzcGxheTpibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (window:resize)=\"onWindowResize($event)\" (mousedown)=\"inputHandler.onMouseDown($event)\"\n    (mousemove)=\"inputHandler.onMouseMove($event)\" (mouseup)=\"inputHandler.onMouseUp($event)\"\n    (wheel)=\"onScroll($event)\">\n    <div id=\"info\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"d-flex justify-content-center\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <h5>Grow</h5>\n                                <p>Money: ${{labelMoney.toFixed(2)}} {{labelDebug}}</p>\n                                \n                                <div class=\"btn-group btn-group-md\" role=\"group\">\n                                    <button (click)=\"setInteraction('Construct')\" class=\"btn btn-warning\">Build</button>\n                                    <button (click)=\"setInteraction('Demolish')\" class=\"btn btn-danger\">Remove</button>\n                                    <button (click)=\"setInteraction('Plant')\" class=\"btn btn-success\">Plant</button>\n                                    <button (click)=\"setInteraction('Harvest')\" class=\"btn btn-danger\">Harvest</button>\n                                    <button (click)=\"setInteraction('Info')\" class=\"btn btn-info\">Info</button>\n                                    <button (click)=\"actionTimestep()\" class=\"btn btn-primary\">Timestep</button>\n                                    <button (click)=\"setInteraction('None')\" class=\"btn btn-secondary\">Deselect</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <app-tile-detail [terrain]=\"infoTerrain\"></app-tile-detail>\n                    <app-plant-seed-menu [seedList]=\"seedList\" [plantTargetID]=\"plantTargetID\" (selectSeed)=\"onPlant($event)\"></app-plant-seed-menu>\n                    <app-menu-construct [constructList]=\"constructList\" [targetID]=\"constructTargetID\" (selectConstructID)=\"onConstruct($event)\"></app-menu-construct>\n                </div>\n            </div>\n        </div>\n    </div>\n    <canvas #canvas (touchstart)=\"th.onTouchStart($event)\" (touchmove)=\"th.onTouchMove($event)\"\n        (touchend)=\"th.onTouchEnd($event)\"></canvas>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _engine_action_Action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/action/Action */ "./src/app/engine/action/Action.ts");
/* harmony import */ var _engine_action_ActionInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/action/ActionInfo */ "./src/app/engine/action/ActionInfo.ts");
/* harmony import */ var _engine_action_ActionHarvest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/action/ActionHarvest */ "./src/app/engine/action/ActionHarvest.ts");
/* harmony import */ var _engine_action_ActionDemolish__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine/action/ActionDemolish */ "./src/app/engine/action/ActionDemolish.ts");
/* harmony import */ var _engine_ThreeCameraController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine/ThreeCameraController */ "./src/app/engine/ThreeCameraController.ts");
/* harmony import */ var _engine_entity_EntityTerrainGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engine/entity/EntityTerrainGrid */ "./src/app/engine/entity/EntityTerrainGrid.ts");
/* harmony import */ var _engine_ThreeInputHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./engine/ThreeInputHandler */ "./src/app/engine/ThreeInputHandler.ts");
/* harmony import */ var _engine_ThreeMeshInteraction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./engine/ThreeMeshInteraction */ "./src/app/engine/ThreeMeshInteraction.ts");
/* harmony import */ var _farm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./farm.service */ "./src/app/farm.service.ts");
/* harmony import */ var _engine_entity_Entity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./engine/entity/Entity */ "./src/app/engine/entity/Entity.ts");
/* harmony import */ var _engine_action_ActionConstruct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./engine/action/ActionConstruct */ "./src/app/engine/action/ActionConstruct.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _engine_action_ActionPlant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./engine/action/ActionPlant */ "./src/app/engine/action/ActionPlant.ts");















var colorBackground = 0x54A1FF;
var colorGround = 0x457a45;
var textureGrass = Object(_engine_entity_Entity__WEBPACK_IMPORTED_MODULE_11__["loadTextureRepeating"])('grass_block_top', 15, 5);
var geometryGround = new three__WEBPACK_IMPORTED_MODULE_13__["PlaneBufferGeometry"](_engine_entity_Entity__WEBPACK_IMPORTED_MODULE_11__["TILESIZE"] * 30, _engine_entity_Entity__WEBPACK_IMPORTED_MODULE_11__["TILESIZE"] * 10);
var materialGround = new three__WEBPACK_IMPORTED_MODULE_13__["MeshLambertMaterial"]({ map: textureGrass, color: colorGround });
var AppComponent = /** @class */ (function () {
    function AppComponent(fs) {
        this.fs = fs;
        this.labelMoney = undefined;
        this.labelDebug = undefined;
        this.actionActive = new _engine_action_Action__WEBPACK_IMPORTED_MODULE_2__["ActionNone"]();
        this.lastAnimateTimestamp = 0;
        this.constructList = _engine_action_ActionConstruct__WEBPACK_IMPORTED_MODULE_12__["buildList"];
        this.ground = new three__WEBPACK_IMPORTED_MODULE_13__["Mesh"](geometryGround, materialGround);
        this.ground.frustumCulled = false;
    }
    /**
     * Terrain Update handler
     */
    AppComponent.prototype.onTileAction = function (tid, requestAction) {
        var _this = this;
        this.fs.getWorld().subscribe(function (world) {
            var actionResult = requestAction.performAction(tid, world);
            requestAction.updateUI(actionResult, _this);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load the world from the server
        this.fs.getWorld().subscribe(function (world) {
            _this.labelMoney = world.money;
            _this.entityGrid = new _engine_entity_EntityTerrainGrid__WEBPACK_IMPORTED_MODULE_7__["EntityGrid"](world.terrain, world.sizeX, world.sizeY);
        });
        this.createScene();
        this.startRenderingLoop();
        // Initialize the cursor-mesh collision handler
        this.meshInteraction = new _engine_ThreeMeshInteraction__WEBPACK_IMPORTED_MODULE_9__["MeshInteraction"](this.renderer.domElement.clientWidth, this.renderer.domElement.clientHeight, this.cameraControl.camera);
        // Initialize the mouse/touchscreen input handler
        this.inputHandler = new _engine_ThreeInputHandler__WEBPACK_IMPORTED_MODULE_8__["InputHandler"](function (x, y) {
            return _this.meshInteraction.handlePointer(x, y, 'down');
        }, function (x, y) {
            return _this.meshInteraction.handlePointer(x, y, 'move');
        }, function (dp) {
            _this.cameraControl.zoom(dp);
        }, function (dx) {
            _this.cameraControl.dolly(dx);
        });
        // Register Mouse Hover handlers for each tile
        this.entityGrid.tiles.forEach(function (eventTriggerTile) {
            _this.meshInteraction.registerEvent(new _engine_ThreeMeshInteraction__WEBPACK_IMPORTED_MODULE_9__["MeshEvent"]('move', eventTriggerTile.meshSelect, function () {
                _this.entityGrid.tiles.forEach(function (e) {
                    e.setHovered(eventTriggerTile === e);
                });
            }));
        });
        // Register Mouse Down handlers for each tile
        this.entityGrid.tiles.forEach(function (tile, index) {
            _this.meshInteraction.registerEvent(new _engine_ThreeMeshInteraction__WEBPACK_IMPORTED_MODULE_9__["MeshEvent"]('down', tile.meshSelect, function () {
                _this.onTileAction(index, _this.actionActive);
            }));
        });
        // Key event handler
        document.addEventListener('keyup', function (e) { _this.onKeyUp(e.key); });
    };
    AppComponent.prototype.animate = function (timestamp) {
        var dt = timestamp - this.lastAnimateTimestamp;
        this.lastAnimateTimestamp = timestamp;
        this.entityGrid.tiles.forEach(function (e) { return e.animate(dt / 1000); });
    };
    AppComponent.prototype.onPlant = function (seedID) {
        var _this = this;
        this.fs.getWorld().subscribe(function (world) {
            var action = new _engine_action_ActionPlant__WEBPACK_IMPORTED_MODULE_14__["ActionPlant"](seedID);
            var result = action.performAction(_this.plantTargetID, world);
            action.updateUI(result, _this);
        });
    };
    AppComponent.prototype.onConstruct = function (buildID) {
        var _this = this;
        this.fs.getWorld().subscribe(function (world) {
            var action = new _engine_action_ActionConstruct__WEBPACK_IMPORTED_MODULE_12__["ActionConstruct"](buildID);
            var result = action.performAction(_this.constructTargetID, world);
            action.updateUI(result, _this);
        });
    };
    AppComponent.prototype.createScene = function () {
        this.cameraControl = new _engine_ThreeCameraController__WEBPACK_IMPORTED_MODULE_6__["CameraControler"](new three__WEBPACK_IMPORTED_MODULE_13__["PerspectiveCamera"](40, this.getAspectRatio(), 1, 1000));
        this.scene = new three__WEBPACK_IMPORTED_MODULE_13__["Scene"]();
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_13__["Color"](colorBackground);
        // Setup Lighting
        var hemiLight = new three__WEBPACK_IMPORTED_MODULE_13__["HemisphereLight"](0xffffff, 0x222222, 0.8);
        hemiLight.position.set(0, 50, 0);
        this.scene.add(hemiLight);
        var dirLight = new three__WEBPACK_IMPORTED_MODULE_13__["DirectionalLight"](0xffffff, 0.7);
        dirLight.position.set(1, -1.75, 1);
        dirLight.position.multiplyScalar(30);
        this.scene.add(dirLight);
        var dirLight2 = new three__WEBPACK_IMPORTED_MODULE_13__["DirectionalLight"](0xffffff, 0.5);
        dirLight2.position.set(-30, -10, 30);
        this.scene.add(dirLight2);
        // Add geometry to scene
        this.scene.add(this.ground);
        this.scene.add(this.entityGrid.gridModel);
    };
    AppComponent.prototype.actionTimestep = function () {
        var _this = this;
        this.fs.getWorld().subscribe(function (world) {
            var action = new _engine_action_Action__WEBPACK_IMPORTED_MODULE_2__["ActionTimestep"]();
            world.terrain.forEach(function (e, index) {
                var result = action.performAction(index, world);
                action.updateUI(result, _this);
            });
        });
    };
    AppComponent.prototype.setInteraction = function (act) {
        var _this = this;
        this.plantTargetID = undefined;
        this.constructTargetID = undefined;
        this.infoTerrain = undefined;
        if (act === 'Construct') {
            this.actionActive = new _engine_action_ActionConstruct__WEBPACK_IMPORTED_MODULE_12__["ActionConstructTargetPlot"]();
        }
        else if (act === 'Demolish') {
            this.actionActive = new _engine_action_ActionDemolish__WEBPACK_IMPORTED_MODULE_5__["ActionDemolish"]();
        }
        else if (act === 'Plant') {
            this.actionActive = new _engine_action_ActionPlant__WEBPACK_IMPORTED_MODULE_14__["ActionPlantTargetPlot"]();
        }
        else if (act === 'Harvest') {
            this.actionActive = new _engine_action_ActionHarvest__WEBPACK_IMPORTED_MODULE_4__["ActionHarvest"]();
        }
        else if (act === 'None') {
            this.actionActive = new _engine_action_Action__WEBPACK_IMPORTED_MODULE_2__["ActionNone"]();
        }
        else if (act === 'Info') {
            this.actionActive = new _engine_action_ActionInfo__WEBPACK_IMPORTED_MODULE_3__["ActionInfo"]();
        }
        this.fs.getWorld().subscribe(function (world) {
            _this.actionActive.onActionSelectUI(world, _this);
        });
    };
    Object.defineProperty(AppComponent.prototype, "canvas", {
        get: function () { return this.canvasRef.nativeElement; },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.startRenderingLoop = function () {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_13__["WebGLRenderer"]({ canvas: this.canvas, antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        var component = this;
        var render = function (timestamp) {
            component.animate(timestamp);
            component.renderer.render(component.scene, component.cameraControl.camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
    };
    AppComponent.prototype.onKeyUp = function (k) {
        console.log("Key is " + k);
    };
    AppComponent.prototype.onScroll = function (event) {
        if (event.movementY) {
            this.cameraControl.zoom(event.deltaY * 0.2);
        }
    };
    AppComponent.prototype.getAspectRatio = function () { return window.innerWidth / window.innerHeight; };
    /**
     * Fix view when browser window size changes
     */
    AppComponent.prototype.onWindowResize = function (_) {
        this.cameraControl.camera.aspect = this.getAspectRatio();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.cameraControl.updateCamera();
    };
    AppComponent.prototype.openFullscreen = function () {
        if (this.canvasRef.nativeElement.requestFullscreen) {
            this.canvasRef.nativeElement.requestFullscreen();
        }
        else if (this.canvasRef.nativeElement.mozRequestFullScreen) { /* Firefox */
            this.canvasRef.nativeElement.mozRequestFullScreen();
        }
        else if (this.canvasRef.nativeElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            this.canvasRef.nativeElement.webkitRequestFullscreen();
        }
        else if (this.canvasRef.nativeElement.msRequestFullscreen) { /* IE/Edge */
            this.canvasRef.nativeElement.msRequestFullscreen();
        }
        this.canvasRef.nativeElement.style.width = '100%';
        this.canvasRef.nativeElement.style.height = '100%';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "canvasRef", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_farm_service__WEBPACK_IMPORTED_MODULE_10__["FarmService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _plant_seed_menu_plant_seed_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plant-seed-menu/plant-seed-menu.component */ "./src/app/plant-seed-menu/plant-seed-menu.component.ts");
/* harmony import */ var _tile_detail_tile_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tile-detail/tile-detail.component */ "./src/app/tile-detail/tile-detail.component.ts");
/* harmony import */ var _menu_construct_menu_construct_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu-construct/menu-construct.component */ "./src/app/menu-construct/menu-construct.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _plant_seed_menu_plant_seed_menu_component__WEBPACK_IMPORTED_MODULE_7__["PlantSeedMenuComponent"],
                _tile_detail_tile_detail_component__WEBPACK_IMPORTED_MODULE_8__["TileDetailComponent"],
                _menu_construct_menu_construct_component__WEBPACK_IMPORTED_MODULE_9__["MenuConstructComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/engine/ThreeCameraController.ts":
/*!*************************************************!*\
  !*** ./src/app/engine/ThreeCameraController.ts ***!
  \*************************************************/
/*! exports provided: CameraControler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraControler", function() { return CameraControler; });
var CameraControler = /** @class */ (function () {
    function CameraControler(camera) {
        this.camera = camera;
        this.setCamera('bird');
    }
    CameraControler.prototype.setCamera = function (pos) {
        if (pos === 'bird') {
            this.camera.position.z = 30;
            this.camera.position.y = -40;
            this.camera.position.x = 0;
            this.camera.rotation.x = 1.0;
        }
        else if (pos === 'ground') {
            this.camera.position.z = 0;
            this.camera.position.y = -14;
            this.camera.rotation.x = Math.PI / 2;
        }
    };
    CameraControler.prototype.zoom = function (deltaZoom) {
        var maxFOV = 40;
        var minFOV = 10;
        var newFOV = this.camera.fov + (deltaZoom * 0.2);
        if (newFOV > maxFOV) {
            this.camera.fov = maxFOV;
        }
        else if (newFOV < minFOV) {
            this.camera.fov = minFOV;
        }
        else {
            this.camera.fov = newFOV;
        }
        this.camera.updateProjectionMatrix();
        return this.camera.fov.toString();
    };
    CameraControler.prototype.dolly = function (deltaX) {
        var maxX = 16;
        var newX = this.camera.position.x + deltaX;
        if (newX > maxX) {
            this.camera.position.setX(maxX);
        }
        else if (newX < -maxX) {
            this.camera.position.setX(-maxX);
        }
        else {
            this.camera.position.setX(newX);
        }
        return newX.toString();
    };
    CameraControler.prototype.updateCamera = function () {
        this.camera.updateProjectionMatrix();
    };
    return CameraControler;
}());



/***/ }),

/***/ "./src/app/engine/ThreeInputHandler.ts":
/*!*********************************************!*\
  !*** ./src/app/engine/ThreeInputHandler.ts ***!
  \*********************************************/
/*! exports provided: InputHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputHandler", function() { return InputHandler; });
var InputHandler = /** @class */ (function () {
    function InputHandler(onPress, onHover, onPinch, onDeltaX) {
        this.onPress = onPress;
        this.onHover = onHover;
        this.onPinch = onPinch;
        this.onDeltaX = onDeltaX;
        this.scaling = false;
        this.lastDist = 0;
        this.lastXCenter = 0;
        this.lastYCenter = 0;
    }
    InputHandler.prototype.onMouseUp = function (e) {
        e.preventDefault();
        this.scaling = false;
    };
    InputHandler.prototype.onMouseDown = function (e) {
        e.preventDefault();
        if (!this.onPress(e.clientX, e.clientY)) {
            // this.scaling = true;
            // this.last_x_center = e.clientX;
            // this.last_y_center = e.clientY;
        }
    };
    InputHandler.prototype.onMouseMove = function (e) {
        e.preventDefault();
        var xCenter = e.clientX;
        var yCenter = e.clientY;
        this.onHover(xCenter, yCenter);
        if (this.scaling) {
            // x 2 finger movement
            var xCenterDelta = this.lastXCenter - xCenter;
            this.onDeltaX(xCenterDelta * 0.1);
            this.lastXCenter = xCenter;
        }
    };
    InputHandler.prototype.onTouchStart = function (e) {
        e.preventDefault();
        // If no collision events
        var hadEvent = false;
        for (var i = 0; i < e.touches.length; i++) {
            if (this.onPress(e.touches[0].pageX, e.touches[0].pageY)) {
                hadEvent = true;
            }
        }
        if (!hadEvent) {
            this.scaling = true;
            if (e.touches.length === 1) { // Selection
                this.lastXCenter = e.touches[0].pageX;
                this.lastYCenter = e.touches[0].pageY;
            }
            else if (e.touches.length === 2) { // Cameracontrol
                this.lastDist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
                this.lastXCenter = (e.touches[0].pageX - e.touches[1].pageX) / 2;
                this.lastYCenter = (e.touches[0].pageY - e.touches[1].pageY) / 2;
            }
        }
    };
    InputHandler.prototype.onTouchMove = function (e) {
        if (this.scaling) {
            var xCenter = 0;
            if (e.touches.length === 1) {
                xCenter = e.touches[0].pageX;
            }
            else if (e.touches.length === 2) {
                xCenter = (e.touches[0].pageX + e.touches[1].pageX) / 2;
                // Pinch Zoom
                var dist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
                var distanceDelta = this.lastDist - dist;
                this.onPinch(distanceDelta);
                this.lastDist = dist;
            }
            // x 2 finger movement
            var xCenterDelta = this.lastXCenter - xCenter;
            this.onDeltaX(xCenterDelta);
            this.lastXCenter = xCenter;
        }
    };
    InputHandler.prototype.onTouchEnd = function (e) {
        e.preventDefault();
        if (this.scaling) {
            this.scaling = false;
        }
    };
    return InputHandler;
}());



/***/ }),

/***/ "./src/app/engine/ThreeMeshInteraction.ts":
/*!************************************************!*\
  !*** ./src/app/engine/ThreeMeshInteraction.ts ***!
  \************************************************/
/*! exports provided: MeshEvent, MeshInteraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshEvent", function() { return MeshEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshInteraction", function() { return MeshInteraction; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


var MeshEvent = /** @class */ (function () {
    function MeshEvent(type, mesh, callback) {
        this.type = type;
        this.mesh = mesh;
        this.callback = callback;
    }
    return MeshEvent;
}());

/**
 * Event handler for mouse interaction with ThreeJS mesh geometry.
 */
var MeshInteraction = /** @class */ (function () {
    function MeshInteraction(clientWidth, clientHeight, camera) {
        this.clientWidth = clientWidth;
        this.clientHeight = clientHeight;
        this.camera = camera;
        // Collision Detection
        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_1__["Raycaster"]();
        this.mouse = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"]();
        this.eventMeshes = [];
    }
    MeshInteraction.prototype.registerEvent = function (me) {
        me.mesh[me.type] = me.callback;
        this.eventMeshes.push(me.mesh);
    };
    MeshInteraction.prototype.handlePointer = function (x, y, callback) {
        this.mouse.x = (x / this.clientWidth) * 2 - 1;
        this.mouse.y = -(y / this.clientHeight) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, this.camera);
        var intersects = this.raycaster.intersectObjects(this.eventMeshes);
        if (intersects.length > 0) {
            try {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(intersects[0])) {
                    intersects[0].object[callback]();
                }
            }
            catch (err) {
            }
            return true;
        }
        else {
            return false;
        }
    };
    return MeshInteraction;
}());



/***/ }),

/***/ "./src/app/engine/action/Action.ts":
/*!*****************************************!*\
  !*** ./src/app/engine/action/Action.ts ***!
  \*****************************************/
/*! exports provided: ActionResult, ActionBase, ActionNone, ActionTimestep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionResult", function() { return ActionResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBase", function() { return ActionBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionNone", function() { return ActionNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTimestep", function() { return ActionTimestep; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


var colorsNone = [new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0x444444), new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0x888888)];
/**
 * Action result data and the updated terrain
 */
var ActionResult = /** @class */ (function () {
    function ActionResult(tid, world, actionLabel, success) {
        this.tid = tid;
        this.world = world;
        this.actionLabel = actionLabel;
        this.success = success;
    }
    return ActionResult;
}());

/**
 * Provides base behavior for tile actions
 */
var ActionBase = /** @class */ (function () {
    function ActionBase() {
    }
    ActionBase.prototype.updateUI = function (result, ui) {
        ui.labelMoney = result.world.money;
        if (result.success) {
            this.onUpdateUI(result, ui);
        }
    };
    /**
     * Update UI to show interactions for selected action
     */
    ActionBase.prototype.onActionSelectUI = function (world, ui) {
        var _this = this;
        world.terrain.forEach(function (dt, index) {
            var entity = ui.entityGrid.tiles.get(index);
            var allowed = _this.isActionAllowed(index, world);
            var colors = _this.colors;
            entity.setSelect(allowed, colors);
        });
    };
    ActionBase.prototype.performAction = function (tid, world) {
        var actionAllowed = this.isActionAllowed(tid, world);
        // console.log(`Performing Action ${Action[act]} on tile # ${terrain.index}`);
        if (actionAllowed) {
            this.onActionSuccess(tid, world);
        }
        return new ActionResult(tid, world, this.actionName, actionAllowed);
    };
    return ActionBase;
}());

var ActionNone = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActionNone, _super);
    function ActionNone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = 'None';
        _this.colors = colorsNone;
        return _this;
    }
    ActionNone.prototype.onUpdateUI = function (result, ui) {
    };
    ActionNone.prototype.isActionAllowed = function (tid, world) {
        return false;
    };
    ActionNone.prototype.onActionSuccess = function (tid, world) {
    };
    return ActionNone;
}(ActionBase));

var ActionTimestep = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActionTimestep, _super);
    function ActionTimestep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = 'UpdateTimestep';
        _this.colors = colorsNone;
        return _this;
    }
    ActionTimestep.prototype.isActionAllowed = function (tid, world) {
        return true;
    };
    ActionTimestep.prototype.onActionSuccess = function (tid, world) {
        world.terrain.get(tid).onUpdate();
    };
    ActionTimestep.prototype.onUpdateUI = function (result, ui) {
        console.log(this.actionName + ": onUpdateUI");
    };
    return ActionTimestep;
}(ActionBase));



/***/ }),

/***/ "./src/app/engine/action/ActionConstruct.ts":
/*!**************************************************!*\
  !*** ./src/app/engine/action/ActionConstruct.ts ***!
  \**************************************************/
/*! exports provided: ConstructOption, buildList, ActionConstruct, ActionConstructTargetPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructOption", function() { return ConstructOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildList", function() { return buildList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConstruct", function() { return ActionConstruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConstructTargetPlot", function() { return ActionConstructTargetPlot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action */ "./src/app/engine/action/Action.ts");
/* harmony import */ var _entity_EntityTileFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/EntityTileFactory */ "./src/app/engine/entity/EntityTileFactory.ts");
/* harmony import */ var _data_DataTerrain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/DataTerrain */ "./src/app/engine/data/DataTerrain.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");





var colorsConstruct = [new three__WEBPACK_IMPORTED_MODULE_4__["Color"]('orange'), new three__WEBPACK_IMPORTED_MODULE_4__["Color"]('yellow')];
function isConstructAllowed(tid, world) {
    return world.terrain.get(tid) instanceof _data_DataTerrain__WEBPACK_IMPORTED_MODULE_3__["TerrainEmpty"];
}
var ConstructOption = /** @class */ (function () {
    function ConstructOption(name, cost, getTerrain) {
        this.name = name;
        this.cost = cost;
        this.getTerrain = getTerrain;
    }
    return ConstructOption;
}());

// Authoritive list of builds
var buildFarm = new ConstructOption('Farm', 10, function () { return new _data_DataTerrain__WEBPACK_IMPORTED_MODULE_3__["TerrainFarm"](); });
var buildTank = new ConstructOption('Tank', 15, function () { return new _data_DataTerrain__WEBPACK_IMPORTED_MODULE_3__["TerrainTank"](); });
var buildList = [buildFarm, buildTank];
var ActionConstruct = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActionConstruct, _super);
    function ActionConstruct(buildID) {
        var _this = _super.call(this) || this;
        _this.buildID = buildID;
        _this.actionName = 'Construct';
        _this.colors = colorsConstruct;
        _this.constructOption = buildList[buildID];
        return _this;
    }
    ActionConstruct.prototype.onUpdateUI = function (result, ui) {
        var newTile = Object(_entity_EntityTileFactory__WEBPACK_IMPORTED_MODULE_2__["tileFactory"])(result.world.terrain.get(result.tid));
        ui.entityGrid.setTile(result.tid, newTile);
        ui.entityGrid.tiles.get(result.tid).onConstruct();
        ui.constructTargetID = undefined;
    };
    ActionConstruct.prototype.isActionAllowed = function (tid, world) {
        var canAfford = world.money >= this.constructOption.cost;
        return isConstructAllowed(tid, world) && canAfford;
    };
    ActionConstruct.prototype.onActionSuccess = function (tid, world) {
        world.terrain.set(tid, this.constructOption.getTerrain());
        world.money -= this.constructOption.cost;
    };
    return ActionConstruct;
}(_Action__WEBPACK_IMPORTED_MODULE_1__["ActionBase"]));

var ActionConstructTargetPlot = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActionConstructTargetPlot, _super);
    function ActionConstructTargetPlot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = 'TargetTileConstruction';
        _this.colors = colorsConstruct;
        return _this;
    }
    ActionConstructTargetPlot.prototype.isActionAllowed = function (tid, world) {
        return isConstructAllowed(tid, world);
    };
    ActionConstructTargetPlot.prototype.onActionSuccess = function (tid, world) {
        // No changes, modifies UI state
    };
    ActionConstructTargetPlot.prototype.onUpdateUI = function (result, ui) {
        var _this = this;
        if (result.success) {
            ui.constructTargetID = result.tid;
            // Updateselection
            ui.entityGrid.tiles.forEach(function (tile, index) {
                tile.setSelect(index === result.tid, _this.colors);
            });
        }
    };
    return ActionConstructTargetPlot;
}(_Action__WEBPACK_IMPORTED_MODULE_1__["ActionBase"]));



/***/ }),

/***/ "./src/app/engine/action/ActionDemolish.ts":
/*!*************************************************!*\
  !*** ./src/app/engine/action/ActionDemolish.ts ***!
  \*************************************************/
/*! exports provided: ActionDemolish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDemolish", function() { return ActionDemolish; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_DataTerrain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/DataTerrain */ "./src/app/engine/data/DataTerrain.ts");
/* harmony import */ var _entity_EntityTileFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/EntityTileFactory */ "./src/app/engine/entity/EntityTileFactory.ts");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Action */ "./src/app/engine/action/Action.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");





var colorsDemolish = [new three__WEBPACK_IMPORTED_MODULE_4__["Color"](0x9D00DD), new three__WEBPACK_IMPORTED_MODULE_4__["Color"](0xBF00FF)];
var ActionDemolish = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActionDemolish, _super);
    function ActionDemolish() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = 'Demolish';
        _this.colors = colorsDemolish;
        return _this;
    }
    ActionDemolish.prototype.onUpdateUI = function (result, ui) {
        var newTile = Object(_entity_EntityTileFactory__WEBPACK_IMPORTED_MODULE_2__["tileFactory"])(result.world.terrain.get(result.tid));
        ui.entityGrid.setTile(result.tid, newTile);
    };
    ActionDemolish.prototype.isActionAllowed = function (tid, world) {
        return !(world.terrain.get(tid) instanceof _data_DataTerrain__WEBPACK_IMPORTED_MODULE_1__["TerrainEmpty"]);
    };
    ActionDemolish.prototype.onActionSuccess = function (tid, world) {
        world.terrain.set(tid, new _data_DataTerrain__WEBPACK_IMPORTED_MODULE_1__["TerrainEmpty"]());
    };
    return ActionDemolish;
}(_Action__WEBPACK_IMPORTED_MODULE_3__["ActionBase"]));



/***/ }),

/***/ "./src/app/engine/action/ActionHarvest.ts":
/*!************************************************!*\
  !*** ./src/app/engine/action/ActionHarvest.ts ***!
  \************************************************/
/*! exports provided: ActionHarvest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionHarvest", function() { return ActionHarvest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_DataTerrain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/DataTerrain */ "./src/app/engine/data/DataTerrain.ts");
/* harmony import */ var _entity_EntityTileFarm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/EntityTileFarm */ "./src/app/engine/entity/EntityTileFarm.ts");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Action */ "./src/app/engine/action/Action.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");





var colorsHarvest = [new three__WEBPACK_IMPORTED_MODULE_4__["Color"](0xbc5a45), new three__WEBPACK_IMPORTED_MODULE_4__["Color"](0xf18973)];
var ActionHarvest = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActionHarvest, _super);
    function ActionHarvest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = 'Harvest';
        _this.colors = colorsHarvest;
        return _this;
    }
    ActionHarvest.prototype.onUpdateUI = function (result, ui) {
        ui.entityGrid.tiles.get(result.tid).meshSelect.visible = false;
        var tile = ui.entityGrid.tiles.get(result.tid);
        if (tile instanceof _entity_EntityTileFarm__WEBPACK_IMPORTED_MODULE_2__["EntityTileFarm"] && (tile.entityPlant !== undefined)) {
            tile.entityPlant.onHarvest();
        }
    };
    ActionHarvest.prototype.isActionAllowed = function (tid, world) {
        var dt = world.terrain.get(tid);
        if (dt instanceof _data_DataTerrain__WEBPACK_IMPORTED_MODULE_1__["TerrainFarm"]) {
            return dt.plant !== undefined;
        }
        return false;
    };
    ActionHarvest.prototype.onActionSuccess = function (tid, world) {
        var dt = world.terrain.get(tid);
        if (dt instanceof _data_DataTerrain__WEBPACK_IMPORTED_MODULE_1__["TerrainFarm"]) {
            var value = dt.plant.seed.value;
            delete dt.plant;
            world.money += value;
        }
    };
    return ActionHarvest;
}(_Action__WEBPACK_IMPORTED_MODULE_3__["ActionBase"]));



/***/ }),

/***/ "./src/app/engine/action/ActionInfo.ts":
/*!*********************************************!*\
  !*** ./src/app/engine/action/ActionInfo.ts ***!
  \*********************************************/
/*! exports provided: ActionInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionInfo", function() { return ActionInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action */ "./src/app/engine/action/Action.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");



var colorsInfo = [new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0x0000AA), new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0x0000FF)];
var colorsInfoSelect = [new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xff9999), new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xff9999)];
var ActionInfo = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActionInfo, _super);
    function ActionInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = 'Info';
        _this.colors = colorsInfo;
        return _this;
    }
    ActionInfo.prototype.onUpdateUI = function (result, ui) {
        var _this = this;
        ui.infoTerrain = result.world.terrain.get(result.tid);
        result.world.terrain.forEach(function (dt, index) {
            var entity = ui.entityGrid.tiles.get(index);
            var allowed = index !== result.tid;
            if (allowed) {
                entity.setSelect(true, _this.colors);
            }
            else {
                entity.setSelect(true, colorsInfoSelect);
            }
        });
    };
    ActionInfo.prototype.isActionAllowed = function (tid, world) {
        return true;
    };
    ActionInfo.prototype.onActionSuccess = function (tid, world) {
    };
    return ActionInfo;
}(_Action__WEBPACK_IMPORTED_MODULE_1__["ActionBase"]));



/***/ }),

/***/ "./src/app/engine/action/ActionPlant.ts":
/*!**********************************************!*\
  !*** ./src/app/engine/action/ActionPlant.ts ***!
  \**********************************************/
/*! exports provided: ActionPlant, ActionPlantTargetPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPlant", function() { return ActionPlant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPlantTargetPlot", function() { return ActionPlantTargetPlot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_DataTerrain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/DataTerrain */ "./src/app/engine/data/DataTerrain.ts");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Action */ "./src/app/engine/action/Action.ts");
/* harmony import */ var _entity_EntityTileFarm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/EntityTileFarm */ "./src/app/engine/entity/EntityTileFarm.ts");
/* harmony import */ var _data_DataPlant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/DataPlant */ "./src/app/engine/data/DataPlant.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");






var colorsPlant = [new three__WEBPACK_IMPORTED_MODULE_5__["Color"](0x008800), new three__WEBPACK_IMPORTED_MODULE_5__["Color"](0x00BB33)];
function isPlantAllowed(tid, world) {
    var dt = world.terrain.get(tid);
    if (dt instanceof _data_DataTerrain__WEBPACK_IMPORTED_MODULE_1__["TerrainFarm"]) {
        return dt.plant === undefined;
    }
    return false;
}
var ActionPlant = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActionPlant, _super);
    function ActionPlant(targetSeedID) {
        var _this = _super.call(this) || this;
        _this.targetSeedID = targetSeedID;
        _this.actionName = 'Plant';
        _this.colors = colorsPlant;
        return _this;
    }
    ActionPlant.prototype.onUpdateUI = function (result, ui) {
        var tile = ui.entityGrid.tiles.get(result.tid);
        var dt = result.world.terrain.get(result.tid);
        tile.meshSelect.visible = false;
        if (dt instanceof _data_DataTerrain__WEBPACK_IMPORTED_MODULE_1__["TerrainFarm"] && tile instanceof _entity_EntityTileFarm__WEBPACK_IMPORTED_MODULE_3__["EntityTileFarm"]) {
            tile.setPlant(dt.plant);
        }
        ui.plantTargetID = undefined;
    };
    ActionPlant.prototype.isActionAllowed = function (tid, world) {
        var validSeed = world.seeds[this.targetSeedID] !== undefined;
        return isPlantAllowed(tid, world) && validSeed;
    };
    ActionPlant.prototype.onActionSuccess = function (tid, world) {
        var targetSeed = world.seeds[this.targetSeedID];
        var dt = world.terrain.get(tid);
        if (dt instanceof _data_DataTerrain__WEBPACK_IMPORTED_MODULE_1__["TerrainFarm"]) {
            dt.plant = new _data_DataPlant__WEBPACK_IMPORTED_MODULE_4__["Plant"](targetSeed);
        }
        // Remove seed from inventory
        world.seeds = world.seeds.filter(function (seed) { return seed !== targetSeed; });
    };
    return ActionPlant;
}(_Action__WEBPACK_IMPORTED_MODULE_2__["ActionBase"]));

var ActionPlantTargetPlot = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActionPlantTargetPlot, _super);
    function ActionPlantTargetPlot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionName = 'TargetPlotToPlant';
        _this.colors = colorsPlant;
        return _this;
    }
    ActionPlantTargetPlot.prototype.isActionAllowed = function (tid, world) {
        return isPlantAllowed(tid, world);
    };
    ActionPlantTargetPlot.prototype.onActionSuccess = function (tid, world) {
        // No changes, this action only modifies UI state
    };
    ActionPlantTargetPlot.prototype.onUpdateUI = function (result, ui) {
        var _this = this;
        if (result.success) {
            ui.plantTargetID = result.tid;
            ui.seedList = result.world.seeds;
            // Update selection
            ui.entityGrid.tiles.forEach(function (tile, index) {
                tile.setSelect(index === result.tid, _this.colors);
            });
        }
    };
    return ActionPlantTargetPlot;
}(_Action__WEBPACK_IMPORTED_MODULE_2__["ActionBase"]));



/***/ }),

/***/ "./src/app/engine/data/DataPlant.ts":
/*!******************************************!*\
  !*** ./src/app/engine/data/DataPlant.ts ***!
  \******************************************/
/*! exports provided: DataSeed, randomSeed, Plant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSeed", function() { return DataSeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomSeed", function() { return randomSeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plant", function() { return Plant; });
var DataSeed = /** @class */ (function () {
    function DataSeed(name, value, color, width, height) {
        this.name = name;
        this.value = value;
        this.color = color;
        this.width = width;
        this.height = height;
    }
    return DataSeed;
}());

function randomSeed() {
    var value = 20 * Math.random();
    var color = Math.floor(Math.random() * 16777215);
    var width = Math.random();
    var height = Math.random();
    return new DataSeed('Random Seed', value, color, width, height);
}
var Plant = /** @class */ (function () {
    function Plant(seed) {
        this.seed = seed;
        this.age = 0;
    }
    Plant.prototype.update = function () {
        this.age += 1;
    };
    return Plant;
}());



/***/ }),

/***/ "./src/app/engine/data/DataTerrain.ts":
/*!********************************************!*\
  !*** ./src/app/engine/data/DataTerrain.ts ***!
  \********************************************/
/*! exports provided: Terrain, TerrainEmpty, TerrainFarm, TerrainTank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terrain", function() { return Terrain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerrainEmpty", function() { return TerrainEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerrainFarm", function() { return TerrainFarm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerrainTank", function() { return TerrainTank; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Terrain = /** @class */ (function () {
    function Terrain() {
    }
    return Terrain;
}());

var TerrainEmpty = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TerrainEmpty, _super);
    function TerrainEmpty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TerrainEmpty.prototype.onUpdate = function () {
    };
    TerrainEmpty.prototype.getName = function () {
        return 'Empty Tile';
    };
    return TerrainEmpty;
}(Terrain));

var TerrainFarm = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TerrainFarm, _super);
    function TerrainFarm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TerrainFarm.prototype.onUpdate = function () {
        if (this.plant !== undefined) {
            this.plant.update();
        }
    };
    TerrainFarm.prototype.getName = function () {
        return 'Farmland';
    };
    return TerrainFarm;
}(Terrain));

var TerrainTank = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TerrainTank, _super);
    function TerrainTank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.waterCapacity = 100;
        return _this;
    }
    TerrainTank.prototype.getName = function () {
        return 'Water Tank';
    };
    TerrainTank.prototype.onUpdate = function () {
    };
    return TerrainTank;
}(Terrain));



/***/ }),

/***/ "./src/app/engine/data/DataWorld.ts":
/*!******************************************!*\
  !*** ./src/app/engine/data/DataWorld.ts ***!
  \******************************************/
/*! exports provided: WorldData, getRandomWorld */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldData", function() { return WorldData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomWorld", function() { return getRandomWorld; });
/* harmony import */ var _DataPlant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataPlant */ "./src/app/engine/data/DataPlant.ts");
/* harmony import */ var _DataTerrain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTerrain */ "./src/app/engine/data/DataTerrain.ts");


/**
 * Manages farm grid state
 */
var WorldData = /** @class */ (function () {
    function WorldData(name, sizeX, sizeY, terrain, money, seeds) {
        this.name = name;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.terrain = terrain;
        this.money = money;
        this.seeds = seeds;
    }
    return WorldData;
}());

function getRandomWorld(name, sizeX, sizeY, money) {
    // Add random terrain
    var tiles = new Map();
    for (var i = 0; i < sizeX * sizeY; i++) {
        if (Math.random() > 0.7) {
            var farm = new _DataTerrain__WEBPACK_IMPORTED_MODULE_1__["TerrainFarm"]();
            if (Math.random() > 0.5) {
                farm.plant = new _DataPlant__WEBPACK_IMPORTED_MODULE_0__["Plant"](Object(_DataPlant__WEBPACK_IMPORTED_MODULE_0__["randomSeed"])());
            }
            tiles.set(i, farm);
        }
        else {
            tiles.set(i, new _DataTerrain__WEBPACK_IMPORTED_MODULE_1__["TerrainEmpty"]());
        }
    }
    // Add Seeds
    var seedCount = Math.floor(3 + Math.random() * 5);
    var seedList = [];
    for (var i = 0; i < seedCount; i++) {
        seedList.push(Object(_DataPlant__WEBPACK_IMPORTED_MODULE_0__["randomSeed"])());
    }
    return new WorldData(name, sizeX, sizeY, tiles, money, seedList);
}


/***/ }),

/***/ "./src/app/engine/entity/Entity.ts":
/*!*****************************************!*\
  !*** ./src/app/engine/entity/Entity.ts ***!
  \*****************************************/
/*! exports provided: loadTexture, loadTextureRepeating, Entity, TILESIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTexture", function() { return loadTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTextureRepeating", function() { return loadTextureRepeating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILESIZE", function() { return TILESIZE; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

// Setup Texture Loader
var textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
textureLoader.setPath('assets/img/');
function loadTexture(name) {
    var texture = textureLoader.load(name + '.png');
    texture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["NearestFilter"];
    texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearMipMapLinearFilter"];
    return texture;
}
function loadTextureRepeating(name, x, y) {
    var texture = loadTexture(name);
    texture.wrapS = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
    texture.wrapT = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
    texture.repeat.set(x, y);
    return texture;
}
/**
 * Base class for entities
 */
var Entity = /** @class */ (function () {
    function Entity() {
    }
    return Entity;
}());

// Constants
var TILESIZE = 4;


/***/ }),

/***/ "./src/app/engine/entity/EntityPlant.ts":
/*!**********************************************!*\
  !*** ./src/app/engine/entity/EntityPlant.ts ***!
  \**********************************************/
/*! exports provided: EntityPlant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityPlant", function() { return EntityPlant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Entity */ "./src/app/engine/entity/Entity.ts");



// Harvest Animation
var harvestOpacityKF = new three__WEBPACK_IMPORTED_MODULE_1__["NumberKeyframeTrack"]('.material.opacity', [0, 1], [1, 0]);
var harvestPositionKF = new three__WEBPACK_IMPORTED_MODULE_1__["VectorKeyframeTrack"]('.position', [0, 1], [0, 0, 1, 0, 0, 5], three__WEBPACK_IMPORTED_MODULE_1__["InterpolateSmooth"]);
var harvestVisibleKF = new three__WEBPACK_IMPORTED_MODULE_1__["BooleanKeyframeTrack"]('.visible', [0, 1], [true, false]);
var ANIMATE_HARVEST = new three__WEBPACK_IMPORTED_MODULE_1__["AnimationClip"]('Harvest', -1, [harvestOpacityKF, harvestVisibleKF, harvestPositionKF]);
// Grow Animation
var growPositionKF = new three__WEBPACK_IMPORTED_MODULE_1__["VectorKeyframeTrack"]('.position', [0, 1], [0, 0, -0.5, 0, 0, 1], three__WEBPACK_IMPORTED_MODULE_1__["InterpolateLinear"]);
var growScaleKF = new three__WEBPACK_IMPORTED_MODULE_1__["VectorKeyframeTrack"]('.scale', [0, 2], [0.1, 0.1, 0.1, 1, 1, 1], three__WEBPACK_IMPORTED_MODULE_1__["InterpolateSmooth"]);
var ANIMATE_GROW = new three__WEBPACK_IMPORTED_MODULE_1__["AnimationClip"]('Grow', -1, [growPositionKF, growScaleKF]);
var texturePlant = Object(_Entity__WEBPACK_IMPORTED_MODULE_2__["loadTexture"])('white_wool');
var EntityPlant = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EntityPlant, _super);
    function EntityPlant(plant) {
        var _this = _super.call(this) || this;
        _this.matPlant = new three__WEBPACK_IMPORTED_MODULE_1__["MeshLambertMaterial"]({ map: texturePlant, transparent: true, color: plant.seed.color });
        var width = _Entity__WEBPACK_IMPORTED_MODULE_2__["TILESIZE"] * 0.2 + (plant.seed.width * 2);
        _this.geoPlant = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"](width, width, _Entity__WEBPACK_IMPORTED_MODULE_2__["TILESIZE"] * 0.75 + (plant.seed.height * 3));
        _this.meshPlant = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](_this.geoPlant, _this.matPlant);
        _this.plantMixer = new three__WEBPACK_IMPORTED_MODULE_1__["AnimationMixer"](_this.meshPlant);
        return _this;
    }
    EntityPlant.prototype.onGrow = function () {
        this.meshPlant.scale.setScalar(0.00001);
        var growAnimation = this.plantMixer.clipAction(ANIMATE_GROW);
        growAnimation.setLoop(three__WEBPACK_IMPORTED_MODULE_1__["LoopOnce"], 1);
        growAnimation.clampWhenFinished = true;
        growAnimation.reset().play();
    };
    EntityPlant.prototype.onHarvest = function () {
        var harvestAnimation = this.plantMixer.clipAction(ANIMATE_HARVEST);
        harvestAnimation.setLoop(three__WEBPACK_IMPORTED_MODULE_1__["LoopOnce"], 1);
        harvestAnimation.clampWhenFinished = true;
        harvestAnimation.play();
    };
    EntityPlant.prototype.dispose = function () {
        this.matPlant.dispose();
        this.geoPlant.dispose();
    };
    EntityPlant.prototype.animate = function (deltaTime) {
        this.plantMixer.update(deltaTime);
    };
    return EntityPlant;
}(_Entity__WEBPACK_IMPORTED_MODULE_2__["Entity"]));



/***/ }),

/***/ "./src/app/engine/entity/EntityTerrainGrid.ts":
/*!****************************************************!*\
  !*** ./src/app/engine/entity/EntityTerrainGrid.ts ***!
  \****************************************************/
/*! exports provided: EntityGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityGrid", function() { return EntityGrid; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/app/engine/entity/Entity.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _EntityTileFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EntityTileFactory */ "./src/app/engine/entity/EntityTileFactory.ts");





var EntityGrid = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EntityGrid, _super);
    function EntityGrid(terrainMap, sizeX, sizeY) {
        var _this = _super.call(this) || this;
        _this.sizeX = sizeX;
        _this.sizeY = sizeY;
        _this.gridModel = new three__WEBPACK_IMPORTED_MODULE_2__["Object3D"]();
        _this.tiles = new Map();
        // Three Resources
        _this.floorTexture = Object(_Entity__WEBPACK_IMPORTED_MODULE_1__["loadTextureRepeating"])('gray_concrete_powder', sizeX, sizeY);
        _this.floorMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({ map: _this.floorTexture });
        _this.floorGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](sizeX * _Entity__WEBPACK_IMPORTED_MODULE_1__["TILESIZE"], sizeY * _Entity__WEBPACK_IMPORTED_MODULE_1__["TILESIZE"], 1);
        // Setup Floor
        _this.floorMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](_this.floorGeometry, _this.floorMaterial);
        _this.gridModel.add(_this.floorMesh);
        terrainMap.forEach(function (terrain, index) {
            _this.setTile(index, Object(_EntityTileFactory__WEBPACK_IMPORTED_MODULE_3__["tileFactory"])(terrain));
        });
        return _this;
    }
    EntityGrid.prototype.setTile = function (index, newTile) {
        // Remove old tile if exists
        if (this.tiles.has(index)) {
            var oldTile = this.tiles.get(index);
            this.gridModel.remove(oldTile.tileModel);
            oldTile.dispose();
        }
        // Add new tile
        var xPos = ((index % this.sizeX) * _Entity__WEBPACK_IMPORTED_MODULE_1__["TILESIZE"]) - (_Entity__WEBPACK_IMPORTED_MODULE_1__["TILESIZE"] * this.sizeX / 2) + _Entity__WEBPACK_IMPORTED_MODULE_1__["TILESIZE"] * 0.5;
        var yPos = (Math.floor(index / this.sizeY) * _Entity__WEBPACK_IMPORTED_MODULE_1__["TILESIZE"]) - (_Entity__WEBPACK_IMPORTED_MODULE_1__["TILESIZE"] * this.sizeY / 2) + _Entity__WEBPACK_IMPORTED_MODULE_1__["TILESIZE"] * 0.5;
        newTile.tileModel.position.set(xPos, yPos, 0.5);
        this.gridModel.add(newTile.tileModel);
        this.tiles.set(index, newTile);
    };
    EntityGrid.prototype.animate = function (deltaTime) {
        this.tiles.forEach(function (e) { return e.animate(deltaTime); });
    };
    EntityGrid.prototype.dispose = function () {
        this.tiles.forEach(function (e) { return e.dispose(); });
        this.floorTexture.dispose();
        this.floorMaterial.dispose();
        this.floorGeometry.dispose();
    };
    return EntityGrid;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]));



/***/ }),

/***/ "./src/app/engine/entity/EntityTile.ts":
/*!*********************************************!*\
  !*** ./src/app/engine/entity/EntityTile.ts ***!
  \*********************************************/
/*! exports provided: ANIMATE_BUILD, EntityTile, EntityTileEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATE_BUILD", function() { return ANIMATE_BUILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityTile", function() { return EntityTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityTileEmpty", function() { return EntityTileEmpty; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Entity */ "./src/app/engine/entity/Entity.ts");



var colorSelectDebug = new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0xffffff);
var selectGeometry = new three__WEBPACK_IMPORTED_MODULE_1__["BoxBufferGeometry"](_Entity__WEBPACK_IMPORTED_MODULE_2__["TILESIZE"] * 0.8, _Entity__WEBPACK_IMPORTED_MODULE_2__["TILESIZE"] * 0.8, _Entity__WEBPACK_IMPORTED_MODULE_2__["TILESIZE"] * 0.35);
var hoverScaleKF = new three__WEBPACK_IMPORTED_MODULE_1__["VectorKeyframeTrack"]('.scale', [0, 1, 2], [1, 1, 1, 1, 1, 1.5, 1, 1, 1], three__WEBPACK_IMPORTED_MODULE_1__["InterpolateSmooth"]);
var ANIMATE_HOVER = new three__WEBPACK_IMPORTED_MODULE_1__["AnimationClip"]('Hover', -1, [hoverScaleKF]);
// Build Animation
var buildPositionKF = new three__WEBPACK_IMPORTED_MODULE_1__["VectorKeyframeTrack"]('.position', [0, 0.5], [0, 0, -0.5, 0, 0, 0], three__WEBPACK_IMPORTED_MODULE_1__["InterpolateLinear"]);
var ANIMATE_BUILD = new three__WEBPACK_IMPORTED_MODULE_1__["AnimationClip"]('Build', -1, [buildPositionKF]);
var EntityTile = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EntityTile, _super);
    function EntityTile() {
        var _this = _super.call(this) || this;
        _this.selectMat = new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ color: colorSelectDebug, opacity: 0.3, transparent: true });
        _this.tileModel = new three__WEBPACK_IMPORTED_MODULE_1__["Object3D"]();
        _this.selectColors = [colorSelectDebug, colorSelectDebug];
        _this.meshSelect = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](selectGeometry, _this.selectMat);
        _this.meshSelect.visible = false;
        _this.tileModel.add(_this.meshSelect);
        // Select Animation
        _this.selectMixer = new three__WEBPACK_IMPORTED_MODULE_1__["AnimationMixer"](_this.meshSelect);
        _this.selectAnimation = _this.selectMixer.clipAction(ANIMATE_HOVER);
        _this.selectAnimation.clampWhenFinished = true;
        return _this;
    }
    EntityTile.prototype.setHovered = function (enabled) {
        this.meshSelect.material['color'].set(this.selectColors[enabled ? 1 : 0]);
    };
    EntityTile.prototype.setSelect = function (enabled, colors) {
        this.meshSelect.visible = enabled;
        this.selectColors = colors;
        if (enabled) {
            this.meshSelect.material['color'].set(colors[0]);
            this.selectAnimation.play();
        }
        else {
            this.selectAnimation.stop();
        }
    };
    EntityTile.prototype.dispose = function () {
        this.selectMat.dispose();
        this.onDispose();
    };
    EntityTile.prototype.animate = function (deltaTime) {
        this.selectMixer.update(deltaTime);
        this.onAnimate(deltaTime);
    };
    return EntityTile;
}(_Entity__WEBPACK_IMPORTED_MODULE_2__["Entity"]));

var EntityTileEmpty = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EntityTileEmpty, _super);
    function EntityTileEmpty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntityTileEmpty.prototype.onConstruct = function () { };
    EntityTileEmpty.prototype.onAnimate = function (deltaTime) { };
    EntityTileEmpty.prototype.onDispose = function () { };
    return EntityTileEmpty;
}(EntityTile));



/***/ }),

/***/ "./src/app/engine/entity/EntityTileFactory.ts":
/*!****************************************************!*\
  !*** ./src/app/engine/entity/EntityTileFactory.ts ***!
  \****************************************************/
/*! exports provided: tileFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileFactory", function() { return tileFactory; });
/* harmony import */ var _data_DataTerrain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/DataTerrain */ "./src/app/engine/data/DataTerrain.ts");
/* harmony import */ var _EntityTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntityTile */ "./src/app/engine/entity/EntityTile.ts");
/* harmony import */ var _EntityTileFarm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EntityTileFarm */ "./src/app/engine/entity/EntityTileFarm.ts");
/* harmony import */ var _EntityTileTank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EntityTileTank */ "./src/app/engine/entity/EntityTileTank.ts");




function tileFactory(terrain) {
    if (terrain instanceof _data_DataTerrain__WEBPACK_IMPORTED_MODULE_0__["TerrainFarm"]) {
        var tile = new _EntityTileFarm__WEBPACK_IMPORTED_MODULE_2__["EntityTileFarm"](terrain);
        if (terrain.plant !== undefined) {
            tile.setPlant(terrain.plant);
        }
        return tile;
    }
    else if (terrain instanceof _data_DataTerrain__WEBPACK_IMPORTED_MODULE_0__["TerrainTank"]) {
        return new _EntityTileTank__WEBPACK_IMPORTED_MODULE_3__["EntityTileTank"]();
    }
    else {
        return new _EntityTile__WEBPACK_IMPORTED_MODULE_1__["EntityTileEmpty"]();
    }
}


/***/ }),

/***/ "./src/app/engine/entity/EntityTileFarm.ts":
/*!*************************************************!*\
  !*** ./src/app/engine/entity/EntityTileFarm.ts ***!
  \*************************************************/
/*! exports provided: EntityTileFarm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityTileFarm", function() { return EntityTileFarm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _EntityTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntityTile */ "./src/app/engine/entity/EntityTile.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Entity */ "./src/app/engine/entity/Entity.ts");
/* harmony import */ var _EntityPlant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EntityPlant */ "./src/app/engine/entity/EntityPlant.ts");





var buildingGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxBufferGeometry"](_Entity__WEBPACK_IMPORTED_MODULE_3__["TILESIZE"] * 0.75, _Entity__WEBPACK_IMPORTED_MODULE_3__["TILESIZE"] * 0.75, _Entity__WEBPACK_IMPORTED_MODULE_3__["TILESIZE"] * 0.25);
var textureBuilding = Object(_Entity__WEBPACK_IMPORTED_MODULE_3__["loadTexture"])('farmland_moist');
var EntityTileFarm = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EntityTileFarm, _super);
    function EntityTileFarm(terrain) {
        var _this = _super.call(this) || this;
        _this.terrain = terrain;
        // Three Resources
        _this.buildingMat = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({ map: textureBuilding });
        // Building Mesh
        _this.meshBuilding = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](buildingGeometry, _this.buildingMat);
        _this.tileModel.add(_this.meshBuilding);
        _this.buildMixer = new three__WEBPACK_IMPORTED_MODULE_2__["AnimationMixer"](_this.meshBuilding);
        // Show Plants
        if (terrain.plant !== undefined) {
            _this.setPlant(terrain.plant);
        }
        return _this;
    }
    EntityTileFarm.prototype.onAnimate = function (deltaTime) {
        if (this.entityPlant !== undefined) {
            this.entityPlant.animate(deltaTime);
        }
        this.buildMixer.update(deltaTime);
    };
    EntityTileFarm.prototype.onConstruct = function () {
        this.meshBuilding.visible = true;
        var buildAnimation = this.buildMixer.clipAction(_EntityTile__WEBPACK_IMPORTED_MODULE_1__["ANIMATE_BUILD"]);
        buildAnimation.setLoop(three__WEBPACK_IMPORTED_MODULE_2__["LoopOnce"], 1);
        buildAnimation.clampWhenFinished = true;
        buildAnimation.play();
    };
    EntityTileFarm.prototype.onDispose = function () {
        this.removePlant();
        this.buildingMat.dispose();
    };
    EntityTileFarm.prototype.setPlant = function (plant) {
        console.log('setting plant!');
        this.removePlant();
        this.entityPlant = new _EntityPlant__WEBPACK_IMPORTED_MODULE_4__["EntityPlant"](plant);
        this.tileModel.add(this.entityPlant.meshPlant);
        this.entityPlant.onGrow();
    };
    // Remove plant and free resources
    EntityTileFarm.prototype.removePlant = function () {
        if (this.entityPlant !== undefined) {
            this.tileModel.remove(this.entityPlant.meshPlant);
            this.entityPlant.dispose();
            this.entityPlant = undefined;
        }
    };
    return EntityTileFarm;
}(_EntityTile__WEBPACK_IMPORTED_MODULE_1__["EntityTile"]));



/***/ }),

/***/ "./src/app/engine/entity/EntityTileTank.ts":
/*!*************************************************!*\
  !*** ./src/app/engine/entity/EntityTileTank.ts ***!
  \*************************************************/
/*! exports provided: EntityTileTank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityTileTank", function() { return EntityTileTank; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _EntityTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntityTile */ "./src/app/engine/entity/EntityTile.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Entity */ "./src/app/engine/entity/Entity.ts");





var colorTank = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0x5555FF);
var colorTankEnd = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0x444444);
var EntityTileTank = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EntityTileTank, _super);
    function EntityTileTank() {
        var _this = _super.call(this) || this;
        // Tank Body
        _this.matTank = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({ transparent: true, opacity: 0.7, color: colorTank });
        _this.geoTank = new three__WEBPACK_IMPORTED_MODULE_2__["CylinderBufferGeometry"](_Entity__WEBPACK_IMPORTED_MODULE_3__["TILESIZE"] * 0.3, _Entity__WEBPACK_IMPORTED_MODULE_3__["TILESIZE"] * 0.3, _Entity__WEBPACK_IMPORTED_MODULE_3__["TILESIZE"]);
        _this.meshTank = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](_this.geoTank, _this.matTank);
        // Tank Ends
        _this.geoTankEnd = new three__WEBPACK_IMPORTED_MODULE_2__["CylinderBufferGeometry"](_Entity__WEBPACK_IMPORTED_MODULE_3__["TILESIZE"] * 0.32, _Entity__WEBPACK_IMPORTED_MODULE_3__["TILESIZE"] * 0.32, _Entity__WEBPACK_IMPORTED_MODULE_3__["TILESIZE"] / 8, 10);
        _this.matTankEnd = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: colorTankEnd, reflectivity: 1, specular: 0xff0000, shininess: 100 });
        _this.meshBottom = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](_this.geoTankEnd, _this.matTankEnd);
        _this.meshTop = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](_this.geoTankEnd, _this.matTankEnd);
        _this.meshTank.rotateX(-Math.PI / 2);
        _this.meshTop.translateY(-_Entity__WEBPACK_IMPORTED_MODULE_3__["TILESIZE"] / 2);
        _this.meshTank.add(_this.meshTop);
        _this.meshTank.add(_this.meshBottom);
        // Add tank to tile base
        _this.tileModel.add(_this.meshTank);
        // Animation
        _this.tankMixer = new three__WEBPACK_IMPORTED_MODULE_2__["AnimationMixer"](_this.meshTank);
        return _this;
    }
    EntityTileTank.prototype.onConstruct = function () {
        this.meshTank.visible = true;
        var buildAnimation = this.tankMixer.clipAction(_EntityTile__WEBPACK_IMPORTED_MODULE_1__["ANIMATE_BUILD"]);
        buildAnimation.setLoop(three__WEBPACK_IMPORTED_MODULE_2__["LoopOnce"], 1);
        buildAnimation.clampWhenFinished = true;
        buildAnimation.play();
    };
    EntityTileTank.prototype.onDispose = function () {
        this.tileModel.remove(this.meshTank);
        this.matTank.dispose();
        this.geoTank.dispose();
        this.matTankEnd.dispose();
        this.geoTankEnd.dispose();
    };
    EntityTileTank.prototype.onAnimate = function (deltaTime) {
        this.tankMixer.update(deltaTime);
    };
    return EntityTileTank;
}(_EntityTile__WEBPACK_IMPORTED_MODULE_1__["EntityTile"]));



/***/ }),

/***/ "./src/app/farm.service.ts":
/*!*********************************!*\
  !*** ./src/app/farm.service.ts ***!
  \*********************************/
/*! exports provided: FarmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmService", function() { return FarmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _engine_data_DataWorld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/data/DataWorld */ "./src/app/engine/data/DataWorld.ts");




var FarmService = /** @class */ (function () {
    function FarmService() {
        this.world = Object(_engine_data_DataWorld__WEBPACK_IMPORTED_MODULE_3__["getRandomWorld"])('World', 8, 8, 100);
    }
    FarmService.prototype.getWorld = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.world);
    };
    FarmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FarmService);
    return FarmService;
}());



/***/ }),

/***/ "./src/app/menu-construct/menu-construct.component.css":
/*!*************************************************************!*\
  !*** ./src/app/menu-construct/menu-construct.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtY29uc3RydWN0L21lbnUtY29uc3RydWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/menu-construct/menu-construct.component.html":
/*!**************************************************************!*\
  !*** ./src/app/menu-construct/menu-construct.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"targetID !== undefined\" class=\"card\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Select Building for Tile {{targetID}}</h5>\n        <table class=\"table table-dark table-sm\">\n            <thead>\n                <th scope=\"col\">Building</th>\n                <th scope=\"col\">Cost</th>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let build of constructList; let i = index\">\n                    <td>{{ build.name }}</td>\n                    <td>{{ build.cost }}</td>\n                    <td>\n                        <button (click)=\"emitConstructID(i)\" class=\"btn btn-block btn-success\">\n                            Construct\n                        </button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/menu-construct/menu-construct.component.ts":
/*!************************************************************!*\
  !*** ./src/app/menu-construct/menu-construct.component.ts ***!
  \************************************************************/
/*! exports provided: MenuConstructComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuConstructComponent", function() { return MenuConstructComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuConstructComponent = /** @class */ (function () {
    function MenuConstructComponent() {
        this.selectConstructID = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MenuConstructComponent.prototype.emitConstructID = function (id) {
        this.selectConstructID.emit(id);
    };
    MenuConstructComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MenuConstructComponent.prototype, "targetID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MenuConstructComponent.prototype, "constructList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuConstructComponent.prototype, "selectConstructID", void 0);
    MenuConstructComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-construct',
            template: __webpack_require__(/*! ./menu-construct.component.html */ "./src/app/menu-construct/menu-construct.component.html"),
            styles: [__webpack_require__(/*! ./menu-construct.component.css */ "./src/app/menu-construct/menu-construct.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuConstructComponent);
    return MenuConstructComponent;
}());



/***/ }),

/***/ "./src/app/plant-seed-menu/plant-seed-menu.component.css":
/*!***************************************************************!*\
  !*** ./src/app/plant-seed-menu/plant-seed-menu.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW50LXNlZWQtbWVudS9wbGFudC1zZWVkLW1lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/plant-seed-menu/plant-seed-menu.component.html":
/*!****************************************************************!*\
  !*** ./src/app/plant-seed-menu/plant-seed-menu.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"plantTargetID !== undefined\" class=\"card\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Select seed for Tile {{plantTargetID}}</h5>\n        <table class=\"table table-dark table-sm\">\n            <thead>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">Value</th>\n                <th scope=\"col\">Width</th>\n                <th scope=\"col\">Height</th>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let seed of seedList; let i = index\">\n                    <td>{{ seed.name }}</td>\n                    <td>{{ seed.value.toFixed(2) }}</td>\n                    <td>{{ seed.width.toFixed(2) }}</td>\n                    <td>{{ seed.height.toFixed(2) }}</td>\n                    <td>\n                        <button (click)=\"pressPlant(i)\" class=\"btn btn-block btn-success\">Plant</button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/plant-seed-menu/plant-seed-menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/plant-seed-menu/plant-seed-menu.component.ts ***!
  \**************************************************************/
/*! exports provided: PlantSeedMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantSeedMenuComponent", function() { return PlantSeedMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlantSeedMenuComponent = /** @class */ (function () {
    function PlantSeedMenuComponent() {
        this.selectSeed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PlantSeedMenuComponent.prototype.pressPlant = function (seedID) {
        this.selectSeed.emit(seedID);
    };
    PlantSeedMenuComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PlantSeedMenuComponent.prototype, "seedList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PlantSeedMenuComponent.prototype, "plantTargetID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlantSeedMenuComponent.prototype, "selectSeed", void 0);
    PlantSeedMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plant-seed-menu',
            template: __webpack_require__(/*! ./plant-seed-menu.component.html */ "./src/app/plant-seed-menu/plant-seed-menu.component.html"),
            styles: [__webpack_require__(/*! ./plant-seed-menu.component.css */ "./src/app/plant-seed-menu/plant-seed-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlantSeedMenuComponent);
    return PlantSeedMenuComponent;
}());



/***/ }),

/***/ "./src/app/tile-detail/tile-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/tile-detail/tile-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbGUtZGV0YWlsL3RpbGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/tile-detail/tile-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/tile-detail/tile-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"terrain\" class=\"card\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{terrain.getName()}}</h5>\n        <div *ngIf=\"terrain.plant\">\n            <p class=\"card-text\">Name: {{terrain.plant.seed.name}}</p>\n            <p class=\"card-text\">Age: {{terrain.plant.age}}</p>\n            <p class=\"card-text\">Value: {{terrain.plant.seed.value.toFixed(2)}}</p>\n            <p class=\"card-text\">Width: {{terrain.plant.seed.width.toFixed(2)}}</p>\n            <p class=\"card-text\">Height: {{terrain.plant.seed.height.toFixed(2)}}</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/tile-detail/tile-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tile-detail/tile-detail.component.ts ***!
  \******************************************************/
/*! exports provided: TileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileDetailComponent", function() { return TileDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _engine_data_DataTerrain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../engine/data/DataTerrain */ "./src/app/engine/data/DataTerrain.ts");



var TileDetailComponent = /** @class */ (function () {
    function TileDetailComponent() {
    }
    TileDetailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _engine_data_DataTerrain__WEBPACK_IMPORTED_MODULE_2__["Terrain"])
    ], TileDetailComponent.prototype, "terrain", void 0);
    TileDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tile-detail',
            template: __webpack_require__(/*! ./tile-detail.component.html */ "./src/app/tile-detail/tile-detail.component.html"),
            styles: [__webpack_require__(/*! ./tile-detail.component.css */ "./src/app/tile-detail/tile-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TileDetailComponent);
    return TileDetailComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/antonio/src/biofactory/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map