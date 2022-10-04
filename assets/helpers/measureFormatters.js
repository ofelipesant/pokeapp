export function heightFormatter(value){
    const height = value * 10
    return height.toFixed(2)
}

export function weightFormatter(value){
    const weight = value / 10
    return weight.toFixed(2)
}