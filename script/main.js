let blinkRobbyEyesTimer; //ตัวแปรเอาไว้เก็บฟังก์ชันการทำงานของการกระพริบตา
const contentDiv = document.getElementById("content");
const pageDiv = document.getElementById("page");
let containerDiv = document.getElementById("container");
const robbyContainerDiv = document.getElementById("robby-container");
const robbyDiv = document.getElementById("robby");
const robbyFramesDiv = document.getElementById("robby-slides");
const robbyEyesCloseDiv = document.getElementById("robby-eyes-close");
const bannersContainerDiv = document.getElementById("banners-container");
let isPreloadShiftUpAnimationFinish = false;
let canFinishShiftUpHorizontalLayersAfterEverythingLoaded = true;
const splashContainerDiv = document.getElementById("splash-container");
const balloonDiv = document.getElementById("balloon");
const groundAndGrassContainer1Div = document.getElementById(
  "ground-and-grass-container-1"
);
const elevation1Div = document.getElementById("elevation-1");
const elevation2Div = document.getElementById("elevation-2");
const layerHorizontalArray = [];
const layerVerticalArray = [];
const gapBetweenContactCloudAndBannersContainer = 400;
const layerHorizontalSpeedArray = [];
const layerVerticalSpeedArray = [];
const sea1Div = document.getElementById("sea-1");
const seaFloorDiv = document.getElementById("sea-floor");
const seaFloorFrontObjectArray = [];
const seaFloorBackObjectArray = [];
const about1ContainerDiv = document.getElementById("plants-container");
const plantLine1Div = document.getElementById("plant-line-1");
const plantLine2Div = document.getElementById("plant-line-2");
const plantArray = [];
const plantTargetTopObjectArray = [
  plantLine1Div,
  plantLine1Div,
  plantLine2Div,
  plantLine2Div,
];

let canAnimatePlantInformation;
const about2ContainerDiv = document.getElementById("buildings-container");
const buildingTargetLeft1 = 0;
const buildingTargetLeft2 = 305;
const buildingTargetLeft3 = 710;
const buildingEarlyPosition1 = 795;
const buildingEarlyPosition2 = 1100;
const buildingEarlyPosition3 = 1505;
const buildingArray = [];
const buildingTargetLeftArray = [
  buildingTargetLeft1,
  buildingTargetLeft2,
  buildingTargetLeft3,
];
const buildingEarlyPositionArray = [
  buildingEarlyPosition1,
  buildingEarlyPosition2,
  buildingEarlyPosition3,
];

let canAnimateBuildingInformation,
  buildingLegsTimer,
  buildingBlinkTimer,
  animateRobotHandsTimer,
  spinRobotHandsTimer,
  animateSquidHandsTimer,
  moveSquidHandsTimer,
  animateAlienHandsTimer,
  alienSteerPreviousAngle,
  canAnimateBossInformation,
  canAnimateRobotInformation,
  canAnimateSquidInformation,
  canAnimateAlienInformation,
  bubbleTimer,
  shiftUpLayerHorizontalDistance,
  shiftUpLayerHorizontalTimer,
  shiftDownLayerHorizontalTimer,
  blinkSeaAnimalsTimer,
  canAnimateFishInformation,
  buildingLegArray = [];
let buildingCounter = 0;
const buildingEnemyFaceEyeArray = [];
const buildingLegContainerArray = [];
const buildingLegContainer1Div = document.getElementById(
  "building-leg-container-1"
);
const buildingLegContainer2Div = document.getElementById(
  "building-leg-container-2"
);
const buildingLegContainer3Div = document.getElementById(
  "building-leg-container-3"
);
const buildingLegFrameArray = [];
const building1LegFrameDiv = document.getElementById("building-1-leg-frame");
const building2LegFrameDiv = document.getElementById("building-2-leg-frame");
const building3LegFrameDiv = document.getElementById("building-3-leg-frame");
const experience1ContainerDiv = document.getElementById(
  "experience-1-container"
);
const experience2ContainerDiv = document.getElementById(
  "experience-2-container"
);
const experience3ContainerDiv = document.getElementById(
  "experience-3-container"
);
const experienceTextContainerArray = [];
const chainBlockAndStringContainerArray = [];
const experienceTextContainerDistanceFromFloor = 185;
const robotDiv = document.getElementById("robot");
let changeRobotHandsCounter = 0;
const robotHandLeftDiv = document.getElementById("robot-hand-left");
const robotHandRightDiv = document.getElementById("robot-hand-right");
const robotHandChildren = robotHandLeftDiv.querySelectorAll("*");
const robotHandChildrenLength = robotHandChildren.length;

const squidDiv = document.getElementById("squid");
const squidHandCloseArray = [];
const squidHandOpenArray = [];
let openAndCloseSquidHandsCounter = 0;
const alienDiv = document.getElementById("alien");
const alienSteerDiv = document.getElementById("alien-steer");
let alienSteerAngle = 0;
let alienSteerAngleLimit = 15;
let alienSteerAngleIncrement = 5;
const piechartRobotFrontDiv = document.getElementById("piechart-robot-front");
const piechartRobotTextGraphic1Div = document.getElementById(
  "piechart-robot-text-graphic-1"
);
const piechartRobotTextGraphic2Div = document.getElementById(
  "piechart-robot-text-graphic-2"
);
const piechartRobotTextAnimation1Div = document.getElementById(
  "piechart-robot-text-animation-1"
);
const piechartRobotTextAnimation2Div = document.getElementById(
  "piechart-robot-text-animation-2"
);
const piechartRobotTextCode1Div = document.getElementById(
  "piechart-robot-text-code-1"
);
const piechartRobotTextCode2Div = document.getElementById(
  "piechart-robot-text-code-2"
);
const piechartSquidFrontDiv = document.getElementById("piechart-squid-front");
const piechartSquidTextGraphic1Div = document.getElementById(
  "piechart-squid-text-graphic-1"
);
const piechartSquidTextGraphic2Div = document.getElementById(
  "piechart-squid-text-graphic-2"
);
const piechartSquidTextAnimation1Div = document.getElementById(
  "piechart-squid-text-animation-1"
);
const piechartSquidTextAnimation2Div = document.getElementById(
  "piechart-squid-text-animation-2"
);
const piechartSquidTextCode1Div = document.getElementById(
  "piechart-squid-text-code-1"
);
const piechartSquidTextCode2Div = document.getElementById(
  "piechart-squid-text-code-2"
);
const piechartAlienFrontDiv = document.getElementById("piechart-alien-front");
const piechartAlienTextGraphic1Div = document.getElementById(
  "piechart-alien-text-graphic-1"
);
const piechartAlienTextGraphic2Div = document.getElementById(
  "piechart-alien-text-graphic-2"
);
const piechartAlienTextAnimation1Div = document.getElementById(
  "piechart-alien-text-animation-1"
);
const piechartAlienTextAnimation2Div = document.getElementById(
  "piechart-alien-text-animation-2"
);
const piechartAlienTextCode1Div = document.getElementById(
  "piechart-alien-text-code-1"
);
const piechartAlienTextCode2Div = document.getElementById(
  "piechart-alien-text-code-2"
);
const bubbleDiv = document.getElementById("bubble");
const shiftUpDownLayerHorizontalIncrement = 40;
const shiftUpDownLayerHorizontalInterval = 40;
const seaAnimalSwimDistance = 900;
const skill1ContainerDiv = document.getElementById("skill-1-container");
const fishArray = [];
const fishEyeArray = [];
let isFishStillAnimating = false;
let fishAnimateNumber = 0;
const numberOfFishInEachRowArray = [5, 5, 3, 4];

let canAnimateCrabInformation;
const skill2ContainerDiv = document.getElementById("skill-2-container");
const crabArray = [];
const crabEyeArray = [];
let isCrabStillAnimating = false;
let crabAnimateNumber = 0;
const numberOfCrabInEachRowArray = [5, 5, 4, 3];

let canAnimateTurtleInformation;
const skill3ContainerDiv = document.getElementById("skill-3-container");
const turtleArray = [];
const turtleEyeArray = [];
let isTurtleStillAnimating = false;
let turtleAnimateNumber = 0;
const numberOfTurtleInEachRowArray = [4, 2, 3, 2];
const distanceBetweenRobbyAndBalloon = 150;

let isRobbyJumping,
  isRobbyFalling,
  swimUpHeight,
  layersMovement,
  robbyRightEdge,
  robbyLeftEdge,
  robbyMaxHorizontalDistance,
  canAnimateRobbyRunSwim,
  robbyStartFrame,
  robbyStopFrame,
  shiftRobbyFrameTimer,
  pageVerticalPositionWhenAnimateRobby1,
  pageVerticalPositionWhenAnimateRobby2,
  canAnimateNbaInformation,
  nbaBoardsCounter,
  nbaBoardsAnimationTimer,
  nbaPlayerCounter,
  nbaPlayerTimer,
  blinkNbaPlayerTimer,
  canAnimateSocialContainer,
  happyRobbyTimer,
  scrollOrSwipeTextContainerTimer,
  waterfallTimer,
  drawFireworkTimer,
  fireworkCenterX,
  fireworkCenterY,
  fireworkOneRadiusDistance,
  fireworkOneRotationAngle,
  drawOneLayerOfFireworkTimer,
  pageVerticalPosition = 0,
  pageVerticalPositionOnTouch = 0,
  previousPageVerticalPosition = 0,
  deltaPageVerticalPosition = 0,
  isRobbySwimming = false,
  isRobbyBelowSeaLevel = false,
  elevationArray = [],
  elevationNumberBelowRobby = null,
  counter = 0,
  switcher = 1,
  robbyStaticFrame = 0,
  robbyStartRunFrame = 1,
  robbyStopRunFrame = 2,
  robbyStartSwimFrame = 3,
  robbyStopSwimFrame = 4,
  robbySwimDownFrame = 5,
  robbyStartJumpFrame = 6,
  robbyStopJumpFrame = 7,
  robbyOneFrameWidth = 200,
  shiftRobbyFrameTimeInterval = 200,
  minimumVerticalDistanceToTriggerRobbySwimDownFrame = 100,
  nbaBoardArray = [],
  about3ContainerDiv = document.getElementById("nba-container"),
  nbaPlayerDiv = document.getElementById("nba-player"),
  nbaPlayerContainerDiv = document.getElementById("nba-player-container"),
  nbaPlayerFrameDiv = document.getElementById("nba-player-frame"),
  nbaRimContainerDiv = document.getElementById("nba-rim-container"),
  nbaBallDiv = document.getElementById("nba-ball"),
  nbaPlayerEyesDiv = document.getElementById("nba-player-eyes"),
  contactContainerDiv = document.getElementById("contact-container"),
  socialContainerDiv = document.getElementById("social-container"),
  isRobbyHappy = false,
  scrollOrSwipeTextContainer1Div = document.getElementById(
    "scroll-or-swipe-text-container-1"
  ),
  scrollOrSwipeTextContainer2Div = document.getElementById(
    "scroll-or-swipe-text-container-2"
  ),
  canHideScrollOrSwipeTextContainer = true,
  canAnimateScrollOrSwipeTextContainer = true,
  contactConfirmationContainerArray = [],
  emailAddressDiv = document.getElementById("email-address"),
  emailSubjectDiv = document.getElementById("email-subject"),
  emailMessageDiv = document.getElementById("email-message"),
  isContactConfirmationContainerVisible = true,
  waterfall1Div = document.getElementById("waterfall-1"),
  waterfall2Div = document.getElementById("waterfall-2"),
  touchStartX = 0,
  touchCurrentX = 0,
  touchEndX = 0,
  fireworksContainerDiv = document.getElementById("fireworks-container"),
  fireworkArray = [],
  fireworkSvgArray = [],
  cArray = [],
  drawFireworkCounter = 0,
  fireworkRowNumber = 8,
  fireworkColumnNumber = 16,
  fireworkLayerNumber = 0,
  fireworkDotRadius = 5,
  canDrawManyFireworks = true;

