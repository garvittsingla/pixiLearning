import { Assets, Sprite } from "pixi.js"
import { extend } from "@pixi/react"
import { useEffect, useState } from "react"
import { GAME_HEIGHT, GAME_WIDTH, OFFSET_X, OFFSET_Y } from "../../constants/game-world";

extend({
    Sprite
})
//Basically the sprite with tilemap in it 
function Level() {
    const [texture,setTexture] = useState(undefined)
    useEffect(()=>{
        Assets.load('/tilemap.png').then((texture)=>setTexture(texture))
    },[])
  return (
    <pixiSprite width={GAME_WIDTH} height={GAME_HEIGHT} texture={texture} x={OFFSET_X} y={OFFSET_Y}></pixiSprite>
  )
}

export default Level