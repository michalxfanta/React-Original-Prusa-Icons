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

const viewBox: number = 3998.88

const PauseIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={secondaryColor?.toString()} d="M2665.63 1166.09l-499.45 0 0 1666.18 499.45 0 0 -1666.18zm-832.76 1666.18l-500.01 0 0 -1666.18 500.01 0 0 1666.18z" />
                <path fill={primaryColor?.toString()} d="M1999.53 0c-1104.19,0 -1999.47,895.26 -1999.47,1999.47 0,1104.19 895.28,1999.47 1999.47,1999.47 1104.19,0 1999.47,-895.28 1999.47,-1999.47 0,-1104.21 -895.28,-1999.47 -1999.47,-1999.47zm0 333.35c918.42,0 1666.12,747.68 1666.12,1666.12 0,918.42 -747.7,1666.12 -1666.12,1666.12 -918.42,0 -1666.12,-747.7 -1666.12,-1666.12 0,-918.44 747.7,-1666.12 1666.12,-1666.12z" />
            </Scale>
        </Svg>
    )
}

export default PauseIcon

PauseIcon.defaultProps = {
    name: 'Pause icon',
    componentName: 'PauseIcon',
    description: 'Universal pause icon for all types of printers.',
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