const landInformationContainerArray = [
  about1ContainerDiv,
  about2ContainerDiv,
  about3ContainerDiv,
  experience1ContainerDiv,
  experience2ContainerDiv,
  experience3ContainerDiv,
];

let canScrollOrSwipe;
const seaInformationContainerArray = [
  skill1ContainerDiv,
  skill2ContainerDiv,
  skill3ContainerDiv,
];

const orientationChangeHandler = () => {
  setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
  }, 500);
}; //ฟังก์ชันนี้จะช่วยให้การเปลี่ยนแนวหน้าจอมือถือมีประสิทธิภาพมากขึ้น

//กำหนดค่าเริ่มต้นของพลุ
const initVariablesAfterShowContainer = () => {
  fireworkCenterX = 0.5 * fireworkArray[0].offsetWidth;
  fireworkCenterY = 0.5 * fireworkArray[0].offsetHeight;
  fireworkOneRadiusDistance =
    (fireworkCenterY - fireworkDotRadius) / fireworkRowNumber;
  fireworkOneRotationAngle = (2 * Math.PI) / fireworkColumnNumber;
};

//รีเซ็ตตัวแปรตอนรีโหลดเพจ
const resetVariables = () => {
  if (pageVerticalPosition === 0)
    canAnimateBuildingInformation = canAnimatePlantInformation = true;

  if (!isFishStillAnimating) canAnimateFishInformation = true;
  if (!isCrabStillAnimating) canAnimateCrabInformation = true;
  if (!isTurtleStillAnimating) canAnimateTurtleInformation = true;
  canDrawManyFireworks =
    canAnimateSocialContainer =
    canAnimateNbaInformation =
    canAnimateAlienInformation =
    canAnimateSquidInformation =
    canAnimateRobotInformation =
      true;
};

//รีเซ็ตฟังก์ชันตอนรีโหลดเพจ
function resetFunctions() {
  positionPlants();
  positionBuildings();

  if (!isFishStillAnimating) {
    positionSeaAnimals(fishArray, numberOfFishInEachRowArray, 150, 100);
  }

  if (!isCrabStillAnimating) {
    positionSeaAnimals(crabArray, numberOfCrabInEachRowArray, 150, 100);
  }

  if (!isTurtleStillAnimating) {
    positionSeaAnimals(turtleArray, numberOfTurtleInEachRowArray, 150, 100);
  }

  positionNbaElements();
  positionExperience1Elements();
  positionExperience2Elements();
  positionExperience3Elements();
  positionSocialContainer();
  positionExperienceTextContainer();
  positionChainBlockAndStringContainer();
  resetFireworkSvg();
}
// ของมือถือ
function initTouchEvents() {
  document.addEventListener("touchstart", handleStart);
  document.addEventListener("touchmove", handleMove);
  document.addEventListener("touchend", handleEnd);
}
function handleStart(e) {
  touchStartX = e.targetTouches[0].pageX;
  pageVerticalPositionOnTouch = pageVerticalPosition;
}
function handleMove(e) {
  e.preventDefault();
  touchCurrentX = e.targetTouches[0].pageX;

  if (canScrollOrSwipe === true) {
    detectPageVerticalPosition();
    runTheseFunctionsAfterScrollOrSwipe();
  }
}
function handleEnd(e) {
  e.preventDefault();
  touchEndX = e.changedTouches[0].pageX;
}
//

//รันฟังก์ชันหลังจากการscroll
function runTheseFunctionsAfterScrollOrSwipe() {
  orientRobby();
  checkRobbyJumpFallSwim();
  moveLayers();
  shiftUpDownHorizontalLayers();
  animateInformationAndEnemiesElements();
  animateRobbyRunSwim();
  hideScrollOrSwipeTextContainer();
  hideContactConfirmationContainer();
  deviceFunctionScrollSwipe();
  printScrollSwipeText();
}

//ยังไม่แน่ใจ
function deviceFunctionScrollSwipe() {
  if (layersMovement === "vertical") {
    positionHorizontalLayersToHaveSameRightPosition();
  }
}

// ลบclass noscroll
function showContainer() {
  containerDiv.removeAttribute("class");
}

//ใช้ในการทำ animation ในส่วนของ "เลเยอร์แนวนอน" หลังจากที่ทุกอย่างโหลดเสร็จสมบูรณ์
function shiftUpHorizontalLayersAfterEverythingLoaded() {
  for (let e = 0; e < layerHorizontalArray.length; e++) {
    const layer = layerHorizontalArray[e];

    $(layer)
      .stop()
      .animate(
        {
          top: "0px",
        },
        1000,
        function () {
          finishShiftUpHorizontalLayersAfterEverythingLoaded();
        }
      );
  }
}

function animateElementUp(element, targetTop, duration, callback) {
  const startTop = parseFloat(getComputedStyle(element).top) || 0;
  const startTime = performance.now();

  function step(timestamp) {
    const progress = timestamp - startTime;
    const currentTop =
      startTop + (progress / duration) * (targetTop - startTop);

    element.style.top = currentTop + "px";

    if (progress < duration) {
      requestAnimationFrame(step);
    } else {
      if (typeof callback === "function") {
        callback();
      }
    }
  }

  requestAnimationFrame(step);
}

function finishShiftUpHorizontalLayersAfterEverythingLoaded() {
  if (
    canFinishShiftUpHorizontalLayersAfterEverythingLoaded &&
    !isPreloadShiftUpAnimationFinish
  ) {
    makePageScrollable();
    shiftDownRobbyContainer();
    animateScrollOrSwipeTextContainer();
  }
}

//อนิเมชั่นร็อบบี้ตอนตกจนถึงพื้น,set ร็อบบี้เป็นเฟรมแรก, อนุญาตให้วิ่ง
function shiftDownRobbyContainer() {
  setRobbyJumpDownAndFallFrame();
  $(robbyContainerDiv)
    .stop()
    .animate(
      {
        bottom: "20%",
      },
      500,
      () => {
        setRobbyStaticFrame();
        enableAnimateRobbyRunSwim();
      }
    );
}

//ใช้ลบคลาส no-scroll
function makePageScrollable() {
  contentDiv.removeAttribute("class");
  /* enableScrollOrSwipe(); */
}

function setFrontLayerVerticalHeight() {
  const lastLayerVertical = layerVerticalArray[layerVerticalArray.length - 1];
  lastLayerVertical.style.height =
    2 * containerDiv.offsetHeight +
    bannersContainerDiv.offsetHeight +
    gapBetweenContactCloudAndBannersContainer +
    "px";
}
function setBannersContainerVerticalPosition() {
  bannersContainerDiv.style.bottom = `${containerDiv.offsetHeight}px`;
}

//ใช้เพื่อคำนวณความสูงของหน้าเว็บ
function setPageHeight() {
  const lastHorizontalLayer =
    layerHorizontalArray[layerHorizontalArray.length - 1];
  const lastVerticalLayer = layerVerticalArray[layerVerticalArray.length - 1];

  const pageHeight =
    lastHorizontalLayer.offsetWidth -
    containerDiv.offsetWidth +
    lastVerticalLayer.offsetHeight +
    distanceBetweenRobbyAndBalloon;
  pageDiv.style.height = pageHeight + "px";
}

function setLayerSpeed() {
  layerHorizontalSpeedArray.length = 0;
  layerVerticalSpeedArray.length = 0;

  for (let e = 0; e < layerHorizontalArray.length; e++) {
    const t =
      (layerHorizontalArray[e].offsetWidth - containerDiv.offsetWidth) /
      (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth -
        containerDiv.offsetWidth);
    layerHorizontalSpeedArray.push(t);
  }

  for (e = 0; e < layerVerticalArray.length; e++) {
    const i =
      (layerVerticalArray[e].offsetHeight - containerDiv.offsetHeight) /
      (layerVerticalArray[layerVerticalArray.length - 1].offsetHeight -
        containerDiv.offsetHeight);
    layerVerticalSpeedArray.push(i);
  }
  console.log(layerHorizontalSpeedArray, layerVerticalSpeedArray);
}

//ใช้scrollเพจ และเช็คการรีเซ็ตเพจ
function handlePageScroll() {
  previousPageVerticalPosition = pageVerticalPosition;

  pageVerticalPosition = scrollY;

  deltaPageVerticalPosition =
    pageVerticalPosition - previousPageVerticalPosition;

  if (pageVerticalPosition <= 0) {
    resetVariables();
    resetFunctions();
  }
}

function moveLayers() {
  setLayersMovement();

  if (layersMovement === "horizontal") {
    for (let e = 0; e < layerHorizontalArray.length; e++) {
      layerHorizontalArray[e].style.left = `${
        -1 * layerHorizontalSpeedArray[e] * pageVerticalPosition
      }px`;
    }

    positionLayerHorizontalToBottom();
    clearHappyRobbyTimer();
    positionVerticalLayersHorizontally();
  }

  //ยังไม่ focus
  if (layersMovement === "vertical") {
    for (let e = 0; e < layerVerticalArray.length; e++) {
      layerVerticalArray[e].style.bottom = `${
        -1 *
        layerVerticalSpeedArray[e] *
        (pageVerticalPosition -
          (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth -
            containerDiv.offsetWidth))
      }px`;
    }

    positionVerticalLayersAtLeftMost();
    positionHorizontalLayersToHaveSameRightPosition();
    positionHorizontalLayersVertically();
    clearShiftRobbyFrameTimer();
    clearHappyRobbyTimer();
  }

  if (layersMovement === "not moving 1") {
    positionVerticalLayersAtLeftMost();
    positionVerticalLayersToHaveSameTopPosition();
    positionHorizontalLayersAtBottomMost();
    positionHorizontalLayersToHaveSameRightPosition();
    clearHappyRobbyTimer();
  }

  if (layersMovement === "not moving 2") {
    positionVerticalLayersAtLeftMost();
    positionVerticalLayersToHaveSameTopPosition();
    positionHorizontalLayersAtBottomMost();
    positionHorizontalLayersToHaveSameRightPosition();
    animateSocialContainer();
    happyRobby();
    drawManyFireworks();
  }

  positionBalloonAndRobbyContainerHorizontally();
  positionContactContainer();
  positionFireworksContainer();
}

function positionVerticalLayersAtLeftMost() {
  for (let e = 0; e < layerVerticalArray.length; e++) {
    layerVerticalArray[e].style.left = "0px";
  }
}

function positionHorizontalLayersToHaveSameRightPosition() {
  for (let e = 0; e < layerHorizontalArray.length; e++) {
    layerHorizontalArray[e].style.left = `${
      containerDiv.offsetWidth - layerHorizontalArray[e].offsetWidth
    }px`;
  }
}

