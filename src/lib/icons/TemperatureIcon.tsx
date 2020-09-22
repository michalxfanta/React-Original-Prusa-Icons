import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { Svg } from 'src/components/helpers/svg'
import { ThemeSwitcherDuoColor } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 4000

const TemperatureIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M1999.24 0c-322.2,0 -583.06,260.86 -583.06,583.06l0 1254.48c0,97.76 -43.14,190.74 -117.28,254.12 -233.9,198.86 -382.18,494.1 -382.18,825.06 0,598.62 484.66,1083.28 1083.28,1083.28 598.62,0 1083.28,-484.66 1083.28,-1083.28 0,-330.96 -148.98,-626.2 -382.18,-825.06 -74.84,-63.38 -117.28,-156.42 -117.28,-254.12l0 -1254.48c0,-322.2 -260.86,-583.06 -583.06,-583.06l0 0 -1.52 0zm0 333.66c137.52,0 250.08,111.88 250.08,250.08l0 1254.5c0,261.54 85.6,380.84 235.28,508.28 168.5,142.92 264.94,351.18 264.94,570.96 0,413.22 -336.38,750.24 -750.24,750.24 -413.22,0 -750.22,-336.38 -750.22,-750.24 0,-219.78 96.36,-428.04 264.94,-570.96 149.66,-126.74 235.28,-246.74 235.28,-508.28l0 -1254.5c0,-137.5 111.86,-250.08 250.08,-250.08l0 0 -0.14 0z" />
                <path fill={secondaryColor?.toString()} d="M2350.42 2452.98c-168.5,-148.28 -267.58,-289.2 -267.58,-536.58l0 -1083.26 -166.5 0 0 1083.26c0,247.38 -99.78,388.98 -267.58,536.58 -132.1,116.6 -231.88,273.7 -231.88,463.74 0,322.2 260.86,583.06 583.06,583.06 322.2,0 583.06,-260.86 583.06,-583.06 0,-190.1 -99.78,-347.14 -231.88,-463.74l0 0 -0.7 0z" />
            </Scale>
        </Svg>
    )
}

export default TemperatureIcon

TemperatureIcon.defaultProps = {
    name: 'Temperature icon',
    componentName: 'TemperatureIcon',
    description: 'Temperature icon for all types of printers.',
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