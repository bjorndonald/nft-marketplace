import { tw, TWComponentProps } from '@/utils/cx'
import Logo from './logo';

const LogoContainer = tw.div`flex items-center gap-3`
const LogoTitle = tw.span`desktop:h3 h4`

export const FullLogo = (props: TWComponentProps<typeof LogoContainer>) => {
    return (
        <LogoContainer {...props}>
            <Logo className="desktop:w-8 desktop:h-8 w-6 h-6" />
            <LogoTitle>NFT Marketplace</LogoTitle>
        </LogoContainer>
    );
};

export default FullLogo