function positionHorizontalLayersVertically() {
  const lastVerticalLayer = layerVerticalArray[layerVerticalArray.length - 1];
  for (let e = 0; e < layerHorizontalArray.length; e++) {
    layerHorizontalArray[e].style.top = `${
      lastVerticalLayer.offsetTop +
      lastVerticalLayer.offsetHeight -
      containerDiv.offsetHeight
    }px`;
  }
}

function positionHorizontalLayersAtBottomMost() {
  const lastVerticalLayer = layerVerticalArray[layerVerticalArray.length - 1];
  for (let e = 0; e < layerHorizontalArray.length; e++) {
    layerHorizontalArray[e].style.top = `${
      lastVerticalLayer.offsetHeight - containerDiv.offsetHeight
    }px`;
  }
}

//สร้างขอบซ้ายและขวาให้ robby
function setRobbyLeftAndRightEdge() {
  robbyRightEdge = 0.5 * (containerDiv.offsetWidth + robbyDiv.offsetWidth) - 65;
  robbyLeftEdge = 0.5 * (containerDiv.offsetWidth - robbyDiv.offsetWidth) + 65;
}

function positionVerticalLayersToHaveSameTopPosition() {
  for (let e = 0; e < layerVerticalArray.length; e++) {
    layerVerticalArray[e].style.bottom = `${
      containerDiv.offsetHeight - layerVerticalArray[e].offsetHeight
    }px`;
  }
}

function positionVerticalLayersBottomToHorizontalLayersBottom() {
  for (let e = 0; e < layerVerticalArray.length; e++) {
    layerVerticalArray[e].style.bottom = `${
      -1 * layerHorizontalArray[e].offsetTop
    }px`;
  }
}

function shiftUpDownHorizontalLayers() {
  if (
    (previousPageVerticalPosition < sea1Div.offsetLeft - robbyLeftEdge ||
      previousPageVerticalPosition >
        sea1Div.offsetLeft + sea1Div.offsetWidth - robbyRightEdge) &&
    pageVerticalPosition >= sea1Div.offsetLeft - robbyLeftEdge &&
    pageVerticalPosition <=
      sea1Div.offsetLeft + sea1Div.offsetWidth - robbyRightEdge
  ) {
    isRobbySwimming = true;
    shiftUpLayerHorizontal();
    shiftRobbyToSeaFloor();
    createBubble();
  }

  if (
    previousPageVerticalPosition >= sea1Div.offsetLeft - robbyLeftEdge &&
    previousPageVerticalPosition <=
      sea1Div.offsetLeft + sea1Div.offsetWidth - robbyRightEdge
  ) {
    if (
      pageVerticalPosition < sea1Div.offsetLeft - robbyLeftEdge ||
      pageVerticalPosition >
        sea1Div.offsetLeft + sea1Div.offsetWidth - robbyRightEdge
    ) {
      isRobbySwimming = false;
      shiftDownLayerHorizontal();
      shiftRobbyToGroundLevel();
      clearInterval(bubbleTimer);
      clearInterval(blinkSeaAnimalsTimer);
    }
  }
}

function shiftUpDownHorizontalLayersOnResize() {
  if (
    pageVerticalPosition >= sea1Div.offsetLeft - robbyLeftEdge &&
    pageVerticalPosition <=
      sea1Div.offsetLeft + sea1Div.offsetWidth - robbyRightEdge
  ) {
    clearInterval(shiftUpLayerHorizontalTimer);
    clearInterval(shiftDownLayerHorizontalTimer);
    isRobbySwimming = true;
    positionLayerHorizontalToTop();
    positionVerticalLayersBottomToHorizontalLayersBottom();
    createBubble();
  } else if (
    pageVerticalPosition < sea1Div.offsetLeft - robbyLeftEdge ||
    pageVerticalPosition >
      sea1Div.offsetLeft + sea1Div.offsetWidth - robbyRightEdge
  ) {
    clearInterval(shiftUpLayerHorizontalTimer);
    clearInterval(shiftDownLayerHorizontalTimer);
    isRobbySwimming = false;
    if (layersMovement === "horizontal") {
      positionLayerHorizontalToBottom();
      positionVerticalLayersBottomToHorizontalLayersBottom();
    } else {
      positionHorizontalLayersAtBottomMost();
      positionHorizontalLayersToHaveSameRightPosition();
    }
    clearInterval(bubbleTimer);
    clearInterval(blinkSeaAnimalsTimer);
  }
}

function setShiftUpLayerHorizontalDistance() {
  shiftUpLayerHorizontalDistance = 0.75 * containerDiv.offsetHeight;
}

function shiftUpLayerHorizontal() {
  setShiftUpLayerHorizontalDistance();
  clearShiftUpDownLayerHorizontalTimer();
  shiftUpLayerHorizontalTimer = setInterval(function () {
    moveUpLayerHorizontal();
  }, shiftUpDownLayerHorizontalInterval);
  disableIsRobbyJumpingAndFalling();
}

function moveUpLayerHorizontal() {
  if (layersMovement === "horizontal") {
    for (let e = 0; e < layerHorizontalArray.length; e++) {
      let t =
        layerHorizontalArray[e].offsetTop - shiftUpDownLayerHorizontalIncrement;
      if (t <= -shiftUpLayerHorizontalDistance) {
        t = -shiftUpLayerHorizontalDistance;
        layerHorizontalArray[e].style.top = t + "px";
        clearInterval(shiftUpLayerHorizontalTimer);
      } else {
        layerHorizontalArray[e].style.top = t + "px";
      }
      if (
        robbyContainerDiv.offsetTop >
        sea1Div.offsetTop +
          layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop
      ) {
        isRobbyBelowSeaLevel = true;
      }
    }
    positionVerticalLayersBottomToHorizontalLayersBottom();
  } else {
    clearInterval(shiftUpLayerHorizontalTimer);
    positionHorizontalLayersAtBottomMost();
    positionHorizontalLayersToHaveSameRightPosition();
    isRobbyBelowSeaLevel = false;
  }
}

function shiftDownLayerHorizontal() {
  clearShiftUpDownLayerHorizontalTimer();
  shiftDownLayerHorizontalTimer = setInterval(function () {
    moveDownLayerHorizontal();
  }, shiftUpDownLayerHorizontalInterval);
}

function moveDownLayerHorizontal() {
  if (layersMovement === "horizontal") {
    for (let e = 0; e < layerHorizontalArray.length; e++) {
      let t =
        layerHorizontalArray[e].offsetTop + shiftUpDownLayerHorizontalIncrement;
      if (t >= 0) {
        t = 0;
        layerHorizontalArray[e].style.top = t + "px";
        clearInterval(shiftDownLayerHorizontalTimer);
      } else {
        layerHorizontalArray[e].style.top = t + "px";
      }
      if (
        robbyContainerDiv.offsetTop <
        sea1Div.offsetTop +
          layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop
      ) {
        isRobbyBelowSeaLevel = false;
      }
    }
    positionVerticalLayersBottomToHorizontalLayersBottom();
  } else {
    clearInterval(shiftDownLayerHorizontalTimer);
    positionHorizontalLayersAtBottomMost();
    positionHorizontalLayersToHaveSameRightPosition();
    isRobbyBelowSeaLevel = false;
  }
}

function clearShiftUpDownLayerHorizontalTimer() {
  clearInterval(shiftUpLayerHorizontalTimer);
  clearInterval(shiftDownLayerHorizontalTimer);
}

//พาร็อบขี้ลอยขึ้นจากน้ำไปบนพื้น
function shiftRobbyToGroundLevel() {
  $(robbyContainerDiv)
    .stop()
    .animate(
      {
        bottom: `${
          containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop
        }px`,
      },
      300,
      function () {}
    );
}

//อนิเมทร็อบบี้ให้ลงไปถึงพื้นน้ำ
function shiftRobbyToSeaFloor() {
  $(robbyContainerDiv)
    .stop()
    .animate(
      {
        bottom: `${seaFloorDiv.offsetHeight}px`,
      },
      300,
      function () {}
    );
}

function positionLayerHorizontalToTop() {
  if (isRobbySwimming) {
    setShiftUpLayerHorizontalDistance();
    for (let e = 0; e < layerHorizontalArray.length; e++) {
      layerHorizontalArray[
        e
      ].style.top = `${-shiftUpLayerHorizontalDistance}px`;
    }
    for (let e = 0; e < layerVerticalArray.length; e++) {
      layerVerticalArray[
        e
      ].style.bottom = `${shiftUpLayerHorizontalDistance}px`;
    }
  }
}

//ให้เลเยอร์ตกพื้นตอน resize หรือตอนเดิน
function positionLayerHorizontalToBottom() {
  if (!isRobbySwimming) {
    for (let e = 0; e < layerHorizontalArray.length; e++) {
      layerHorizontalArray[e].style.top = "0px";
    }
    for (let e = 0; e < layerVerticalArray.length; e++) {
      layerVerticalArray[e].style.bottom = "0px";
    }
  }
}

function checkRobbyJumpFallSwim() {
  if (layersMovement === "horizontal") {
    if (isRobbySwimming) {
      if (isRobbyBelowSeaLevel) {
        robbySwimUp();
      }
    } else {
      for (let e = 0; e < elevationArray.length; e++) {
        robbyJumpUp(e);
        robbyFall(e);
      }
    }
  }
}

//ให้ร็อบบี้กระโดดตอนเจอแพลตฟอมเมอร์
function robbyJumpUp(e) {
  const leftElevationBoundary = elevationArray[e].offsetLeft - robbyRightEdge;
  const rightElevationBoundary =
    elevationArray[e].offsetLeft +
    elevationArray[e].offsetWidth -
    robbyLeftEdge;
  if (
    (previousPageVerticalPosition <= leftElevationBoundary &&
      pageVerticalPosition > leftElevationBoundary) ||
    (previousPageVerticalPosition >= rightElevationBoundary &&
      pageVerticalPosition < rightElevationBoundary)
  ) {
    positionRobbyAtGroundLevel();
    $(robbyContainerDiv)
      .stop()
      .animate(
        {
          bottom: [
            `${
              containerDiv.offsetHeight -
              groundAndGrassContainer1Div.offsetTop +
              300
            }`,
            "easeOutCubic",
          ],
        },
        300,
        function () {
          robbyJumpDown(e);
        }
      );
    setRobbyJumpUpFrame();
  }
}

//ให้ร็อบบี้กระโดดลงบนแพลตฟอมเมอร์ได้
function robbyJumpDown(e) {
  if (
    pageVerticalPosition > elevationArray[e].offsetLeft - robbyRightEdge &&
    pageVerticalPosition <
      elevationArray[e].offsetLeft +
        elevationArray[e].offsetWidth -
        robbyLeftEdge
  ) {
    $(robbyContainerDiv)
      .stop()
      .animate(
        {
          bottom: [
            `${containerDiv.offsetHeight - elevationArray[e].offsetTop}`,
            "easeInCubic",
          ],
        },
        300,
        function () {
          disableIsRobbyJumpingAndFalling();
          setRobbyStaticFrame();
        }
      );
    setRobbyJumpDownAndFallFrame();
  }
}

