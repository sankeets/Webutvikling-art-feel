import { Box, Center, Flex, Heading, ModalBody, ModalFooter, ModalHeader, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton } from "@chakra-ui/react";
import React, { useEffect } from "react";
import styles from "./CollectionPage.module.css";
import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import { useDisclosure } from "@chakra-ui/react";
import Canvas  from "../General/Canvas/Canvas"
export const CollectionPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  var sun = $("#sun");

  const showDocumentation = () => {
    $("#documentationButton").click(function () {
      onOpen();
  })
  }
  
  
  useEffect(() => {
    showDocumentation()
  },[])
  
  const clock = document.getElementById("clock");
  clock?.addEventListener("hover", function () {
    if (sun !== null) {
      
    }
  });


  function canvas_arrow(context, fromx, fromy, tox, toy) {
  var headlen = 6; // length of head in pixels
  var dx = tox - fromx;
  var dy = toy - fromy;
  var angle = Math.atan2(dy, dx);
  context.moveTo(fromx, fromy);
  context.lineTo(tox, toy);
  context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
  context.moveTo(tox, toy);
  context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
  }
  
 
  const draw = (context) => {
     var grd = context.createLinearGradient(0, 0, 0, 787); 
    grd.addColorStop(0, "#240F3A");
    grd.addColorStop(1, "white");
    drawBackground(context,grd);
    drawLandscape(context);
    drawClock(context); 
    context.beginPath();
    context.arc(85.5, 149.9, 68.5, 0, Math.PI * 2, true);
    context.fillStyle = "#AE8A2F";
    context.fill();
 };
  

  function drawBackground(ctx, grd) {
    ctx.beginPath();
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 787, 475)    
  }

  function drawLandscape(ctx) {
    ctx.beginPath()
    ctx.moveTo(0, 475)
    ctx.bezierCurveTo(0,475,0,350,0,350)
    ctx.bezierCurveTo(0, 350, 200.4, 150, 300, 280);
    ctx.bezierCurveTo(300, 300, 370.5, 200, 400, 300);
    ctx.bezierCurveTo(400, 300, 630, 360, 787, 350);
    ctx.bezierCurveTo(787, 350, 787, 400 , 787, 475);
    
    ctx.fillStyle = "#CA7C51"
    ctx.fill();

    ctx.closePath()
  }

