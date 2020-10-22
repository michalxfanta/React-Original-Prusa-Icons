import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from '../helpers/scale'
import { Svg } from '../helpers/svg'
import { ThemeSwitcherMonoColor } from '../helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
}

const viewBox: number = 235.29

const ScanMeArrowIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherMonoColor(props.theme, setPrimaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M124.61 221.66c-2.1,-1.59 -4.44,-2.85 -6.92,-3.74 -2.92,-1.15 -5.31,-1.39 -7.93,-3.49 10.26,-3.59 14.66,-1.04 27.94,-12.68 22.61,-19.81 35.39,-51.29 40.28,-91.71 5.72,-47.24 -18.84,-85.78 -42.36,-101.52 -5.32,-3.57 -19.09,-10.3 -24.2,-8.1 -1.68,0.72 -1.08,0.39 -1.79,1.67 3.85,5.01 22.07,10.36 37.35,31.23 11.89,16.22 20.4,40.44 18.32,67.94 -0.55,10.48 -2.41,20.88 -5.5,30.9 -8.2,30.38 -28.88,52.87 -50.8,59.41 -5.58,1.66 -14.25,5.03 -18.91,3.19 4.6,-2.18 22.38,-11.92 22.63,-20.17 0.56,-18.77 -25.61,5.05 -34.86,10.9 -9.15,5.79 -23.71,8.9 -21.07,20.75 1.27,5.66 7.68,6.28 14.14,9.04 6.75,2.88 12.99,6.03 19.78,8.74 7.46,2.98 12.9,5.12 19.97,8.06 5.77,2.4 17.73,9.48 13.92,-10.42l0.01 -0.01z" />
            </Scale>
        </Svg>
    )
}

export default ScanMeArrowIcon

ScanMeArrowIcon.defaultProps = {
    name: 'Scan Me Arrow icon',
    componentName: 'ScanMeArrowIcon',
    description: 'Hand drawn arrow used with QR codes.',
    tags: [Tag.ICONS, Tag.MINI, Tag.SL1],

    folder: Folder.ICONS,

    width: 48,
    height: 48,

    theme: Theme.LIGHT,

    primaryColor: Color.DARK_GRAY,

    withBackground: true,
    backgroundColor: Color.WHITE,
    backgroundRounded: true,
    backgroundRadius: (viewBox * DefaultRadiusRatio),
}