//ถ้าร็อบบี้กระโดดให้ร็อบบี้ตกถึงพื้น
function robbyFall(e) {
  const leftElevationBoundary =
    elevationArray[e].offsetLeft +
    elevationArray[e].offsetWidth -
    robbyLeftEdge;
  const rightElevationBoundary = elevationArray[e].offsetLeft - robbyRightEdge;
  if (
    (previousPageVerticalPosition < leftElevationBoundary &&
      pageVerticalPosition >= leftElevationBoundary) ||
    (previousPageVerticalPosition > rightElevationBoundary &&
      pageVerticalPosition <= rightElevationBoundary)
  ) {
    isRobbyFalling = true;
    setRobbyJumpDownAndFallFrame();
    $(robbyContainerDiv)
      .stop()
      .animate(
        {
          bottom: [
            `${
              containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop
            }`,
            "easeInCubic",
          ],
        },
        300,
        function () {
          disableIsRobbyJumpingAndFalling();
          setRobbyStaticFrame();
        }
      );
  }
}

function setRobbyJumpUpFrame() {
  clearShiftRobbyFrameTimer();
  isRobbyJumping = true;
  robbyFramesDiv.style.left = `${-robbyStartJumpFrame * robbyOneFrameWidth}px`;
}

//ใช้เลือกเฟรมของร็อบบี้ตอนกระโดด
function setRobbyJumpDownAndFallFrame() {
  robbyFramesDiv.style.left = `${-robbyStopJumpFrame * robbyOneFrameWidth}px`;
}

//กำหนดเฟรมแรกของร็อบบี้
function setRobbyStaticFrame() {
  robbyFramesDiv.style.left = "0px";
}

function disableIsRobbyJumpingAndFalling() {
  isRobbyFalling = isRobbyJumping = false;
}

//ให้ร็อบบี้ลอยตัวตอนอยู่ในน้ำ
function robbySwimUp() {
  getSwimUpHeight();
  if (swimUpHeight > 0) {
    const bottomPosition = seaFloorDiv.offsetHeight + swimUpHeight + "px";
    const swimUpDuration = 3 * swimUpHeight;
    const swimDownDuration = 6 * swimUpHeight;
    $(robbyContainerDiv)
      .stop()
      .animate(
        {
          bottom: bottomPosition,
        },
        swimUpDuration,
        function () {
          robbySwimDown(swimDownDuration);
        }
      );
  }
}

//ให้ร็อบบี้ตกไปอยู่ที่พื้นถ้าอยู่ในน้ำแต่ไม่ได้ว่ายน้ำ
function robbySwimDown(e) {
  $(robbyContainerDiv)
    .stop()
    .animate(
      {
        bottom: `${seaFloorDiv.offsetHeight}px`,
      },
      e,
      function () {
        setRobbyStaticFrame();
      }
    );
  if (
    robbyContainerDiv.offsetTop + robbyContainerDiv.offsetHeight <=
    containerDiv.offsetHeight -
      seaFloorDiv.offsetHeight -
      minimumVerticalDistanceToTriggerRobbySwimDownFrame
  ) {
    robbyFramesDiv.style.left = `${-robbySwimDownFrame * robbyOneFrameWidth}px`;
  } else {
    setRobbyStaticFrame();
  }
}

//ใช้คูลดาวอนิเมทตาของร็อบบี้
function animateRobbyEyes() {
  clearInterval(blinkRobbyEyesTimer);

  blinkRobbyEyesTimer = setInterval(function () {
    blinkRobbyEyes();
  }, 4000);
}

//ใช้อนิเมทตาของร็อบบี้
function blinkRobbyEyes() {
  if (layersMovement !== "not moving 2") {
    $(robbyEyesCloseDiv).fadeTo(0, 1);
    $(robbyEyesCloseDiv).stop().delay(300).animate(
      {
        opacity: 0,
      },
      0
    );
  }
}

function hideRobbyEyesClose() {
  $(robbyEyesCloseDiv).fadeTo(0, 0);
}

function getSwimUpHeight() {
  swimUpHeight = Math.abs(deltaPageVerticalPosition);
  const maxSwimUpHeight = sea1Div.offsetHeight - robbyDiv.offsetHeight;

  if (maxSwimUpHeight < swimUpHeight) {
    swimUpHeight = maxSwimUpHeight;
  }
}

function positionVerticalLayersHorizontally() {
  for (let e = 0; e < layerVerticalArray.length; e++) {
    layerVerticalArray[e].style.left = `${
      layerHorizontalArray[e].offsetLeft +
      layerHorizontalArray[e].offsetWidth -
      containerDiv.offsetWidth
    }px`;
  }
}

//เซ็ตบอลลูนและpostion robbyตอนจบ
function positionBalloonAndRobbyContainerHorizontally() {
  const e =
    pageVerticalPosition *
      layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1] -
    (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth -
      containerDiv.offsetWidth);
  robbyMaxHorizontalDistance = 0.5 * containerDiv.offsetWidth + 250;
  let t = 0.5 * containerDiv.offsetWidth + e;
  if (robbyMaxHorizontalDistance <= t) {
    t = robbyMaxHorizontalDistance;
  }
  const i = 0.5 * containerDiv.offsetWidth + 50;
  let n = 0.5 * (containerDiv.offsetWidth - balloonDiv.offsetWidth) + e;
  if (i <= n) {
    n = i;
  }
  if (layersMovement === "vertical") {
    balloonDiv.style.left = `${n}px`;
    robbyContainerDiv.style.left = `${t}px`;
  } else if (
    layersMovement === "not moving 1" ||
    layersMovement === "not moving 2"
  ) {
    robbyContainerDiv.style.left = `${
      t +
      pageVerticalPosition -
      (pageDiv.offsetHeight -
        containerDiv.offsetHeight -
        distanceBetweenRobbyAndBalloon)
    }px`;
    balloonDiv.style.left = `${n}px`;
  } else {
    balloonDiv.style.left = `${
      layerHorizontalArray[layerHorizontalArray.length - 1].offsetLeft +
      layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth -
      0.5 * (containerDiv.offsetWidth + balloonDiv.offsetWidth)
    }px`;
    robbyContainerDiv.style.left = "50%";
  }
}

function positionBalloonVertically() {
  balloonDiv.style.bottom = `${0.2 * containerDiv.offsetHeight}px`;
}

function setLayersMovement() {
  if (
    pageVerticalPosition *
      layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1] <=
    layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth -
      containerDiv.offsetWidth
  ) {
    layersMovement = "horizontal";
  } else if (
    pageVerticalPosition >=
      pageDiv.offsetHeight -
        containerDiv.offsetHeight -
        distanceBetweenRobbyAndBalloon &&
    pageVerticalPosition < pageDiv.offsetHeight - containerDiv.offsetHeight
  ) {
    layersMovement = "not moving 1";
  } else if (
    pageVerticalPosition >=
    pageDiv.offsetHeight - containerDiv.offsetHeight
  ) {
    layersMovement = "not moving 2";
  } else {
    layersMovement = "vertical";
  }
}

// ใช้หันตัวละครและลูกตาซ้ายขวา
function orientRobby() {
  if (deltaPageVerticalPosition > 0) {
    robbyFramesDiv.style.top = "0px";
    robbyEyesCloseDiv.style.left = "90px";
  } else if (deltaPageVerticalPosition < 0) {
    robbyFramesDiv.style.top = "-200px";
    robbyEyesCloseDiv.style.left = "55px";
  }
}

//เก็บข้อมูลแยกแต่ละอาเรย์
function storeDivs() {
  const divs = document.getElementsByTagName("div");

  for (let t = 0; t < divs.length; t++) {
    const className = divs[t].getAttribute("class");
    switch (className) {
      case "fish":
        fishArray.push(divs[t]);
        break;
      case "fish-eyes":
        fishEyeArray.push(divs[t]);
        break;
      case "crab":
        crabArray.push(divs[t]);
        break;
      case "crab-eyes":
        crabEyeArray.push(divs[t]);
        break;
      case "turtle":
        turtleArray.push(divs[t]);
        break;
      case "turtle-eyes":
        turtleEyeArray.push(divs[t]);
        break;
      case "nba-board-blue":
      case "nba-board-red":
        nbaBoardArray.push(divs[t]);
        break;
      case "elevation":
        elevationArray.push(divs[t]);
        break;
      case "plant":
        plantArray.push(divs[t]);
        break;
      case "building":
        buildingArray.push(divs[t]);
        break;
      case "building-enemy-face-a-eyes":
      case "building-enemy-face-b-eyes":
        buildingEnemyFaceEyeArray.push(divs[t]);
        break;
      case "building-leg-frame-a":
      case "building-leg-frame-b":
        buildingLegFrameArray.push(divs[t]);
        break;
      case "building-leg-container-a":
      case "building-leg-container-b":
        buildingLegContainerArray.push(divs[t]);
        break;
      case "contact-confirmation-container":
        contactConfirmationContainerArray.push(divs[t]);
        break;
      case "experience-text-container":
        experienceTextContainerArray.push(divs[t]);
        break;
      case "chain-block-and-string-container":
        chainBlockAndStringContainerArray.push(divs[t]);
        break;
      case "layer-horizontal":
        layerHorizontalArray.push(divs[t]);
        break;
      case "layer-vertical":
        layerVerticalArray.push(divs[t]);
        break;
      case "algae-a":
      case "algae-b":
      case "title-skills-class":
        seaFloorFrontObjectArray.push(divs[t]);
        break;
      case "coral":
      case "coral-big":
        seaFloorBackObjectArray.push(divs[t]);
        break;
      case "squid-hand-close":
        squidHandCloseArray.push(divs[t]);
        break;
      case "squid-hand-open":
        squidHandOpenArray.push(divs[t]);
        break;
      case "firework":
        fireworkArray.push(divs[t]);
        break;
      default:
        break;
    }
  }
}

function animatePlants() {
  for (let e = 0; e < plantArray.length; e++) {
    $(plantArray[e])
      .stop()
      .delay(300 * e)
      .animate(
        {
          top: [plantTargetTopObjectArray[e].offsetTop, "easeOutElastic"],
        },
        800,
        function () {}
      );
  }
}

function positionPlants() {
  for (let e = 0; e < plantArray.length; e++) {
    plantArray[e].style.top = canAnimatePlantInformation
      ? "100%"
      : `${plantTargetTopObjectArray[e].offsetTop}px`;
  }
}

function animateBuildings() {
  clearInterval(buildingLegsTimer);
  buildingLegsTimer = setInterval(function () {
    animateBuildingsLegs();
  }, 200);

  for (let e = 0; e < buildingArray.length; e++) {
    $(buildingArray[e])
      .stop()
      .delay(300 * e)
      .animate(
        {
          left: [buildingTargetLeftArray[e], "easeOutCubic"],
        },
        1000,
        function () {}
      );
  }
}

