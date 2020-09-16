import { Color, DefaultRadiusRatio, Folder, Tag, Theme } from '../../config'
import React, { useEffect, useState } from 'react'

import IconDetail from '../../interfaces/Icon'
import { Scale } from 'src/components/helpers/scale'
import { Svg } from 'src/components/helpers/svg'
import { ThemeSwitcher } from 'src/components/helpers/themeSwitcher'

interface IProps extends IconDetail {
    primaryColor?: string | Color,
    secondaryColor?: string | Color,
}

const viewBox: number = 571.36

const CycleIcon = (props: IProps) => {
    const [primaryColor, setPrimaryColor] = useState<String | Color | undefined>(props.primaryColor)
    const [secondaryColor, setSecondaryColor] = useState<String | Color | undefined>(props.secondaryColor) // eslint-disable-line
    const [backgroundColor, setBackgroundColor] = useState<String | Color | undefined>(props.backgroundColor)

    useEffect(() => {
        ThemeSwitcher(props.theme, setPrimaryColor, setSecondaryColor, setBackgroundColor)
    }, [props.theme, props.withBackground, props.withPadding]) // eslint-disable-line

    return (
        <Svg viewBox={viewBox} width={props.width} height={props.height} withPadding={props.withPadding}>
            <Scale viewBox={viewBox} backgroundColor={backgroundColor} withPadding={props.withPadding} withBackground={props.withBackground} backgroundRounded={props.backgroundRounded} backgroundRadius={props.backgroundRadius} width={props.width} height={props.height}>
                <path fill={primaryColor?.toString()} fillRule="nonzero" d="M289.72 0.06c11.11,0.53 21.75,3.13 31.43,7.41 10,4.42 19.04,10.66 26.66,18.29 8.11,8.1 14.65,17.79 19.09,28.53 4.31,10.38 6.68,21.74 6.68,33.61l0 118.69 49.19 0 -70.22 140.5 -70.27 -140.5 49.18 0 0 -118.7c0,-6.2 -1.24,-12.13 -3.45,-17.49 -2.33,-5.6 -5.75,-10.66 -9.95,-14.86 -4.21,-4.22 -9.27,-7.64 -14.86,-9.95 -5.39,-2.22 -11.3,-3.47 -17.51,-3.47 -6.21,0 -12.14,1.24 -17.51,3.46 -5.57,2.3 -10.63,5.73 -14.85,9.95 -4.22,4.22 -7.64,9.28 -9.95,14.85 -2.21,5.37 -3.45,11.3 -3.45,17.51l0 395.59c0,6.21 1.24,12.13 3.45,17.49 2.33,5.6 5.75,10.66 9.95,14.86 4.21,4.22 9.27,7.65 14.86,9.95 5.38,2.22 11.3,3.47 17.51,3.47 6.2,0 12.12,-1.24 17.48,-3.45 5.61,-2.33 10.68,-5.76 14.88,-9.96 4.2,-4.21 7.63,-9.28 9.95,-14.88 2.21,-5.35 3.46,-11.28 3.46,-17.48l0 -98.07 42.13 0 0 98.07c0,11.87 -2.37,23.23 -6.68,33.61 -4.45,10.76 -11,20.45 -19.07,28.52 -8.09,8.08 -17.79,14.64 -28.53,19.08 -10.38,4.3 -21.74,6.68 -33.61,6.68 -11.86,0 -23.23,-2.37 -33.59,-6.67 -10.77,-4.45 -20.46,-11 -28.54,-19.08 -8.08,-8.09 -14.64,-17.79 -19.08,-28.53 -4.3,-10.38 -6.68,-21.74 -6.68,-33.61l0 -395.59c0,-11.87 2.37,-23.23 6.68,-33.61 4.46,-10.75 11,-20.45 19.07,-28.52 8.09,-8.08 17.79,-14.64 28.53,-19.08 10.38,-4.31 21.74,-6.68 33.61,-6.68l4.03 0.06z" />
            </Scale>
        </Svg>
    )
}

export default CycleIcon

CycleIcon.defaultProps = {
    name: 'Cycle icon',
    componentName: 'CycleIcon',
    description: 'Icon for cyclic change of value.',
    tags: [Tag.ICONS, Tag.MINI],

    folder: Folder.ICONS,

    width: 48,
    height: 48,

    theme: Theme.LIGHT,

    primaryColor: Color.DARK_GRAY,
    secondaryColor: Color.TRANSPARENT,

    withBackground: true,
    backgroundColor: Color.WHITE,
    backgroundRounded: true,
    backgroundRadius: (viewBox * DefaultRadiusRatio),
}