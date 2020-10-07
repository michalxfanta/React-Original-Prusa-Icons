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

const FanIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M1999.84 2434.38c239.96,0 434.4,-194.46 434.4,-434.42 0,-239.94 -194.44,-434.4 -434.4,-434.4 -239.96,0 -434.4,194.46 -434.4,434.4 0,239.96 194.44,434.42 434.4,434.42zm-501.44 -1922.46c19.84,118.36 160.46,133.46 321.9,403.08 49.28,82.3 216.34,419.88 145.56,525.8 -36.26,-56.26 -76.64,-139.7 -117.62,-203.9 -118.36,-185.38 -339.06,-403.26 -555.82,-492.54 -272.04,-111.96 -466.3,145.56 -607.9,344.18 -14.32,20.18 -57.2,86.64 -68.34,109.88 -87.96,182.2 121.94,124.98 277.72,132.34 223.34,10.74 627.34,143.1 699.82,297.9 -301.48,-57.76 -1193.72,-301.86 -1193.72,366.26 0,134.22 24.92,407.4 100.82,498.98 184.64,10.94 246,-422.16 946.6,-486.16 -60.22,83.26 -487.46,231.84 -694.36,676.06 -43.04,92.32 -51.36,175.58 -15.68,274.12 33.8,93.1 105.54,132.54 159.72,189.56 104.02,109.5 438.18,441.96 435.16,114.24 -1.7,-170.1 -7.54,-274.12 48.52,-451.98 43.22,-137.24 161.42,-364.94 244.5,-410.98 -3.6,152.16 -196.54,540.52 -13.22,993.04 64,158 176.14,209.36 393.64,207.08 153.3,-1.7 421.18,-14.18 493.32,-120.82 -38.34,-144.6 -296.4,-204.46 -437.08,-644.16l-48.88 -212.56c-1.7,-106.3 -5.66,-43.62 17.76,-76.28 141,282.26 340,562.58 646.8,697.78 232.6,102.52 358.32,-18.88 464.8,-133.28 67.98,-73.04 294.9,-299.4 248.44,-427.62 -101.18,-40.76 -408.16,-8.5 -588.44,-65.68 -128.76,-40.96 -357.4,-155.58 -407.06,-252.6 360.98,76.1 604.14,181.82 1001.36,20 266.18,-108.38 217.3,-531.08 151.02,-772.34l-44.38 -92.7c-63.42,-90.42 -219.94,168.22 -412.86,295.82 -72.52,47.96 -157.08,88.54 -250.72,120.26 -76.62,25.84 -219.76,70.42 -285.82,38.52 52.46,-46.08 222.96,-116.28 404.76,-269.04 73.06,-61.38 225.78,-259.96 285.66,-389.86 185.58,-401.94 -470.28,-732.7 -568.46,-719.48 -46.26,187.86 52.1,677.16 -295.08,998.88 -10.76,-135.54 352.26,-1204.1 -396.46,-1192.6 -151.98,2.26 -406.46,16.06 -485.56,110.8l-0.42 0z" />
                <path fill={secondaryColor?.toString()} d="M2319.82 1999.96c0,-176.72 -143.26,-319.98 -319.98,-319.98 -176.72,0 -319.98,143.26 -319.98,319.98 0,176.74 143.26,319.98 319.98,319.98 176.72,0 319.98,-143.24 319.98,-319.98z" />
            </Scale>
        </Svg>
    )
}

export default FanIcon

FanIcon.defaultProps = {
    name: 'Fan Icon',
    componentName: 'FanIcon',
    description: 'Icon for fan settings.',
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