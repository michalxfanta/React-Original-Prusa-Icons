import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { Svg } from 'src/components/helpers/svg'
import { ThemeSwitcherMonoColor } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
}

const viewBox: number = 235.29

const UsbFlashDriveIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherMonoColor(props.theme, setPrimaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M36.9 63.75l14.85 0 112.36 0 7.98 0 0 8.32 53.86 0 0 91.08 -53.86 0 0 8.32 -7.98 0c-1.04,0 -111.35,0.01 -112.36,0.02 -13.91,0.1 -25.56,0.63 -34.31,-8.13 -4.98,-4.98 -8.09,-11.87 -8.09,-19.45l0 -52.62c0,-15.16 12.39,-27.55 27.55,-27.55l0 -0.01zm151.61 60.86l15.71 0 0 18.85 -15.71 0 0 -18.85zm0 -32.83l15.71 0 0 18.85 -15.71 0 0 -18.85zm-16.4 -11.71l0 75.12 45.88 0 0 -75.12 -45.88 0zm-7.98 -8.55c-1.18,0 -111.22,0 -112.36,0 -11.48,0 -21.58,-1.11 -28.67,5.98 -3.55,3.55 -5.75,8.45 -5.75,13.82l0 52.62c0,10.77 8.8,19.58 19.58,19.58l14.85 0 112.36 0 0 -92 -0 -0z" />
            </Scale>
        </Svg>
    )
}

export default UsbFlashDriveIcon

UsbFlashDriveIcon.defaultProps = {
    name: 'USB Flash Drive icon',
    componentName: 'UsbFlashDriveIcon',
    description: 'USB Flash Drive icon.',
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