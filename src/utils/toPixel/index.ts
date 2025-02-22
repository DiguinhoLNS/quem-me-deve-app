export default function toPixel(value?: number){
    return `${!!value ? value : 0}px`
}