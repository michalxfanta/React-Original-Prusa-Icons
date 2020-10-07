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

const viewBox: number = 307.69

const LanguageIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor)
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcherDuoColor(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} d="M153.85 26.93c-73.15,0 -138.46,48.74 -138.46,115.43 0,23.66 8.52,46.86 23.6,64.92 0.63,21.09 -11.83,51.43 -22.97,73.49 30,-5.43 72.69,-17.37 92.06,-29.26 16.34,4 32,5.83 46.8,5.83 81.72,0 137.44,-55.83 137.44,-114.92 0,-67.03 -65.77,-115.44 -138.46,-115.44l0 0 0 -0.05zm0 23.09c63.6,0 115.38,41.43 115.38,92.4 0,56.75 -59.37,91.83 -114.35,91.83 -22.34,0 -39.03,-4.57 -50.69,-7.43 -11.54,7.08 -18.4,11.94 -49.26,20.97 6.17,-15.83 8.34,-31.72 6.92,-49.2 -9.66,-11.54 -23.37,-27.72 -23.37,-56.23 0,-50.92 51.78,-92.4 115.38,-92.4l0 0 -0 0.06z" />
                <path fill={secondaryColor?.toString()} d="M218.08 131.5c0.74,-2.8 1.14,-4.91 1.54,-6.97l-12.69 -2.46 -1.26 5.77c-4.29,-0.63 -8.86,-0.69 -13.43,-0.23 0.11,-3.08 0.28,-6.12 0.57,-9.03l14.17 0 0 -12 -12.46 0c0.63,-3.03 1.14,-4.91 1.66,-6.63l-12.4 -3.71c-0.91,3.03 -1.66,6 -2.46,10.34l-14.17 0 0 12 12.57 0c-0.34,3.89 -0.51,7.89 -0.57,12 -13.94,5.09 -19.83,14.86 -19.83,23.72 0,10.46 8.23,19.6 21.26,18.46 16.17,-1.48 26.97,-13.66 33.26,-28.69 6.51,3.77 9.31,10.12 6.8,16 -2.28,5.43 -8.97,10.63 -21.83,10.34l0 12.92c14.23,0.23 28.23,-5.2 33.77,-18.29 5.37,-12.8 -0.74,-26.74 -14.57,-33.43l0.06 -0.11zm-110.86 -29.6l15.03 0 28.52 74.98 -15.54 0 -6.23 -17.32 -28.11 0 -6.17 17.32 -16.06 0 28.57 -74.98zm17.49 45.71l-9.88 -28.29 -9.83 28.29 19.71 0zm54.86 -3.08c0.34,5.43 0.97,10.51 1.83,14.97 -11.48,2.12 -11.94,-9.26 -1.83,-14.97zm21.83 -4.17c-2,4.46 -4.69,8.92 -8.06,12.4 -0.52,-3.71 -0.86,-7.83 -1.09,-12.17 3.09,-0.4 6.17,-0.46 9.09,-0.23l0 0 0.05 0z" />
            </Scale>
        </Svg>
    )
}

export default LanguageIcon

LanguageIcon.defaultProps = {
    name: 'Language icon',
    componentName: 'FirmwareIcon',
    description: 'Icon for language settings for all types of printers.',
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