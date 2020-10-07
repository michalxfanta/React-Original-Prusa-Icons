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

const viewBox: number = 235.29

const DisableSteppersIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M94.31 73.13c0.06,7.24 0.9,11.56 -3.32,15.42 -4.22,3.86 -8.53,2.64 -15.64,1.96l-5.66 12.13c5.15,5.09 8.82,7.53 8.56,13.26 -0.26,5.7 -4.09,7.82 -9.69,12.42l4.6 12.62c7.18,-0.06 11.56,-0.9 15.42,3.32 3.86,4.22 2.64,8.5 1.96,15.64l12.13 5.66c5.09,-5.15 7.56,-8.82 13.23,-8.56 5.73,0.26 7.88,4.12 12.49,9.69l12.59 -4.57c-0.06,-7.24 -0.9,-11.56 3.32,-15.42 4.22,-3.86 8.5,-2.64 15.64,-1.96l5.66 -12.13c-5.05,-4.96 -8.82,-7.5 -8.56,-13.26 0.26,-5.7 4.15,-7.85 9.69,-12.42l-4.6 -12.62c-7.21,0.06 -11.56,0.9 -15.42,-3.28 -3.86,-4.22 -2.64,-8.5 -1.96,-15.64l-12.13 -5.66c-5.09,5.15 -7.53,8.82 -13.26,8.56 -5.7,-0.26 -7.85,-4.12 -12.42,-9.69l-12.59 4.6 -0.03 -0.07zm-1.48 -34.7c7.85,-2.48 16.22,-3.8 24.88,-3.8 45.8,0 82.98,37.18 82.98,82.98 0,45.8 -37.18,82.98 -82.98,82.98 -45.8,0 -82.98,-37.18 -82.98,-82.98 0,-17.61 5.54,-33.89 14.9,-47.32l18.28 14.13 0 -54.59 -49.89 16.06 18.44 14.26c-11.52,16.25 -18.35,36.05 -18.35,57.49 0,54.94 44.61,99.56 99.56,99.56 54.94,0 99.46,-44.61 99.46,-99.56 0,-54.94 -44.52,-99.56 -99.46,-99.56 -8.59,0 -16.93,1.1 -24.88,3.15l0 17.25 0.03 -0.07zm24.82 56.26c12.65,0 22.92,10.27 22.92,22.92 0,12.65 -10.27,22.92 -22.92,22.92 -12.65,0 -22.92,-10.27 -22.92,-22.92 0,-12.65 10.27,-22.92 22.92,-22.92z" />
                <path fill={secondaryColor?.toString()} d="M11.75 206.81L206.84 11.72 223.51 28.39 28.42 223.48z" />
            </Scale>
        </Svg>
    )
}

export default DisableSteppersIcon

DisableSteppersIcon.defaultProps = {
    name: 'Disable Steppers Icon',
    componentName: 'DisableSteppersIcon',
    description: 'Icon for disabling stepper motors.',
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