import React from 'react';
import {Cards} from 'src/components/cards/Cards';
import {Container} from 'src/components/container/Container';
import {StyledDescription} from 'src/components/description/StyledDescription';
import {SectionTitle} from 'src/components/sectionTitle/SectionTitle';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {S} from './Projects_Styles'
import { motion, useScroll, useTransform} from 'framer-motion';

export const Projects: React.FC = () => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  return (
      <motion.div
          ref={ref}
          style={{
                  opacity,
                  y,
                  transition: "all 0.8s ease-out", // Smooth transition for all properties
              }}
      >
        <S.Projects id={"works"}>
          <Container>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
              <SectionTitle>Projects</SectionTitle>
              <StyledDescription>Things I’ve built so far</StyledDescription>
              <Cards/>
            </FlexWrapper>
          </Container>
    </S.Projects>
      </motion.div>
  );
};