function animateBuildingsLegs() {
  buildingCounter += 1;
  for (let e = 0; e < buildingArray.length; e++) {
    if (
      buildingArray[buildingArray.length - 1].offsetLeft ==
      buildingTargetLeftArray[buildingTargetLeftArray.length - 1]
    ) {
      buildingLegFrameArray[buildingLegFrameArray.length - 1].style.left =
        "0px";
      clearInterval(buildingLegsTimer);
      buildingCounter = 0;
      return;
    }

    if (
      buildingArray[e].offsetLeft > buildingTargetLeftArray[e] &&
      buildingArray[e].offsetLeft < buildingEarlyPositionArray[e]
    ) {
      buildingLegFrameArray[e].style.left = `${
        -buildingLegContainerArray[e].offsetWidth * (buildingCounter % 2)
      }px`;
    } else {
      buildingLegFrameArray[e].style.left = "0px";
    }
  }
}

function animateBuildingsEyes() {
  clearInterval(buildingBlinkTimer);
  buildingBlinkTimer = setInterval(function () {
    blinkBuildings();
  }, 4000);
}

function blinkBuildings() {
  if (
    pageVerticalPosition + 0.5 * containerDiv.offsetWidth <
      about2ContainerDiv.offsetLeft ||
    pageVerticalPosition + 0.5 * containerDiv.offsetWidth >
      about2ContainerDiv.offsetLeft + about2ContainerDiv.offsetWidth
  ) {
    clearInterval(buildingBlinkTimer);
  } else {
    const e = Math.floor(Math.random() * buildingArray.length);
    $(buildingEnemyFaceEyeArray[e]).fadeTo(0, 1);
    $(buildingEnemyFaceEyeArray[e])
      .stop()
      .delay(300)
      .animate(
        {
          opacity: 0,
        },
        0,
        function () {}
      );
  }
}

function positionBuildings() {
  for (let e = 0; e < buildingArray.length; e++) {
    buildingArray[e].style.left = `${buildingEarlyPositionArray[e]}px`;
  }
}

function nbaBoardsJump() {
  for (let e = 0; e < nbaBoardArray.length; e++) {
    $(nbaBoardArray[e])
      .stop()
      .delay(100 * e)
      .animate(
        {
          bottom: [200, "easeOutCubic"],
        },
        300,
        function () {
          nbaBoardsFall();
        }
      );
  }
}

function nbaBoardsFall() {
  $(nbaBoardArray[nbaBoardsCounter])
    .stop()
    .animate(
      {
        bottom: [0, "easeInCubic"],
      },
      300,
      function () {}
    );

  nbaBoardsCounter += 1;
  if (nbaBoardsCounter >= nbaBoardArray.length) {
    nbaBoardsCounter = 0;
  }
}

function positionNbaBoard() {
  for (let e = 0; e < nbaBoardArray.length; e++) {
    nbaBoardArray[e].style.bottom = "0px";
  }
}

function animateNbaBoardsContinuously() {
  clearInterval(nbaBoardsAnimationTimer);
  nbaBoardsAnimationTimer = setInterval(function () {
    nbaBoardsJump();
  }, 3000);
}

function animateNbaPlayer() {
  nbaPlayerRun();
}

function nbaPlayerRun() {
  clearInterval(nbaPlayerTimer);
  nbaPlayerTimer = setInterval(function () {
    animateNbaPlayerRun();
  }, 200);

  $(nbaPlayerContainerDiv)
    .stop()
    .animate(
      {
        left: "690px",
      },
      1000,
      function () {
        nbaPlayerJump();
      }
    );
}

function animateNbaPlayerRun() {
  shiftNbaPlayerFrame((nbaPlayerCounter += 3) % 2);
  console.log((nbaPlayerCounter += 1) % 2);
}

function nbaPlayerJump() {
  clearInterval(nbaPlayerTimer);
  nbaPlayerCounter = 0;
  shiftNbaPlayerFrame(2);

  $(nbaPlayerContainerDiv)
    .stop()
    .animate(
      {
        left: "570px",
        bottom: [200, "easeOutCubic"],
      },
      300,
      function () {
        nbaPlayerFall();
      }
    );
}

function nbaPlayerFall() {
  shiftNbaPlayerFrame(3);
  shakeRim();
  bounceBall();
  nbaBoardsJump();
  animateNbaBoardsContinuously();

  $(nbaPlayerContainerDiv)
    .stop()
    .animate(
      {
        left: "450px",
        bottom: [0, "easeInCubic"],
      },
      300,
      function () {}
    );
}

function shiftNbaPlayerFrame(e) {
  nbaPlayerFrameDiv.style.left = `${-300 * e}px`;
}

function shakeRim() {
  $(nbaRimContainerDiv)
    .stop()
    .animate(
      {
        bottom: [-50, "easeOutCubic"],
      },
      100,
      moveRimUp
    );
}

function moveRimUp() {
  $(nbaRimContainerDiv)
    .stop()
    .animate(
      {
        bottom: [0, "easeOutElastic"],
      },
      500
    );
}

function bounceBall() {
  nbaBallDiv.style.opacity = "1";
  $(nbaBallDiv)
    .stop()
    .animate(
      {
        bottom: [0, "easeOutBounce"],
      },
      1200
    );
}

function positionNbaElements() {
  stopAllNbaAnimation();
  setAllNbaCounter();
  clearAllNbaTimer();
  positionNbaBoard();
  positionNbaPlayerContainer();
  hideNbaBall();
}

function positionNbaPlayerContainer() {
  nbaPlayerContainerDiv.style.left = "1400px";
  nbaPlayerContainerDiv.style.bottom = "0px";
}

function hideNbaBall() {
  $(nbaBallDiv).fadeTo(0, 0);
  nbaBallDiv.style.left = "415px";
  nbaBallDiv.style.bottom = "250px";
}

function animateNbaPlayerEyes() {
  clearInterval(blinkNbaPlayerTimer);
  blinkNbaPlayerTimer = setInterval(blinkNbaPlayer, 4000);
}

function blinkNbaPlayer() {
  if (
    pageVerticalPosition + 0.5 * containerDiv.offsetWidth <
      about3ContainerDiv.offsetLeft ||
    pageVerticalPosition + 0.5 * containerDiv.offsetWidth >
      about3ContainerDiv.offsetLeft + about3ContainerDiv.offsetWidth
  ) {
    clearInterval(blinkNbaPlayerTimer);
  } else {
    $(nbaPlayerEyesDiv).fadeTo(0, 1);
    $(nbaPlayerEyesDiv).stop().delay(300).animate(
      {
        opacity: 0,
      },
      0
    );
  }
}

function clearAllNbaTimer() {
  clearInterval(blinkNbaPlayerTimer);
  clearInterval(nbaBoardsAnimationTimer);
  clearInterval(nbaPlayerTimer);
}

function setAllNbaCounter() {
  nbaPlayerCounter = nbaBoardsCounter = 0;
}

function stopAllNbaAnimation() {
  for (let e = 0; e < nbaBoardArray.length; e++) {
    $(nbaBoardArray[e]).stop(true, false);
  }
  $(nbaPlayerContainerDiv).stop(true, false);
}

function positionSeaAnimals(
  numberOfArray,
  numberInRow,
  widthMultiplier,
  heightMultiplier
) {
  let s = 0, //
    c = 0; //แถว
  for (let f = 0; f < numberInRow.length; f++) {
    for (let i = 0; i < numberInRow[f]; i++) {
      numberOfArray[s].style.left = `${20 + i * widthMultiplier}px`;
      numberOfArray[s].style.top = `${
        numberOfArray[s].offsetTop -
        seaAnimalSwimDistance +
        c * heightMultiplier
      }px`;
      s += 1;
    }
    c += 1;
  }
}

function animateSeaAnimals(e) {
  const t = e;
  if (t === fishArray) {
    isFishStillAnimating = true;
  } else if (t === crabArray) {
    isCrabStillAnimating = true;
  } else if (t === turtleArray) {
    isTurtleStillAnimating = true;
  }

  for (let i = 0; i < t.length; i++) {
    // ปรับเปลี่ยนตำแหน่ง top ของสัตว์ทะเลให้อยู่นอกจอ

    $(t[i])
      .stop()
      .delay(100 * i)
      .animate(
        {
          top: [t[i].offsetTop + seaAnimalSwimDistance, "easeOutCubic"],
        },
        600,
        function () {
          disableIsSeaAnimalStillAnimating(t);
        }
      );
  }
}
// function animateSeaAnimals(e) {
//   const t = e;
//   if (t === fishArray) {
//     isFishStillAnimating = true;
//   } else if (t === crabArray) {
//     isCrabStillAnimating = true;
//   } else if (t === turtleArray) {
//     isTurtleStillAnimating = true;
//   }

//   for (let i = 0; i < t.length; i++) {
//     $(t[i])
//       .stop()
//       .delay(100 * i)
//       .animate(
//         {
//           left: [t[i].offsetLeft - seaAnimalSwimDistance, "easeOutCubic"],
//         },
//         600,
//         function () {
//           disableIsSeaAnimalStillAnimating(t);
//         }
//       );
//   }
// }

function disableIsSeaAnimalStillAnimating(isAnimating) {
  if (isAnimating) {
    const animations = [
      fishAnimateNumber,
      crabAnimateNumber,
      turtleAnimateNumber,
    ];
    const arrays = [fishArray, crabArray, turtleArray];

    for (let i = 0; i < arrays.length; i++) {
      if (animations[i] >= arrays[i].length - 1) {
        isAnimating = false;
        animations[i] = 0;
      } else {
        animations[i] += 1;
      }
    }
  }
}

function animateRobbyRunSwim() {
  if (
    canAnimateRobbyRunSwim &&
    !isRobbyJumping &&
    !isRobbyFalling &&
    layersMovement !== "vertical"
  ) {
    disableAnimateRobbyRunSwim();
    clearInterval(shiftRobbyFrameTimer);
    shiftRobbyFrameTimer = setInterval(function () {
      shiftRobbyFrame();
    }, shiftRobbyFrameTimeInterval);
  }
}

function shiftRobbyFrame() {
  if (isRobbyFalling) {
    clearShiftRobbyFrameTimer();
    setRobbyJumpDownAndFallFrame();
    return;
  }

  if (isRobbySwimming && isRobbyBelowSeaLevel) {
    robbyStartFrame = robbyStartSwimFrame;
    robbyStopFrame = robbyStopSwimFrame;
  } else {
    robbyStartFrame = robbyStartRunFrame;
    robbyStopFrame = robbyStopRunFrame;
  }

  robbyFramesDiv.style.left =
    -robbyOneFrameWidth * (robbyStartFrame + counter) + "px";

  if (robbyStopFrame < robbyStartFrame + counter + switcher) {
    switcher *= -1;
  }

  if (robbyStartFrame + counter + switcher === robbyStartFrame) {
    pageVerticalPositionWhenAnimateRobby1 = pageVerticalPosition;
  }
  if (robbyStartFrame + counter + switcher < robbyStartFrame) {
    pageVerticalPositionWhenAnimateRobby2 = pageVerticalPosition;
    if (
      pageVerticalPositionWhenAnimateRobby1 ===
      pageVerticalPositionWhenAnimateRobby2
    ) {
      clearShiftRobbyFrameTimer();
      if (layersMovement === "not moving 2") {
        robbyHandsUp();
      }
    }

    switcher *= -1;
  }

  counter += switcher;
}

