import React from 'react'
import { useSpring, animated } from 'react-spring';

export default function ItemClothes(props) {
    const { styleContent, itemClassName } = props;

    const [propsSpring, set] = useSpring(() => ({
        from: {
            ...styleContent,
            opacity: 0
        }, to: {
            ...styleContent,
            opacity: 1
        },
        config: {
            duration: 500
        }
    }))
    console.log(styleContent);
    set({ ...styleContent, opacity: 1 });
    return (
        <animated.div className={itemClassName} style={propsSpring}></animated.div>
    )
}
