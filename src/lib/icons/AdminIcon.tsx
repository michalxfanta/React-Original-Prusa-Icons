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

const viewBox: number = 800

const AdminIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M675.05 646.87c0,14.92 -12.06,27.56 -27.56,27.56 -14.92,0 -27.56,-12.06 -27.56,-27.56 0,-14.92 12.06,-27.56 27.56,-27.56 14.92,0 27.56,12.06 27.56,27.56z" />
                <path fill={primaryColor?.toString()} d="M648.06 759.41c-29.85,0 -58,-11.49 -78.66,-32.73l-265.84 -265.83c-12.06,-12.06 -28.7,-18.38 -45.94,-16.64 -59.14,4.6 -117.13,-16.64 -159.05,-58.57 -45.36,-45.36 -58.57,-98.76 -58.57,-144.11 0,-49.37 15.5,-90.71 22.39,-105.08l131.49 131.5c16.64,-1.15 39.62,-16.07 56.26,-36.17 10.92,-13.21 17.23,-27.56 18.38,-37.9l-131.5 -131.49c29.85,-12.63 70.62,-22.39 106.23,-22.39 53.97,0 105.08,21.24 142.96,59.14 41.91,41.91 63.15,99.91 58.57,159.05 -1.15,17.23 4.6,33.88 16.64,45.36l265.83 265.84c21.82,21.81 32.73,50.53 32.73,79.24 0,28.13 -10.92,56.26 -32.16,78.09 -21.24,21.82 -49.38,33.3 -79.81,33.3l0 0 0.03 -0.6zm-385.84 -375.51c31.01,0 61.44,12.63 83.82,34.45l265.84 265.83c19.52,19.52 53.97,19.52 73.5,-0.57 9.75,-9.75 14.92,-22.96 14.92,-37.33 -0.57,-13.21 -5.74,-25.84 -14.92,-35.59l-265.84 -265.84c-24.7,-24.12 -36.74,-58 -34.45,-92.45 3.45,-41.91 -12.06,-82.68 -41.34,-111.97 -22.96,-22.96 -52.25,-36.74 -83.82,-40.76l64.89 64.88c6.89,32.16 4.03,64.32 -28.13,103.92 -33.3,41.34 -77.52,66.6 -131.49,55.12l-64.89 -64.88c4.02,31.01 17.8,60.86 40.77,83.82 29.28,29.85 70.61,44.79 111.97,41.34l9.18 -0.57 0 0 0 0.6z" />
            </Scale>
        </Svg>
    )
}

export default AdminIcon

AdminIcon.defaultProps = {
    name: 'Admin icon',
    componentName: 'AdminIcon',
    description: 'Wrench icon for entering to administration area.',
    tags: [Tag.ICONS, Tag.SL1],

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