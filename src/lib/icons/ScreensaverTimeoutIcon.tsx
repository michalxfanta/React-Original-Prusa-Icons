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

const viewBox: number = 363.64

const ScreensaverTimeoutIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M298.57 92.95l17.01 -17.01 17.01 17.01 -15.89 15.89c-5.63,-5.88 -11.63,-11.13 -18.14,-16.01l0 0 0 0.12zm-143 75.31l-121.98 0 0 72.43 121.98 0 0 -72.43zm-133.98 -24.14l158.13 0 0 120.72 -170.27 0 0 -120.72 12.01 0 0.13 0zm315.13 60.3c0,66.68 -54.05,120.72 -120.73,120.72 -33.65,0 -63.93,-13.89 -85.82,-36.16l39.53 0c13.76,7.63 29.4,12.01 46.29,12.01 53.29,0 96.58,-43.29 96.58,-96.58 0,-53.29 -43.29,-96.58 -96.58,-96.58 -16.76,0 -32.53,4.5 -46.29,12.01l-39.53 0c21.89,-22.27 52.17,-36.16 85.82,-36.16 66.68,0 120.73,54.05 120.73,120.73l0 0 0 0.01zm-144.87 -136.49l0 -32.53 48.29 0 0 32.53c-17.39,-2.88 -31.27,-2.88 -48.29,0z" />
                <path fill={secondaryColor?.toString()} d="M239.01 196.53l31.78 -48.54 -5.5 -4.88 -44.29 37.41c-8.13,-1.63 -16.89,0.87 -22.89,7.51 -8.88,9.88 -8.01,25.15 1.87,34.03 10.01,8.88 25.15,8.01 34.03,-1.87 5.88,-6.63 7.38,-15.64 4.88,-23.52l0 0 0.12 -0.13z" />
            </Scale>
        </Svg>
    )
}

export default ScreensaverTimeoutIcon

ScreensaverTimeoutIcon.defaultProps = {
    name: 'Screensaver Timeout icon',
    componentName: 'ScreensaverTimeoutIcon',
    description: 'Screensaver Timeout Icon for all types of printers.',
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