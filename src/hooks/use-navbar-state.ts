"use client";

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

import { useHasMounted } from './use-has-mounted'

export const useNavbarState = () => {
    const pathname = usePathname();
    const [expanded, setExpanded] = useState(false);
    const hasMounted = useHasMounted();

    useEffect(() => {
        if (!hasMounted) return;
        if (expanded) document.body.classList.add('tablet:overflow-hidden');
        else document.body.classList.remove('tablet:overflow-hidden');
    }, [expanded, hasMounted]);

    useEffect(() => {
        setExpanded(false);
    }, [pathname]);

    return {
        pathname,
        expanded,
        setExpanded,
    };
}