function drawClock(ctx) {
  ctx.beginPath();
  ctx.arc(114.5, 383.5, 53.5, 0, 2 * Math.PI);
  ctx.fillStyle = "#FEFBFB";
  ctx.fill();

  ctx.beginPath()
  canvas_arrow(ctx, 115.354, 384.354, 115.354, 352);
  canvas_arrow(ctx, 115.354, 384.354, 133.354, 384.354);
  ctx.stroke()
  ctx.closePath()

  //"M71 383.5h9m74 1h9m-49 45v-9m.5-73.5v-9"
  ctx.beginPath();
  ctx.moveTo(71, 383.5);
  ctx.lineTo(80, 383.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(145, 383.5);
  ctx.lineTo(154, 383.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(115, 428.5);
  ctx.lineTo(115, 419.5);
  ctx.moveTo(115, 349)
  ctx.lineTo(115, 340)
  ctx.stroke()

}
  return (
    <div className={styles.pictureContainer}>
      <Center>
        <Heading fontFamily={"monospace"} size={"lg"} marginTop={"20vh"}>
          ART FEEL - Høst Kolleksjon
        </Heading>
      </Center>
      <Flex direction={"row"} marginTop={"10vh"} alignItems={"center"}>
        <Box
          bgColor={"purple.800"}
          width={"45%"}
          height={"60vh"}
          marginRight={-20}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="787"
          height="475"
          fill="none"
          viewBox="0 0 787 475"
        >
          <g filter="url(#a)">
            <path
              fill="url(#b)"
              d="M4 0h779v467H4z"
              shape-rendering="crispEdges"
            />
            <path
              stroke="#000"
              d="M4.5.5h778v466H4.5z"
              shape-rendering="crispEdges"
            />
          </g>
          <path
            fill="#CA7C51"
            d="M221 212c-13-55-140.4 43.8-214 43v210h774V228c-15.75 18.581-14.723 30.495-143 32-37.525 4.643-56.87 16.881-85 75-79.213-14.462-112-101-160-130s-20.158 54.323-102 50c-27.337-16.793-57 12-70-43Z"
          />

          <ellipse
            id={styles["sun"]}
            cx="85.5"
            cy="149.5"
            fill="#AE8A2F"
            rx="68.5"
            ry="67.5"
          >
            <animateMotion
              begin={"click"}
              dur="12s"
              repeatCount="indefinite"
              path="M0 0 q 350 -150 600 0"
            />
          </ellipse>
          <g id={styles["clock_container"]}>
            <circle
              id={styles["clock"]}
              cx="114.5"
              cy="383.5"
              r="53.5"
              fill="#FEFBFB"
            />
            <path
              id={styles["smallArrow"]}
              fill="#000"
              d="M137.354 384.354a.502.502 0 0 0 0-.708l-3.182-3.182a.502.502 0 0 0-.708.708l2.829 2.828-2.829 2.828a.502.502 0 0 0 .708.708l3.182-3.182ZM115 384.5h22v-1h-22v1Z"
            />
            <path
              id={styles["bigArrow"]}
              fill="#000"
              d="M115.354 351.646a.502.502 0 0 0-.708 0l-3.182 3.182a.502.502 0 0 0 .708.708l2.828-2.829 2.828 2.829a.502.502 0 0 0 .708-.708l-3.182-3.182ZM115.5 385v-33h-1v33h1Z"
            />
            <path stroke="#000" d="M71 383.5h9m74 1h9m-49 45v-9m.5-73.5v-9" />
          </g>

          <defs>
            <linearGradient
              id="b"
              x1="393.5"
              x2="393.5"
              y1="0"
              y2="467"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#240F3A" />
              <stop offset=".958" stop-color="#B52929" stop-opacity=".042" />
              <stop offset="1" stop-color="#D7276F" stop-opacity=".016" />
              <stop offset="1" stop-color="#240F3A" stop-opacity="0" />
            </linearGradient>
            <filter
              id="a"
              width="787"
              height="475"
              x="0"
              y="0"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4_16"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_4_16"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Flex>
      <Flex
        direction={"row-reverse"}
        justifyContent={"flex-start"}
        marginTop={"20vh"}
        alignItems={"center"}
      >
        <Box bgColor={"purple.800"} marginLeft={-20} width={"45%"} height={"60vh"} />
        <Canvas height={"475"} width={"787"} draw={draw} />
        {/* <canvas
          id="myCanvas"
          width="787"
          height="475"
          style={{ border: "1px solid #d3d3d3" }}
        ></canvas> */}
      </Flex>
      <Box height={50} marginTop={20}>
        <button id="documentationButton" className={styles.documentationButton}>Vis dokumentasjon</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={"100%"}>
          <ModalHeader>Dokumentasjon</ModalHeader>
          <ModalCloseButton />
          <ModalBody widht={"50%"}>
              <h2>CSS flex boks</h2>
              <p>CSS flex boks er tatt i bruk som en container rundt hele kolleksjonen.
                Her har vi valgt å displaye flex retning i kolonner, siden kolleksjonsiden er delt opp i to hovedelementer som vises vertikalt.
                Justify content med even spacing er brukt for å fordele mellomrommet mellom objektene jevnt. 
              </p>
              <br />
              <h3>Bildene SVG og Canvas</h3>
              <p>Designprosessen begynte med å tegne kunstverket for hånd.
              Da fikk jeg et forhold til hvor stort jeg ville at det skulle være, og hvilke elementer som skulle være med.</p>
              <br />
              <h4>SVG - SVG elementet </h4>
              <p>Bakgrunnen på svg består av en lineargradient.
                Her valgt jeg tre forskjellige gradienter som den skulle stoppe på. Fargene ble valgt gjennom en colorpicker på nettet.
                Clokken er en gruppe som består av 4 elementer. En sirkel, to piler og de fire tidspunktene markert med en rett linje.
                En path ble brukt for disse linjene. 
                Sola er en ellipse, og fungerer på samme med som en sirkel, men har en ekstra radius variabel. 
                Selve terranget har blitt laget gjennom et ekstern verktøy (FIGMA) som har hjulpet med koordinatene til vektoren.
                Animasjonen er aktivert når du hoverer over klokken, og solen når du klikker på den.
              </p>
              <br />
              <h4>CANVAS - Canvas elementet</h4>
              <p>Canvas er designet ved å lage et canva object som blir renderet når react komponentet mounter.
                Her tegnes et rektangel for bakgrunnen med gradient fill. Sola og klokken er en arc, så her er solen ikke en ellipse. 
                Curvene tegnes ved bruk av bezierCurve, hvor du velger et punkt A og punkt B som linjen skal til, og et siste punkt C som skal tangeres på vei fra punkt A til punkt B.

              </p>
              <br/>
              <h3>JQuery</h3>
              <p>JQuery brukes når knappen til dokumentasjonen hentes. JQuery er ikke et like nyttig verktøy i react,
                ettersom at du kan bruke hooks, men det kan fint brukes i dette brukstilfelle.</p>
              <br />
              <h3>Cross browsing testing</h3>
              <p>Siden siden er laget på et react komponent, så er det blitt brukt npm start i ulike browsere for å teste om dette fungerer bra.</p>
              <br />
              <br />
              <h3>Sources</h3>
              <p>
                1. https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
                <br/>
                2. https://www.w3schools.com/graphics/svg_intro.asp
                <br/>
                3. https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations
                <br/>
                4. https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion
              </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='purple' mr={3} onClick={onClose}>
              Lukk dokumentasjon
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
    </div>
  )
    
  };