//ให้ร็อบบี้ยืนนิ่ง
function clearShiftRobbyFrameTimer() {
  clearInterval(shiftRobbyFrameTimer);

  const isNotSwimming = !isRobbySwimming;
  const isRobbyOnSeaFloor =
    robbyContainerDiv.offsetTop + robbyContainerDiv.offsetHeight >=
    containerDiv.offsetHeight - seaFloorDiv.offsetHeight;

  if (isNotSwimming || (isRobbySwimming && isRobbyOnSeaFloor)) {
    setRobbyStaticFrame();
  }

  counter = 0;
  switcher = 1;
  enableAnimateRobbyRunSwim();
}

function enableAnimateRobbyRunSwim() {
  canAnimateRobbyRunSwim = true;
}

function disableAnimateRobbyRunSwim() {
  canAnimateRobbyRunSwim = false;
}

function positionChainBlockAndStringContainer() {
  for (let e = 0; e < chainBlockAndStringContainerArray.length; e++) {
    if (e === 0) {
      canAnimateBossInformation = canAnimateRobotInformation;
    } else if (e === 1) {
      canAnimateBossInformation = canAnimateSquidInformation;
    } else if (e === 2) {
      canAnimateBossInformation = canAnimateAlienInformation;
    }

    chainBlockAndStringContainerArray[e].style.left =
      0.5 * experienceTextContainerArray[e].offsetWidth -
      0.5 * chainBlockAndStringContainerArray[e].offsetWidth +
      "px";

    chainBlockAndStringContainerArray[e].style.bottom =
      canAnimateBossInformation
        ? 0.8 * containerDiv.offsetHeight +
          experienceTextContainerArray[e].offsetHeight +
          "px"
        : experienceTextContainerDistanceFromFloor +
          experienceTextContainerArray[e].offsetHeight +
          "px";
  }
}

function animateChainBlockAndStringContainer(e) {
  $(chainBlockAndStringContainerArray[e])
    .stop()
    .animate(
      {
        bottom: [
          experienceTextContainerDistanceFromFloor +
            experienceTextContainerArray[e].offsetHeight,
          "easeOutCubic",
        ],
      },
      1000
    );
}

function positionExperienceTextContainer() {
  for (let e = 0; e < experienceTextContainerArray.length; e++) {
    if (e === 0) {
      canAnimateBossInformation = canAnimateRobotInformation;
    } else if (e === 1) {
      canAnimateBossInformation = canAnimateSquidInformation;
    } else if (e === 2) {
      canAnimateBossInformation = canAnimateAlienInformation;
    }

    experienceTextContainerArray[e].style.bottom = canAnimateBossInformation
      ? 0.8 * containerDiv.offsetHeight + "px"
      : experienceTextContainerDistanceFromFloor + "px";
  }
}

function animateExperienceTextContainer(e) {
  $(experienceTextContainerArray[e])
    .stop()
    .animate(
      {
        bottom: [experienceTextContainerDistanceFromFloor, "easeOutCubic"],
      },
      1000
    );
}

function positionExperience1Elements() {
  robotDiv.style.left = experience1ContainerDiv.offsetWidth + "px";
  setOpacityToZero(piechartRobotTextGraphic1Div);
  setOpacityToZero(piechartRobotTextGraphic2Div);
  setOpacityToZero(piechartRobotTextAnimation1Div);
  setOpacityToZero(piechartRobotTextAnimation2Div);
  setOpacityToZero(piechartRobotTextCode1Div);
  setOpacityToZero(piechartRobotTextCode2Div);
}

function positionExperience2Elements() {
  squidDiv.style.left = experience2ContainerDiv.offsetWidth + "px";
  setOpacityToZero(piechartSquidTextGraphic1Div);
  setOpacityToZero(piechartSquidTextGraphic2Div);
  setOpacityToZero(piechartSquidTextAnimation1Div);
  setOpacityToZero(piechartSquidTextAnimation2Div);
  setOpacityToZero(piechartSquidTextCode1Div);
  setOpacityToZero(piechartSquidTextCode2Div);
}

function positionExperience3Elements() {
  alienDiv.style.left = experience3ContainerDiv.offsetWidth + "px";
  setOpacityToZero(piechartAlienTextGraphic1Div);
  setOpacityToZero(piechartAlienTextGraphic2Div);
  setOpacityToZero(piechartAlienTextAnimation1Div);
  setOpacityToZero(piechartAlienTextAnimation2Div);
  setOpacityToZero(piechartAlienTextCode1Div);
  setOpacityToZero(piechartAlienTextCode2Div);
}

function setOpacityToZero(element) {
  element.style.opacity = 0;
}

function animateInformationAndEnemiesElements() {
  if (layersMovement === "horizontal") {
    if (!isRobbySwimming) {
      for (var e = 0; e < landInformationContainerArray.length; e++) {
        if (
          previousPageVerticalPosition + 0.5 * containerDiv.offsetWidth <
            landInformationContainerArray[e].offsetLeft ||
          previousPageVerticalPosition + 0.5 * containerDiv.offsetWidth >
            landInformationContainerArray[e].offsetLeft +
              landInformationContainerArray[e].offsetWidth
        ) {
          if (
            pageVerticalPosition + 0.5 * containerDiv.offsetWidth >
              landInformationContainerArray[e].offsetLeft &&
            pageVerticalPosition + 0.5 * containerDiv.offsetWidth <
              landInformationContainerArray[e].offsetLeft +
                landInformationContainerArray[e].offsetWidth
          ) {
            if (landInformationContainerArray[e] === about1ContainerDiv) {
              if (canAnimatePlantInformation) {
                animatePlants();
                canAnimatePlantInformation = false;
                console.log(2);
              }
            }
            if (landInformationContainerArray[e] === about2ContainerDiv) {
              animateBuildingsEyes();
              if (canAnimateBuildingInformation) {
                animateBuildings();
                canAnimateBuildingInformation = false;
              }
            }
            if (landInformationContainerArray[e] === about3ContainerDiv) {
              animateNbaPlayerEyes();
              if (canAnimateNbaInformation) {
                animateNbaPlayer();
                canAnimateNbaInformation = false;
              }
            }
            if (landInformationContainerArray[e] === experience1ContainerDiv) {
              if (!canAnimateRobotInformation) {
                animateRobotHands();
              } else {
                animateRobot();
                animateExperienceTextContainer(0);
                animateChainBlockAndStringContainer(0);
                canAnimateRobotInformation = false;
              }
            }
            if (landInformationContainerArray[e] === experience2ContainerDiv) {
              if (!canAnimateSquidInformation) {
                animateSquidHands();
              } else {
                animateSquid();
                animateExperienceTextContainer(1);
                animateChainBlockAndStringContainer(1);
                canAnimateSquidInformation = false;
              }
            }
            if (landInformationContainerArray[e] === experience3ContainerDiv) {
              if (!canAnimateAlienInformation) {
                animateAlienHand();
              } else {
                animateAlien();
                animateExperienceTextContainer(2);
                animateChainBlockAndStringContainer(2);
                canAnimateAlienInformation = false;
              }
            }
          }
        }
      }
    }

    if (isRobbySwimming) {
      for (e = 0; e < seaInformationContainerArray.length; e++) {
        if (
          previousPageVerticalPosition + 0.5 * containerDiv.offsetWidth <
            sea1Div.offsetLeft + seaInformationContainerArray[e].offsetLeft ||
          previousPageVerticalPosition + 0.5 * containerDiv.offsetWidth >
            sea1Div.offsetLeft +
              seaInformationContainerArray[e].offsetLeft +
              seaInformationContainerArray[e].offsetWidth
        ) {
          if (
            pageVerticalPosition + 0.5 * containerDiv.offsetWidth >
              sea1Div.offsetLeft + seaInformationContainerArray[e].offsetLeft &&
            pageVerticalPosition + 0.5 * containerDiv.offsetWidth <
              sea1Div.offsetLeft +
                seaInformationContainerArray[e].offsetLeft +
                seaInformationContainerArray[e].offsetWidth
          ) {
            if (seaInformationContainerArray[e] === skill1ContainerDiv) {
              makeSeaAnimalsBlinking(fishEyeArray);
              if (canAnimateFishInformation) {
                animateSeaAnimals(fishArray);
                canAnimateFishInformation = false;
              }
            }
            if (seaInformationContainerArray[e] === skill2ContainerDiv) {
              makeSeaAnimalsBlinking(crabEyeArray);
              if (canAnimateCrabInformation) {
                animateSeaAnimals(crabArray);
                canAnimateCrabInformation = false;
              }
            }
            if (seaInformationContainerArray[e] === skill3ContainerDiv) {
              makeSeaAnimalsBlinking(turtleEyeArray);
              if (canAnimateTurtleInformation) {
                animateSeaAnimals(turtleArray);
                canAnimateTurtleInformation = false;
              }
            }
          }
        }
      }
    }
  }
}
//?
function animateRobot() {
  $(robotDiv)
    .stop()
    .animate(
      {
        left: "420px",
      },
      1000,
      function () {
        animatePiechartAolFront();
        animateRobotHands();
      }
    );
}

function animateRobotHands() {
  spinRobotHands();
  clearInterval(animateRobotHandsTimer);
  animateRobotHandsTimer = setInterval(function () {
    spinRobotHands();
  }, 4000);
}

function spinRobotHands() {
  clearInterval(spinRobotHandsTimer);
  spinRobotHandsTimer = setInterval(function () {
    changeRobotHands();
  }, 100);
}

function changeRobotHands() {
  if (robotHandChildrenLength <= changeRobotHandsCounter) {
    changeRobotHandsCounter = 0;
    clearInterval(spinRobotHandsTimer);
    setRobotHandsToDefault();

    if (
      pageVerticalPosition + 0.5 * containerDiv.offsetWidth <
        experience1ContainerDiv.offsetLeft ||
      pageVerticalPosition + 0.5 * containerDiv.offsetWidth >
        experience1ContainerDiv.offsetLeft + experience1ContainerDiv.offsetWidth
    ) {
      clearInterval(animateRobotHandsTimer);
    }
  } else {
    for (let e = 0; e < robotHandChildrenLength; e++) {
      if (e === changeRobotHandsCounter) {
        setRobotHandsToOpaque(e);
      } else {
        setRobotHandsToTransparent(e);
      }
    }
    changeRobotHandsCounter += 1;
  }
}

function setRobotHandsToDefault() {
  for (let e = 0; e < robotHandChildrenLength; e++) {
    if (e === 0) {
      setRobotHandsToOpaque(e);
    } else {
      setRobotHandsToTransparent(e);
    }
  }
}

function setRobotHandsToOpaque(e) {
  const childrenLeft = robotHandLeftDiv.children[e];
  const childrenRight = robotHandRightDiv.children[e];

  childrenLeft.style.opacity = 1;
  childrenLeft.style.filter = "alpha(opacity=100)";

  childrenRight.style.opacity = 1;
  childrenRight.style.filter = "alpha(opacity=100)";
}

function setRobotHandsToTransparent(e) {
  const childrenLeft = robotHandLeftDiv.children[e];
  const childrenRight = robotHandRightDiv.children[e];

  childrenLeft.style.opacity = 0;
  childrenLeft.style.filter = "alpha(opacity=0)";

  childrenRight.style.opacity = 0;
  childrenRight.style.filter = "alpha(opacity=0)";
}

function animateSquid() {
  $(squidDiv)
    .stop()
    .animate(
      {
        left: "430px",
      },
      1000,
      function () {
        animatePiechartIncognitoFront();
        animateSquidHands();
      }
    );
}

