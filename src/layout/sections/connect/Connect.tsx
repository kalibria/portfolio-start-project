import React from 'react';
import {Container} from 'src/components/container/Container';
import {Form} from 'src/components/form/Form';
import {Slogan} from 'src/layout/sections/connect/Slogan';
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {S} from './Connect_Styles';
import { motion, useScroll, useTransform } from 'framer-motion';


export const Connect: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"], // Customize offsets as needed
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.2], [50, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                opacity,
                y,
            }}
        >
        <S.Connect id={"contacts"}>
                <Container>
                    <FlexWrapper justify={'space-between'} wrap={'wrap'} gap={"20px"}>
                        <Slogan/>
                        <Form/>
                    </FlexWrapper>
                </Container>
        </S.Connect>
        </motion.div>
    );
};


