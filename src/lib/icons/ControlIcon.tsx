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

const ControlIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M3336.74 2099.8c0,-83.18 -67.86,-149.66 -149.64,-149.66 -83.16,0 -149.28,67.86 -149.28,149.66 0,83.16 67.86,149.28 149.28,149.28 83.16,0 149.64,-67.86 149.64,-149.28zm-2250.84 -2099.8l175.76 0c-69.44,351.84 118.64,408.18 405.02,462.1 220.3,41.76 469.78,93.96 469.78,493.12l0 95.34 -177.12 0 0 -95.34c0,-234.2 -72.36,-271.08 -325.02,-318.76 -388.34,-72.38 -614.56,-208.1 -548.42,-636.46l0 0zm-26.08 1200.24l1884.04 1.38c468.4,17.04 841.12,413.06 841.12,898.18 0,496.24 -391.16,899.88 -873.48,899.88 -226.54,0 -432.88,-89.42 -588.44,-234.18 -95.72,-89.44 -214,-132.58 -332.68,-132.58 -126.3,0 -251.24,47.66 -349.72,137.1 -154.18,141.64 -359.14,229.66 -582.22,229.66 -482.3,0 -873.46,-403.64 -873.46,-899.88 0,-496.24 391.16,-899.92 873.46,-899.92l0 0 1.76 0 -0.38 0.36zm0 300.3c-316,0 -573.14,269.68 -573.14,599.26 0,331.28 257.14,599.26 573.14,599.26 138.48,0 274.2,-52.54 378.96,-149.64 152.4,-140.24 348.32,-217.16 552.96,-217.16 200.1,0 391.16,75.54 537.64,214.02 106.5,98.48 241.86,154.16 383.48,154.16 315.98,0 573.14,-269.7 573.14,-599.26 0,-321.9 -240.46,-585.34 -548.42,-599.26l-1878.14 0 0 -1.38 0.38 0zm1676.28 599.26c0,-83.18 -67.86,-149.66 -149.66,-149.66 -83.16,0 -149.26,67.86 -149.26,149.66 0,83.16 67.86,149.28 149.26,149.28 83.18,0 149.66,-67.86 149.66,-149.28zm300.34 300.64c0,-83.16 -67.86,-149.28 -149.28,-149.28 -83.18,0 -149.3,67.86 -149.3,149.28 0,83.18 67.86,149.28 149.3,149.28 83.16,0 149.28,-67.88 149.28,-149.28z" />
                <path fill={secondaryColor?.toString()} d="M1535.86 1950.48l-298.92 0 0 -300.3 -300.68 0 0 300.3 -300.3 0 0 300.34 300.3 -1.4 0 300.32 300.68 0 0 -300.32 298.92 0 0 -298.94zm1200.24 -151.04c0,83.18 67.86,149.3 149.28,149.3 83.16,0 149.26,-67.86 149.26,-149.3 0,-83.16 -67.86,-149.26 -149.26,-149.26 -83.16,0 -149.28,67.86 -149.28,149.26z" />
            </Scale>
        </Svg>
    )
}

export default ControlIcon

ControlIcon.defaultProps = {
    name: 'Control Icon',
    componentName: 'ControlIcon',
    description: 'Icon for control printer movement.',
    tags: [Tag.ICONS, Tag.SL1, Tag.CONNECT],

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