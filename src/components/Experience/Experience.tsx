import {Application ,extend} from "@pixi/react"
import { Assets, Container,Sprite, Texture } from "pixi.js"
import { useCallback, useEffect, useState } from "react"
import { calculateCanvasSize } from "../../helpers/common"
import Level from "../Levels/Level"
import Hero from "../Hero/Hero"
import { TILE_SIZE } from "../../constants/game-world"

//In earlier verisons of pixi direct components were provided, but in new version we need to do one thing extra , import native classes from pixi library and then make them a component with this extend kinda thing
extend({
    Container,
    Sprite
})


 export const Experience = () => {
    const [canvasSize,setCanvasSize] = useState(calculateCanvasSize)
    const [background,setBackground] = useState(undefined)
    const [heroTexture,setHeroTexture] = useState<Texture|undefined>(undefined)
    const [heroPosition,setHeroPosition] = useState({x:0,y:0})

 useEffect(() => {
        Assets.load("/space.jpg").then((texture) => {
            setBackground(texture);
        });
        Assets.load("/hero.png").then((texture)=>{
            setHeroTexture(texture)
        })
    }, []);


    const updateHeroPosition =useCallback( (x:number,y:number) =>{
        setHeroPosition({
            x:Math.floor(x/TILE_SIZE),
            y:Math.floor(y/TILE_SIZE)
        })
    },[])



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
            {/* The initial background for stars */}
            <pixiSprite width={canvasSize.width} height={canvasSize.height} texture={background}>
                <Level></Level>
                <Hero texture={heroTexture} onMove={updateHeroPosition}/>
            </pixiSprite>
        </pixiContainer>
     </Application>
   )
 }
 