function animateSquidHands() {
  moveSquidHands();
  clearInterval(animateSquidHandsTimer);
  animateSquidHandsTimer = setInterval(function () {
    moveSquidHands();
  }, 4000);
}

function moveSquidHands() {
  clearInterval(moveSquidHandsTimer);
  moveSquidHandsTimer = setInterval(function () {
    openAndCloseSquidHands();
  }, 200);
}

function openAndCloseSquidHands() {
  if (openAndCloseSquidHandsCounter >= 8) {
    openAndCloseSquidHandsCounter = 0;
    clearInterval(moveSquidHandsTimer);
    openSquidHands();

    if (
      pageVerticalPosition + 0.5 * containerDiv.offsetWidth <
        experience2ContainerDiv.offsetLeft ||
      pageVerticalPosition + 0.5 * containerDiv.offsetWidth >
        experience2ContainerDiv.offsetLeft + experience2ContainerDiv.offsetWidth
    ) {
      clearInterval(animateSquidHandsTimer);
    }
  } else {
    if (openAndCloseSquidHandsCounter % 2 === 0) {
      openSquidHands();
    } else {
      closeSquidHands();
    }

    openAndCloseSquidHandsCounter += 1;
  }
}

function openSquidHands() {
  for (let e = 0; e < squidHandOpenArray.length; e++) {
    squidHandOpenArray[e].style.opacity = 1;
    squidHandOpenArray[e].style.filter = "alpha(opacity=100)";
  }

  for (let e = 0; e < squidHandCloseArray.length; e++) {
    squidHandCloseArray[e].style.opacity = 0;
    squidHandCloseArray[e].style.filter = "alpha(opacity=0)";
  }
}

function closeSquidHands() {
  for (let e = 0; e < squidHandOpenArray.length; e++) {
    squidHandOpenArray[e].style.opacity = 0;
    squidHandOpenArray[e].style.filter = "alpha(opacity=0)";
  }

  for (let e = 0; e < squidHandCloseArray.length; e++) {
    squidHandCloseArray[e].style.opacity = 1;
    squidHandCloseArray[e].style.filter = "alpha(opacity=100)";
  }
}

function animateAlienHand() {
  clearInterval(animateAlienHandsTimer);
  animateAlienHandsTimer = setInterval(() => {
    rotateAlienHands();
  }, 100);
}

function rotateAlienHands() {
  alienSteerPreviousAngle = alienSteerAngle;
  if (alienSteerPreviousAngle < (alienSteerAngle += alienSteerAngleIncrement)) {
    if (alienSteerAngleLimit < alienSteerAngle) {
      alienSteerAngleIncrement *= -1;
      alienSteerAngleLimit *= -1;
    }
  } else if (alienSteerAngle < alienSteerAngleLimit) {
    alienSteerAngleIncrement *= -1;
    alienSteerAngleLimit *= -1;
  }
  if (
    !alienSteerAngle &&
    (pageVerticalPosition + 0.5 * containerDiv.offsetWidth <
      experience3ContainerDiv.offsetLeft ||
      pageVerticalPosition + 0.5 * containerDiv.offsetWidth >
        experience3ContainerDiv.offsetLeft +
          experience3ContainerDiv.offsetWidth)
  ) {
    clearInterval(animateAlienHandsTimer);
    alienSteerDiv.style.webkitTransform = "rotate(0deg)";
    alienSteerDiv.style.MozTransform = "rotate(0deg)";
    alienSteerDiv.style.OTransform = "rotate(0deg)";
    alienSteerDiv.style.msTransform = "rotate(0deg)";
    alienSteerDiv.style.transform = "rotate(0deg)";
  } else {
    alienSteerDiv.style.webkitTransform = "rotate(" + alienSteerAngle + "deg)";
    alienSteerDiv.style.MozTransform = "rotate(" + alienSteerAngle + "deg)";
    alienSteerDiv.style.OTransform = "rotate(" + alienSteerAngle + "deg)";
    alienSteerDiv.style.msTransform = "rotate(" + alienSteerAngle + "deg)";
    alienSteerDiv.style.transform = "rotate(" + alienSteerAngle + "deg)";
  }
}

function animateAlien() {
  $(alienDiv)
    .stop()
    .animate(
      {
        left: "450px",
      },
      1000,
      function () {
        animatePiechartFoxnewsFront();
        animateAlienHand();
      }
    );
}

function animatePiechartAolFront() {
  $(piechartRobotFrontDiv)
    .stop()
    .animate(
      {
        opacity: 1,
      },
      500,
      function () {
        animatePiechartAolText();
      }
    );
}

function animatePiechartIncognitoFront() {
  $(piechartSquidFrontDiv)
    .stop()
    .animate(
      {
        opacity: 1,
      },
      500,
      function () {
        animatePiechartIncognitoText();
      }
    );
}

function animatePiechartFoxnewsFront() {
  $(piechartAlienFrontDiv)
    .stop()
    .animate(
      {
        opacity: 1,
      },
      500,
      function () {
        animatePiechartFoxnewsText();
      }
    );
}

function animatePiechartAolText() {
  animatePiechartAolTextCode();
  animatePiechartAolTextGraphic();
  animatePiechartAolTextAnimation();
}

function animatePiechartAolTextCode() {
  $(piechartRobotTextCode1Div)
    .stop()
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
  $(piechartRobotTextCode2Div)
    .stop()
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
}

function animatePiechartAolTextGraphic() {
  $(piechartRobotTextGraphic1Div)
    .stop()
    .delay(300)
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
  $(piechartRobotTextGraphic2Div)
    .stop()
    .delay(300)
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
}

function animatePiechartAolTextAnimation() {
  $(piechartRobotTextAnimation1Div)
    .stop()
    .delay(600)
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
  $(piechartRobotTextAnimation2Div)
    .stop()
    .delay(600)
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
}

function animatePiechartIncognitoText() {
  animatePiechartIncognitoTextCode();
  animatePiechartIncognitoTextAnimation();
  animatePiechartIncognitoTextGraphic();
}

function animatePiechartIncognitoTextCode() {
  $(piechartSquidTextCode1Div)
    .stop()
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
  $(piechartSquidTextCode2Div)
    .stop()
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
}

function animatePiechartIncognitoTextAnimation() {
  $(piechartSquidTextAnimation1Div)
    .stop()
    .delay(300)
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
  $(piechartSquidTextAnimation2Div)
    .stop()
    .delay(300)
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
}

function animatePiechartIncognitoTextGraphic() {
  $(piechartSquidTextGraphic1Div)
    .stop()
    .delay(600)
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
  $(piechartSquidTextGraphic2Div)
    .stop()
    .delay(600)
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
}

function animatePiechartFoxnewsText() {
  animatePiechartFoxnewsTextGraphic();
  animatePiechartFoxnewsTextAnimation();
  animatePiechartFoxnewsTextCode();
}

function animatePiechartFoxnewsTextCode() {
  $(piechartAlienTextCode1Div)
    .stop()
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
  $(piechartAlienTextCode2Div)
    .stop()
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
}

function animatePiechartFoxnewsTextAnimation() {
  $(piechartAlienTextAnimation1Div)
    .stop()
    .delay(300)
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
  $(piechartAlienTextAnimation2Div)
    .stop()
    .delay(300)
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
}

function animatePiechartFoxnewsTextGraphic() {
  $(piechartAlienTextGraphic1Div)
    .stop()
    .delay(600)
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
  $(piechartAlienTextGraphic2Div)
    .stop()
    .delay(600)
    .animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
}

function createBubble() {
  clearInterval(bubbleTimer);
  bubbleTimer = setInterval(() => {
    animateBubble();
  }, 3000);
}

function animateBubble() {
  const offset =
    robbyContainerDiv.offsetTop -
    (sea1Div.offsetTop - shiftUpLayerHorizontalDistance);

  positionBubble(offset);
  showBubble();
  $(bubbleDiv)
    .stop()
    .animate(
      {
        top: "0px",
      },
      2 * offset,
      function () {
        hideBubble();
      }
    );
}

function hideBubble() {
  $(bubbleDiv).fadeTo(0, 0);
}

function showBubble() {
  $(bubbleDiv).fadeTo(0, 1);
}

function positionBubble(offset) {
  bubbleDiv.style.left =
    pageVerticalPosition +
    0.5 * containerDiv.offsetWidth -
    sea1Div.offsetLeft +
    "px";
  bubbleDiv.style.top = offset + "px";
}

function blinkSeaAnimals(elements) {
  const totalElements = elements.length;
  const selectedElements = [];

  const randomCount = Math.ceil(5 * Math.random());

  for (let i = 0; i < randomCount; i++) {
    const randomIndex = Math.floor(Math.random() * totalElements);
    selectedElements.push(elements[randomIndex]);
  }

  for (let i = 0; i < selectedElements.length; i++) {
    $(selectedElements[i]).fadeTo(0, 1);
    $(selectedElements[i])
      .stop()
      .delay(300)
      .animate(
        {
          opacity: 0,
        },
        0,
        function () {}
      );
  }
}

function makeSeaAnimalsBlinking(elements) {
  clearInterval(blinkSeaAnimalsTimer);
  blinkSeaAnimalsTimer = setInterval(function () {
    blinkSeaAnimals(elements);
  }, 3000);
}

function positionContactContainer() {
  contactContainerDiv.style.top =
    layerVerticalArray[layerVerticalArray.length - 1].offsetTop + "px";
  contactContainerDiv.style.left =
    layerVerticalArray[layerVerticalArray.length - 1].offsetLeft + "px";
}

function positionFireworksContainer() {
  fireworksContainerDiv.style.top =
    layerVerticalArray[layerVerticalArray.length - 1].offsetTop + "px";
  fireworksContainerDiv.style.left =
    layerVerticalArray[layerVerticalArray.length - 1].offsetLeft + "px";
}

function positionSocialContainer() {
  if (canAnimateSocialContainer) {
    setSocialContainerOpacity(0);
    socialContainerDiv.style.top = "80%";
  } else {
    socialContainerDiv.style.top = "0px";
  }
}

function animateSocialContainer() {
  if (canAnimateSocialContainer) {
    $(socialContainerDiv)
      .stop()
      .animate(
        {
          top: [0, "easeOutCubic"],
        },
        1000,
        function () {}
      );

    setSocialContainerOpacity(1);
    canAnimateSocialContainer = false;
  }
}

function setSocialContainerOpacity(opacity) {
  opacity = Math.min(1, Math.max(0, opacity));

  const childrenCount = $(socialContainerDiv).children().length;

  for (let i = 0; i < childrenCount; i++) {
    $(socialContainerDiv.children[i]).fadeTo(0, opacity);
  }

  const nestedChildrenCount = $(socialContainerDiv.children[1]).children()
    .length;

  for (let i = 0; i < nestedChildrenCount; i++) {
    $(socialContainerDiv.children[1].children[i]).fadeTo(0, opacity);
  }
}

function happyRobby() {
  if (!isRobbyHappy) {
    clearInterval(happyRobbyTimer);
    happyRobbyTimer = setInterval(function () {
      robbyHandsUp();
    }, 3000);
    isRobbyHappy = true;
  }
}

