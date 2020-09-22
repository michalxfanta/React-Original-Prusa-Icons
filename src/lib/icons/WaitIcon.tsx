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

const viewBox: number = 363.64

const WaitingIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M280.54 107.85c14.55,-17.36 22.47,-39.06 22.47,-61.14l0 -46.71 -242.38 0 0 46.71c0,22.08 8.04,43.78 22.47,61.14l46.71 55.78c8.55,10.21 8.68,24.64 0.13,34.97l-47.36 57.44c-14.16,17.23 -21.95,38.67 -21.95,60.5l0 47.1 242.38 0 0 -47.1c0,-21.83 -7.79,-43.27 -21.95,-60.5l-47.36 -57.44c-8.55,-10.34 -8.42,-24.64 0.13,-34.97l46.71 -55.78 0 0zm-70.33 109.9l47.36 57.44c9.83,12 15.06,37.65 15.06,54.37l-181.76 0c0,-16.72 5.23,-42.37 15.06,-54.24l47.36 -57.44c17.74,-21.44 17.61,-52.46 -0.26,-73.65l-46.71 -55.78c-9.96,-11.87 -15.44,-37.78 -15.44,-54.37l181.76 0c0,16.72 -5.49,42.5 -15.44,54.37l-46.71 55.78c-17.87,21.32 -17.99,52.33 -0.26,73.65l-0.01 -0.13z" />
                <path fill={secondaryColor?.toString()} d="M132.23 119.22l99.3 -0.26 -21.06 25.15c-8.81,10.59 -13.4,23.61 -13.4,36.51l-30.51 0c-0.13,-13.02 -4.6,-25.91 -13.4,-36.51l-20.81 -24.89 -0.13 0z" />
            </Scale>
        </Svg>
    )
}

export default WaitingIcon

WaitingIcon.defaultProps = {
    name: 'Waiting icon',
    componentName: 'WaitingIcon',
    description: 'Waiting icon for all types of printers.',
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