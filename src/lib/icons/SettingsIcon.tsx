import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from '../helpers/scale'
import { Svg } from '../helpers/svg'
import { ThemeSwitcherDuoColor } from '../helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 363.65

const SettingsIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M181.82 120.79c-33.69,0 -61.04,27.35 -61.04,61.04 0,33.71 27.35,61.04 61.04,61.04 33.69,0 61.04,-27.35 61.04,-61.04 0,-33.69 -27.35,-61.04 -61.04,-61.04zm0 24.45c20.17,0 36.58,16.44 36.58,36.59 0,20.17 -16.44,36.59 -36.58,36.59 -20.17,0 -36.59,-16.44 -36.59,-36.59 0,-20.17 16.44,-36.59 36.59,-36.59z" />
                <path fill={primaryColor?.toString()} d="M334.56 209.66l0 -55.66c-27.4,-9.82 -34.75,-10.24 -38.5,-19.48 -3.89,-9.23 1.01,-14.85 13.57,-41.11l-39.38 -39.38c-25.81,12.27 -31.74,17.32 -41.11,13.57 -9.23,-3.89 -9.82,-11.26 -19.48,-38.5l-55.67 0c-9.66,27.27 -10.24,34.75 -19.48,38.5 -9.52,4.04 -15.3,-1.3 -41.11,-13.57l-39.38 39.38c12.4,26.1 17.32,31.75 13.57,41.11 -3.89,9.23 -11.25,9.66 -38.5,19.48l0 55.66c27.27,9.66 34.75,10.24 38.5,19.48 3.89,9.37 -1.01,14.85 -13.57,41.11l39.38 39.38c25.54,-12.11 31.45,-17.46 41.11,-13.57 9.23,3.89 9.66,11.26 19.48,38.5l55.67 0c9.66,-27.12 10.24,-34.62 19.61,-38.66 9.53,-3.88 15.14,1.3 40.98,13.57l39.38 -39.38c-12.4,-26.1 -17.32,-31.75 -13.57,-41.11 3.89,-9.23 11.25,-9.66 38.5,-19.48l0 0 0 0.13 0 0.03zm-62.16 9.79c-7.35,17.75 -0.88,31.29 6.2,45.58l-13.84 13.86c-14,-6.92 -27.54,-13.7 -45.58,-6.2 -17.75,7.34 -22.8,21.5 -27.83,36.64l-19.48 0c-5.06,-15.14 -10.09,-29.27 -27.83,-36.64 -18.04,-7.5 -31.88,-0.59 -45.58,6.2l-13.86 -13.86c7.08,-14.29 13.57,-27.83 6.2,-45.58 -7.34,-17.75 -21.5,-22.8 -36.64,-27.83l0 -19.48c15.14,-5.05 29.27,-10.08 36.64,-27.83 7.35,-17.75 0.88,-31.29 -6.2,-45.58l13.86 -13.84c13.84,6.78 27.54,13.7 45.58,6.2 17.75,-7.34 22.78,-21.5 27.83,-36.64l19.48 0c5.05,15.14 10.08,29.27 27.83,36.64 18.04,7.5 31.88,0.59 45.58,-6.2l13.84 13.84c-7.08,14.29 -13.57,27.83 -6.2,45.58 7.34,17.75 21.5,22.8 36.64,27.83l0 19.48c-15.14,5.06 -29.27,10.09 -36.64,27.83l0 0z" />
            </Scale>
        </Svg>
    )
}

export default SettingsIcon

SettingsIcon.defaultProps = {
    name: 'Settings icon',
    componentName: 'SettingsIcon',
    description: 'Universal settings icon for all types of printers.',
    tags: [Tag.ICONS, Tag.MINI, Tag.SL1],

    folder: Folder.ICONS,

    width: 48,
    height: 48,

    theme: Theme.LIGHT,

    primaryColor: Color.DARK_GRAY,
    secondaryColor: Color.ORANGE,

    withBackground: true,
    backgroundColor: Color.WHITE,
    backgroundRounded: true,
    backgroundRadius: (viewBox * DefaultRadiusRatio),
}