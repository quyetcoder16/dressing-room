import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { animated, useSprings, useTransition } from 'react-spring';
import ItemClothes from './ItemClothes';

export default function TryOnClothes() {

    const { dataTryOnClothes } = useSelector(state => state.dressingRoomReducer);

    const findImgSrc = (type) => {
        let index = dataTryOnClothes.findIndex(item => item.type === type);
        return dataTryOnClothes[index].imgSrc_png;
    }

    const hairstyleSrc = findImgSrc("hairstyle");
    const necklaceSrc = findImgSrc("necklaces");
    const bikinitopSrc = findImgSrc("topclothes");
    const bikinibottomSrc = findImgSrc("botclothes");
    const handbagSrc = findImgSrc("handbags");
    const feetSrc = findImgSrc("shoes");
    const backgroundSrc = findImgSrc("background");
    const dataClothes = [
        {
            width: 1000,
            height: 1000,
            background: `url("${hairstyleSrc}")`,
            position: 'absolute',
            top: '-75%',
            bottom: '0',
            left: '0',
            right: '-57%',
            transform: 'scale(0.15)',
            zIndex: 4,
            className: 'hairstyle'
        }, {
            width: 500,
            height: 1000,
            background: `url("${necklaceSrc}")`,
            position: 'absolute',
            top: '0',
            bottom: '-40%',
            left: '0',
            right: '-3.5%',
            transform: 'scale(0.5)',
            zIndex: 4,
            className: 'necklace'
        },
        {
            width: 500,
            height: 500,
            background: `url("${bikinitopSrc}")`,
            position: 'absolute',
            top: '-9%',
            bottom: '0',
            right: '0',
            left: '-5%',
            zIndex: 3,
            transform: 'scale(0.5)',
            className: 'bikinitop'
        }, {
            width: 500,
            height: 1000,
            background: `url("${bikinibottomSrc}")`,
            position: 'absolute',
            top: '-30%',
            bottom: '0',
            right: '0',
            left: '-5%',
            zIndex: 2,
            transform: 'scale(0.5)',
            className: 'bikinibottom'
        }, {
            width: 500,
            height: 1000,
            background: `url("${handbagSrc}")`,
            position: 'absolute',
            top: '0',
            left: '0',
            bottom: '-40%',
            right: '-3.5%',
            transform: 'scale(0.5)',
            zIndex: 4,
            className: 'handbag'
        },
        {
            width: 500,
            height: 1000,
            background: `url("${feetSrc}")`,
            position: 'absolute',
            top: '0',
            left: '0',
            bottom: '-37%',
            right: '-3.5%',
            transform: 'scale(0.5)',
            zIndex: 1,
            className: 'feet'
        }
    ];

    const valueStyleAni = (dataAni) => {
        let styleAni = {
            width: dataAni.width,
            height: dataAni.height,
            background: dataAni.background,
            position: dataAni.position,
            transform: dataAni.transform,
            zIndex: dataAni.zIndex
        };

        if (dataAni.top !== '0') styleAni = { ...styleAni, top: dataAni.top };
        if (dataAni.left !== '0') styleAni = { ...styleAni, left: dataAni.left };
        if (dataAni.bottom !== '0') styleAni = { ...styleAni, bottom: dataAni.bottom };
        if (dataAni.right !== '0') styleAni = { ...styleAni, right: dataAni.right };
        return styleAni;
    }

    // const propsTransition = useTransition(dataClothes, {
    //     from: { opacity: 0.5, transform: 'translateY(-20px)' },
    //     enter: { opacity: 1, transform: 'translateY(0px)' },
    //     // leave: { opacity: 0, transform: 'translateY(-20px)' },
    //     config: { duration: 700 },
    // })

    // console.log("renderAgain");

    // const renderContentTryOnClothes = () => {
    //     return propsTransition((props, item, index) => {
    //         let styleAni = valueStyleAni(item);
    //         styleAni = { ...styleAni, opacity: props.opacity }
    //         // console.log(props);
    //         return (<animated.div className={item.className} key={index} style={styleAni}></animated.div>)
    //     })
    // }

    // const propsSpring = useSprings(dataClothes.length, dataClothes.map((item, index) => {
    //     let style = valueStyleAni(item);
    //     return ({
    //         from: {
    //             ...style,
    //             opacity: 0
    //         },
    //         to: {
    //             ...style,
    //             opacity: 1
    //         },
    //         config: {
    //             duration: 3000
    //         }
    //     })
    // }))

    // const renderContentTryOnClothes = () => {
    //     return propsSpring.map((style, index) => {
    //         console.log(style);
    //         return (<animated.div key={index} style={style}></animated.div>)
    //     })
    // }

    const renderContentClothes = () => {
        return dataClothes.map((item, index) => {
            return <ItemClothes key={index} styleContent={valueStyleAni(item)} itemClassName={item.className} ></ItemClothes>
        })
    }



    return (
        <div>
            <div className="contain">
                <div className="body" />
                <div className="model" />
                {renderContentClothes()}
                <div className="background" style={{ backgroundImage: `url("${backgroundSrc}")` }} />
            </div>

        </div>
    )
}
