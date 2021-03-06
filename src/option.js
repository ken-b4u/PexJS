// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var defaultOption = {
	shapeDetail: null,
	partialDraw: false,
	delayEval: true,
	fixRatio: true,
	width: null,
	height: null,
	transparent: false,
	fps: null,
	frameCallback: {},
	disableFrameSkip: false,
	cacheColoredImage : true,
	stopOnStart: false,
	enableButton: false,
	enableTouch: false,
	debug: false,
	suppressLog: {},
	origin: null,
	frameRect: null,
	compileAction: true,
	operation: {},
	cacheMaxShapeSize: null,
	cacheMaxTotalSize: null,
	onerror: null,
	enableStyleText: false,
	_enableWorkaroundForUnicolor: false,  // experimental
	colorLevels: 16,
	swfBinary: null,
	forceDisableBlendMode: false, // experimental
	scaleX: 1,
	scaleY: 1
};
