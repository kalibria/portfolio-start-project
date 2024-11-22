import {S} from './MainSection_Styled'
import {ReactNode} from "react";

type Props = {
    children: ReactNode
};


export const MotionMainSection = ({ children }: Props) => {
    return (
        <S.MainSection
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
        >
            {children}
        </S.MainSection>
    );
};

export default MotionMainSection;
