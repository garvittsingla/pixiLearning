import type { Texture } from "pixi.js"


interface IHeroProps{
    texture:Texture | undefined
    onMove:(gridX:number,gridY:number)=>void
}
const Hero = ({texture,onMove}:IHeroProps) => {
  return (
    <div>Hero</div>
  )
}

export default Hero