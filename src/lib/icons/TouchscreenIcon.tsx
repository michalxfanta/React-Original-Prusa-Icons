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

const viewBox: number = 4000

const TouchscreenIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M1956.04 3007.1c134.66,45.32 551.34,160.62 1034.1,520.22l894.28 -637.94c-231.84,-325.22 -168.12,-552.72 -398.52,-876.02 -116.24,-162.86 -195.66,-207.22 -295.44,-207.22 -35.22,0 -73.06,5.64 -115.96,13.44l81.16 113.72c49.02,68.5 -54.48,142.34 -103.44,73.66l-72.38 -101.5c-23.84,-33.64 -57.18,-44.96 -95.44,-44.96 -55.24,0 -120.54,23.72 -182.7,37.94l98.46 138.04c48.66,68.52 -54.46,142.34 -103.42,73.66l-85.34 -119.58c-23.72,-33.3 -56.52,-44.86 -93.8,-44.86 -57.5,0 -126,27.24 -189.92,43.4l104.1 146.04c49.02,68.68 -54.96,142.04 -103.42,73.64l-422.44 -591.34c-130.84,-183.78 -418.24,11.2 -282.62,201.6l623.72 874.44c-66.94,-24.62 -184.46,-47.26 -261.32,-47.26 -237.12,0.48 -328.44,260.66 -29.6,360.94l-0.06 -0.06z" />
                <path fill={secondaryColor?.toString()} fillRule="nonzero" d="M128.12 558.48l3201.16 0c70.76,0 128.12,57.38 128.12,128.12l0 1133.64c-23.24,-22.56 -45.94,-41.2 -68.56,-56.4 -62.82,-42.18 -122.44,-58.46 -187.68,-60.04l0 -889.08 -2944.92 0 0 1877.86 1442.6 0c-15.08,25.72 -25.36,53.5 -30.32,82.3 -1.7,9.86 -2.8,19.92 -3.22,29.9l5.38 61.84c3.82,17.38 9.7,34.68 17.56,51.76 4.78,10.28 10.28,20.44 16.64,30.44l-1576.76 0c-70.76,0 -128.12,-57.38 -128.12,-128.12l0 -2134.1c0,-70.74 57.36,-128.12 128.12,-128.12z" />
            </Scale>
        </Svg>
    )
}

export default TouchscreenIcon

TouchscreenIcon.defaultProps = {
    name: 'Touchscreen icon',
    componentName: 'TouchscreenIcon',
    description: 'Icon for touchscreen settings for all types of printers.',
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