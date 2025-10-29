import type { FC } from 'react'
import Hyperspeed from './hyperspeed'

type Range = [number, number]

type HyperspeedAdapterProps = {
    // Simple controls
    speed?: number
    density?: number
    // Full effect options (all optional)
    distortion?: string
    length?: number
    roadWidth?: number
    islandWidth?: number
    lanesPerRoad?: number
    fov?: number
    fovSpeedUp?: number
    speedUp?: number
    carLightsFade?: number
    totalSideLightSticks?: number
    lightPairsPerRoadWay?: number
    shoulderLinesWidthPercentage?: number
    brokenLinesWidthPercentage?: number
    brokenLinesLengthPercentage?: number
    lightStickWidthMin?: number
    lightStickWidthMax?: number
    lightStickHeightMin?: number
    lightStickHeightMax?: number
    movingAwaySpeedMin?: number
    movingAwaySpeedMax?: number
    movingCloserSpeedMin?: number
    movingCloserSpeedMax?: number
    carLightsLengthMin?: number
    carLightsLengthMax?: number
    carLightsRadiusMin?: number
    carLightsRadiusMax?: number
    carWidthPercentageMin?: number
    carWidthPercentageMax?: number
    carShiftXMin?: number
    carShiftXMax?: number
    carFloorSeparationMin?: number
    carFloorSeparationMax?: number
    // Colors as numbers (0xRRGGBB)
    roadColor?: number
    islandColor?: number
    background?: number
    shoulderLines?: number
    brokenLines?: number
    leftCars1?: number
    leftCars2?: number
    leftCars3?: number
    rightCars1?: number
    rightCars2?: number
    rightCars3?: number
    sticks?: number
}

const toRange = (min?: number, max?: number): Range | undefined => {
    if (typeof min === 'number' && typeof max === 'number') return [min, max]
    return undefined
}

const HyperspeedAdapter: FC<HyperspeedAdapterProps> = ({
    speed = 1,
    density = 1,
    distortion,
    length,
    roadWidth,
    islandWidth,
    lanesPerRoad,
    fov,
    fovSpeedUp,
    speedUp,
    carLightsFade,
    totalSideLightSticks,
    lightPairsPerRoadWay,
    shoulderLinesWidthPercentage,
    brokenLinesWidthPercentage,
    brokenLinesLengthPercentage,
    lightStickWidthMin,
    lightStickWidthMax,
    lightStickHeightMin,
    lightStickHeightMax,
    movingAwaySpeedMin,
    movingAwaySpeedMax,
    movingCloserSpeedMin,
    movingCloserSpeedMax,
    carLightsLengthMin,
    carLightsLengthMax,
    carLightsRadiusMin,
    carLightsRadiusMax,
    carWidthPercentageMin,
    carWidthPercentageMax,
    carShiftXMin,
    carShiftXMax,
    carFloorSeparationMin,
    carFloorSeparationMax,
    roadColor,
    islandColor,
    background,
    shoulderLines,
    brokenLines,
    leftCars1,
    leftCars2,
    leftCars3,
    rightCars1,
    rightCars2,
    rightCars3,
    sticks,
}) => {
    const densSticks = Math.max(1, Math.round(20 * density))
    const densPairs = Math.max(1, Math.round(40 * density))

    const effectOptions = {
        distortion,
        length,
        roadWidth,
        islandWidth,
        lanesPerRoad,
        fov,
        fovSpeedUp,
        speedUp: typeof speedUp === 'number' ? speedUp : Math.max(0, speed * 2),
        carLightsFade,
        totalSideLightSticks: totalSideLightSticks ?? densSticks,
        lightPairsPerRoadWay: lightPairsPerRoadWay ?? densPairs,
        shoulderLinesWidthPercentage,
        brokenLinesWidthPercentage,
        brokenLinesLengthPercentage,
        lightStickWidth: toRange(lightStickWidthMin, lightStickWidthMax),
        lightStickHeight: toRange(lightStickHeightMin, lightStickHeightMax),
        movingAwaySpeed: toRange(movingAwaySpeedMin, movingAwaySpeedMax),
        movingCloserSpeed: toRange(movingCloserSpeedMin, movingCloserSpeedMax),
        carLightsLength: toRange(carLightsLengthMin, carLightsLengthMax),
        carLightsRadius: toRange(carLightsRadiusMin, carLightsRadiusMax),
        carWidthPercentage: toRange(carWidthPercentageMin, carWidthPercentageMax),
        carShiftX: toRange(carShiftXMin, carShiftXMax),
        carFloorSeparation: toRange(carFloorSeparationMin, carFloorSeparationMax),
        colors:
            roadColor !== undefined || islandColor !== undefined || background !== undefined ||
                shoulderLines !== undefined || brokenLines !== undefined || leftCars1 !== undefined ||
                leftCars2 !== undefined || leftCars3 !== undefined || rightCars1 !== undefined ||
                rightCars2 !== undefined || rightCars3 !== undefined || sticks !== undefined
                ? {
                    roadColor: roadColor as number,
                    islandColor: islandColor as number,
                    background: background as number,
                    shoulderLines: shoulderLines as number,
                    brokenLines: brokenLines as number,
                    leftCars: [leftCars1, leftCars2, leftCars3].filter((v): v is number => typeof v === 'number'),
                    rightCars: [rightCars1, rightCars2, rightCars3].filter((v): v is number => typeof v === 'number'),
                    sticks: sticks as number,
                }
                : undefined,
    }

    return <Hyperspeed effectOptions={effectOptions} />
}

export default HyperspeedAdapter

