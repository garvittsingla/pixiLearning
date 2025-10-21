import {Application ,extend} from "@pixi/react"
import { Assets, Container,Sprite } from "pixi.js"
import { useCallback, useEffect, useState } from "react"
import { calculateCanvasSize } from "../../helpers/common"
import Level from "../Levels/Level"

//In earlier verisons of pixi direct components were provided, but in new version we need to do one thing extra , import native classes from pixi library and then make them a component with this extend kinda thing
extend({
    Container,
    Sprite
})


 export const Experience = () => {
    const [canvasSize,setCanvasSize] = useState(calculateCanvasSize)
    const [background,setBackground] = useState(undefined)

 useEffect(() => {
        Assets.load("/space.jpg").then((texture) => {
            setBackground(texture);
        });
    }, []);






    const updateCanvasSize = useCallback(() =>{
        setCanvasSize(calculateCanvasSize());
    },[])
    useEffect(()=>{
        window.addEventListener('resize',updateCanvasSize);
        return ()=> window.removeEventListener('resize',updateCanvasSize)
    },[updateCanvasSize])
   return (
     <Application width={canvasSize.width} height={canvasSize.height}>
        <pixiContainer>

            {/* rendering the background  Sprites are the foundational visual elements in PixiJS. They represent a single image to be displayed on the screen. Each Sprite contains a Texture to be drawn, along with all the transformation and display state required to function in the scene graph.*/}
            <pixiSprite width={canvasSize.width} height={canvasSize.height} texture={background}>
                <Level></Level>
            </pixiSprite>
        </pixiContainer>
     </Application>
   )
 }
 