//เคลียร็อบบี้ตอนดีใจ
function clearHappyRobbyTimer() {
  if (isRobbyHappy) {
    clearInterval(happyRobbyTimer);
    isRobbyHappy = false;
  }
}

function robbyHandsUp() {
  robbyFramesDiv.style.left = "-1600px";
  setTimeout(function () {
    setRobbyStaticFrame();
  }, 1000);
}

function positionSplashContainer() {
  splashContainerDiv.style.left =
    0.5 * (containerDiv.offsetWidth - splashContainerDiv.offsetWidth) + "px";
}

//ป้องกันบัคตอนเปลี่ยนขนาดจอ
function positionRobbyContainerVertically() {
  if (isPreloadShiftUpAnimationFinish) {
    $(robbyContainerDiv).stop(true, false);
    setRobbyStaticFrame();

    if (isRobbySwimming) {
      positionRobbyAtSeaFloorLevel();
    } else {
      checkElevationNumberBelowRobby();

      if (elevationNumberBelowRobby !== null) {
        robbyContainerDiv.style.bottom =
          containerDiv.offsetHeight -
          elevationArray[elevationNumberBelowRobby].offsetTop +
          "px";
      } else {
        positionRobbyAtGroundLevel();
      }
    }
  }
}

function positionRobbyAtGroundLevel() {
  robbyContainerDiv.style.bottom = 0.2 * containerDiv.offsetHeight + "px";
}

function positionRobbyAtSeaFloorLevel() {
  robbyContainerDiv.style.bottom = seaFloorDiv.offsetHeight + "px";
}

function checkElevationNumberBelowRobby() {
  for (let e = 0; e < elevationArray.length; e++) {
    if (
      pageVerticalPosition <
        elevationArray[e].offsetLeft +
          elevationArray[e].offsetWidth -
          robbyLeftEdge &&
      pageVerticalPosition > elevationArray[e].offsetLeft - robbyRightEdge
    ) {
      elevationNumberBelowRobby = e;
      break;
    }
    elevationNumberBelowRobby = null;
  }
}

function animateWaterfall() {
  clearInterval(waterfallTimer);
  waterfallTimer = setInterval(function () {
    switchWaterfallTexture();
  }, 1000);
}

function switchWaterfallTexture() {
  $(waterfall2Div).fadeTo(0, 0);
  $(waterfall2Div)
    .stop()
    .delay(500)
    .animate(
      {
        opacity: 1,
      },
      0,
      function () {}
    );
}

function positionSeaFloorObjectsVertically() {
  for (let e = 0; e < seaFloorFrontObjectArray.length; e++) {
    if (seaFloorFrontObjectArray[e].offsetHeight > sea1Div.offsetHeight) {
      seaFloorFrontObjectArray[e].style.bottom =
        -1 * (seaFloorFrontObjectArray[e].offsetHeight - sea1Div.offsetHeight) +
        "px";
    } else {
      seaFloorFrontObjectArray[e].style.bottom = "0px";
    }
  }

  for (let e = 0; e < seaFloorBackObjectArray.length; e++) {
    if (seaFloorBackObjectArray[e].offsetHeight > sea1Div.offsetHeight) {
      seaFloorBackObjectArray[e].style.bottom =
        -0.7 * containerDiv.offsetHeight -
        (seaFloorBackObjectArray[e].offsetHeight - sea1Div.offsetHeight) +
        "px";
    } else {
      seaFloorBackObjectArray[e].style.bottom = "-70%";
    }
  }
}

function animateScrollOrSwipeTextContainer() {
  if (canAnimateScrollOrSwipeTextContainer) {
    canAnimateScrollOrSwipeTextContainer = false;
    clearInterval(scrollOrSwipeTextContainerTimer);
    scrollOrSwipeTextContainerTimer = setInterval(function () {
      turnOnAndOffScrollOrSwipeTextContainer();
    }, 1000);
  }
}

function turnOnAndOffScrollOrSwipeTextContainer() {
  $(scrollOrSwipeTextContainer1Div).fadeTo(0, 1);
  $(scrollOrSwipeTextContainer1Div)
    .stop()
    .delay(500)
    .animate(
      {
        opacity: 0,
      },
      0,
      function () {}
    );

  $(scrollOrSwipeTextContainer2Div).fadeTo(0, 1);
  $(scrollOrSwipeTextContainer2Div)
    .stop()
    .delay(500)
    .animate(
      {
        opacity: 0,
      },
      0,
      function () {}
    );
}

function hideScrollOrSwipeTextContainer() {
  if (canHideScrollOrSwipeTextContainer) {
    clearInterval(scrollOrSwipeTextContainerTimer);
    fadeOutScrollOrSwipeTextContainer();
    canHideScrollOrSwipeTextContainer = false;
  }
}

function fadeOutScrollOrSwipeTextContainer() {
  $(scrollOrSwipeTextContainer1Div).fadeTo(0, 0);
  $(scrollOrSwipeTextContainer2Div).fadeTo(0, 0);
}

function positionContactConfirmationContainer() {
  for (let e = 0; e < contactConfirmationContainerArray.length; e++) {
    contactConfirmationContainerArray[e].style.left =
      layersMovement === "not moving 1" || layersMovement === "not moving 2"
        ? robbyContainerDiv.offsetLeft + "px"
        : robbyMaxHorizontalDistance + "px";
    contactConfirmationContainerArray[e].style.top =
      0.8 * containerDiv.offsetHeight - 370 + "px";
  }
}

function hideContactConfirmationContainer() {
  if (isContactConfirmationContainerVisible) {
    for (let e = 0; e < contactConfirmationContainerArray.length; e++) {
      const t = $(contactConfirmationContainerArray[e])
        .children()
        .children().length;

      for (let i = 0; i < t; i++) {
        $(contactConfirmationContainerArray[e].children[0].children[i]).fadeTo(
          0,
          0
        );
      }
    }
    isContactConfirmationContainerVisible = false;
  }
}

function showContactConfirmationContainer(e) {
  const t = $(contactConfirmationContainerArray[e])
    .children()
    .children().length;

  for (let i = 0; i < t; i++) {
    $(contactConfirmationContainerArray[e].children[0].children[i]).fadeTo(
      0,
      1
    );
  }
  isContactConfirmationContainerVisible = true;
}

function focusEmail() {
  emailAddressDiv.focus();
}

function focusSubject() {
  emailSubjectDiv.focus();
}

function focusMessage() {
  emailMessageDiv.focus();
}

function clearAllInputField() {
  emailAddressDiv.value = "";
  emailSubjectDiv.value = "";
  emailMessageDiv.value = "";
}

function createFireworkSvg() {
  for (let e = 0; e < fireworkArray.length; e++) {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    t.setAttribute("version", "1.2");
    t.setAttribute("baseProfile", "tiny");
    t.setAttribute("width", "100%");
    t.setAttribute("height", "100%");
    fireworkSvgArray.push(t);
  }
}

function appendFireworkSvgToContainer() {
  for (let e = 0; e < fireworkArray.length; e++) {
    fireworkArray[e].appendChild(fireworkSvgArray[e]);
  }
}

function drawManyFireworks() {
  if (canDrawManyFireworks) {
    canDrawManyFireworks = false;
    clearInterval(drawFireworkTimer);
    drawFireworkTimer = setInterval(function () {
      drawFirework();
    }, 1000);
  }
}

function drawFirework() {
  if (drawFireworkCounter >= fireworkArray.length) {
    drawFireworkCounter = 0;
    clearInterval(drawFireworkTimer);
  } else {
    clearInterval(drawOneLayerOfFireworkTimer);
    drawOneLayerOfFireworkTimer = setInterval(function () {
      drawOneLayerOfFirework();
    }, 40);
  }
}

function drawOneLayerOfFirework() {
  if (fireworkLayerNumber < fireworkRowNumber) {
    fireworkLayerNumber += 1;
    for (let e = 0; e < fireworkColumnNumber; e++) {
      const t = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      t.setAttribute(
        "cx",
        String(
          fireworkCenterX +
            Math.cos(e * fireworkOneRotationAngle) *
              (fireworkLayerNumber * fireworkOneRadiusDistance)
        )
      );
      t.setAttribute(
        "cy",
        String(
          fireworkCenterY +
            Math.sin(e * fireworkOneRotationAngle) *
              (fireworkLayerNumber * fireworkOneRadiusDistance)
        )
      );
      t.setAttribute("r", fireworkDotRadius);
      t.setAttribute("fill", "#ffffff");
      fireworkSvgArray[drawFireworkCounter].appendChild(t);
    }
  } else {
    fireworkLayerNumber = 0;
    clearInterval(drawOneLayerOfFireworkTimer);
    makeFireworkDisappear(drawFireworkCounter);
    drawFireworkCounter += 1;
  }
}

function makeFireworkDisappear(e) {
  $(fireworkArray[e]).fadeTo(1000, 0);
}

function resetFireworkSvg() {
  for (let e = 0; e < fireworkArray.length; e++) {
    $(fireworkSvgArray[e]).empty();
    $(fireworkArray[e]).fadeTo(0, 1);
  }
}

function printResizeText() {}
function printScrollSwipeText() {}

// disableIsRobbyJumpingAndFalling();
// setAllNbaCounter();
// /* disableScrollOrSwipe(); */
// $(window).on("beforeunload", function () {
//   $(window).scrollTop(0);
// });

function onLoad() {
  initTouchEvents();
  storeDivs();
  setFrontLayerVerticalHeight();
  setBannersContainerVerticalPosition();
  showContainer();
  initVariablesAfterShowContainer();
  shiftUpHorizontalLayersAfterEverythingLoaded();
  disableAnimateRobbyRunSwim();
  resetVariables();
  setPageHeight();
  setLayerSpeed();
  positionVerticalLayersHorizontally();
  positionBalloonAndRobbyContainerHorizontally();
  positionBalloonVertically();
  positionContactContainer();
  positionFireworksContainer();
  resetFunctions();
  positionSplashContainer();
  setRobbyLeftAndRightEdge();
  positionContactConfirmationContainer();
  hideContactConfirmationContainer();
  hideRobbyEyesClose();
  animateRobbyEyes();
  animateWaterfall();
  positionSeaFloorObjectsVertically();
  openSquidHands();
  hideBubble();
  setRobotHandsToDefault();
  createFireworkSvg();
  appendFireworkSvgToContainer();
}

window.addEventListener("load", onLoad);

function onScroll() {
  handlePageScroll();
  runTheseFunctionsAfterScrollOrSwipe();
}

window.addEventListener("scroll", onScroll);

window.onresize = function (e) {
  setFrontLayerVerticalHeight();
  setBannersContainerVerticalPosition();
  setPageHeight();
  handlePageScroll();
  orientRobby();
  setLayerSpeed();
  moveLayers();
  setRobbyLeftAndRightEdge();
  shiftUpDownHorizontalLayersOnResize();
  animateInformationAndEnemiesElements();
  positionSplashContainer();
  positionRobbyContainerVertically();
  positionBalloonVertically();
  positionSocialContainer();
  positionPlants();
  hideContactConfirmationContainer();
  positionContactConfirmationContainer();
  positionExperienceTextContainer();
  positionChainBlockAndStringContainer();
  positionSeaFloorObjectsVertically();
  printResizeText();
};

// $(window).on("orientationchange", orientationChangeHandler);
